# Fork — Scenario 02

> Code trên main rồi mới phát hiện chưa tạo branch

## Steps

**Tình huống:** Đang ở `main`, đã sửa file nhưng chưa commit — cần tách sang branch mới.

### Tạo branch và commit

1. Sửa file trên `main` → **Local Changes** hiện 1 file **Unstaged**.
2. **Branch → Create Branch...** (hoặc nút **Branch** trên toolbar).
3. Hộp thoại **Create Branch**:
   - **Create branch at:** `main`
   - **Branch name:** ví dụ `Fork-branch`
   - Bật **Check out after create**
   - **Local changes:** chọn **Stash and reapply**
   - Bấm **Create and Checkout**
4. Bấm **Stage** → nhập **Commit subject** → **Commit**.
5. **Push** `Fork-branch` lên `origin`.

**Nhớ:** **Stash and reapply** giúp đưa thay đổi chưa commit từ `main` sang branch mới mà không mất code.

## Equivalent CLI

```bash
git checkout -b feature-moi
git switch -c feature-moi
git reset HEAD~1
```

## Video

Demo: [`video/02-fork.mp4`](../../video/02-fork.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
