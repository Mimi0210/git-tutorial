# GitHub Desktop — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

1. **Current Branch** → **New Branch...**
2. Đặt tên feature branch (tạo từ current HEAD).
3. Commit (nếu chưa) rồi **Publish branch**.
4. Nếu cần dọn main local: checkout `main` → History → Reset to previous commit (cẩn thận, chưa push).

## Equivalent CLI

```bash
git switch -c feature/my-feature
git add .
git commit -m "..."
git push -u origin feature/my-feature
```

## Video

Đặt file tại `demo/videos/02-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
