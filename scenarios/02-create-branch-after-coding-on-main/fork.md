# Fork — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

1. **Branch → New Branch...**
2. Tạo `feature/...` từ HEAD hiện tại.
3. Commit + Push branch mới.
4. Quay lại `main` và reset nếu commit nhầm chưa được share.

## Equivalent CLI

```bash
git switch -c feature/my-feature
git add .
git commit -m "..."
git push -u origin feature/my-feature
```

## Video

Đặt file tại `demo/videos/02-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
