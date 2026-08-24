# Fork — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

### Clone

1. **File → Clone...** → dán URL HTTPS hoặc SSH → Clone.

### Tìm branch chính

1. **Repository → Branches** để xem danh sách branch.
2. Kiểm tra branch hiện tại (highlighted).
3. Xem **Commit History**.
4. **Fetch** remote rồi so sánh các branch.

## Equivalent CLI

```bash
git clone git@gitlab.com:group/studybooks-2026.git
# hoặc HTTPS + PAT:
git clone https://USERNAME:glpat-xxxxxxxx@gitlab.com/group/studybooks-2026.git
git remote set-url origin https://USERNAME:glpat-xxxxxxxx@gitlab.com/group/studybooks-2026.git
cd studybooks-2026
git branch --show-current
git branch -a
git remote show origin
```

## Video

Demo: [`video/01-fork.mp4`](../../video/01-fork.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
