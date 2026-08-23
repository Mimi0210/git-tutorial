# CLI — Scenario 03

> Local commits + remote commits cùng tồn tại

## Steps

```bash
git status
git fetch origin
git log --oneline --graph --all
git rebase origin/main
```

Nếu conflict:

```bash
git status
# sửa file →
git add .
git rebase --continue
git push
```

Nếu branch đã push trước đó và rebase đổi history:

```bash
git push --force-with-lease
```

`--force-with-lease` an toàn hơn `--force` vì kiểm tra remote có bị thay đổi ngoài dự kiến.

## ⚠️ Warning

Tránh `git push --force` trên branch dùng chung. Ưu tiên `--force-with-lease`.

## Equivalent CLI

```bash
git fetch origin
git rebase origin/main
git push --force-with-lease
```

## Video

Demo: [`video/example-3.mp4`](../../video/example-3.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
