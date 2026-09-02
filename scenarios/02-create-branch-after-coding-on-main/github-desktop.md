# GitHub Desktop — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

**Tình huống:** Đang ở `main`, đã sửa file nhưng chưa commit — cần tách sang branch mới.

### Tạo branch và commit

1. Sửa file trên `main` → tab **Changes** hiện file đã đổi.
2. **Current Branch** → **New Branch...**
3. Hộp thoại **Create a branch** → nhập tên (ví dụ `Branch-1`) → **Create branch**.
4. Hộp thoại **Switch branch** → chọn **Bring my changes to Branch-1** → **Switch branch**.
5. Điền **Summary** (ví dụ `create branch`) → **Commit to Branch-1**.
6. Bấm **Publish branch** / **Push origin** để đẩy lên remote.

**Nhớ:** Chọn **Bring my changes** để thay đổi chưa commit chuyển sang branch mới, không bỏ lại trên `main`.

## Equivalent CLI

```bash
git checkout -b feature-moi
git switch -c feature-moi
git reset HEAD~1
```

## Video

Demo: [`video/02-github-desktop.mp4`](../../video/02-github-desktop.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
