# CLI — Scenario 04

> Bỏ changes chưa commit

## Steps

Bỏ một file:

```bash
git restore path/to/file
```

Bỏ nhiều file:

```bash
git restore file1 file2 file3
```

Bỏ toàn bộ working tree:

```bash
git restore .
```

Đã staged — unstage rồi restore:

```bash
git restore --staged file.txt
git restore file.txt
```

An toàn hơn khi chưa chắc:

```bash
git stash
```

## ⚠️ Warning

`git restore` / Discard có thể mất toàn bộ changes chưa commit — không khôi phục được trừ khi đã stash hoặc editor Local History.

## Equivalent CLI

```bash
git restore path/to/file
git restore --staged file.txt
git stash
```

## Video

Demo: [`video/example-4.mp4`](../../video/example-4.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
