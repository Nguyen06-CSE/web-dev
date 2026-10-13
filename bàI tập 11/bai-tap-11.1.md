## 1. Tính tương thích với hệ điều hành

Visual Studio Code (VS Code) là trình soạn thảo mã nguồn đa nền tảng, tương thích hoàn toàn với:

* **Windows:** Windows 10, 11 (hỗ trợ cả kiến trúc 64-bit và ARM).
* **macOS:** macOS 10.15+ (chạy mượt mà trên cả chip Intel và Apple Silicon M1/M2/M3/M4 qua bản Universal build).
* **Linux:** Hỗ trợ hầu hết các phân phối phổ biến (Debian, Ubuntu, Fedora, Red Hat, SUSE, Arch Linux) thông qua các định dạng đóng gói `.deb`, `.rpm`, Snap và Flatpak.

---

## 2. Ngôn ngữ lập trình hỗ trợ

* **Tích hợp sẵn (Built-in):** JavaScript, TypeScript, HTML, CSS, JSON, Markdown, Less, Sass.
* **Hỗ trợ qua Extensions:** Hầu như tất cả các ngôn ngữ lập trình hiện hành đều có thể chạy trên VS Code bằng cách cài extension tương ứng, bao gồm Python, C/C++, Java, C#, PHP, Go, Rust, Ruby, Dart/Flutter, Swift, SQL, R, Shell Script...

---

## 3. Bản quyền và Chi phí

* **Chi phí:** Hoàn toàn **Miễn phí** (Free).
* **Mã nguồn:** Mã nguồn của VS Code được phát triển mở (Open Source - dự án `vscode` trên GitHub), còn bản cài đặt chính thức phân phối bởi Microsoft được phát hành dưới giấy phép bản quyền phần mềm miễn phí của Microsoft.

---

## 4. Cách tải và cài đặt

1. Truy cập trang chủ chính thức: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Trang web sẽ tự động nhận diện hệ điều hành của bạn. Nhấn nút **Download** (hoặc chọn phiên bản phù hợp với OS của bạn).
3. Thao tác cài đặt:
   * **Windows:** Mở file `.exe`, bấm *Next*, nên tích chọn các dòng *"Add 'Open with Code' action to Windows Explorer context menu"* và *"Add to PATH"*, sau đó bấm *Install*.
   * **macOS:** Giải nén file `.zip` tải về và kéo biểu tượng Visual Studio Code vào thư mục `Applications`.
   * **Linux:** Mở file `.deb` hoặc `.rpm` để cài đặt qua Software Center hoặc dùng dòng lệnh terminal (ví dụ: `sudo dpkg -i <filename>.deb`).

---

## 5. Các thành phần giao diện người dùng (UI)

* **Activity Bar (Thanh hoạt động - ngoài cùng bên trái):**
  * **Explorer (`Ctrl + Shift + E`):** Quản lý tập tin và thư mục dự án.
  * **Search (`Ctrl + Shift + F`):** Tìm kiếm và thay thế chuỗi ký tự trên toàn bộ dự án.
  * **Source Control (`Ctrl + Shift + G`):** Quản lý phiên bản mã nguồn với Git.
  * **Run and Debug (`Ctrl + Shift + D`):** Khởi chạy và gỡ lỗi chương trình.
  * **Extensions (`Ctrl + Shift + X`):** Quản lý các tiện ích mở rộng.
* **Sidebar (Thanh bên):** Hiển thị chi tiết nội dung tương ứng với chức năng đang chọn ở Activity Bar.
* **Editor Group (Khu vực soạn thảo):** Nơi hiển thị mã nguồn để chỉnh sửa. Có thể chia nhỏ màn hình thành nhiều cột/dòng.
* **Panel (Bảng điều khiển bên dưới):** Chứa các tab **Terminal** (Dòng lệnh tích hợp), **Output** (Đầu ra hệ thống), **Debug Console** (Nhật ký gỡ lỗi), và **Problems** (Hiển thị lỗi mã nguồn).
* **Status Bar (Thanh trạng thái - dưới cùng):** Hiển thị nhánh Git hiện tại, vị trí con trỏ (dòng/cột), bảng mã (UTF-8), ngôn ngữ lập trình của file đang mở...

---

## 6. Cài đặt và chọn tông màu giao diện (Theme)

1. **Thay đổi Theme mặc định:**
   * Nhấn `Ctrl + K` sau đó nhấn `Ctrl + T` (hoặc `Cmd + K` `Cmd + T` trên macOS).
   * Dùng phím mũi tên Lên/Xuống để xem trước các giao diện và nhấn `Enter` để chọn.

2. **Cài đặt Theme mới từ Chợ tiện ích:**
   * Vào phần **Extensions** (`Ctrl + Shift + X`), gõ từ khóa `theme`.
   * Một số Theme phổ biến và đẹp mắt: **One Dark Pro**, **Dracula Official**, **Tokyo Night**, **GitHub Theme**.
   * Nhấn **Install** tại theme ưng ý, hệ thống sẽ tự động áp dụng ngay.

---

## 7. Thao tác với thư mục và tập tin

* **Mở thư mục dự án:** `File` → `Open Folder...` (hoặc dùng tổ hợp phím `Ctrl + K` `Ctrl + O`).
* **Tạo File/Folder mới:** Trong thanh *Explorer*, nhấn vào biểu tượng **New File...** hoặc **New Folder...**.
* **Tìm và mở nhanh tập tin (Quick Open):** Nhấn `Ctrl + P` (hoặc `Cmd + P`), gõ tên file cần tìm và nhấn `Enter`.
* **Đóng tất cả các tab đang mở:** `Ctrl + K` `W`.

---

## 8. Định dạng mã nguồn tự động (Auto Formatting)

* **Định dạng thủ công:** Nhấn `Shift + Alt + F` (Windows/Linux) hoặc `Option + Shift + F` (macOS).
* **Định dạng tự động khi lưu (Format on Save):**
  1. Nhấn `Ctrl + ,` (hoặc `Cmd + ,`) để mở cài đặt **Settings**.
  2. Gõ vào ô tìm kiếm: `Format On Save`.
  3. Tích chọn ô **Editor: Format On Save**.
* **Trình định dạng khuyến nghị:** Cài extension **Prettier - Code formatter** để định dạng chuẩn cho HTML, CSS, JavaScript, JSON, v.v.

---

## 9. Sử dụng gợi ý viết mã (IntelliSense)

* **Bật danh sách gợi ý:** Gợi ý sẽ tự động xuất hiện khi gõ. Nếu bị ẩn, nhấn `Ctrl + Space` để mở lại.
* **Xem tài liệu nhanh:** Rê chuột lên tên hàm, lớp hoặc biến để xem kiểu dữ liệu và mô tả.
* **Chuyển đến nơi khai báo (Go to Definition):** Nhấn phím `F12` hoặc giữ `Ctrl` + click chuột vào tên hàm/biến.
* **Xem trước nơi khai báo:** Nhấn `Alt + F12`.

---

## 10. Gõ bàn phím bằng 10 ngón tay (Touch Typing)

* **Vị trí đặt tay chuẩn:**
  * 2 ngón trỏ đặt lên phím có gờ nổi: ngón trỏ trái đặt vào phím **F**, ngón trỏ phải đặt vào phím **J**.
  * Các ngón còn lại rải đều trên hàng phím cơ sở (Home Row): tay trái đặt lên **A - S - D - F**, tay phải đặt lên **J - K - L - ;**.
  * Ngón cái dùng để bấm phím **Spacebar** (Khoảng trắng).
* **Website thực hành đề xuất:**
  * [Keybr.com](https://www.keybr.com/): Học gõ từng phím dựa trên thuật toán thông minh.
  * [Typing.com](https://www.typing.com/): Bài tập từ cơ bản đến nâng cao.
  * [Monkeytype.com](https://monkeytype.com/): Luyện tập tốc độ gõ bài viết và gõ code chuyên nghiệp.

---

## 11. Dịch và chạy mã nguồn (Compile & Run)

* **Cách 1: Sử dụng Terminal tích hợp**
  1. Mở Terminal bằng phím tắt `Ctrl + ~` (hoặc ``Ctrl + ` ``).
  2. Chạy lệnh biên dịch/thực thi tương ứng:
     * **Python:** `python filename.py`
     * **C++ (dùng g++):** `g++ main.cpp -o main` rồi gõ `./main` (Linux/Mac) hoặc `main.exe` (Windows).
     * **Node.js:** `node index.js`

* **Cách 2: Sử dụng Extension Code Runner**
  1. Cài extension **Code Runner**.
  2. Mở file mã nguồn và nhấn nút **Play** (Góc trên cùng bên phải) hoặc bấm phím tắt `Ctrl + Alt + N` để chạy mã nguồn ngay lập tức.

---

## 12. Tìm, cài đặt và gỡ bỏ Extensions

1. Mở giao diện quản lý Extension: Nhấn `Ctrl + Shift + X`.
2. **Tìm kiếm:** Gõ tên extension hoặc từ khóa chức năng vào ô tìm kiếm.
3. **Cài đặt:** Nhấn nút **Install**.
4. **Vô hiệu hóa hoặc Gỡ bỏ:** Nhấn vào extension đã cài, chọn **Disable** (tạm tắt) hoặc **Uninstall** (gỡ bỏ hoàn toàn).
5. **Các Extension nên cài đặt ngay:**
   * **Prettier**: Định dạng code tự động.
   * **Live Server**: Tạo local server tự động cập nhật khi sửa file HTML/CSS.
   * **Code Runner**: Chạy nhanh nhiều ngôn ngữ lập trình.
   * **GitLens**: Xem chi tiết lịch sử commit từng dòng code.
   * **Auto Rename Tag**: Tự động đổi tên tag mở/đóng trong HTML/XML.

---

## 13. Kỹ năng soạn thảo mã nguồn nhanh

### Thao tác đa con trỏ (Multi-cursor Editing)

* **Thêm con trỏ tùy ý:** Giữ phím `Alt` (hoặc `Option` trên Mac) và click chuột vào các vị trí mong muốn.
* **Tạo con trỏ theo cột (dọc):** Nhấn `Ctrl + Alt + Up/Down` (hoặc `Cmd + Option + Up/Down`).
* **Chọn từ giống nhau tiếp theo:** Bôi đen 1 từ rồi nhấn `Ctrl + D` (hoặc `Cmd + D`) để chọn lần lượt từng từ trùng lặp và sửa hàng loạt.
* **Chọn tất cả các từ giống nhau cùng lúc:** Nhấn `Ctrl + Shift + L`.

### Sinh văn bản ngẫu nhiên (Lorem Ipsum)

* Trong file HTML/Markdown, gõ `lorem` rồi nhấn `Tab` hoặc `Enter` để tạo đoạn văn mẫu.
* Tạo số lượng từ tùy chỉnh: Gõ `lorem10` (tạo 10 từ), `lorem50` (tạo 50 từ) rồi nhấn `Tab`.

### Gõ tắt HTML/CSS với Emmet (Tích hợp sẵn)

* **Khung HTML5 chuẩn:** Mở file `.html`, gõ `!` rồi nhấn `Tab`.
* **Tạo thẻ có Class/ID:**
  * Gõ `div.container` → `<div class="container"></div>`
  * Gõ `h1#title` → `<h1 id="title"></h1>`
* **Tạo cấu trúc thẻ lồng nhau và nhân bản:**
  * Gõ `ul>li*3` rồi bấm `Tab`, kết quả sinh ra:

~~~html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
~~~

### Thao tác dòng nhanh

* **Di chuyển dòng hiện tại lên/xuống:** Giữ `Alt` + phím mũi tên `Up`/`Down`.
* **Nhân bản dòng (Duplicate line):** Giữ `Shift + Alt` + phím mũi tên `Up`/`Down`.
* **Xóa nhanh dòng hiện tại:** Nhấn `Ctrl + Shift + K`.