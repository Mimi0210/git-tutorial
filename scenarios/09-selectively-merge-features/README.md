# Scenario 09 – Chỉ merge một số feature từ dev sang main

## Problem

`dev` có nhiều feature (A, B, C, D) nhưng khách chỉ duyệt A và C. Không được merge cả `dev` → `main`.

## What happened? (Git state)

```text
main
  │
  └── dev
       ├── Feature A  ← lấy
       ├── Feature B
       ├── Feature C  ← lấy
       └── Feature D
```

## What should NOT do?

- `merge dev` vào `main` khi chưa sẵn sàng mọi feature.
- Cherry-pick commit phụ thuộc mà bỏ commit nền.
- Coi cherry-pick là thay thế lâu dài cho feature branch độc lập.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-9.mp4`](../../video/example-9.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/09-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/09-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/09-fork.mp4`_

## Key takeaway

Ngắn hạn: `cherry-pick` các commit/feature đã duyệt. Dài hạn: mỗi feature một branch + PR riêng vào `main`.

---

[← Tất cả scenarios](../../README.md#scenarios)
