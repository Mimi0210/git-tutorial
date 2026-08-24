# GitHub Desktop — Scenario 08

> Merge Request / PR bị conflict

## Steps

1. Update from `main` (merge hoặc rebase theo setting).
2. Mở conflicted files.
3. Resolve → commit merge/rebase.
4. Push branch → PR xanh conflict.

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

Đặt file tại `demo/videos/08-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
