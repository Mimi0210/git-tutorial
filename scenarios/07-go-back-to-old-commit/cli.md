# CLI — Scenario 07

> Muốn quay lại commit cũ

## Steps

**Tình huống:** Đã đi từ commit A sang commit B và đã push. Muốn về A để làm lại.

### a. Reset theo số commit

Ví dụ `4b6bd5d` cách HEAD 3 commit:

```bash
git log --oneline
git reset HEAD~3
```

### b. Reset cứng về đúng commit, rồi force push

```bash
git reset --hard 4b6bd5d

# nếu B là commit vừa tạo:
git reset --hard HEAD~1

git push origin main --force
```

### c. Revert (an toàn hơn — nhánh dùng chung)

Revert tạo commit mới đảo ngược thay đổi — lịch sử trên remote vẫn còn:

```bash
git revert <ma_commit_B>
git push
```

**Khi nào chọn gì:** Nhánh riêng, chưa ai dựa vào → có thể reset. Nhánh dùng chung → ưu tiên revert.

## ⚠️ Warning

`reset --hard` xóa thay đổi chưa commit. `push --force` ghi đè remote.

## Equivalent CLI

```bash
git log --oneline
git reset HEAD~3
git reset --hard 4b6bd5d
git revert <ma_commit_B>
git push origin main --force
```

## Video

Demo: [`video/example-7.mp4`](../../video/example-7.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
