### Câu 1. Trong JavaScript, đoạn mã này: `const case = 'dung tu khoa dat ten bien';` bị lỗi gì?

- A. Dấu gán phải là `:=`
- B. Thừa dấu chấm phẩy (;) ở cuối câu lệnh
- C. Phải bao một chuỗi bằng dấu nháy kép ("")
- **D. Dùng từ khóa để đặt tên biến**

**Đáp án: D**

**Giải thích:** Trong JavaScript, `case` là một từ khóa dành riêng (reserved keyword) được dùng trong câu lệnh điều kiện rẽ nhánh `switch...case`. Ngôn ngữ JavaScript quy định không được phép sử dụng các từ khóa dành riêng để đặt tên biến, hàm hay định danh. Nếu sử dụng, trình thông dịch sẽ báo lỗi cú pháp (`SyntaxError: Unexpected token 'case'`).

---

### Câu 2. Trong JavaScript, dòng mã sau sẽ xuất gì ra màn hình? `typeof(3.1415);`

- A. PI
- **B. Number**
- C. Double
- D. Integer

**Đáp án: B**

**Giải thích:** Toán tử `typeof` dùng để xác định kiểu dữ liệu của một giá trị hoặc biểu thức. Trong JavaScript, không phân chia kiểu số nguyên (Integer) hay số thực (Double/Float) riêng biệt như trong C/C++ hay Java, mà tất cả các giá trị số (nguyên, thực, âm, dương, số thập phân `3.1415`) đều thuộc chung kiểu dữ liệu là `number` (hoặc `Number`).

---

### Câu 3. Khi lập trình, có nhiều cách để viết tên các biến, ví dụ một biến có tên là `fullName` thì nó được viết theo phong cách gì?

- A. PascalCase
- B. snake_case
- **C. camelCase**
- D. kebab-case

**Đáp án: C**

**Giải thích:** Phong cách **camelCase** (kiểu lạc đà) bắt đầu bằng chữ cái thường ở từ đầu tiên, các từ tiếp theo được viết hoa chữ cái đầu và viết liền không dấu cách (ví dụ: `fullName`, `userName`, `totalPrice`). Đây là quy ước đặt tên biến và hàm tiêu chuẩn trong JavaScript.
- `PascalCase`: Viết hoa chữ cái đầu của tất cả các từ (ví dụ: `FullName`) - thường dùng cho Class/Constructor.
- `snake_case`: Các từ viết thường và nối bằng dấu gạch dưới (ví dụ: `full_name`) - phổ biến trong Python, PHP.
- `kebab-case`: Các từ viết thường và nối bằng dấu gạch ngang (ví dụ: `full-name`) - dùng trong CSS, URL, không dùng được làm tên biến trong JS.

---

### Câu 4. Trong JavaScript, tên biến nào sau đây bị lỗi?

- **A. `var full-name = 'nguyen van teo';`**
- B. `var full_name = 'nguyen van teo';`
- C. `var full4Name = 'nguyen van teo';`
- D. `var $fullName = 'nguyen van teo';`

**Đáp án: A**

**Giải thích:** Tên biến trong JavaScript không được phép chứa ký tự gạch ngang (`-`) vì trình thông dịch JavaScript sẽ hiểu nhầm đó là toán tử trừ (phép trừ số học). Tên biến chỉ được phép chứa chữ cái, chữ số, ký tự gạch dưới `_` và ký tự `$`, đồng thời không được bắt đầu bằng chữ số.
- Đáp án A sai cú pháp (`SyntaxError`).
- Đáp án B, C, D đều là các tên biến hoàn toàn hợp lệ trong JavaScript.
