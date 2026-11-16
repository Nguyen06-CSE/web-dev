## III. Đáp án Câu hỏi ôn tập (Mục 2.3.7)

1. **Câu 1:** *(Lưu ý: đề bài bị thiếu dấu phẩy ở các đáp án)*

   Theo lý thuyết mục 2.3.1, để chọn mọi phần tử `div` và `h1` (bộ chọn gộp), cú pháp chuẩn phải là `div, h1 { color: red; }` (dùng dấu phẩy `,`).

   Nếu bắt buộc chọn trong 4 phương án A, B, C, D của đề: không có đáp án nào chọn mọi `div` và `h1` độc lập (`>` chọn con trực tiếp, `~` chọn em cùng cấp, khoảng trắng chọn hậu duệ, `+` chọn em liền kề). Khi làm trắc nghiệm trên lớp, bạn có thể lưu ý điểm này với giảng viên; còn gần nhất về ngữ nghĩa bao hàm trong danh sách là **C** (nhưng thực chất C chỉ chọn `h1` nằm trong `div`).

2. **Câu 2: B (`div.intro { color: red; }`)** — Viết liền không khoảng trắng thể hiện bộ chọn hỗn hợp: vừa là thẻ `div`, vừa mang thuộc tính `class="intro"`. (Đáp án C `div .intro` là chọn phần tử mang class `intro` nằm bên trong `div`).

3. **Câu 3: D (`div#intro { color: red; }`)** — Tương tự câu 2, viết liền không khoảng trắng để chỉ phần tử `div` có thuộc tính `id="intro"`.

4. **Câu 4: C (3)** — Bộ chọn (3) `p.intro` có điểm Specificity là `[0][1][1]` (có 1 class), cao hơn (2) `blockquote p` (`[0][0][2]`) và (1) `p` (`[0][0][1]`).

5. **Câu 5: A (`p::first-line { color: red; }`)** — Sử dụng phần tử giả (pseudo-element) `::first-line` với hai dấu hai chấm để nhắm vào dòng đầu tiên của đoạn văn.