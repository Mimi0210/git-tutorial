# Scenario 04 – Bỏ changes chưa commit

## Problem

Đang làm feature trên nhiều file nhưng càng sửa càng sai. Muốn bỏ changes của một số file (hoặc toàn bộ) và làm lại từ đầu — **chưa commit**.

## What happened? (Git state)

Working tree / staging dirty:

```text
Modified: file A, B, C
(staged hoặc unstaged)
```

## What should NOT do?

- `git restore .` nếu còn thay đổi muốn giữ.
- Discard mà không xem diff trước.
- Nhầm discard với revert/reset commit đã tạo.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-4.mp4`](../../video/example-4.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/04-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/04-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/04-fork.mp4`_

## Key takeaway

`git restore` hoàn tác working tree về HEAD. Nếu chưa chắc → `git stash` an toàn hơn. Staged cần `--staged` rồi mới restore nội dung.

---

[← Tất cả scenarios](../../README.md#scenarios)
