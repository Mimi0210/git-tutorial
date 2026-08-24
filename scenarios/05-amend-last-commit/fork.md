# Fork — Scenario 05

> Commit thiếu file → thêm vào commit vừa tạo

## Steps

1. Stage file.
2. **Commit → Amend**.
3. Push (force-with-lease nếu cần).

## Equivalent CLI

```bash
git commit --amend --no-edit
git reset HEAD~1
git add .
git commit -m "commit"
git commit --amend -m "tên commit mới"
```

## Video

Đặt file tại `demo/videos/05-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
