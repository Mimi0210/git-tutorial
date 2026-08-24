# Fork — Scenario 07

> Muốn quay lại commit cũ

## Steps

1. Commit History → chọn commit.
2. **Revert** hoặc **Reset** tùy tình huống.
3. Push; dùng force-with-lease nếu reset đã publish.

## Equivalent CLI

```bash
git log --oneline
git reset HEAD~3
git reset --hard 4b6bd5d
git revert <ma_commit_B>
git push origin main --force
```

## Video

Đặt file tại `demo/videos/07-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
