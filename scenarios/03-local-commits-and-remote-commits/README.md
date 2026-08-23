# Scenario 03 – Local commits + remote commits cùng tồn tại

## Problem

Remote có commit mới, local cũng có commit chưa push — hai nhánh đã **diverge**.

Ví dụ: 1 local commit cần push, 2 remote commits cần pull.

Git không đơn giản là "Pull → Push".

## What happened? (Git state)

```text
             C  ← local (1 commit ahead)
            /
A → B
            \
             D → E  ← remote (2 commits ahead)
```

## What should NOT do?

- Force push mù quáng lên shared branch.
- Chỉ bấm Sync mà không hiểu merge vs rebase.
- Bỏ qua conflict markers.

## Choose your tool

| Tool | Guide |
|------|--------|
| CLI | [cli.md](./cli.md) |
| Cursor / VS Code | [cursor-vscode.md](./cursor-vscode.md) |
| GitHub Desktop | [github-desktop.md](./github-desktop.md) |
| Fork | [fork.md](./fork.md) |

## Video

- **CLI:** [`video/example-3.mp4`](../../video/example-3.mp4)
- **Cursor / VS Code:** _Chưa có video — thêm vào `demo/videos/03-cursor-vscode.mp4`_
- **GitHub Desktop:** _Chưa có video — thêm vào `demo/videos/03-github-desktop.mp4`_
- **Fork:** _Chưa có video — thêm vào `demo/videos/03-fork.mp4`_

## Key takeaway

Fetch trước → xem graph → chọn rebase (linear) hoặc merge → resolve → push (`--force-with-lease` nếu đã rebase branch đã publish).

---

[← Tất cả scenarios](../../README.md#scenarios)
