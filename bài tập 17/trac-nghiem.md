# Giải Chi Tiết Câu Hỏi Trắc Nghiệm (Mục 10.3)

### Câu hỏi 10a
> *The content inside the \_\_\_\_\_\_ element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.*

* **Đáp án đúng:** **A. `main`**
* **Giải thích:** Thẻ `<main>` đại diện cho phần nội dung chính, duy nhất của một trang tài liệu HTML. Các thành phần lặp lại xuyên suốt nhiều trang của website như thanh điều hướng (`nav`), logo, thanh bên (`aside`), bản quyền (`footer`) không được đặt bên trong `<main>`.

---

### Câu hỏi 10b
> *The \_\_\_\_\_\_ element represents a container for introductory content or a set of navigational links.*

* **Đáp án đúng:** **C. `header`**
* **Giải thích:** Thẻ `<header>` dùng để chứa nội dung giới thiệu mở đầu (tiêu đề, logo, tác giả, ngày đăng) hoặc nhóm liên kết điều hướng của toàn trang hay của một vùng (`section`/`article`). *(Lưu ý phân biệt với `<head>` chỉ chứa siêu dữ liệu metadata không hiển thị lên giao diện trang web).*

---

### Câu hỏi 10c
> *The \_\_\_\_\_\_\_ element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).*

* **Đáp án đúng:** **D. `article`**
* **Giải thích:** Thẻ `<article>` bao bọc một khối nội dung độc lập, trọn vẹn về mặt ý nghĩa (như một bài báo, bài đăng blog, bình luận người dùng) có thể tách rời để phân phối hoặc tái sử dụng ở nơi khác.

---

### Câu hỏi 10d
> *The \_\_\_\_\_\_ element identifies content that is separate from, but tangentially related to, the surrounding content. In print, its equivalent is a sidebar, but it couldn’t be called “sidebar” because putting something on the “side” is a presentational description, not semantic.*

* **Đáp án đúng:** **B. `aside`**
* **Giải thích:** Thẻ `<aside>` xác định phần thông tin bổ trợ có liên quan gián tiếp đến nội dung chính (như trích dẫn, danh sách liên kết tham khảo, hộp thông tin phụ). HTML5 đặt tên là `aside` thay vì `sidebar` để nhấn mạnh vai trò ngữ nghĩa bổ trợ thay vì quy định vị trí hiển thị trái/phải.

---

### Câu hỏi 10e
> *The \_\_\_\_\_\_ element is used to create an area for contact information for the author or maintainer of the document. It is generally placed at the end of the document or in a section or article within a document.*

* **Đáp án đúng:** **D. `address`**
* **Giải thích:** Thẻ `<address>` chuyên dùng để chứa thông tin liên hệ (email, trang cá nhân, liên kết mạng xã hội, thông tin nhà xuất bản) của tác giả hoặc người quản trị tài liệu/bài viết, thường được đặt bên trong thẻ `<footer>`.