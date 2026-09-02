# Cursor / VS Code — Scenario 04

> Bỏ changes chưa commit

## Steps

**Tình huống:** Đã sửa hoặc tạo file nhưng chưa commit — muốn bỏ changes.

### Bỏ changes chưa commit

1. Sửa file (ví dụ thêm dòng vào `text.txt`).
2. Tạo file mới (ví dụ `new/Test`, `video/test 2`) — hiện **Untracked**.
3. Mở **Source Control** → thấy **Changes**: file **Modified** và **Untracked**.
4. Chọn file cần bỏ → bấm icon **Discard Changes** (mũi tên cong) hoặc **right-click → Discard Changes**.
5. File **Untracked**: hộp thoại **Move to Recycle Bin** → xác nhận.
6. File **Modified**: discard hoàn tác nội dung về commit gần nhất.
7. Lặp cho từng file (hoặc **Discard All** nếu muốn bỏ hết).

**Nhớ:** Discard không khôi phục được trừ khi đã **stash** hoặc file untracked còn trong Recycle Bin.

## Equivalent CLI

```bash
git restore tenfile.abc
git checkout tenfile.abc
git log --oneline
git checkout 4b6bd5d -- tenfile.abc
git checkout main -- tenfile.abc
```

## Video

Demo: [`video/04-cursor.mp4`](../../video/04-cursor.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
