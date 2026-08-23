# Fork — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

1. **File → Clone...** để clone repository.
2. **Repository → Branches** để xem danh sách branch.
3. Kiểm tra branch hiện tại (highlighted).
4. Xem **Commit History**.
5. **Fetch** remote rồi so sánh các branch.

## Equivalent CLI

```bash
git branch --show-current
git branch -a
git remote show origin
git branch -r --sort=-committerdate
```

## Video

Đặt file tại `demo/videos/01-fork.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
