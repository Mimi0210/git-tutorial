# Glossary

| Thuật ngữ | Nghĩa ngắn |
|-----------|------------|
| **HEAD** | Con trỏ tới commit (thường là tip của branch hiện tại) |
| **Working tree** | File đang thấy trên đĩa |
| **Index / staging** | Snapshot chuẩn bị cho commit tiếp theo |
| **Remote** | Bản sao trên server (`origin`) |
| **Fetch** | Tải commit remote về, không đổi working tree |
| **Pull** | Fetch + merge/rebase vào branch hiện tại |
| **Push** | Đẩy commit local lên remote |
| **Merge** | Gộp lịch sử, có thể tạo merge commit |
| **Rebase** | Đặt lại commit local lên tip mới (history tuyến tính hơn) |
| **Cherry-pick** | Áp dụng từng commit sang branch khác |
| **Revert** | Tạo commit mới đảo ngược một commit cũ |
| **Reset** | Di chuyển branch pointer (soft/mixed/hard) |
| **Amend** | Thay thế commit cuối (đổi hash) |
| **Conflict** | Cùng dòng/file bị hai bên sửa — cần resolve thủ công |
| **Force-with-lease** | Force push có kiểm tra remote chưa bị người khác đẩy thêm |
| **Default branch** | Branch mặc định trên hosting (thường `main`) |
| **PR / MR** | Pull Request / Merge Request — đề xuất merge + review |
