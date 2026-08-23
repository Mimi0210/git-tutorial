# CLI — Scenario 09

> Chỉ merge một số feature từ dev sang main

## Steps

### Cách 1 — Cherry-pick

```bash
git switch main
git pull origin main
git log dev --oneline
git cherry-pick aaa111   # Feature A
git cherry-pick ccc333   # Feature C
git push origin main
```

### Cách 2 — Feature branch độc lập (khuyến nghị)

```text
feature/A → PR → main
feature/C → PR → main
```

Tránh nhồi mọi thứ vào một `dev` khổng lồ nếu thường xuyên release từng phần.

## ⚠️ Warning

Cherry-pick có thể conflict hoặc nhân đôi thay đổi nếu dependency commit không được pick đúng.

## Equivalent CLI

```bash
git cherry-pick <commit-A>
git cherry-pick <commit-C>
```

## Video

Demo: [`video/example-9.mp4`](../../video/example-9.mp4)

[← Scenario overview](./README.md) · [All scenarios](../../README.md#scenarios)
