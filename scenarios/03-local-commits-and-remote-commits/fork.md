# Fork — Scenario 03

> Local commits + remote commits cùng tồn tại

## Steps

1. **Fetch**
2. Xem graph divergence.
3. **Rebase** lên `origin/main` (hoặc Merge).
4. Conflict Resolver → sửa → Continue.
5. Push (`force-with-lease` nếu đã rebase).

## Equivalent CLI

```bash
git stash
git pull
git stash pop
# hoặc:
git reset HEAD~1
git stash
git pull
git stash pop
```

## Video

Đặt file tại `demo/videos/03-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
