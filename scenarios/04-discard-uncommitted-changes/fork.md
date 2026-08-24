# Fork — Scenario 04

> Bỏ changes chưa commit

## Steps

1. Working Directory → chọn file → xem diff.
2. **Discard** file / hunk (nếu hỗ trợ).
3. Xác nhận trước khi discard hàng loạt.

## Equivalent CLI

```bash
git restore tenfile.abc
git checkout tenfile.abc
git log --oneline
git checkout 4b6bd5d -- tenfile.abc
git checkout main -- tenfile.abc
```

## Video

Đặt file tại `demo/videos/04-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
