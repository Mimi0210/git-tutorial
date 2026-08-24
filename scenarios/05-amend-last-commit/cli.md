# CLI — Scenario 05

> Commit thiếu file → thêm vào commit vừa tạo

## Steps

**Tình huống:** Commit xong chưa push, nhớ ra thiếu thay đổi — muốn gộp vào commit vừa tạo.

### a. Amend (thêm file)

Sửa file, rồi:

```bash
git add package.json
git commit --amend --no-edit
```

### b. Reset rồi commit lại

```bash
git reset HEAD~1
git add .
git commit -m "commit"
```

### c. Sửa commit message (TH10)

```bash
git commit --amend -m "tên commit mới"
```

Hoặc reset rồi commit lại với message đúng:

```bash
git reset HEAD~1
git add .
git commit -m "tên commit đúng"
```

**Quy trình này:** Không dùng rebase.

## ⚠️ Warning

Không amend commit đã shared. Amend đổi hash → cần force-with-lease nếu đã push branch riêng.

## Equivalent CLI

```bash
git commit --amend --no-edit
git reset HEAD~1
git add .
git commit -m "commit"
git commit --amend -m "tên commit mới"
```

## Video

Demo: [`video/example-5.mp4`](../../video/example-5.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
