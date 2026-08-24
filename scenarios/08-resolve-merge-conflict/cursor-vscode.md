# Cursor / VS Code — Scenario 08

> Merge Request / PR bị conflict

## Steps

1. Pull/rebase `main` vào feature.
2. Mở **Merge Editor**: Current / Incoming / Result.
3. Chọn hoặc sửa thủ công — hiểu logic, không chỉ bấm Accept.
4. Stage → Continue rebase/merge → Push.

## Equivalent CLI

```bash
git checkout main
git pull origin main
git checkout ten_branch
git merge main
git checkout --ours .
git checkout --theirs .
git add .
git commit -m "fix conflict"
git push origin ten_branch
```

## Video

Đặt file tại `demo/videos/08-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
