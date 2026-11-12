# NexusAI WorkRoom

Giao diện web thử nghiệm NexusAI WorkRoom — Multi-Agent OS v3.2.

## Demo
GitHub Pages (sau khi bật Pages bằng GitHub Actions):
https://chuthaihoang.github.io/NexusAI-WorkRoom/

## Chạy trên máy tính và điện thoại
Xem [README-HOSTING.md](README-HOSTING.md). Có thể chạy static preview bằng Node.js trên Windows và truy cập từ Android qua cùng Wi-Fi.

## Nội dung repository
- index.html — giao diện ứng dụng.
- styles.css — stylesheet bổ sung.
- server.js — máy chủ preview tĩnh, không phải backend ứng dụng.
- .github/workflows/deploy-pages.yml — tự động triển khai GitHub Pages.
- REVIEW_REPORT.md — đánh giá phạm vi và các giới hạn hiện tại.

## Lưu ý
Đây là prototype frontend. Các tác tử, token, Auto-Swap và nhiều chức năng quản trị vẫn có phần mô phỏng. Chưa có backend production, xác thực/RBAC thật, database, hoặc điều phối đa mô hình đầy đủ. Không nhập khóa API production.
