# Cursor / VS Code — Scenario 03

> Local commits + remote commits cùng tồn tại

## Steps

1. Source Control → **Fetch**.
2. Khi diverge: không chỉ Sync — chọn **Pull (Rebase)** hoặc chạy rebase trong terminal.
3. Dùng **Merge Editor** nếu có conflict.
4. Push (`force with lease` nếu cần sau rebase).

## Equivalent CLI

```bash
git fetch origin
git rebase origin/main
git push --force-with-lease
```

## Video

Đặt file tại `demo/videos/03-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
