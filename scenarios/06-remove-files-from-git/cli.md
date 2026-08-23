# CLI — Scenario 06

> Lỡ commit file cần nằm trong .gitignore

## Steps

```gitignore
.env
*.sql
node_modules/
```

```bash
git rm --cached .env
git add .gitignore
git commit -m "chore: ignore local environment files"
```

File vẫn trên máy, Git không track nữa.

### Nếu đã push secret

1. Rotate / revoke secret ngay.
2. Remove khỏi branch hiện tại.
3. Clean history nếu cần (filter-repo / BFG) theo quy trình.
4. Force push theo approval.
5. Kiểm tra các clone khác.

## ⚠️ Warning

Xóa file khỏi branch **không** có nghĩa secret biến mất khỏi Git history. Phải rotate secret.

## Equivalent CLI

```bash
git rm --cached .env
git add .gitignore
git commit -m "chore: ignore local environment files"
```

## Video

Demo: [`video/example-6.mp4`](../../video/example-6.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
