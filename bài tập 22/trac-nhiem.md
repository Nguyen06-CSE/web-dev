## III. Đáp án Câu hỏi ôn tập (Mục 3.1.6)

1. **Câu 1: D (Đỏ)** — Trong `rgb(255, 0, 0)`, kênh màu đỏ (Red) đạt giá trị tối đa là `255`, hai kênh Green và Blue bằng `0`.

2. **Câu 2: B (`p { color: rgba(255, 0, 255, .5); }`)** — Cú pháp chuẩn: 3 kênh RGB nằm trong `[0, 255]` và kênh alpha `.5` (`0.5`) nằm trong `[0, 1]`. (A sai vì mã Hex không có ký tự `G`; C sai vì hàm `rgb` không nhận 4 tham số và `256` vượt quá `255`; D sai vì `256` vượt quá `255`).

3. **Câu 3: B (`p { color: rgba(255, 0, 255, 2); }`)** — Không hợp lệ vì giá trị kênh alpha (`a`) chỉ nhận số thực trong khoảng từ `0` đến `1`, giá trị `2` vượt ngoài phạm vi cho phép.

4. **Câu 4: C (`content-box`)** — Thuộc tính `background-clip: content-box` cắt vùng hiển thị màu nền chỉ nằm gọn trong phần nội dung của phần tử.