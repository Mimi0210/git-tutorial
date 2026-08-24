# Cursor / VS Code — Scenario 06

> Lỡ commit file cần nằm trong .gitignore

## Steps

1. Thêm pattern vào `.gitignore`.
2. Terminal: `git rm --cached <file>`.
3. Stage `.gitignore` + commit.
4. Nếu leaked: rotate secret ngoài Git trước.

## Equivalent CLI

```bash
git reset HEAD~1
git rm --cached .env
git add .
git commit -m "commit"
git push origin main --force
```

## Video

Đặt file tại `demo/videos/06-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
