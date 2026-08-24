# GitHub Desktop — Scenario 01

> Clone repo và xác định branch đang được code chính

## Steps

### Clone

1. **File → Clone repository** (hoặc Clone a repository từ welcome).
2. Dán URL HTTPS/SSH → chọn thư mục → **Clone**.

### Tìm branch chính

1. Nhìn **Current Branch** trên thanh công cụ.
2. Mở branch dropdown → kiểm tra local/remote branches.
3. **Fetch origin** để cập nhật danh sách remote.
4. Mở **History** để so sánh lịch sử commit giữa các branch.

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

Demo: [`video/01-github-desktop.mp4`](../../video/01-github-desktop.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
