# Cursor / VS Code — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

1. Nhìn **status bar** (góc dưới) để biết branch hiện tại.
2. Mở **Source Control** → xem branch / remote.
3. Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) → `Git: Checkout to...` để đổi branch.
4. Mở integrated terminal và chạy các lệnh CLI tương đương nếu cần xác minh.

GUI giúp nhìn branch dễ hơn, nhưng developer vẫn nên hiểu command tương ứng.

## Equivalent CLI

```bash
git branch --show-current
git branch -a
git remote show origin
git branch -r --sort=-committerdate
```

## Video

Demo: [`video/clone-voi-pat.mp4`](../../video/clone-voi-pat.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
