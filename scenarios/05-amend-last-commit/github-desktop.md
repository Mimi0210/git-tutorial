# GitHub Desktop — Scenario 05

> Commit thiếu file → thêm vào commit vừa tạo

## Steps

1. Stage thay đổi còn thiếu.
2. Bật **Amend previous commit** (checkbox gần Commit).
3. Commit.
4. Push (có thể yêu cầu force).

## Equivalent CLI

```bash
git commit --amend --no-edit
git reset HEAD~1
git add .
git commit -m "commit"
git commit --amend -m "tên commit mới"
```

## Video

Đặt file tại `demo/videos/05-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
