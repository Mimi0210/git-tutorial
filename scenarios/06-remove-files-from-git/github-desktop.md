# GitHub Desktop — Scenario 06

> Lỡ commit file cần nằm trong .gitignore

## Steps

1. Sửa `.gitignore`.
2. Dùng repo shell / CLI để `git rm --cached` (Desktop không luôn expose đủ).
3. Commit thay đổi.
4. Xử lý secret leak theo checklist bảo mật.

## Equivalent CLI

```bash
git reset HEAD~1
git rm --cached .env
git add .
git commit -m "commit"
git push origin main --force
```

## Video

Đặt file tại `demo/videos/06-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
