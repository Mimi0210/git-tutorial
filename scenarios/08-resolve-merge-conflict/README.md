# Scenario 08 – Merge Request / PR bị conflict

## Problem

Feature branch và `main` cùng sửa một file. PR/MR không merge được cho đến khi resolve conflict.

## What happened? (Git state)

```text
feature/login ──┐
                ├── CONFLICT trên cùng file
main (updated) ─┘
```

## What should NOT do?

- Bấm "Accept Current/Incoming" mà không đọc business logic.
- Push --force lên main.
- Bỏ conflict markers (`<<<<<<<`) sót trong code.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-8.mp4`](../../video/example-8.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/08-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/08-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/08-fork.mp4`_

## Key takeaway

Fetch → rebase/merge `main` vào feature → sửa conflict có chủ đích → continue → test → push (`force-with-lease` nếu rebase).

---

[← Tất cả scenarios](../../README.md#scenarios)
