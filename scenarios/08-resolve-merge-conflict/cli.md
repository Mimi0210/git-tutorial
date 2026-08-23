# CLI — Scenario 08

> Merge Request / PR bị conflict

## Steps

```bash
git switch feature/login
git fetch origin
git rebase origin/main
git status
# sửa conflict markers
git add .
git rebase --continue
git push --force-with-lease
```

Conflict markers:

```text
<<<<<<< HEAD
code from main
=======
code from feature
>>>>>>> feature/login
```

## ⚠️ Warning

Sau rebase feature đã publish cần `--force-with-lease`, không force vào `main`.

## Equivalent CLI

```bash
git fetch origin
git rebase origin/main
# resolve → git add . && git rebase --continue
git push --force-with-lease
```

## Video

Demo: [`video/example-8.mp4`](../../video/example-8.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
