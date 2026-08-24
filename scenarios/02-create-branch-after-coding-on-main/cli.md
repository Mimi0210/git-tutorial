# CLI — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

**Tình huống:** Đang ở `main`, đã code hoặc đã commit, muốn tách sang nhánh mới để làm merge request.

### a. Chưa commit

Tạo và chuyển sang nhánh mới, rồi tiếp tục:

```bash
git checkout -b feature-moi
# hoặc
git switch -c feature-moi
git add .
git commit -m "Add feature"
```

**Nhớ:** Phải `add` và `commit`. Nếu không, khi quay lại `main` thay đổi vẫn còn trong working tree.

### b. Đã commit — chưa push

Lùi commit gần nhất, rồi tạo nhánh như mục a:

```bash
git reset HEAD~1
git checkout -b feature-moi
git add .
git commit -m "Add feature"
```

Hoặc giữ commit trên nhánh mới:

```bash
git switch -c feature-moi
git switch main
git reset --hard HEAD~1
```

### c. Đã push

Vẫn dùng `git reset HEAD~1` nếu commit đó chưa được merge — **chỉ trên branch riêng**, không tự ý reset `main` shared.

## ⚠️ Warning

`git reset --hard` xóa uncommitted changes trên working tree. Chỉ dùng khi đã chắc chắn.

## Equivalent CLI

```bash
git checkout -b feature-moi
git switch -c feature-moi
git reset HEAD~1
```

## Video

Demo: [`video/example-2.mp4`](../../video/example-2.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
