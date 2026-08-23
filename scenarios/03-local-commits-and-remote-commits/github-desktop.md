# GitHub Desktop — Scenario 03

> Local commits + remote commits cùng tồn tại

## Steps

1. **Fetch origin**
2. So sánh History (local vs remote).
3. **Branch → Rebase current branch** (hoặc Merge tùy policy team).
4. Resolve conflicts trong editor.
5. Push (Desktop sẽ cảnh báo nếu cần force).

## Equivalent CLI

```bash
git fetch origin
git rebase origin/main
git push --force-with-lease
```

## Video

Đặt file tại `demo/videos/03-github-desktop.mp4` rồi cập nhật link trong web UI.

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
