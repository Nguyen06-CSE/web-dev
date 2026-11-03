# Bài tập 2b: Sử dụng toán tử `typeof`, điền kết quả vào bảng sau, giải thích kết quả

## Đề bài và Bảng kết quả

| Dữ liệu (Value) | Kiểu dữ liệu (`typeof`) | Giải thích chi tiết |
| :--- | :--- | :--- |
| **`null`** | `"object"` | Đây là một lỗi lịch sử (bug) kinh điển từ phiên bản đầu tiên của JavaScript (năm 1995) và được giữ lại để đảm bảo tính tương thích ngược cho các hệ thống web cũ. Mặc dù `null` là một kiểu dữ liệu nguyên thủy (primitive type) biểu thị giá trị rỗng/không tồn tại đối tượng, nhưng toán tử `typeof null` lại trả về `"object"`. |
| **`undefined`** | `"undefined"` | Đại diện cho một biến đã được khai báo nhưng chưa được khởi tạo hay gán giá trị, hoặc truy cập vào thuộc tính không tồn tại của đối tượng. Khi kiểm tra bằng `typeof`, JavaScript trả về chính xác chuỗi `"undefined"`. |
| **`0`** | `"number"` | Số `0` thuộc kiểu dữ liệu số (`number`). Trong JavaScript, tất cả các số (số nguyên, số thực dấu phẩy động, số âm, số 0) đều được biểu diễn theo chuẩn IEEE 754 và có chung kiểu dữ liệu là `"number"`. |
| **`True`** *(chữ T viết hoa)* | `"undefined"` *(hoặc báo lỗi biến chưa khai báo)* | JavaScript là ngôn ngữ phân biệt chữ hoa và chữ thường (**case-sensitive**). Giá trị boolean đúng chuẩn phải viết thường là `true`. Khi viết `True` (viết hoa chữ T), JavaScript sẽ hiểu đây là một tên biến/định danh. Nếu biến này chưa từng được khai báo trước đó, `typeof True` trả về `"undefined"` (nếu truy cập trực tiếp `True` mà không dùng `typeof` sẽ ném ra lỗi `ReferenceError: True is not defined`). |
| **`true`** *(chữ t viết thường)* | `"boolean"` | `true` và `false` là hai giá trị duy nhất thuộc kiểu dữ liệu luận lý (Boolean) trong JavaScript. Do đó `typeof true` trả về `"boolean"`. |
| **`'True'`** | `"string"` | Bất kỳ dữ liệu nào được đặt bên trong cặp dấu nháy đơn (`'...'`), nháy kép (`"..."`) hoặc template literals (`` `...` ``) đều được JavaScript nhận diện là kiểu chuỗi ký tự (`string`). |
| **`1e5`** | `"number"` | `1e5` là cách viết số theo ký hiệu khoa học (scientific notation), tương đương với $1 \times 10^5 = 100000$. Đây là một giá trị số hợp lệ nên kiểu dữ liệu trả về là `"number"`. |

---

## Kiểm chứng bằng mã JavaScript

```javascript
console.log('typeof null:      ', typeof null);       // "object"
console.log('typeof undefined: ', typeof undefined);  // "undefined"
console.log('typeof 0:         ', typeof 0);          // "number"
console.log('typeof True:      ', typeof True);       // "undefined"
console.log('typeof true:      ', typeof true);       // "boolean"
console.log("typeof 'True':    ", typeof 'True');     // "string"
console.log('typeof 1e5:       ', typeof 1e5);        // "number"
```
