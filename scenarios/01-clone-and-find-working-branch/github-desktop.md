# GitHub Desktop — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

1. **File → Clone repository** (hoặc Clone a repository từ welcome).
2. Nhìn **Current Branch** trên thanh công cụ.
3. Mở branch dropdown → kiểm tra local/remote branches.
4. **Fetch origin** để cập nhật danh sách remote.
5. Mở **History** để so sánh lịch sử commit giữa các branch.

## Equivalent CLI

```bash
git branch --show-current
git branch -a
git remote show origin
git branch -r --sort=-committerdate
```

## Video

Đặt file tại `demo/videos/01-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
