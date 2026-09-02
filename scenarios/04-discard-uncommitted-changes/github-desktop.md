# GitHub Desktop — Scenario 04

> Bỏ changes chưa commit

## Steps

**Tình huống:** Đã sửa hoặc tạo file nhưng chưa commit — muốn bỏ changes.

### Bỏ changes chưa commit

1. Sửa file (ví dụ `text.txt`) trên branch hiện tại (ví dụ `main`).
2. Tạo file mới (ví dụ `video/test`).
3. Mở GitHub Desktop → tab **Changes** hiện file đã đổi.
4. Xem **diff** để chắc muốn bỏ.
5. **Right-click** file mới (ví dụ `video/test`) → **Discard changes…**
6. Hộp thoại **Confirm discard changes** → **Discard changes**.
7. **Right-click** file đã sửa (ví dụ `text.txt`) → **Discard changes…** (hoặc discard all).
8. Hộp thoại **Confirm discard all changes** → **Discard all changes**.
9. Tab **Changes** hiện **No local changes**.

**Nhớ:** Xem diff trước khi discard — thao tác này không undo được ngoài Recycle Bin (file mới).

## Equivalent CLI

```bash
git restore tenfile.abc
git checkout tenfile.abc
git log --oneline
git checkout 4b6bd5d -- tenfile.abc
git checkout main -- tenfile.abc
```

## Video

Demo: [`video/04-github-desktop.mp4`](../../video/04-github-desktop.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
