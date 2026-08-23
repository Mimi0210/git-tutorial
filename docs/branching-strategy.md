# Branching strategy

## Anti-pattern training muốn tránh

Nhồi mọi feature vào một `dev` dài hạn rồi “đến lúc merge cả cục vào `main`”:

```text
main
 └── dev
      ├── Feature A
      ├── Feature B
      ├── Feature C
      └── Feature D
```

Khi khách chỉ duyệt A và C, merge `dev` → `main` sẽ kéo theo B và D.

## Khuyến nghị khi cần release từng phần

```text
main
├── feature/A  → PR → main
├── feature/B  → PR → main (sau)
├── feature/C  → PR → main
└── feature/D
```

Mỗi feature branch độc lập → review / CI / rollback rõ ràng hơn.

## Khi nào cherry-pick?

- **Ngắn hạn:** commit trên `dev` đã lẫn, cần lấy gấp vài commit sang `main` → xem [Scenario 09](../scenarios/09-selectively-merge-features/).
- **Dài hạn:** đừng phụ thuộc cherry-pick; tách feature branch từ đầu.

## `dev` vẫn hữu ích khi…

- Integration branch để QA gom nhiều feature trước release train.
- Nhưng vẫn nên giữ từng feature có thể tách (không squash lẫn không kiểm soát trên cùng một branch dài).
