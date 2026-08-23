# Fork — Scenario 08

> Merge Request / PR bị conflict

## Steps

1. Rebase/Merge `main` vào feature.
2. **Conflict Resolver**.
3. Sửa → Continue → Push.

## Equivalent CLI

```bash
git fetch origin
git rebase origin/main
# resolve → git add . && git rebase --continue
git push --force-with-lease
```

## Video

Đặt file tại `demo/videos/08-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
