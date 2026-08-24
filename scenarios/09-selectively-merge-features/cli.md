# CLI — Scenario 09

> Chỉ merge một số feature từ dev sang main

## Steps

**Tình huống:** Repo có `dev` và `main`. Chỉ được đưa một số tính năng từ `dev` sang `main`.

Tạo nhánh mới từ `main`, checkout sang nhánh đó, rồi chọn một trong hai cách:

### C1 — Cherry-pick

Lấy đúng commit của tính năng đó:

```bash
git checkout main
git pull origin main
git checkout -b release-partial
git log dev --oneline
git cherry-pick <ma_commit>
git push origin release-partial
```

### C2 — Merge nhánh tính năng

Merge cả nhánh chứa tính năng cần lấy:

```bash
git checkout main
git pull origin main
git checkout -b release-partial
git merge branch_tinh_nang
git push origin release-partial
```

## ⚠️ Warning

Cherry-pick có thể conflict hoặc nhân đôi thay đổi nếu dependency commit không được pick đúng.

## Equivalent CLI

```bash
git checkout main
git pull origin main
git checkout -b release-partial
git cherry-pick <ma_commit>
git merge branch_tinh_nang
```

## Video

Demo: [`video/example-9.mp4`](../../video/example-9.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
