# Fork — Scenario 08

> Merge Request / PR bị conflict

## Steps

1. Rebase/Merge `main` vào feature.
2. **Conflict Resolver**.
3. Sửa → Continue → Push.

## Equivalent CLI

```bash
git checkout main
git pull origin main
git checkout ten_branch
git merge main
git checkout --ours .
git checkout --theirs .
git add .
git commit -m "fix conflict"
git push origin ten_branch
```

## Video

Đặt file tại `demo/videos/08-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
