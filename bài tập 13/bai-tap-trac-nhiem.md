# Bộ Câu Hỏi Trắc Nghiệm CSS Cơ Bản

---

### Câu 1.1: CSS là viết tắt của các từ nào?

- A. Code Style Sheets
- **B. Cascading Style Sheets**
- C. Cascading Style Source
- D. Code Style Source

**Đáp án: B**

**Giải thích:** CSS là viết tắt của **Cascading Style Sheets** (Các bảng kiểu xếp lớp). Đây là ngôn ngữ được dùng để mô tả cách trình bày của tài liệu HTML hoặc XML, giúp tách biệt nội dung và định dạng của trang web[reference:0][reference:1].

---

### Câu 1.2: Quan sát đoạn mã `p { color: red; font-size: 54px; }`, theo thuật ngữ của CSS, phát biểu nào sau đây **không đúng**?

- A. `p` là bộ chọn (selector)
- B. Đoạn mã trên là một chỉ dẫn định dạng (style rule)
- C. `color` là thuộc tính (property)
- **D. Đoạn mã trên là một khai báo (declaration)**

**Đáp án: D**

**Giải thích:** Đoạn mã `p { color: red; font-size: 54px; }` là một **style rule** (quy tắc định dạng) hoàn chỉnh. Trong đó, `p` là selector, và mỗi cặp `property: value` (ví dụ: `color: red`) mới được gọi là một **declaration** (khai báo). Bản thân toàn bộ đoạn mã không phải là một khai báo đơn lẻ[reference:2][reference:3].

---

### Câu 1.3: Bạn có thể viết mã CSS ở đâu? Phát biểu nào sau đây **không đúng**?

- A. Viết ở trong phần tử HTML, sử dụng thuộc tính `style`
- B. Viết ở ngoài tài liệu HTML, trong tập tin `.css`, sử dụng phần tử `link` để liên kết
- **C. Viết ở trong tài liệu HTML, sử dụng phần tử `<script>`**
- D. Viết ở trong tài liệu HTML, sử dụng phần tử `<style>`

**Đáp án: C**

**Giải thích:** Phần tử `<script>` được sử dụng để nhúng hoặc liên kết mã JavaScript, không phải CSS. CSS có thể được viết theo ba cách: inline (thuộc tính `style`), internal (phần tử `<style>`), và external (tập tin `.css` liên kết qua phần tử `<link>`)[reference:4][reference:5][reference:6].

---

### Câu 1.4: Theo kĩ thuật xếp lớp (cascading) trong CSS, loại mã CSS nào có độ ưu tiên cao nhất?

- A. User agent style sheet
- B. User style sheet
- **C. Author style sheet**
- D. Cả ba có độ ưu tiên như nhau

**Đáp án: C**

**Giải thích:** Theo thứ tự ưu tiên của CSS cascade (từ thấp đến cao): **User agent** (mặc định của trình duyệt) < **User** (do người dùng cài đặt) < **Author** (do nhà phát triển viết). Do đó, author style sheet có độ ưu tiên cao nhất trong điều kiện bình thường (không có `!important`)[reference:7][reference:8][reference:9].

---

### Câu 1.5: Khi áp dụng đoạn mã CSS sau, văn bản `p` có màu gì?

```css
<style>
p { color: purple; }
p { color: green; }
p { color: gray; }
</style>
```
- A. Tím
- B. Xanh
- **C. Xám**
- D. Trắng

**Đáp án: C**

**Giải thích:** Trong CSS, khi có nhiều quy tắc cùng độ ưu tiên (cùng selector `p`), quy tắc nào được khai báo sau cùng sẽ được áp dụng. Ở đây, `color: gray` là khai báo cuối cùng nên văn bản sẽ có màu xám.

---

### Câu 1.6: Trong các phương pháp để định chuẩn CSS (normalize CSS, reset CSS), cách nào sau đây **không đúng**?

- A. Dùng tập tin `normalize.css`
- B. Dùng bộ mã reset CSS của Eric Meyer
- C. Dùng bộ mã định chuẩn CSS của Bootstrap
- **D. Dùng lệnh Reset của CSS**

**Đáp án: D**

**Giải thích:** CSS không có một lệnh tích hợp nào tên là "Reset". Việc định chuẩn CSS thường được thực hiện bằng cách sử dụng các tập tin CSS có sẵn (như `normalize.css`, bộ reset của Eric Meyer) hoặc các framework có sẵn tính năng này (như Bootstrap). Các phương pháp A, B, C đều là những cách tiếp cận hợp lệ.

---

### Câu 1.7: In CSS, the term _____ is used when talking about design and layout. The CSS ______ is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

- A. border
- B. cascading
- C. box mode
- **D. box model**

**Đáp án: D**

**Giải thích:** Thuật ngữ chính xác là **box model** (mô hình hộp). Trong CSS, mọi phần tử HTML đều được bao bọc trong một "hộp", và box model mô tả cấu trúc của hộp này bao gồm: content (nội dung), padding (đệm), border (viền), và margin (lề).

---

### Câu 1.8: Trong CSS, đơn vị đo nào sau đây **không phải** là đơn vị đo tương đối (relative)?

- A. `em`
- B. `rem`
- C. `%`
- **D. `px`**

**Đáp án: D**

**Giải thích:** `px` (pixel) là một **đơn vị đo tuyệt đối** (absolute unit) vì kích thước của nó không thay đổi dựa trên các thuộc tính khác của phần tử hay phần tử cha. Trong khi đó, `em`, `rem`, và `%` đều là các đơn vị đo tương đối, thay đổi giá trị dựa trên ngữ cảnh (ví dụ: kích thước font chữ của phần tử hoặc của phần tử gốc).