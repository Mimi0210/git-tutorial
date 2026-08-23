# CLI — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

### Chưa commit

```bash
git status
git switch -c feature/my-feature
git add .
git commit -m "Add my feature"
git push -u origin feature/my-feature
```

Changes chưa commit được giữ trên branch mới.

### Đã commit trên main (chưa push)

```bash
git switch -c feature/my-feature
git switch main
git reset --hard HEAD~1
```

Branch mới giữ commit; `main` trở lại trạng thái trước đó.

### Đã push lên shared branch

**Không tự ý reset + force push.** Dùng quy trình team (revert / hotfix PR).

## ⚠️ Warning

`git reset --hard` xóa uncommitted changes trên working tree. Chỉ dùng khi đã chắc chắn.

## Equivalent CLI

```bash
git switch -c feature/my-feature
git add .
git commit -m "..."
git push -u origin feature/my-feature
```

## Video

Demo: [`video/example-2.mp4`](../../video/example-2.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
