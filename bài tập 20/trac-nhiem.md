## Phần 2.1.5 (Bài CSS 5 & 6)

1. **Câu 1: B (Verdana)** — Trình duyệt ưu tiên tìm phông chữ từ trái sang phải trong danh sách khai báo.
2. **Câu 2: A (`serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`)** — Đây là 5 họ phông (generic font families) chuẩn của CSS (`arial`, `roboto` là tên phông cụ thể; `font-family` là tên thuộc tính).
3. **Câu 3: D (OOF)** — Không tồn tại định dạng phông OOF (các định dạng chuẩn gồm OTF, TTF, WOFF, WOFF2, EOT, SVG).
4. **Câu 4: D (Máy tính của lập trình viên)** — Trình duyệt chạy phía client nên chỉ lấy được phông từ máy người dùng, server dịch vụ (như Google Fonts) hoặc thư mục của website.

## Phần 2.2.9 (Bài CSS 7)

1. **Câu 1: B (`rem`)** — Root em được định nghĩa dựa trên kích thước phông chữ của phần tử gốc (`:root` hoặc `html`).
2. **Câu 2: D (`h1 { font-size: 1.5 em; }`)** — Sai cú pháp vì có khoảng trắng giữa giá trị số `1.5` và đơn vị đo `em`.
3. **Câu 3: B (`font-style`)** — Dùng để chỉnh chữ nghiêng (`italic` / `oblique`).
4. **Câu 4: B (21)** — `html` có cỡ mặc định `100% = 16px` → `article` có cỡ `0.875 * 16 = 14px` → `h1` kế thừa từ `article` nên có cỡ `1.5 * 14 = 21px`.