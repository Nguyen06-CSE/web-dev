# Giải Chi Tiết Câu Hỏi Trắc Nghiệm (Mục 16.7)

### Câu 16a
> *A webform, web form or HTML form on a web page allows a user to \_\_\_\_\_ that is sent to a server for processing.*

* **Đáp án đúng:** **D. `enter data`**
* **Giải thích:** Biểu mẫu web (HTML form) cho phép người dùng nhập dữ liệu (`enter data`) để gửi về máy chủ (server) xử lý.

---

### Câu 16b
> *Trong quá trình mua hàng online, để người mua hàng lựa chọn hình thức thanh toán (trả tiền mặt khi nhận hàng, chuyển khoản, MoMo...v.v), sử dụng control nào là hợp lý nhất?*

* **Đáp án đúng:** **B. `Radio`**
* **Giải thích:** Tại một thời điểm thanh toán, khách hàng chỉ chọn duy nhất **một** phương thức thanh toán trong danh sách các lựa chọn loại trừ lẫn nhau, nên nút chọn đơn (`<input type="radio">`) là phù hợp nhất.

---

### Câu 16c
> *Khi muốn lấy ý kiến đánh giá, bình luận về một sản phẩm từ người mua hàng, sử dụng control nào là hợp lý nhất?*

* **Đáp án đúng:** **D. `Textarea`**
* **Giải thích:** Ý kiến đánh giá, bình luận thường có nội dung dài và nhiều dòng, do đó vùng nhập văn bản đa dòng (`<textarea>`) là lựa chọn hợp lý nhất.

---

### Câu 16d
> *Khi làm việc với form, để không bị chuyển trang khi bấm nút submit, bạn có thể thiết lập giá trị cho action là:*

* **Đáp án đúng:** **B. `#`**
* **Giải thích:** Gán `action="#"` sẽ trỏ form về chính vị trí trang hiện tại thay vì điều hướng sang một URL trang khác khi nhấn submit.

---

### Câu 16e
> *Trong form có chứa control `<input type="password" name="mat-khau" maxlength="8" id="form-mat-khau">`. Vậy, khi gửi form này về web server, mật khẩu của người dùng sẽ chứa trong thuộc tính nào?*

* **Đáp án đúng:** **B. `name`**
* **Giải thích:** Khi gửi dữ liệu form lên server, trình duyệt đóng gói dữ liệu theo cặp `name=value` (ở đây là `mat-khau=<giá-trị-nhập>`). Thuộc tính `id` chỉ dùng cho phía client (CSS, JS, `label`).

---

### Câu 16f
> *Phần tử fieldset được sử dụng để nhóm các control có liên quan đến nhau, để chú thích cho nhóm các control này sử dụng phần tử legend.*

* **Đáp án đúng:** *(Câu khẳng định đúng trong đề bài; nếu xét bộ 4 phương án A, B, C, D tương ứng với phần tử nhóm các control thì chọn **D. `fieldset`**).*
* **Giải thích:** `<fieldset>` tạo khung nhóm các trường nhập liệu liên quan, còn `<legend>` đặt tiêu đề chú thích cho khung `<fieldset>` đó.