Bài trước: [HTML (1) - Web](https://legiacong.blogspot.com/2021/06/web-1-web-la-gi.html)

## 5\. Trình duyệt web

Ở bài học trước, bạn đã biết: web là không gian thông tin toàn cầu, để có thể truy cập vào không gian thông tin toàn cầu này, bạn phải sử dụng tới trình duyệt.

Bài học này sẽ tìm hiểu về trình duyệt.

## 5.1 Trình duyệt web là gì?

Trình duyệt web (web browser) hay được gọi tắt là trình duyệt (browser) là một phần mềm, được sử dụng để truy cập thông tin trên web. Mỗi một tài nguyên web (dạng văn bản, hình ảnh, âm thanh, video) đều có một URL tương ứng, trình duyệt sẽ dựa theo các URL này để tải nội dung về và hiển thị cho người dùng.

Với người dùng, trình duyệt là công cụ để khai thác và sử dụng tài nguyên web. Với lập trình viên, trình duyệt là công cụ để dịch mã nguồn, thực thi mã và hiển thị kết quả.

Việc trao đổi thông tin giữa trình duyệt và web server được thực hiện dựa trên kiến trúc client-server, theo cơ chế sau:

\- Mã nguồn và dữ liệu của trang web sẽ được đặt tại các máy server

\- Người dùng sẽ sử dụng trình duyệt để gửi “yêu cầu” lấy mã nguồn và dữ liệu từ một server cụ thể (bước 1)

\- Khi nhận được yêu cầu từ trình duyệt, server sẽ xử lý yêu cầu (bước 2)

\- Server gửi lại kết quả cho trình duyệt (bước 3)

\- Trình duyệt thực thi mã 1 lần nữa và hiển thị kết quả (bước 4). Xem hình minh họa:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi08eyFBETMZ2yx20SOiQSjnuL2fJOwwj-3fDW042sJyqVR78Ou13sJ7jUiM0MAPqeBrr0JkwGjSay7fUo_zgZUhNUUK0XI7guNL0dkTiqzf6eUeDF2zKzGa3oqGoQ1a4z8-S_7-q2VBN0/w400-h261/Kien+truc+web+client-server.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi08eyFBETMZ2yx20SOiQSjnuL2fJOwwj-3fDW042sJyqVR78Ou13sJ7jUiM0MAPqeBrr0JkwGjSay7fUo_zgZUhNUUK0XI7guNL0dkTiqzf6eUeDF2zKzGa3oqGoQ1a4z8-S_7-q2VBN0/s761/Kien+truc+web+client-server.jpg)

Như đã đề cập, trình duyệt đầu tiên do Tim Berners-Lee tạo ra năm 1990, có tên ban đầu là WorldWideWeb, sau đổi tên thành Nexus.

Trình duyệt thường được cài đặt trên một số thiết bị phổ biến như máy tính để bàn (desktop), máy tính xách tay (laptop), máy tính bảng (tablet), tivi và điện thoại thông minh (smartphone). Hiện nay có rất nhiều trình duyệt khác nhau, ví dụ Chrome, Firefox, Microsoft Edge, Safari, Opera, Cốc Cốc.

Trình duyệt gồm nhiều thành phần như: User interface, Browser engine, Rendering engine, Networking, JavaScript Interpreter, UI Backend, Data Persistence. Xem hình minh họa.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGbsyU4i4beoEHqCJy0awFe9qXy8jWfJQVQppdGNY8mSHjvjhxZ_YTZQj1o91hv7ICAXbs_lVq_EZzaevB93XXgiF2XN1jyTH1GtFIWqmE57HtV_D0hezuCTVXSyGcei654Z8OIPsKpQY/w400-h291/Cac+thanh+phan+cua+browser.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGbsyU4i4beoEHqCJy0awFe9qXy8jWfJQVQppdGNY8mSHjvjhxZ_YTZQj1o91hv7ICAXbs_lVq_EZzaevB93XXgiF2XN1jyTH1GtFIWqmE57HtV_D0hezuCTVXSyGcei654Z8OIPsKpQY/s764/Cac+thanh+phan+cua+browser.jpg)

Trong đó,

\- User interface: là toàn bộ giao diện của trình duyệt (ngoại trừ phần cửa sổ chứa nội dung của trang web), cho phép người dùng tương tác với trình duyệt. Một số thành phần của User interface: menu, thanh địa chỉ, các nút, thanh trạng thái

\- Browser engine: thực hiện ghép nối, điều phối hoạt động giữa User interface và Rendering engine. Browser engine sẽ nhận lệnh từ User interface và gửi cho Rendering engine thực thi. Ví dụ, khi bạn bấm nút Reload this page (thuộc thành phần User interface), lệnh này sẽ được Browser engine gửi cho Rendering engine để tải và hiển thị lại nội dung trang web hiện thời

\- Rendering engine: phân tích mã HTML, CSS để hiển thị nội dung web ra cửa sổ trình duyệt

\- Networking: thực hiện các giao tiếp mạng, truyền dữ liệu giữa trình duyệt và máy server

\- JavaScript Interpreter: phân tích và thực thi mã JavaScript

\- UI Backend: thực hiện vẽ các đối tượng cơ bản, ví dụ các cửa sổ, combo box

\- Data Persistence: thực hiện các công việc liên quan đến lưu trữ dữ liệu trên máy cục bộ (ví dụ cookie, cache)

Rendering engine còn có tên gọi khác là Layout engine.

Các trình duyệt khác nhau thường sử dụng các Rendering engine và JavaScript interpreter khác nhau. Ví dụ,

| Trình duyệt | Rendering engine/  Layout engine | JavaScript Interpreter |
| --- | --- | --- |
| Chrome | Blink | V8 |
| Mozilla Firefox | Gecko | SpiderMonkey |
| Microsoft Edge | Blink | V8 |
| Opera | Blink | V8 |
| Apple Safari | Webkit | JavaScript Core (Nitro) |

Có thể thấy, trình duyệt là một phần mềm khá đặc biệt, nó vừa nhận mã nguồn từ máy server gửi tới, vừa thực thi mã nguồn để xuất ra kết quả (đóng vai trò là trình thông/biên dịch) và cho người dùng tương tác với kết quả hiển thị (chạy ứng dụng).

Là một lập trình viên, bạn cần phải xem xét trình duyệt ở cả hai vai trò. Thứ nhất, là người sử dụng, bạn sẽ sử dụng trình duyệt để duyệt web. Thứ hai, là lập trình viên, bạn sẽ sử dụng trình duyệt để xem trước trang web kết quả, sửa lỗi, và thiết kế giao diện.

5.2 Sử dụng trình duyệt

Với vai trò là người sử dụng, cần phân biệt hai khu vực khác nhau của trình duyệt. Một là giao diện của trình duyệt (vùng 1) và hai là giao diện của trang web hay ứng dụng web (vùng 2). Xem hình minh họa.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKXGZHbx4eyWAAAUpNmxEWZ6gwpBeg3FssuapfCYqGHq4rYVpLWCOV-pRo3pjYuMJXkZwggvT6hbwwugubYj4s4oj5IzSj3gF1_cIJX4lPI2wD2oqwTlAZthHF60JPni_8bpd5-tDeqVY/w400-h230/3+Giao+dien+trinh+duyet.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKXGZHbx4eyWAAAUpNmxEWZ6gwpBeg3FssuapfCYqGHq4rYVpLWCOV-pRo3pjYuMJXkZwggvT6hbwwugubYj4s4oj5IzSj3gF1_cIJX4lPI2wD2oqwTlAZthHF60JPni_8bpd5-tDeqVY/s778/3+Giao+dien+trinh+duyet.jpg)

***Giao diện của trình duyệt***

Mỗi loại trình duyệt sẽ có giao diện khác nhau, tuy nhiên, thường sẽ gồm các phần sau: các tab, thanh địa chỉ, các nút điều khiển, menu, thanh trạng thái, thanh cuộn (ngang, dọc).

\- Người dùng thường có nhu cầu mở nhiều trang web cùng một lúc, mỗi trang web sẽ nằm trên một tab. Để mở trang web trên một tab mới, người dùng sẽ bấm vào nút “New tab”

\- Sau khi mở tab mới, người dùng sẽ nhập địa chỉ của trang web (ứng dụng web, hoặc tài nguyên web bất kỳ) vào thanh địa chỉ. Bấm phím Enter để trình duyệt lấy tài nguyên web từ server về và hiển thị

\- Thanh trạng thái (status bar): hiển thị URL khi người dùng rê chuột lên các liên kết của trang web, hoặc hiển thị thông báo khi trang web đang được tải về. Bình thường, thanh trạng thái sẽ không xuất hiện, nó chỉ xuất hiện khi có thông tin cần được hiển thị

\- Trên giao diện của trình duyệt cũng có các nút điều khiển, chúng được sử dụng để tải lại trang web hiện tại (reload), trở về trang mặc định do người dùng thiết lập (home page), trở về trang trước (go back), đi tới trang sau (go forward), và nhiều nút chức năng khác

\- Menu: chứa các chức năng cho phép người dùng thiết lập chế độ hiển thị, ngôn ngữ, bảo mật, cài thêm các chức năng mở rộng, mở bộ công cụ cho lập trình viên (developer tools), và nhiều chức năng khác

\- Thanh cuộn (của trình duyệt): cho phép người dùng cuộn ngang và dọc để xem các phần thông tin chưa được hiển thị hết trong khung nhìn hiện tại

***Giao diện của trang web***

Giao diện của trang web, hay của ứng dụng web là phần nội dung được trình duyệt lấy từ server về và hiển thị cho người dùng. Nó chính là trang tin, trang thương mại điện tử hoặc các ứng dụng web khác, mà người sở hữu trang web muốn gửi tới người dùng và khách hàng của họ.

**Sử dụng trình duyệt trong quá trình tạo ra trang web**

Để tạo ra trang web, lập trình viên thường sử dụng các trình viết mã (text editor, code editor) hoặc môi trường phát triển tích hợp (IDE). Tuy nhiên, trong quá trình tạo ra trang web, lập trình viên cũng có thể kết hợp thêm một số tiện ích của trình duyệt để thiết kế giao diện, kiểm tra và sửa lỗi, xem trước kết quả.

Các hướng dẫn liên quan đến sử dụng trình duyệt trong quá trình tạo ra trang web sẽ lần lượt trình bày trong những phần sau.

### 5.3 Quá trình hiển thị trang web của trình duyệt

Như đã biết, do web hoạt động theo kiến trúc client-server, nên để có trang web trên trình duyệt cần trải qua các bước sau:

\- Người dùng nhập địa chỉ trang web (URL) vào thanh địa chỉ

\- Trình duyệt dựa vào URL trong thanh địa chỉ, kết nối tới máy web server, gửi yêu cầu tới web server (ví dụ yêu cầu: gửi cho nội dung trang web en.wikipedia.org).

\- Web server xử lý yêu cầu, gửi trả kết quả về cho trình duyệt (ví dụ nội dung trang web dưới dạng mã nguồn HTML, CSS và JavaScript).

\- Quá trình hiển thị trang web của trình duyệt được thực hiện sau khi trình duyệt đã nhận được kết quả trả về của web server (gồm mã HTML, CSS, JavaScript). Xem hình minh họa.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7ieayLvhLUuifl4TtNlXi2czc7dd6FPaJcoL5zfE9Gm8r3MzjH89vIym6TkhfF7wUpPNJnLn2XiT1-qUZ2xXtHkbF_DkVlLKXx3aEo5cJ06aOnt6sAyofGKQDr4Bcfzh80y1bF4s8820/w400-h206/4+qua+trinh+hien+thi+trang+web.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7ieayLvhLUuifl4TtNlXi2czc7dd6FPaJcoL5zfE9Gm8r3MzjH89vIym6TkhfF7wUpPNJnLn2XiT1-qUZ2xXtHkbF_DkVlLKXx3aEo5cJ06aOnt6sAyofGKQDr4Bcfzh80y1bF4s8820/s765/4+qua+trinh+hien+thi+trang+web.jpg)

Các bước của quá trình hiển thị:

Các bước của quá trình hiển thị:

\- Phân tích mã HTML để tạo cây DOM (DOM tree)

\- Phân tích mã CSS để tạo CSSOM (CSS Object Model - mô hình đối tượng CSS)

\- Kết hợp cây DOM và CSSOM để tạo ra cây kết xuất (Render tree)

\- Dựng khung giao diện (Layout) dựa trên cây kết xuất

\- Vẽ các điểm ảnh của giao diện lên bộ nhớ máy tính (Painting)

\- Hiển thị nội dung lên trình duyệt (Display)

Lưu ý: do việc hiển thị nội dung lên trang web có liên quan đến việc xử lý ba loại mã khác nhau là HTML, CSS và JavaScript. Quá trình xử lý mỗi loại mã cũng khác nhau. Vì vậy, kỹ thuật viết và tổ chức mã nguồn của một trang web có ảnh hưởng rất nhiều đến tốc độ hiển thị. Ngoài ra, các trình duyệt khác nhau thường sử dụng các Rendering engine khác nhau nên kết quả hiển thị cũng sẽ khác nhau trên mỗi trình duyệt.

5.4 Xem và đọc thêm

\- Từ khóa tìm kiếm: trình duyệt wiki, browser wiki, how browsers work taligarsiel

5.5 Bài tập và câu hỏi

Bài tập

Bài tập 5.1 Tạo bookmark cho 5 trang web hữu ích đối với bạn.

Yêu cầu:

\- Viết lại chi tiết các bước làm, ghi vào Tài liệu thực hành

\- Chụp hình kết quả lưu vào Tài liệu thực hành

Bài tập 5.2 Lưu đoạn mã nguồn của trang web sau vào một tập tin (test.html). Sau đó mở tập tin bằng trình duyệt. Sử dụng tab Elements của Developer tools, chỉ ra mã nguồn HTML, CSS và cây DOM của trang web.

\[test.html\]

<!DOCTYPE html>

\<html>

\<head>

\<style>

h1 { color: red; }

p { color: green; }

\</style>

\</head>

\<body>

\<h1>Trang web đầu tiên của bác Tèo\</h1>

\<p>Học về web browser\</p>

\</body>

\</html>

Bài tập 5.3 Làm quen với Add-on của trình duyệt:

Yêu cầu:

\- Thực hành thêm một add-on bất kỳ cho trình duyệt, mô tả chức năng và cách dùng add-on vừa thêm

\- \[nâng cao, không bắt buộc\] Lập trình một add-on đơn giản cho trình duyệt (dùng JavaScript)

\- Ghi lại nội dung lý thuyết, mã nguồn, kết quả vào Tài liệu thực hành

Bài tập 5.4 Thực hành quan sát luồng Request - Response bằng Chrome Developer Tools

Mục tiêu:

\- Giúp người học hiểu thực tế trình duyệt gửi những gì lên server (Request Headers, Query Parameters, URL) và server trả về những gì (Status Code, Response Headers, Response Body)

\- Nhận biết các loại tài nguyên khác nhau mà trình duyệt phải tải về (HTML, CSS, JS, Images) trong một chu kỳ tải trang

Yêu cầu thực hiện:

Bước 1: Mở công cụ giám sát mạng

1\. Mở trình duyệt và truy cập vào trang web bất kỳ (ví dụ: [https://en.wikipedia.org](https://en.wikipedia.org/))

2\. Nhấn phím F12 (hoặc chuột phải chọn Inspect) để mở bộ công cụ Developer Tools

3\. Trong cửa sổ Developer Tools > chọn tab Network

4\. Tích chọn vào ô Disable cache (để đảm bảo trình duyệt luôn gửi request thật về server thay vì lấy từ bộ nhớ máy). Trong phần chọn loại dữ liệu: chọn loại Doc (hoặc All)

Bước 2: Bắt gói tin Request - Response

1\. Bấm nút Reload (hoặc nhấn Ctrl + R) để tải lại trang

2\. Tại danh sách các tài nguyên xuất hiện ở cột Name, bấm vào dòng đầu tiên (chính là request gửi tới địa chỉ URL của trang web

Bước 3: Phân tích và ghi lại thông tin vào Tài liệu thực hành

Nhìn vào bảng điều khiển bên phải và trả lời các câu hỏi sau:

1\. Trong tab Headers:

\- General:

\+ Request URL là gì?

\+ Request Method là gì (GET hay POST)?

\+ Status Code server trả về là bao nhiêu (ví dụ: 200 OK, 404 Not Found)?

\- Request Headers: Trình duyệt đã tự động gửi kèm những thông tin gì lên server? (Chỉ ra ít nhất 2 thông tin, ví dụ: User-Agent, Accept-Language)

\- Response Headers: Server trả về thông tin gì? (chỉ ra loại nội dung Content-Type, kích thước, và thời gian)

2\. Trong tab Response:

\- Dữ liệu thô (raw data) mà server trả về cho trình duyệt ở bước này là loại mã nguồn nào (HTML, CSS, hay JS)?

3\. Trong tab Preview:

\- Màn hình xem trước kết quả trông như thế nào trước khi trình duyệt thực thi toàn bộ CSS/JS?

Gợi ý mở rộng (Nâng cao cho sinh viên giỏi):

Thực hành với Form đơn giản: Tạo một tập tin login.html có form nhập tên người dùng và bấm Submit. Quan sát tab Network để thấy tham số (Payload/Form Data) được trình duyệt đóng gói gửi lên server như thế nào.

**Câu hỏi ôn tập**

Câu 5a. Trình duyệt web đầu tiên do ai tạo ra?

A. Steve Jobs

B. Tim Berners-Lee

C. Bill Gates

D. Chrome

Câu 5b. Có thể sử dụng trình duyệt web để?

A. Xem nội dung trang web

B. Hỗ trợ quá trình thiết kế giao diện

C. Giúp tìm và sửa lỗi trong quá trình phát triển web

D. Cả A, B, và C

Câu 5c. A web browser (commonly referred to as a browser or internet browser) is an \_\_\_\_\_\_\_\_\_ for accessing the World Wide Web.

A. application software

B. operating system

C. library

D. framework

Câu 5d. Mã nguồn trang web, khi trình duyệt nhận về từ web server có thể gồm?

A. HTML, CSS, PHP, JavaScript

B. HTML, CSS, C#

C. CSS, C#, SQL

D. CSS, JavaScript, HTML

Câu 5e. Một số kết quả trung gian được tạo ra khi trình duyệt hiển thị trang web là gì?

A. DOM, CSSOM, Trang web kết quả, HTML

B. CSS, DOM, Trang web kết quả, DOM Tree

C. DOM tree, CSSOM, Trang web kết quả, Render tree

D. CSSOM, DOM tree, OOP, Render tree

Câu 5f. CSSOM là viết tắt của?

A. CSS Object Modern

B. CSS Oriented Model

C. CSS Object Mode

D. CSS Object Model

\-----

Bài sau: [HTML (3) - URL, siêu liên kết và siêu văn bản](https://legiacong.blogspot.com/2021/07/web-3-url-sieu-lien-ket-va-sieu-van-ban.html)