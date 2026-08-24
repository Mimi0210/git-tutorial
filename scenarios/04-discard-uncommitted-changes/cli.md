# CLI — Scenario 04

> Bỏ changes chưa commit

## Steps

### Chưa commit — bỏ thay đổi

**Tình huống:** Muốn hoàn tác vài file về trạng thái đã commit.

```bash
git restore tenfile.abc

# hoặc
git checkout tenfile.abc
```

Bỏ toàn bộ working tree:

```bash
git restore .
```

An toàn hơn khi chưa chắc:

```bash
git stash
```

### Đã commit — lấy lại nội dung file

Dùng `git reset HEAD~1` nếu chỉ cần lùi commit gần nhất, rồi discard file.

Xem danh sách commit:

```bash
git log --oneline
```

Lấy file từ một commit cụ thể (ví dụ `4b6bd5d`):

```bash
git checkout 4b6bd5d -- tenfile.abc
```

Lấy file đúng như trên nhánh `main`:

```bash
git checkout main -- tenfile.abc
```

## ⚠️ Warning

`git restore` / Discard có thể mất toàn bộ changes chưa commit — không khôi phục được trừ khi đã stash hoặc editor Local History.

## Equivalent CLI

```bash
git restore tenfile.abc
git checkout tenfile.abc
git log --oneline
git checkout 4b6bd5d -- tenfile.abc
git checkout main -- tenfile.abc
```

## Video

Demo: [`video/example-4.mp4`](../../video/example-4.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
