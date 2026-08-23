# Scenario 05 – Commit thiếu file → thêm vào commit vừa tạo

## Problem

Vừa commit (ví dụ `feat: add product page`) rồi mới nhớ quên update version / thiếu file. Commit **chưa push**. Không cần tạo commit thứ hai nếu policy team cho phép amend.

## What happened? (Git state)

```text
Before amend:  A → B (thiếu file)
After amend:   A → B' (cùng message, thêm file; hash đổi)
```

## What should NOT do?

- Amend commit đã được người khác pull / đang dựa vào.
- Amend rồi force push lên `main` shared mà không theo quy trình.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-5.mp4`](../../video/example-5.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/05-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/05-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/05-fork.mp4`_

## Key takeaway

Amend thay thế commit cuối (đổi hash). Chỉ dùng khi commit còn local (hoặc branch riêng bạn kiểm soát).

---

[← Tất cả scenarios](../../README.md#scenarios)
