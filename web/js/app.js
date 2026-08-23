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

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  function applyHash() {
    const hash = (location.hash || "").replace(/^#/, "");
    const m = hash.match(/^s0?(\d{1,2})(?:-(cli|cursor-vscode|github-desktop|fork))?$/i);
    if (!m) return;
    const id = m[1].padStart(2, "0");
    const tool = (m[2] || "cli").toLowerCase();
    const s = scenarios.find((x) => x.id === id);
    if (s) openDrawer(s, tool);
  }

  window.addEventListener("hashchange", applyHash);
  renderTable();
  applyHash();
})();
