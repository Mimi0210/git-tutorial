# CLI — Scenario 07

> Muốn quay lại commit cũ

## Steps

### Revert (an toàn cho shared)

```bash
git revert <commit-C>
git push
```

### Reset (local / kiểm soát chặt)

```bash
git reset --hard <commit-A>
# nếu đã push:
git push --force-with-lease
```

| Tình huống | Nên dùng |
|---|---|
| Đã push/shared | `revert` |
| Local chưa push | `reset` có thể OK |
| Giữ history rõ | `revert` |
| Sửa local history | `reset` / rebase |

## ⚠️ Warning

`git reset --hard` có thể mất uncommitted changes. Force push có thể overwrite remote history.

## Equivalent CLI

```bash
git revert <commit>
# hoặc (local):
git reset --hard <commit>
```

## Video

Demo: [`video/example-7.mp4`](../../video/example-7.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
