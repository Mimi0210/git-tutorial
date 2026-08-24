# CLI — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

### 0. Chuẩn bị (trước khi clone)

Đảm bảo tài khoản đã được add vào repo GitLab và có quyền clone / pull / push.

**SSH key** (nếu dùng SSH):

```bash
ls -la ~/.ssh
ssh-keygen -t ed25519 -C "your.email@example.com"
cat ~/.ssh/id_ed25519.pub
# dán vào GitLab → SSH Keys
```

**PAT** (nếu dùng HTTPS): tạo trên GitLab → Access Tokens, lưu token dạng `glpat-...`.

### 1. Clone repo

**Cách A — SSH:**

```bash
git clone git@gitlab.com:group/studybooks-2026.git
cd studybooks-2026
```

**Cách B — HTTPS + PAT:**

```bash
git clone https://USERNAME:glpat-xxxxxxxx@gitlab.com/group/studybooks-2026.git
cd studybooks-2026
```

Gắn lại remote (nếu cần):

```bash
git remote set-url origin https://USERNAME:glpat-xxxxxxxx@gitlab.com/group/studybooks-2026.git
git remote -v
```

### 2. Xác định branch đang làm việc

```bash
git branch --show-current
git status
git branch -a
git remote show origin
git branch -r --sort=-committerdate
git log --all --decorate --oneline --graph
```

## Ghi chú

Không đưa token thật lên slide, chat hay commit. Không nên kết luận chỉ từ commit date — kiểm tra thêm default branch trên GitHub/GitLab, PR gần đây, CI/CD và quy trình branching của team.

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

Demo: [`video/clone-voi-ssh.mp4`](../../video/clone-voi-ssh.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
