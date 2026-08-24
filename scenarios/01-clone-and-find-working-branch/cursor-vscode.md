# Cursor / VS Code — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

### Clone

1. Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) → `Git: Clone` → dán URL HTTPS hoặc SSH.
2. Hoặc mở integrated terminal và chạy `git clone` (SSH hoặc HTTPS + PAT).
3. **File → Open Folder** vào thư mục vừa clone.

### Tìm branch chính

1. Nhìn **status bar** (góc dưới) để biết branch hiện tại.
2. Mở **Source Control** → xem branch / remote.
3. Command Palette → `Git: Checkout to...` để đổi branch.
4. Chạy các lệnh CLI tương đương trong terminal nếu cần xác minh.

GUI giúp nhìn branch dễ hơn, nhưng developer vẫn nên hiểu command tương ứng.

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

Demo: [`video/clone-voi-pat.mp4`](../../video/clone-voi-pat.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
