# Git Troubleshooting Lab

Interactive Git training repository — **9 tình huống thực chiến**, xử lý bằng **CLI · Cursor/VS Code · GitHub Desktop · Fork**.

> Mục tiêu không phải giới thiệu lệnh hay so sánh phần mềm. Mục tiêu: gặp lỗi → tìm đúng tình huống → hiểu Git state → sửa → verify. Dùng để training member mới và tra cứu nhanh trên GitHub (đọc README, không bắt buộc mở web).

## Tools

| Tool | Vai trò trong lab |
|------|-------------------|
| **Git CLI** | Nền tảng — mọi GUI đều map về đây |
| **Cursor / VS Code** | Source Control + Merge Editor |
| **GitHub Desktop** | GUI đơn giản, dễ demo history |
| **Fork** | GUI mạnh (rebase, cherry-pick, conflict) |

> License note: đây là **cross-platform Git tools with free / free-tier or evaluation options** — không khẳng định cả 4 đều miễn phí hoàn toàn (Fork có trial / license trả phí; Cursor Hobby có giới hạn usage).

## Web UI

- Tutorial slides: [`index.html`](./index.html)
- **Comparison Table** (9 tình huống × 4 tool): [`comparison.html`](./comparison.html)
- Local: `npx serve .` rồi mở các trang trên
- Mỗi ô ✓ trong bảng → guide + video demo (khi đã quay)

## I have a problem

```text
I have a problem
│
├── I don't know which branch to use
│   → Scenario 01
│
├── I accidentally coded on main
│   → Scenario 02
│
├── Pull says branches have diverged
│   → Scenario 03
│
├── I want to remove my changes
│   → Scenario 04
│
├── I forgot a file in my commit
│   → Scenario 05
│
├── I committed .env
│   → Scenario 06
│
├── I want to go back to an old commit
│   → Scenario 07
│
├── PR has conflicts
│   → Scenario 08
│
└── I only want to merge some features
    → Scenario 09
```

## Scenarios

| # | Tình huống | CLI | Cursor / VS Code | GitHub Desktop | Fork |
|---|------------|-----|------------------|----------------|------|
| [01](scenarios/01-clone-and-find-working-branch/) | Clone repo và xác định branch đang được code chính | ✅ | ✅ | ✅ | ✅ |
| [02](scenarios/02-create-branch-after-coding-on-main/) | Code trên `main` rồi mới phát hiện chưa tạo branch | ✅ | ✅ | ✅ | ✅ |
| [03](scenarios/03-local-commits-and-remote-commits/) | Local commits + remote commits cùng tồn tại | ✅ | ✅ | ✅ | ✅ |
| [04](scenarios/04-discard-uncommitted-changes/) | Bỏ changes chưa commit | ✅ | ✅ | ✅ | ✅ |
| [05](scenarios/05-amend-last-commit/) | Commit thiếu file → amend | `commit --amend` | ✅ | ✅ | ✅ |
| [06](scenarios/06-remove-files-from-git/) | Lỡ commit `.env` / DB dump | `git rm --cached` | ✅ | ✅ | ✅ |
| [07](scenarios/07-go-back-to-old-commit/) | Muốn quay lại commit cũ | `revert` / `reset` | ✅ | ✅ | ✅ |
| [08](scenarios/08-resolve-merge-conflict/) | Merge Request / PR bị conflict | merge / rebase | ✅ | ✅ | ✅ |
| [09](scenarios/09-selectively-merge-features/) | Chỉ merge một số feature từ `dev` → `main` | `cherry-pick` | ✅ | ✅ | ✅ |

Mỗi scenario có cùng cấu trúc:

```text
Problem → What happened? → What should NOT do?
→ CLI → Cursor/VS Code → GitHub Desktop → Fork
→ Video → Key takeaway
```

## Nguyên tắc: CLI là nền tảng

Dù bấm GUI, mỗi guide vẫn ghi **Equivalent CLI**. Tránh tình trạng “biết bấm GitHub Desktop nhưng không hiểu Git”.

## ⚠️ Cảnh báo nhanh

| Lệnh / tình huống | Rủi ro |
|-------------------|--------|
| `git reset --hard` | Mất uncommitted changes |
| `git push --force` | Ghi đè remote — ưu tiên `--force-with-lease` |
| `.env` đã push | Xóa file ≠ xóa secret khỏi history → **rotate ngay** |
| `git commit --amend` | Đổi hash — không amend commit người khác đang dùng |
| `git cherry-pick` | Conflict / duplicate nếu thiếu dependency commit |

## Docs

- [Git basics](docs/git-basics.md)
- [Branching strategy](docs/branching-strategy.md)
- [Recovery](docs/recovery.md)
- [Glossary](docs/glossary.md)

## Cấu trúc repo

```text
git-troubleshooting-lab/
├── README.md                 ← bạn đang đọc (index)
├── index.html                ← comparison table UI
├── scenarios/01…09/          ← mỗi tình huống độc lập
├── docs/
├── demo/videos/              ← slot video chuẩn hóa
├── video/                    ← demo hiện có (đang map vào scenario)
└── scripts/build-scenarios.js
```

## Video

Ưu tiên clip 1–3 phút theo flow: **Problem → Check state → Fix → Verify**. Không chỉ quay happy path.

Chuẩn đặt tên gợi ý:

```text
demo/videos/01-cli.mp4
demo/videos/01-cursor-vscode.mp4
demo/videos/01-github-desktop.mp4
demo/videos/01-fork.mp4
```

Hiện một số file trong `video/` đã được gắn tạm cho CLI (và clone PAT cho Cursor) — bổ sung đủ 4 tool khi quay xong.

## Definition of Done (training)

Member mới có thể: clone → mở README → chọn vấn đề → chọn tool → xem video → làm lại trên lab → **hiểu Git đang đổi history/branch/working tree như thế nào**, không chỉ biết bấm nút nào.

## Nguồn nội dung

Nội dung scenario được chắt từ tài liệu nội bộ *Git thực chiến – 9 tình huống…* và tổ chức lại thành knowledge base + web UI theo đúng ma trận 9 × 4.
