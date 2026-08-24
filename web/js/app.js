(function () {
  const TOOLS = [
    { key: "cli", label: "CLI", className: "cli" },
    { key: "cursor-vscode", label: "Cursor", className: "cursor" },
    { key: "github-desktop", label: "GitHub Desktop", className: "desktop" },
    { key: "fork", label: "Fork", className: "fork" },
  ];

  const GUIDE_FILE = {
    cli: "cli.md",
    "cursor-vscode": "cursor-vscode.md",
    "github-desktop": "github-desktop.md",
    fork: "fork.md",
  };

  const CHECK_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M9.2 16.6 4.8 12.2l1.4-1.4 3 3 8-8 1.4 1.4z"/></svg>';

  const scenarios = window.SCENARIOS || [];
  const body = document.getElementById("matrix-body");
  const overlay = document.getElementById("overlay");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("close-drawer");
  const videoEl = document.getElementById("demo-video");
  const placeholder = document.getElementById("video-placeholder");
  const toolTabs = document.getElementById("tool-tabs");
  const drawerLinks = document.getElementById("drawer-links");
  const drawerSteps = document.getElementById("drawer-steps");
  const drawerCommands = document.getElementById("drawer-commands");
  const drawerCommandsTitle = document.getElementById("drawer-commands-title");
  const drawerStepsTitle = document.getElementById("drawer-steps-title");
  const drawerWarn = document.getElementById("drawer-warn");
  const drawerNote = document.getElementById("drawer-note");

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Lightweight markdown for guide steps (headings, lists, code, bold, inline code). */
  function renderGuideMd(src) {
    const text = String(src || "").trim();
    if (!text) return "<p>—</p>";

    const parts = [];
    const fence = /```[\w]*\n([\s\S]*?)```/g;
    let last = 0;
    let m;
    while ((m = fence.exec(text)) !== null) {
      if (m.index > last) parts.push({ type: "md", value: text.slice(last, m.index) });
      parts.push({ type: "code", value: m[1].replace(/\n$/, "") });
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push({ type: "md", value: text.slice(last) });

    function inline(s) {
      return escapeHtml(s)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>");
    }

    function renderMdBlock(block) {
      const lines = block.replace(/^\n+|\n+$/g, "").split("\n");
      if (!lines.length || (lines.length === 1 && !lines[0])) return "";
      const out = [];
      let listType = null;

      function closeList() {
        if (listType) {
          out.push(`</${listType}>`);
          listType = null;
        }
      }

      lines.forEach((line) => {
        const heading = line.match(/^###\s+(.+)$/);
        const ul = line.match(/^[-*]\s+(.+)$/);
        const ol = line.match(/^\d+\.\s+(.+)$/);

        if (heading) {
          closeList();
          out.push(`<h4>${inline(heading[1])}</h4>`);
          return;
        }
        if (ul) {
          if (listType !== "ul") {
            closeList();
            listType = "ul";
            out.push("<ul>");
          }
          out.push(`<li>${inline(ul[1])}</li>`);
          return;
        }
        if (ol) {
          if (listType !== "ol") {
            closeList();
            listType = "ol";
            out.push("<ol>");
          }
          out.push(`<li>${inline(ol[1])}</li>`);
          return;
        }
        if (!line.trim()) {
          closeList();
          return;
        }
        closeList();
        out.push(`<p>${inline(line)}</p>`);
      });
      closeList();
      return out.join("");
    }

    return parts
      .map((p) =>
        p.type === "code"
          ? `<pre><code>${escapeHtml(p.value)}</code></pre>`
          : renderMdBlock(p.value)
      )
      .join("");
  }

  function shortTitle(s) {
    return s.short || s.title;
  }

  function renderTable() {
    body.innerHTML = "";

    scenarios.forEach((s) => {
      const tr = document.createElement("tr");

      const th = document.createElement("th");
      th.scope = "row";
      const featureBtn = document.createElement("button");
      featureBtn.type = "button";
      featureBtn.className = "feature-btn";
      featureBtn.innerHTML =
        `<span class="feature-label">` +
        `<span class="feature-id">Feature ${Number(s.id)}</span>` +
        `<span>${escapeHtml(shortTitle(s))}</span>` +
        `</span>`;
      featureBtn.title = s.title;
      featureBtn.addEventListener("click", () => openDrawer(s, "cli"));
      th.appendChild(featureBtn);
      tr.appendChild(th);

      TOOLS.forEach((t) => {
        const td = document.createElement("td");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `check check--${t.className}`;
        if (s.videos[t.key]) btn.classList.add("has-video");
        btn.title = `${s.title} — ${t.label}`;
        btn.setAttribute("aria-label", `${s.title} — ${t.label}`);
        btn.innerHTML = CHECK_SVG;
        btn.addEventListener("click", () => openDrawer(s, t.key));
        td.appendChild(btn);
        tr.appendChild(td);
      });

      body.appendChild(tr);
    });
  }

  function openDrawer(scenario, toolKey) {
    document.getElementById("drawer-kicker").textContent =
      `Scenario ${scenario.id} · ${scenario.short}`;
    document.getElementById("drawer-title").textContent = scenario.title;
    document.getElementById("drawer-takeaway").textContent = scenario.takeaway;
    document.getElementById("drawer-symptom").textContent = scenario.symptom;

    const guide =
      (scenario.guides && scenario.guides[toolKey]) ||
      { steps: "", commands: "", warning: "", note: "" };

    if (drawerStepsTitle) {
      drawerStepsTitle.textContent =
        toolKey === "cli" ? "Cách thực hiện (CLI)" : "Cách thực hiện";
    }
    if (drawerSteps) drawerSteps.innerHTML = renderGuideMd(guide.steps);

    if (drawerCommandsTitle) {
      drawerCommandsTitle.textContent =
        toolKey === "cli" ? "Lệnh CLI tóm tắt" : "Equivalent CLI";
    }
    if (drawerCommands) {
      const cmds = (guide.commands || "").trim() || "—";
      drawerCommands.innerHTML = `<code>${escapeHtml(cmds)}</code>`;
    }

    if (drawerWarn) {
      if (guide.warning) {
        drawerWarn.hidden = false;
        drawerWarn.innerHTML =
          `<strong>Warning</strong>${renderGuideMd(guide.warning)}`;
      } else {
        drawerWarn.hidden = true;
        drawerWarn.innerHTML = "";
      }
    }

    if (drawerNote) {
      if (guide.note) {
        drawerNote.hidden = false;
        drawerNote.innerHTML =
          `<strong>Ghi chú</strong>${renderGuideMd(guide.note)}`;
      } else {
        drawerNote.hidden = true;
        drawerNote.innerHTML = "";
      }
    }

    toolTabs.innerHTML = "";
    TOOLS.forEach((t) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = `tool-tab tool-tab--${t.className}`;
      if (t.key === toolKey) tab.classList.add("is-active");
      tab.textContent = t.label;
      tab.addEventListener("click", () => openDrawer(scenario, t.key));
      toolTabs.appendChild(tab);
    });

    const src = scenario.videos[toolKey];
    if (src) {
      placeholder.style.display = "none";
      videoEl.style.display = "block";
      if (videoEl.getAttribute("src") !== src) {
        videoEl.src = src;
      }
    } else {
      videoEl.removeAttribute("src");
      videoEl.load();
      videoEl.style.display = "none";
      placeholder.style.display = "block";
      placeholder.innerHTML =
        `Chưa có video cho <strong>${TOOLS.find((t) => t.key === toolKey).label}</strong>.<br/>` +
        `Thêm <code>demo/videos/${scenario.id}-${toolKey}.mp4</code> rồi cập nhật manifest.`;
    }

    const base = `scenarios/${scenario.slug}`;
    drawerLinks.innerHTML = "";
    [
      { href: `${base}/README.md`, label: "Scenario README" },
      {
        href: `${base}/${GUIDE_FILE[toolKey]}`,
        label: `Guide: ${TOOLS.find((t) => t.key === toolKey).label}`,
      },
      { href: "README.md#scenarios", label: "Tất cả scenarios" },
    ].forEach((l) => {
      const a = document.createElement("a");
      a.href = l.href;
      a.textContent = l.label;
      drawerLinks.appendChild(a);
    });

    overlay.hidden = false;
    drawer.hidden = false;
    requestAnimationFrame(() => {
      overlay.classList.add("is-open");
      drawer.classList.add("is-open");
    });
    closeBtn.focus();
  }

  function closeDrawer() {
    overlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    videoEl.pause();
    setTimeout(() => {
      overlay.hidden = true;
      drawer.hidden = true;
    }, 200);
  }

  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  /* —— Multi-page deck (intro → table → checklist) —— */
  const PAGES = ["intro", "compare", "checklist"];
  const pageEls = PAGES.map((id) => document.getElementById(`page-${id}`));
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const dots = Array.from(document.querySelectorAll(".pager__dot"));
  let pageIndex = 0;

  function showPage(index, opts) {
    const updateHash = !opts || opts.updateHash !== false;
    pageIndex = Math.max(0, Math.min(PAGES.length - 1, index));

    pageEls.forEach((el, i) => {
      if (!el) return;
      const on = i === pageIndex;
      el.hidden = !on;
      el.classList.toggle("is-active", on);
    });

    dots.forEach((dot, i) => {
      const on = i === pageIndex;
      dot.classList.toggle("is-active", on);
      if (on) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });

    if (btnPrev) btnPrev.disabled = pageIndex === 0;
    if (btnNext) btnNext.disabled = pageIndex === PAGES.length - 1;

    if (updateHash) {
      const name = PAGES[pageIndex];
      const nextHash = name === "intro" ? "" : `#${name}`;
      if ((location.hash || "") !== nextHash) {
        history.replaceState(null, "", nextHash || location.pathname + location.search);
      }
    }
  }

  function applyHash() {
    const hash = (location.hash || "").replace(/^#/, "").toLowerCase();

    const scenarioMatch = hash.match(
      /^s0?(\d{1,2})(?:-(cli|cursor-vscode|github-desktop|fork))?$/i
    );
    if (scenarioMatch) {
      showPage(1, { updateHash: false });
      const id = scenarioMatch[1].padStart(2, "0");
      const tool = (scenarioMatch[2] || "cli").toLowerCase();
      const s = scenarios.find((x) => x.id === id);
      if (s) openDrawer(s, tool);
      return;
    }

    const pageIdx = PAGES.indexOf(hash);
    if (pageIdx >= 0) {
      showPage(pageIdx, { updateHash: false });
      return;
    }

    showPage(0, { updateHash: false });
  }

  if (btnPrev) btnPrev.addEventListener("click", () => showPage(pageIndex - 1));
  if (btnNext) btnNext.addEventListener("click", () => showPage(pageIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => showPage(Number(dot.dataset.page)));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
      return;
    }
    if (drawer.classList.contains("is-open")) return;
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      showPage(pageIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPage(pageIndex - 1);
    }
  });

  window.addEventListener("hashchange", applyHash);
  renderTable();
  applyHash();
})();
