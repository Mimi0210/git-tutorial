# GitHub Desktop — Scenario 07

> Muốn quay lại commit cũ

## Steps

1. **History** → chọn commit.
2. **Revert this commit** (an toàn).
3. Reset chỉ dùng có chủ đích trên branch riêng.

## Equivalent CLI

```bash
git log --oneline
git reset HEAD~3
git reset --hard 4b6bd5d
git revert <ma_commit_B>
git push origin main --force
```

## Video

Đặt file tại `demo/videos/07-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
