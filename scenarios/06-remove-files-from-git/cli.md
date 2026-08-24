# CLI — Scenario 06

> Lỡ commit file cần nằm trong .gitignore

## Steps

**Ví dụ:** File `.env`, dump database, hoặc file nhạy cảm khác.

### a. Chưa push

Reset, loại file khỏi staging, thêm vào `.gitignore`, rồi commit lại:

```bash
git reset HEAD~1
# loại file nhạy cảm khỏi staging
git rm --cached .env
# thêm vào .gitignore
git add .
git commit -m "commit"
```

Hoặc không cần reset — chỉ stop tracking:

```bash
git rm --cached .env
git add .gitignore
git commit -m "chore: ignore local environment files"
```

### b. Đã push — cần xóa khỏi lịch sử

```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

git add .
git commit -m "remove file .env from git"
git push origin main --force
```

**Rotate/revoke secret ngay** nếu `.env` đã lên remote.

## ⚠️ Warning

`push --force` ghi đè lịch sử trên remote. Xóa file khỏi branch không có nghĩa secret biến mất khỏi history — phải rotate secret.

## Equivalent CLI

```bash
git reset HEAD~1
git rm --cached .env
git add .
git commit -m "commit"
git push origin main --force
```

## Video

Demo: [`video/example-6.mp4`](../../video/example-6.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
