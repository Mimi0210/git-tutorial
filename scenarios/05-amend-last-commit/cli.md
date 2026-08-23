# CLI — Scenario 05

> Commit thiếu file → thêm vào commit vừa tạo

## Steps

```bash
# sửa file thiếu
git add package.json
git commit --amend --no-edit
```

Đổi message:

```bash
git commit --amend -m "feat: add product page"
```

## ⚠️ Warning

Không amend commit đã shared. Amend đổi hash → cần force-with-lease nếu đã push branch riêng.

## Equivalent CLI

```bash
git add package.json
git commit --amend --no-edit
```

## Video

Demo: [`video/example-5.mp4`](../../video/example-5.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
