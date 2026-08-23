# Scenario 01 – Clone repo và xác định branch đang được code chính

## Problem

Developer clone repository về máy nhưng không biết:

- Hiện tại đang ở branch nào.
- Branch nào là branch chính.
- Team đang phát triển trên `main`, `dev`, `develop` hay một branch khác.
- Một branch có thể tồn tại lâu nhưng thực tế đã không còn được sử dụng.

Đây là lỗi rất phổ biến: clone repo → code ngay → sau vài ngày mới phát hiện đang code trên branch cũ.

## What happened? (Git state)

Local sau clone:
- Branch mặc định (thường là `main` hoặc `master`)
- Nhiều remote branches (`origin/*`)

Cần xác định: default branch trên remote + branch team đang active.

## What should NOT do?

- Code ngay trên branch vừa checkout mà không kiểm tra.
- Kết luận "branch có commit mới nhất = branch team đang code chính" mà không xem thêm PR, CI, docs.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/clone-voi-ssh.mp4`](../../video/clone-voi-ssh.mp4)
- **Cursor / VS Code:** [`video/clone-voi-pat.mp4`](../../video/clone-voi-pat.mp4)
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/01-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/01-fork.mp4`_

## Key takeaway

Luôn kiểm tra default branch, hoạt động gần đây (PR/CI/commit), và quy trình branching của team trước khi bắt đầu code.

---

[← Tất cả scenarios](../../README.md#scenarios)
