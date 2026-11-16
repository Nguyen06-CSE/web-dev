## III. Đáp án Câu hỏi ôn tập (Mục 3.2.6)

1. **Câu 1: B (pseudo-class)** — Chọn các phần tử đang ở một trạng thái cụ thể (như phần tử đầu tiên `:first-child`, hoặc đang được rê chuột vào `:hover`).

2. **Câu 2: D (pseudo-element)** — Áp dụng định dạng cho một phần cụ thể của nội dung tài liệu mà không có thẻ HTML tường minh bao bọc (như `::first-line`, `::first-letter`).

3. **Câu 3: B (`img[title~="con"] {border: 3px solid;}`)** — Toán tử `~=` khớp các phần tử có thuộc tính chứa từ độc lập `"con"` (ngăn cách bởi dấu cách), do đó chọn đúng cả `"con gà"` và `"vịt con"`.

4. **Câu 4: A (`img[title] {border: 3px solid;}`)** — Đặt tên thuộc tính trong cặp dấu ngoặc vuông `[title]` sẽ chọn mọi thẻ `<img>` có khai báo thuộc tính `title` bất kể giá trị bên trong là gì.