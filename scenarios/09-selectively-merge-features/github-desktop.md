# GitHub Desktop — Scenario 09

> Chỉ merge một số feature từ dev sang main

## Steps

1. Checkout `main`.
2. History của `dev` → Cherry-pick commit cần thiết (nếu phiên bản hỗ trợ) hoặc dùng CLI.
3. Push `main` / tạo PR tương ứng.

## Equivalent CLI

```bash
git checkout main
git pull origin main
git checkout -b release-partial
git cherry-pick <ma_commit>
git merge branch_tinh_nang
```

## Video

Đặt file tại `demo/videos/09-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
