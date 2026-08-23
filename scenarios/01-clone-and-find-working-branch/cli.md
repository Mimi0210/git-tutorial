# CLI — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

Kiểm tra branch hiện tại:

```bash
git branch --show-current
```

Hoặc:

```bash
git status
```

Xem tất cả branch:

```bash
git branch -a
```

Xem remote và branch mặc định:

```bash
git remote show origin
```

Xem các branch gần đây có hoạt động:

```bash
git branch -r --sort=-committerdate
```

Xem lịch sử tổng thể:

```bash
git log --all --decorate --oneline --graph
```

## Ghi chú

Không nên kết luận chỉ từ commit date. Cần kiểm tra thêm: default branch trên GitHub/GitLab, Pull Requests gần đây, branch protection, CI/CD, README và quy trình branching của team.

## Equivalent CLI

```bash
git branch --show-current
git branch -a
git remote show origin
git branch -r --sort=-committerdate
```

## Video

Demo: [`video/clone-voi-ssh.mp4`](../../video/clone-voi-ssh.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
