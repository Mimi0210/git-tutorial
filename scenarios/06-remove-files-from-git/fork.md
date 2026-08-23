# Fork — Scenario 06

> Lỡ commit file cần nằm trong .gitignore

## Steps

1. Cập nhật `.gitignore`.
2. Untrack file (`rm --cached` qua terminal của Fork hoặc UI tương đương).
3. Commit.
4. Nếu đã push secret → rotate + clean history.

## Equivalent CLI

```bash
git rm --cached .env
git add .gitignore
git commit -m "chore: ignore local environment files"
```

## Video

Đặt file tại `demo/videos/06-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
