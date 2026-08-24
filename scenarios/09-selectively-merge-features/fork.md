# Fork — Scenario 09

> Chỉ merge một số feature từ dev sang main

## Steps

1. Checkout `main`.
2. Chọn commit trên `dev` → **Cherry-pick**.
3. Lặp cho từng feature được duyệt → Push.

## Equivalent CLI

```bash
git checkout main
git pull origin main
git checkout -b release-partial
git cherry-pick <ma_commit>
git merge branch_tinh_nang
```

## Video

Đặt file tại `demo/videos/09-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
