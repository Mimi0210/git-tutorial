# Fork — Scenario 04

> Bỏ changes chưa commit

## Steps

**Tình huống:** Đã sửa hoặc tạo file nhưng chưa commit — muốn bỏ changes.

### Bỏ changes chưa commit

1. Sửa file (ví dụ `text.txt`) trên branch hiện tại (ví dụ `Fork-branch`).
2. Tạo file mới (ví dụ `video/test`, `video/test 2`).
3. Mở Fork → **Local Changes** hiện file **Unstaged**.
4. Chọn file/folder → xem **diff** bên phải.
5. **Right-click** file hoặc folder trong **Unstaged** → **Discard changes…**
6. Lặp cho từng file (có thể discard cả folder `video`).
7. **Local Changes** trống — không còn thay đổi chưa commit.

**Nhớ:** Discard xóa changes vĩnh viễn (file mới sẽ bị xóa). Cân nhắc **Stash** nếu chưa chắc.

## Equivalent CLI

```bash
git restore tenfile.abc
git checkout tenfile.abc
git log --oneline
git checkout 4b6bd5d -- tenfile.abc
git checkout main -- tenfile.abc
```

## Video

Demo: [`video/04-fork.mp4`](../../video/04-fork.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
