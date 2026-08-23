# Git basics

Ba khái niệm cần thuộc trước khi làm 9 scenario.

## Repository

Kho chứa file + toàn bộ lịch sử. **Local** = trên máy. **Remote** = GitHub / GitLab.

## Commit

Một mốc lưu có message và hash. Chỉ sau khi commit, thay đổi mới nằm trong history (không chỉ trên working tree).

## Branch

Một dòng phát triển độc lập. `main` thường là nhánh chuẩn; tính năng mới làm trên nhánh riêng rồi mở PR/MR.

## Vòng đời thay đổi

```text
Working tree  →  Staging (index)  →  Commit  →  Push (remote)
     ↑                                    │
     └──────── restore / reset / pull ────┘
```

| Trạng thái | Ý nghĩa |
|------------|---------|
| Untracked | File mới, Git chưa theo dõi |
| Modified | Đã track, khác so với HEAD |
| Staged | Đã `git add`, sẵn sàng commit |
| Committed | Đã lưu vào history local |
| Pushed | Có trên remote |

## Lệnh “nhìn” trước khi “sửa”

```bash
git status
git log --oneline --graph --all
git branch -vv
git fetch
```

Luôn **đọc state** trước khi reset, restore, rebase hay force push.
