# Cursor / VS Code — Scenario 09

> Chỉ merge một số feature từ dev sang main

## Steps

1. Checkout `main`, pull.
2. Command Palette / Git Graph → **Cherry Pick** commit A, C.
3. Resolve nếu conflict → push.
4. Hoặc mở PR từ `feature/A`, `feature/C`.

## Equivalent CLI

```bash
git checkout main
git pull origin main
git checkout -b release-partial
git cherry-pick <ma_commit>
git merge branch_tinh_nang
```

## Video

Đặt file tại `demo/videos/09-cursor-vscode.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
