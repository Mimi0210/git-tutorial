# Recovery

Cheat sheet khi “mất” thay đổi hoặc cần lùi an toàn.

## Chưa commit — muốn giữ tạm

```bash
git stash push -m "wip"
git stash list
git stash pop
```

## Chưa commit — muốn bỏ

Xem [Scenario 04](../scenarios/04-discard-uncommitted-changes/) — `git restore`.

## Commit sai trên branch riêng chưa share

- Sửa commit cuối: [Scenario 05 — amend](../scenarios/05-amend-last-commit/)
- Bỏ commit cuối, giữ file: `git reset --soft HEAD~1`
- Bỏ commit cuối, bỏ luôn thay đổi: `git reset --hard HEAD~1`

## Đã push / branch shared

Ưu tiên **revert** (commit mới đảo ngược) — [Scenario 07](../scenarios/07-go-back-to-old-commit/).

Tránh `reset` + force push trừ khi team approve.

## Lỡ mất commit (reflog)

```bash
git reflog
git switch -c recover <hash>
```

Reflog là “hộp đen” local — không thay cho backup remote.

## Secret đã push

1. Rotate / revoke ngay.
2. Gỡ tracking + `.gitignore` — [Scenario 06](../scenarios/06-remove-files-from-git/).
3. Clean history chỉ sau khi secret đã vô hiệu.

## Force push an toàn hơn

```bash
git push --force-with-lease
```

Không dùng `--force` mù quáng trên branch người khác đang dùng.
