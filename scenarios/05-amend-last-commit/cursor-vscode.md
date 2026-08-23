# Cursor / VS Code — Scenario 05

> Commit thiếu file → thêm vào commit vừa tạo

## Steps

1. Sửa + **Stage** file thiếu.
2. Source Control → menu Commit → **Amend** / Commit (Amend).
3. Giữ hoặc sửa message.
4. Push với lease nếu branch đã publish.

## Equivalent CLI

```bash
git add package.json
git commit --amend --no-edit
```

## Video

Đặt file tại `demo/videos/05-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
