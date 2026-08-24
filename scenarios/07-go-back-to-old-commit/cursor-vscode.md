# Cursor / VS Code — Scenario 07

> Muốn quay lại commit cũ

## Steps

1. Git Graph / Timeline → chọn commit.
2. **Revert** (tạo commit mới) cho shared branch.
3. Hoặc Reset (hard/soft) chỉ khi hiểu hậu quả và chưa share / có approval.

## Equivalent CLI

```bash
git log --oneline
git reset HEAD~3
git reset --hard 4b6bd5d
git revert <ma_commit_B>
git push origin main --force
```

## Video

Đặt file tại `demo/videos/07-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
