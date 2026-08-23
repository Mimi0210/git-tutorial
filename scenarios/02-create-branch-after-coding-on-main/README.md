# Scenario 02 – Code trên main rồi mới phát hiện chưa tạo branch

## Problem

Developer đang ở `main`, đã sửa code nhưng chưa commit (hoặc đã commit nhầm), rồi mới nhận ra đáng ra phải tạo feature branch trước.

Không cần panic và không nhất thiết phải copy code sang nơi khác.

## What happened? (Git state)

Trường hợp A — chưa commit:
```text
main (working tree dirty)
```

Trường hợp B — đã commit trên main:
```text
main
  A
  |
  B  ← accidental commit
```

## What should NOT do?

- Copy/paste thủ công sang thư mục khác.
- Force push lên `main` shared nếu đã push commit nhầm (làm theo quy trình team).
- `git reset --hard` khi chưa chắc muốn mất changes.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-2.mp4`](../../video/example-2.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/02-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/02-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/02-fork.mp4`_

## Key takeaway

Uncommitted changes đi theo khi bạn `git switch -c`. Nếu đã commit trên main chưa push: tạo branch tại HEAD rồi reset main về trước commit đó.

---

[← Tất cả scenarios](../../README.md#scenarios)
