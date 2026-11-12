# NexusAI WorkRoom — Chạy thử trên Windows và Android

## 1. Chạy trực tuyến bằng GitHub Pages
Sau khi bật Pages cho repository:
- Mở Settings → Pages.
- Trong Build and deployment, chọn Source = GitHub Actions.
- Workflow tại .github/workflows/deploy-pages.yml sẽ tự triển khai mỗi khi push lên main.
- URL dự kiến: https://chuthaihoang.github.io/NexusAI-WorkRoom/

GitHub Pages chỉ phục vụ HTML/CSS/JavaScript tĩnh. Nó không chạy server.js hoặc backend Node.js.

## 2. Chạy qua Wi-Fi (có Node.js backend tĩnh)
Yêu cầu Windows 10/11 và Node.js LTS. Không cần npm install.
1. Tải ZIP từ nút Code → Download ZIP rồi giải nén.
2. Nhấp đúp start-host.bat.
3. Trên máy tính mở http://localhost:4173.
4. Điện thoại và máy tính cùng Wi-Fi; mở URL Same Wi-Fi/LAN được in trong cửa sổ terminal, ví dụ http://192.168.1.10:4173.
5. Giữ cửa sổ terminal mở. Ctrl+C để dừng.
6. Nếu Windows Firewall hỏi, chỉ cho phép trên mạng Private tin cậy.

## 3. Giới hạn
Đây là static preview, không phải backend production. Chưa có API proxy Ollama, xác thực/RBAC an toàn, database hoặc lưu trữ bền vững. Không nhập API key production. CDN/Google Fonts cần Internet. Không mở cổng 4173 trực tiếp ra Internet.
