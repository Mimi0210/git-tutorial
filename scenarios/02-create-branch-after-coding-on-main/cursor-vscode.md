# Cursor / VS Code — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

**Tình huống:** Đang ở `main`, đã sửa file nhưng chưa commit — cần tách sang branch mới.

### Tạo branch và commit

1. Sửa file trên `main` (ví dụ `text.txt`).
2. Mở **Source Control** → thấy file **Modified**.
3. Bấm **+** để **Stage** thay đổi.
4. Click tên branch `main` ở **status bar** → **+ Create new branch...**
5. Nhập tên branch (ví dụ `Cursor-branch`) → Enter.
6. Điền commit message → bấm **Commit** (commit trên branch mới).
7. **Sync / Push** để đẩy branch lên remote.

**Nhớ:** Thay đổi chưa commit sẽ đi theo khi tạo branch mới. Đừng commit trực tiếp lên `main` nếu nhận ra đang code nhầm branch.

## Equivalent CLI

```bash
git checkout -b feature-moi
git switch -c feature-moi
git reset HEAD~1
```

## Video

Demo: [`video/02-cursor.mp4`](../../video/02-cursor.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
