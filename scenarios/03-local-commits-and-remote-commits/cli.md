# CLI — Scenario 03

> Local commits + remote commits cùng tồn tại

## Steps

**Tình huống:** Có 1 commit cần push, và 2 commit trên remote cần pull.

### a. Chưa commit

Stash thay đổi, pull, rồi lấy lại:

```bash
git stash
git pull
git stash pop
```

### b. Đã commit

Reset để lấy lại code, stash, pull, rồi stash pop. Fix conflict nếu có:

```bash
git reset HEAD~1
git stash
git pull
git stash pop
```

### c. Cách khác — rebase (linear history)

```bash
git fetch origin
git log --oneline --graph --all
git rebase origin/main
# nếu conflict → sửa file → git add . → git rebase --continue
git push --force-with-lease
```

## ⚠️ Warning

Tránh `git push --force` trên branch dùng chung. Ưu tiên `--force-with-lease`.

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

Demo: [`video/example-3.mp4`](../../video/example-3.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
