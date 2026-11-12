# NexusAI WorkRoom - Multi-Agent OS v3.2 (Source Code Package for Claude)

Gói mã nguồn gốc hoàn chỉnh để đưa vào Claude / Claude Code viết lại hoặc nâng cấp:

1. `index.html`: Toàn bộ mã nguồn ứng dụng Single-File Web App hoạt động độc lập (HTML5 + Tailwind CSS + Vanilla JS Engine).
2. `app.js`: Mã nguồn JavaScript cốt lõi được tách riêng (chứa toàn bộ STATE, thuật toán điều phối Mức độ -> Deadline, Auto-Swap Model tiết kiệm token, Auto-Recruitment & RBAC, QA 3-Testcases Gate, Unified Smart Ingestion Space và cổng kết nối Ollama Cloud/Local API `https://ollama.com/api/chat`).
3. `styles.css`: Các quy tắc CSS tùy chỉnh, glassmorphism, hiệu ứng xung nhịp agent và tối ưu hóa cảm ứng đa thiết bị (Mobile/Tablet/Desktop).
4. `tailwind.config.js`: Cấu hình hệ màu và typography cho Tailwind CSS.
5. `CLAUDE_NODE_CASE_SPEC.md`: Tài liệu đặc tả kiến trúc & Prompt hướng dẫn chi tiết từng Node Case để giao cho Claude thực thi.