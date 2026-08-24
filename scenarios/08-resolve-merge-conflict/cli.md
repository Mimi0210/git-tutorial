# CLI — Scenario 08

> Merge Request / PR bị conflict

## Steps

**Luồng:** Kéo `main` → merge vào nhánh của bạn → sửa conflict → push nhánh đó.

```bash
git checkout main
git pull origin main
git checkout ten_branch
git merge main

git add .
git commit -m "fix conflict"
git push origin ten_branch
```

**Chú ý:** Push `ten_branch`, không phải `main`.

### Sửa conflict nhanh

Giữ code của nhánh hiện tại:

```bash
git checkout --ours .
```

Giữ code của nhánh đang merge vào (theirs):

```bash
git checkout --theirs .
```

Sửa từng file rồi commit:

```bash
git add tenfile.abc
git commit -m "fix-conflict-tenfile.abc"
```

Hoặc sửa hết rồi commit một lần:

```bash
git add .
git commit -m "fix-conflict-new-branch"
```

### Cách khác — rebase

```bash
git switch feature/login
git fetch origin
git rebase origin/main
git add .
git rebase --continue
git push --force-with-lease
```

## ⚠️ Warning

Sau rebase feature đã publish cần `--force-with-lease`, không force vào `main`.

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

Demo: [`video/example-8.mp4`](../../video/example-8.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
