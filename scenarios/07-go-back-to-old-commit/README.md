# Scenario 07 – Muốn quay lại commit cũ

## Problem

History `A → B → C`. Sau khi test, `C` (hoặc `B`+`C`) lỗi nhiều. Muốn trở về trạng thái tốt ở `A`.

## What happened? (Git state)

```text
A (tốt) → B → C (lỗi)
```

Hai hướng: **revert** (commit mới đảo ngược) vs **reset** (dời pointer).

## What should NOT do?

- `reset --hard` + force push lên branch shared mà không có approval.
- Nhầm revert với reset.
- Reset khi còn uncommitted work cần giữ.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-7.mp4`](../../video/example-7.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/07-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/07-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/07-fork.mp4`_

## Key takeaway

Đã push/shared → ưu tiên `git revert`. Local chưa share → `reset` có thể phù hợp. Training: hiểu sự khác biệt history.

---

[← Tất cả scenarios](../../README.md#scenarios)
