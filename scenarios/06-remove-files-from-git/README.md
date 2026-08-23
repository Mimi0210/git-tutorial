# Scenario 06 – Lỡ commit file cần nằm trong .gitignore

## Problem

Lỡ commit `.env`, dump SQL, `node_modules/`, v.v. Đặc biệt nguy hiểm nếu `.env` chứa API key, password, token.

## What happened? (Git state)

File đang được track trong index/history dù đã (hoặc chưa) có trong `.gitignore`.

`.gitignore` **không** gỡ file đã track và **không** xóa khỏi history đã push.

## What should NOT do?

- Chỉ thêm `.gitignore` rồi nghĩ secret đã an toàn.
- Commit secret thật vào repo training/demo.
- Coi `git rm --cached` là đủ khi secret đã push công khai.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-6.mp4`](../../video/example-6.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/06-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/06-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/06-fork.mp4`_

## Key takeaway

Stop tracking bằng `git rm --cached` + `.gitignore`. Nếu đã push secret → **rotate/revoke ngay**, rồi mới clean history theo quy trình team.

---

[← Tất cả scenarios](../../README.md#scenarios)
