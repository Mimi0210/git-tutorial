# Cursor / VS Code — Scenario 04

> Bỏ changes chưa commit

## Steps

1. Source Control → chọn file → xem **diff**.
2. Click **Discard Changes** trên file (hoặc Discard All).
3. Một số extension hỗ trợ discard từng hunk.
4. Unstage: trừ staging rồi discard nếu cần.

## Equivalent CLI

```bash
git restore path/to/file
git restore --staged file.txt
git stash
```

## Video

Đặt file tại `demo/videos/04-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
