# Câu hỏi trắc nghiệm - Bài tập 9 (HTML Hiển thị văn bản)

Tài liệu câu hỏi ôn tập theo bài học: **HTML (6) - Hiển thị văn bản (Lê Gia Công - Blog Langbiang)**.

---

### Câu 9a. Trong HTML, chữ "hr" trong phần tử `hr` là viết tắt của chữ nào?

- A. Horizontal Ruler
- B. Header
- C. Heading ruler
- **D. Horizontal Rule**

**Đáp án: D**

**Giải thích:**
- Trong HTML, thẻ `<hr>` là viết tắt của **Horizontal Rule** (đường kẻ ngang).
- Phần tử này được sử dụng để thể hiện sự ngắt quãng chuyên đề hoặc phân tách giữa hai chủ đề, ý tưởng khác nhau trong nội dung của tài liệu HTML.
- Lưu ý rằng nếu bạn chỉ muốn vẽ một đường kẻ ngang trang trí đơn thuần thì nên dùng thuộc tính `border` trong CSS, còn `<hr>` mang ý nghĩa ngữ nghĩa (semantic break) giữa các đoạn nội dung.

---

### Câu 9b. Trong HTML, chữ “pre” trong phần tử `pre` là viết tắt của chữ nào?

- A. Preferred text
- **B. Preformatted text**
- C. Previous text
- D. Part reference

**Đáp án: B**

**Giải thích:**
- `<pre>` là viết tắt của **Preformatted text** (văn bản được định dạng sẵn).
- Khi hiển thị HTML thông thường với thẻ `<p>`, trình duyệt sẽ tự động gom các khoảng trắng liên tiếp và bỏ qua các ký tự xuống dòng (`\n`).
- Khi sử dụng phần tử `<pre>`, trình duyệt sẽ hiển thị văn bản chính xác như cấu trúc trong mã nguồn (giữ nguyên mọi khoảng trắng, dấu tab và ký tự xuống dòng), đồng thời mặc định dùng phông chữ đơn cách (monospace). Phần tử này thường dùng cho thơ ca, văn bản nghệ thuật ASCII hoặc các khối mã lập trình.

---

### Câu 9c. Trong HTML, chữ ‘dl” trong phần tử `dl` là viết tắt của chữ nào?

- A. Document list
- B. Data list
- **C. Description list**
- D. Data link

**Đáp án: C**

**Giải thích:**
- `<dl>` là viết tắt của **Description list** (danh sách mô tả - trong tiêu chuẩn HTML4 trước đây còn gọi là *Definition list*).
- Danh sách này dùng để biểu diễn các cặp *tên/giá trị* (name/value pair), gồm có:
  - `<dt>`: **Description term** (thuật ngữ/tên mục cần mô tả).
  - `<dd>`: **Description description** hoặc **Definition description** (nội dung định nghĩa, mô tả cho thuật ngữ).

---

### Câu 9d. Trong HTML, chữ ‘ul” trong phần tử `ul` là viết tắt của chữ nào?

- **A. unordered list**
- B. unorder list
- C. unordered line
- D. under list

**Đáp án: A**

**Giải thích:**
- `<ul>` là viết tắt của **unordered list** (danh sách không có thứ tự).
- Danh sách này được dùng khi thứ tự xuất hiện của các mục con không làm thay đổi bản chất ý nghĩa của thông tin (ví dụ: danh sách thực phẩm cần mua, danh mục tính năng, các nút trong menu...).
- Trình duyệt mặc định hiển thị mỗi mục `<li>` kèm dấu đầu dòng (bullet điểm tròn).

---

### Câu 9e. Trong HTML, chữ ‘ol” trong phần tử `ol` là viết tắt của chữ nào?

- A. over list
- B. over line
- **C. ordered list**
- D. order list

**Đáp án: C**

**Giải thích:**
- `<ol>` là viết tắt của **ordered list** (danh sách có thứ tự).
- Danh sách này dùng khi các mục có thứ tự tuần tự quan trọng (ví dụ: các bước hướng dẫn công thức nấu ăn, các giai đoạn thực hiện dự án...).
- Trình duyệt sẽ tự động đánh số thứ tự (1, 2, 3...) hoặc ký tự (A, B, C... / I, II, III...) phía trước mỗi mục con `<li>`, đồng thời có thể tùy biến giá trị bắt đầu bằng thuộc tính `start` và định dạng chữ/số bằng thuộc tính `type`.
