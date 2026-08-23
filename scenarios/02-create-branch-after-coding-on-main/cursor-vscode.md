# Cursor / VS Code — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

1. **Source Control** → menu branch (status bar hoặc `...`).
2. **Create Branch...** → đặt tên `feature/my-feature`.
3. Stage + Commit trên branch mới.
4. Publish branch / Push.

Nếu đã commit trên main: tạo branch từ commit hiện tại, rồi checkout main và Reset (hard) về commit trước — chỉ khi chưa push.

## Equivalent CLI

```bash
git switch -c feature/my-feature
git add .
git commit -m "..."
git push -u origin feature/my-feature
```

## Video

Đặt file tại `demo/videos/02-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
