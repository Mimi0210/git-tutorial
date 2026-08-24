# GitHub Desktop — Scenario 04

> Bỏ changes chưa commit

## Steps

1. Tab **Changes** → chọn file → xem diff.
2. Right-click → **Discard changes**.
3. Hoặc discard toàn bộ changes trong changeset.

## Equivalent CLI

```bash
git restore tenfile.abc
git checkout tenfile.abc
git log --oneline
git checkout 4b6bd5d -- tenfile.abc
git checkout main -- tenfile.abc
```

## Video

Đặt file tại `demo/videos/04-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
