Bài trước: [HTML (4) - Tạo một trang web đơn giản](https://legiacong.blogspot.com/2021/09/web-front-end-4-htmltong-quan-block.html)

\-----

8\. Hoàn thiện một trang web đơn giản

8.1 Phần tử rỗng

Tính tới thời điểm này, các phần tử HTML mà bạn đã sử dụng đều có cú pháp là:

<tên thẻ>nội dung</tên thẻ>

Trong đó, phần “nội dung” thường là văn bản hoặc phần tử HTML khác. Tuy nhiên, có một số ít các phần tử không có phần nội dung, mà bản thân phần tử đó sẽ là một chỉ dẫn để thực hiện một hành động nào đó, như xuống dòng, tạo một đường kẻ ngang, hiển thị một hình ảnh, các phần tử này được gọi là phần tử rỗng (empty element).

Cú pháp của phần tử rỗng có dạng:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLCukzrdoYgyXnAeaD9uRClDgts3gV-Ur7MNdBE5nbXZktiUR7ppPOQzsegY8_Kk2Y0KX1K7v8N6IE5TOZSuBajBH8l-xGLsYKx1q5fad9YsGWJ0Cx3La9Qwdl76ASus32Lxgy-w2nL3E/w400-h113/1_The+rong.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLCukzrdoYgyXnAeaD9uRClDgts3gV-Ur7MNdBE5nbXZktiUR7ppPOQzsegY8_Kk2Y0KX1K7v8N6IE5TOZSuBajBH8l-xGLsYKx1q5fad9YsGWJ0Cx3La9Qwdl76ASus32Lxgy-w2nL3E/s753/1_The+rong.jpg)

Ví dụ một số phần tử rỗng:

\- Phần tử img, khi trình duyệt gặp phần tử này, nó sẽ tải hình ảnh về và hiển thị lên giao diện

\- Phần tử br, được sử dụng để ngắt dòng, xuống hàng (line break)

\- Phần tử hr, được sử dụng để tạo một đường kẻ ngang (horizontal rule), mục đích là để kết thúc một chủ đề/đề mục, để chuyển sang chủ đề/đề mục mới

\- Phần tử meta, được sử dụng để mô tả một số đặc tính của trang web, ví dụ: bộ mã mà trang web sử dụng, mô tả vắn tắt nội dung của trang web, các từ khóa của trang web, tác giả của trang web. Meta là viết rút gọn của metadata. Metadata là siêu dữ liệu, nghĩa là dữ liệu để mô tả dữ liệu. Cụ thể ở đây là các thông tin để mô tả một số đặc tính của trang web. Phần tử meta không được hiển thị ra trình duyệt. Trình duyệt, máy tìm kiếm và các dịch vụ web khác sẽ đọc và sử dụng các phần tử meta này.

Ví dụ, đoạn mã HTML dưới đây, sẽ sử dụng thẻ \<br> để ngắt hàng và thẻ \<hr> để tạo một đường kẻ ngang.

\<h1>NGAY DAU TIEN DI HOC\</h1>\<br>\<hr>

\<p>Ngay dau tien di hoc\</p>

\<p>Me dat tay den truong\</p>

\<p>Em vua di vua khoc\</p>

\<p>Me do danh ben em\</p>\<br>

\<p>Tac gia: \<em>Vien Phuong\</em>\</p>

Cách viết phần tử rỗng

Phần tử rỗng không có phần nội dung, nên không cần thẻ đóng, mà chỉ có thẻ mở (hay còn gọi là thẻ rỗng).

Thẻ rỗng là thẻ để tạo ra phần tử rỗng.

Có ba cách viết thẻ rỗng:

\- Cách một: \<br>, \<hr>, \<img>, \<meta>

\- Cách hai: \<br />, \<hr />, \<img />, \<meta />

\- Cách ba: \<br/>, \<hr/>, \<img/>, \<meta/>

Vậy chọn cách viết nào?

Đơn giản nhất là chọn cách một, tuy nhiên nếu vì lý do phải tương thích với các trình duyệt cũ, với XHTML thì sử dụng cách hai hoặc ba.

8.2 Thuộc tính

Như đã biết, phần tử img được sử dụng để chèn một hình ảnh vào trang web, tuy nhiên, vì là phần tử rỗng, nên chỉ với cú pháp \<img> thì trình duyệt sẽ không thể biết được là phải lấy hình ảnh nào, lấy ở đâu? Vì vậy, cần phải sử dụng thêm thuộc tính (attribute) để cung cấp cho trình duyệt biết được tên và vị trí của hình ảnh.

Để dễ hiểu về thuộc tính và cũng để thực hành việc sử dụng phần tử rỗng, chúng ta sẽ chèn một hình ảnh vào trang index.html.

\- Chuẩn bị sẵn một tập tin hình ảnh (.jpg,.png,.jpeg,.gif), để trong cùng thư mục với tập tin index.html. Ví dụ tập tin hình ảnh có tên là con-vit.png.

\- Mở tập tin index.html bằng Notepad

\- Chèn thêm dòng mã này vào ngay sau thẻ \<body>:

\<img src="con-vit.png" alt="Logo Con Vit">

Khi đó, nội dung của index.html sẽ như sau:

<!DOCTYPE html>

\<html>

\<head>

\<title>Trang web dau tien\</title>

\</head>

\<body>

\<img src="con-vit.png" alt="Con Vit Logo">

\<h1>NGAY DAU TIEN DI HOC\</h1>

\<p>Ngay dau tien di hoc\</p>

\<p>Me dat tay den truong\</p>

\<p>Em vua di vua khoc\</p>

\<p>Me do danh ben em\</p>

\<p>Tac gia: \<em>Vien Phuong\</em>\</p>

\</body>

\</html>

\[Kết quả\]

Lưu lại tập tin index.html, và mở nó bằng trình duyệt để xem kết quả, sẽ thấy hình ảnh xuất hiện.

Hình sau minh họa cú pháp của thuộc tính,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo57nqt4A4w2szVAtu5fTx4m_qeIQpTTdssd4BlHHiG0JQOOljm5ATpRyGKLTNIB0tPy-xYAaa1QCC42fj0HgdFa9D3LomF098Jj5Jh99eGjL8mkN0vjXfxtjNhNbtJMapVxCxUhsg4Vs/w400-h163/2_Thuoc+tinh.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo57nqt4A4w2szVAtu5fTx4m_qeIQpTTdssd4BlHHiG0JQOOljm5ATpRyGKLTNIB0tPy-xYAaa1QCC42fj0HgdFa9D3LomF098Jj5Jh99eGjL8mkN0vjXfxtjNhNbtJMapVxCxUhsg4Vs/s699/2_Thuoc+tinh.jpg)

Thuộc tính (attribute) là thành phần bổ sung của mỗi phần tử HTML. Thuộc tính được dùng để thay đổi chức năng mặc định của phần tử hoặc là một thành tố bắt buộc phải có, để một phần tử có thể thực hiện đúng chức năng.

Thuộc tính luôn được đặt trong thẻ mở. Mỗi phần tử có thể chứa nhiều thuộc tính, mỗi thuộc tính cách nhau bởi một khoảng trắng, tính thứ tự trước sau của các thuộc tính là không quan trọng.

Hầu hết các thuộc tính đều có giá trị đi kèm, giá trị của thuộc tính nằm sau dấu “=”. Tuy nhiên, trong một số trường hợp, thuộc tính được viết rút gọn chỉ gồm một từ mô tả, ví dụ thuộc tính checked.

Giá trị của thuộc tính có thể là: văn bản, số, kí tự, URL, đơn vị đo.

Giá trị của thuộc tính thường được bao lại bằng dấu nháy kép ("") hoặc nháy đơn ('). Mọi người hay sử dụng dấu nháy kép. Tuy nhiên, cũng có một số giá trị không cần phải bao lại bằng dấu nháy. Lưu ý, đừng nhầm dấu ("") với dấu (“”) hoặc dấu (') với dấu (‘), việc chép mã HTML từ tài liệu Word để chạy thử hay bị nhầm các dấu này, và gây ra lỗi.

Có bốn loại thuộc tính cơ bản gồm:

\- \[1\] Thuộc tính bắt buộc (required attributes): Là thuộc tính bắt buộc phải có để phần tử thực hiện đúng chức năng của nó. Ví dụ: thuộc tính href trong phần tử \<a>, và \<link>

\- \[2\] Thuộc tính tùy chọn (optional attributes): Là thuộc tính được sử dụng để thay đổi chức năng mặc định của một phần tử. Ví dụ: thuộc tính maxlength trong phần tử \<input>

\- \[3\] Thuộc tính chuẩn (standard attributes) hay thuộc tính phổ dụng (global attributes): Là thuộc tính có thể sử dụng được cho nhiều loại phần tử. Ví dụ: thuộc tính id, class, title

\- \[4\] Thuộc tính sự kiện (event attributes): Là thuộc tính được sử dụng để kích hoạt một hành động (script) trong các trường hợp cụ thể. ví dụ: thuộc tính onclick, onload

## 8.3 Hiển thị tiếng Việt

Ở các ví dụ trước, chúng ta phải viết nội dung trang web ở dạng tiếng Việt không dấu, vì chưa khai báo Bộ mã hóa ký tự sẽ dùng cho trang web.

Sử dụng phần tử meta của HTML để khai báo bộ mã hóa ký tự sẽ dùng cho trang web.

Phần tử meta được sử dụng để cung cấp các siêu dữ liệu (metadata) về một trang web.

Siêu dữ liệu là dạng dữ liệu mô tả thông tin chi tiết về dữ liệu.

Để khai báo bộ mã hóa ký tự cho trang web, trong phần tử head thêm dòng mã sau:

\<meta charset="utf-8">

Mở tập tin index.html bằng Notepad, nhập lại đoạn thơ có dấu tiếng Việt, khi lưu, trong mục Encoding nhớ chọn là UTF-8. Mở trang web bằng trình duyệt, sẽ thấy đoạn thơ đã có dấu tiếng Việt.

\[index.html\]

<!DOCTYPE html>

\<html>

\<head>

\<meta charset="utf-8">

\<title>Trang web dau tien\</title>

\</head>

\<body>

\<img src="con-vit.png" alt="Logo Con Vit">

\<h1>NGÀY ĐẦU TIÊN ĐI HỌC\</h1>

\<p>Ngày đầu tiên đi học\</p>

\<p>Mẹ dắt tay đến trường\</p>

\<p>Em vừa đi vừa khóc\</p>

\<p>Mẹ dỗ dành bên em\</p>

\<p>Tác giả: \<em>Viễn Phương\</em>\</p>

\</body>

\</html>

UTF-8

UTF-8 là viết tắt của 8-bit Unicode Transformation Format (Định dạng chuyển đổi Unicode 8-bit).

UTF-8 là một bộ mã hóa ký tự với chiều rộng biến thiên dành cho Unicode. Tương tự như UTF-16 và UTF-32, UTF-8 có thể biểu diễn tất cả các chữ cái trong bộ ký tự Unicode, nhưng điểm khác biệt quan trọng nhất là nó có thể tương thích ngược với ASCII. Vì lý do này, UTF-8 nhanh chóng trở thành bộ mã hóa được sử dụng rộng rãi trong các tập tin, thư điện tử, trang web, và phần mềm xử lý văn bản.

Một số thông tin thêm về phần tử meta:

\- Phần tử meta phải đặt trong phần tử head

\- Thông tin trong meta không được hiển thị trên trình duyệt

\- Trình duyệt, cỗ máy tìm kiếm và các dịch vụ web khác sẽ sử dụng các thông tin trong meta

\- Meta thường dùng để mô tả trang web, từ khóa, tác giả, bộ mã hóa ký tự, thời gian cập nhật gần nhất, thiết lập khung nhìn,…v.v.

\- Cú pháp của phần tử meta có dạng \<meta key1=“value1” key2= “value2”>

## 8.4 Thêm CSS cho trang web

Như các bạn đã biết, chúng ta sẽ sử dụng HTML để tạo ra nội dung và ngữ nghĩa cho trang web. Để trang trí, và định dạng trang web chúng ta sẽ sử dụng ngôn ngữ CSS (Cascading Style Sheet).

Mặc định, khi chúng ta không viết mã định dạng (mã CSS) cho một trang web, thì trình duyệt sẽ lấy các định dạng có sẵn của trình duyệt (user agent style sheet) để định dạng cho từng phần tử HTML.

Phần này bạn sẽ thực hiện viết thêm một đoạn mã trang trí và định dạng cho trang web.

Trong phần tử head, tạo thêm phần tử style, sau đó viết các chỉ dẫn định dạng (style rule):

Ví dụ:

\<head>

…

\<style>

body {

background-color: #faf2e4;

font-family: sans-serif;

}

h1 {

text-align: center;

font-family: serif;

}

\</style>

…

\</head>

Sau khi lưu lại mã nguồn trang HTML, mở lại trang web bằng trình duyệt, bạn sẽ thấy các thành phần của trang web đã được thay đổi, với màu nền mới, cỡ chữ mới, màu chữ mới, phông chữ mới…v.v.

Một số buổi học đầu tiên, tại sao lại sử dụng Notepad để viết mã HTML?

Khi mới học làm web, nên sử dụng chương trình Notepad để viết mã. Nó có mấy cái lợi sau:

\- Không phải đi kiếm đâu xa, máy tính chạy Windows nào cũng có Notepad

\- Lập trình bằng Notepad bắt buộc phải gõ từng thẻ mở, thẻ đóng, do vậy mau nhớ ngôn ngữ HTML

\- Người lập trình phải tự căn chỉnh việc xuống hàng, thụt đầu hàng cho các đoạn mã, từ đó nắm được cấu trúc của mã nguồn, bước đầu hình thành ý niệm về định dạng và tổ chức đoạn mã cho chuyên nghiệp

\- Ngoài ra, nó còn tạo ra cảm giác thú vị, khi từ một đoạn mã thuần văn bản, nhưng khi xem trên trình duyệt thì thấy kết quả xuất hiện khá bất ngờ

\- Người lập trình không phải bận tâm tìm hiểu cách sử dụng các phần mềm lập trình phức tạp, đôi khi làm che lấp đi bản chất, cách hoạt động vốn dĩ rất đơn giản của HTML

8.5 Kiểm tra tính hợp lệ của mã HTML

Trong cấu trúc của một tài liệu HTML, hàng đầu tiên là khai báo cho biết mã nguồn bên dưới sẽ được viết bằng HTML phiên bản nào. Dựa vào khai báo này, trình duyệt sẽ sử dụng đặc tả phiên bản HTML tương ứng để dịch mã và hiển thị kết quả.

Từ khi được Tim Berners-Lee tạo ra và công bố vào năm 1991, đến nay, HTML đã trải qua nhiều phiên bản khác nhau. Ví dụ,

| Phiên bản | Năm ra đời |
| --- | --- |
| HTML | 1991 |
| HTML 2.0 | 1995 |
| HTML 3.2 | 1997 |
| HTML 4.0.1 | 1999 |
| XHTML | 2000 |
| HTML5 | 2014 |

Trải qua mỗi phiên bản sẽ có những cải tiến, bổ sung các phần tử mới, cú pháp mới, loại bỏ các phần tử, các cú pháp không còn phù hợp. Vì vậy, để hiển thị nội dung trang web ở trạng thái tốt nhất, cần sử dụng các phần tử và cú pháp phù hợp. Làm sao biết được sử dụng phần tử nào là phù hợp, phần tử nào không? cú pháp nào vẫn còn được dùng, cú pháp nào không? Ví dụ, có những phần tử, cú pháp được HTML4.01 hỗ trợ, tuy nhiên HTML5 lại không hỗ trợ.

Mặc dù trình duyệt luôn cố gắng để hiển thị tài liệu HTML ra ngoài trình duyệt, ngay cả trong một số trường hợp có lỗi, tuy nhiên, để mã nguồn an toàn và hiển thị ổn định nhất thì nên kiểm tra tính hợp lệ của mã nguồn để sửa các lỗi nếu có.

W3C có cung cấp một công cụ để kiểm tra mã nguồn, đó là trang web [https://validator.w3.org/](https://validator.w3.org/).

Trang web Validator sẽ kiểm tra các nội dung sau:

\- Dòng khai báo <!DOCTYPE>

\- Các thuộc tính, các quy định cú pháp có tính bắt buộc

\- Các phần tử đã chuẩn chưa

\- Các thẻ nào không phù hợp

\- Các thẻ lồng nhau có hợp lý không

\- Lỗi đánh máy và một số lỗi khác

Trang web này cho phép kiểm tra tính hợp lệ của mã HTML bằng ba cách:

\- Kiểm tra trực tiếp trên mạng, sử dụng địa chỉ của trang web cần kiểm tra (Validate by URI)

\- Tải tập tin HTML lên để kiểm tra (Validate by File Upload)

\- Nhập trực tiếp đoạn mã HTML để kiểm tra (Validate by Direct Input)

Ví dụ,

\- Mở trang web [https://validator.w3.org/](https://validator.w3.org/), chọn tab Validate by Direct Input, chép và dán đoạn mã HTML sau vào vùng nhập liệu của trang web (Enter the Markup to validate).

<!DOCTYPE html>

\<html>

\<head>

\<title>Hoc lam web\</title>

\<meta charset="utf-8">

\</head>

\<body>

\<p>Chữ \<big>này\</big> sẽ được viết to hơn bình thường \</p>

\</body>

\</html>

\- Bấm nút Check để chương trình validator thực hiện việc kiểm tra

\- Bạn sẽ nhận được thông báo là thẻ \<big> đã bị lỗi thời (obsolete, outdated), cần sử dụng thẻ khác hoặc định dạng bằng CSS. Bạn có thể xóa các hàng <!DOCTYPE html>, hoặc xóa các phần tử title, meta để xem kết quả

Đây là kết quả thông báo,

Error: The big element is obsolete. [Use CSS instead](http://wiki.whatwg.org/wiki/Presentational_elements_and_attributes).

[From line 8, column 10; to line 8, column 14](https://validator.w3.org/nu/#l8c14)

↩ \<p>Chữ \<big>này\</b

Ngoài ra, bạn cũng có thể tự kiểm tra tính hợp lệ của mỗi phần tử bằng cách tham chiếu đến thông tin về phần tử đó tại các trang web uy tín. Ví dụ, [https://caniuse.com/](https://caniuse.com/), [https://www.w3schools.com/tags/](https://www.w3schools.com/tags/), [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)

Vài nhận xét:

\- Nếu nhìn lại cái hình về Hoạt động của web theo mô hình client-server bạn sẽ thấy: mã PHP sẽ bọc mã HTML ở bên trong, do vậy chúng ta viết mã HTML > rồi cho trình duyệt thực thi mà và hiển thị là chúng ta đã làm tắt. Nghĩa là, chỉ quan tâm tới việc trình duyệt thực thi mã HTML và hiển thị, mà chưa quan tâm tới dựng web server, dịch mã tại web server.

\- Mã nguồn của một trang web sẽ gồm nhiều ngôn ngữ: ngôn ngữ bên back-end (ví dụ PHP), SQL, ngôn ngữ bên front-end (HTML, CSS, JS)

\- Một trang web cần được dịch mã (ít nhất) 2 lần: 1 lần tại máy server và 1 lần tại client

Để làm một trang web đơn giản, cần những gì?

Để làm một trang web đơn giản cần 3 thứ sau: ngôn ngữ viết mã (code), công cụ để viết mã, và công cụ để xem kết quả.

\- Ngôn ngữ để viết mã là HTML

\- Công cụ để viết mã là chương trình soạn thảo văn bản thô (plain text). Ví dụ: Notepad của Windows, TextEdit của Mac OS, Vi của Linux

\- Công cụ để xem kết quả là trình duyệt, có thể sử dụng một trong các trình duyệt sau: Chrome, Firefox, Safari, Opera, Microsoft Edge

Tóm lại, để làm một trang web đơn giản, chỉ cần sử dụng Notepad để viết mã HTML, lưu lại thành một tập tin có phần mở rộng là.html. Sau đó, dùng trình duyệt để mở tập tin, và xem trang web kết quả.

Bài tập 8.1: Viết lại các đoạn mã trong phần lý thuyết.

Bài tập 8.2: Adding an image

1\. If you’re working along, the first thing you’ll need to do is get a copy of the image file on your hard drive so you can see it in place when you open the file locally. Name the file blackgoose.png. Be sure to save it in the bistro folder with index.html.

2\. Once you have the image, insert it at the beginning of the first-level heading by typing in the img element and its attributes as shown here:

\<h1>\<img src="blackgoose.png" alt="logo">Black Goose Bistro\</h1>

The src attribute provides the name of the image file that should be inserted, and the alt attribute provides text that should be displayed if the image is not available. Both of these attributes are required in every img element.

3\. I’d like the image to appear above the title, so add a line break (br) after the img element to start the headline text on a new line.

\<h1>\<img src="blackgoose.png" alt="logo">\<br>Black Goose Bistro\</h1>

4\. Let’s break up the last paragraph into three lines for better clarity. Drop a \<br> tag at the spots you’d like the line breaks to occur. Try to match the screenshot in the following figure.

5\. Now save index.html and open or refresh it in the browser window. The page should look like the one shown in the following figure. If it doesn’t, check to make sure that the image file, blackgoose.png, is in the same directory as index.html. If it is, then check to make sure that you aren’t missing any characters, such as a closing quote or bracket, in the img element markup.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge1if7IVlw-dAlZpxacZijwi8W4M6IKqDDDWJAQ7ZndFWwpN1BP7OC8HjjpAIk0KFjLwn1VtH9yzX67QYgJ7_c7rWhyNqzO9NcgDVenTon-sUiinRUW_0cpKmTivhg4hqaoFbdseVixJ0/w400-h284/3_adding+an+image.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge1if7IVlw-dAlZpxacZijwi8W4M6IKqDDDWJAQ7ZndFWwpN1BP7OC8HjjpAIk0KFjLwn1VtH9yzX67QYgJ7_c7rWhyNqzO9NcgDVenTon-sUiinRUW_0cpKmTivhg4hqaoFbdseVixJ0/s725/3_adding+an+image.jpg)

Bài tập 8.3: Adding a style sheet

1\. Open index.html if it isn’t open already. We’re going to use the style element to apply a very simple embedded style sheet to the page. This is just one of the ways to add a style sheet;

2\. The style element is placed inside the document head. Start by adding the style element to the document as shown here:

\<head>

\<meta charset="utf-8">

\<title>Black Goose Bistro\</title>

\<style>

\</style>

\</head>

3\. Next, type the following style rules within the style element just as you see them here. Don’t worry if you don’t know exactly what’s going on (although it’s fairly intuitive). You’ll learn all about style rules later.

\<style>

body {

background-color: #faf2e4;

margin: 0 10%;

font-family: sans-serif;

}

h1 {

text-align: center;

font-family: serif;

font-weight: normal;

text-transform: uppercase;

border-bottom: 1px solid #57b1dc;

margin-top: 30px;

}

h2 {

color: #d1633c;

font-size: 1em;

}

\</style>

4\. Now it’s time to save the file and take a look at it in the browser. It should look like the page in the following picture. If it doesn’t, go over the style sheet to make sure you didn’t miss a semicolon or a curly bracket. Look at the way the page looks with our styles compared to the browser’s default styles.

[  
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRWl0q_j7dVZFIzXRkgTXk428YvsUoTecTEDj4KjvRs24AaHMJr81O0V0fYBXQIRWDdLwUxDms2C3s6L7M3wUoqUt4rWFBM6e80zoLXvCReoe1NFOBp9sjUnJlB29lsDLNc045HM5F_Mk/w400-h310/4_adding+style+sheet.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRWl0q_j7dVZFIzXRkgTXk428YvsUoTecTEDj4KjvRs24AaHMJr81O0V0fYBXQIRWDdLwUxDms2C3s6L7M3wUoqUt4rWFBM6e80zoLXvCReoe1NFOBp9sjUnJlB29lsDLNc045HM5F_Mk/s678/4_adding+style+sheet.jpg)

Bài tập 8.4: Như đã biết, phần tử head chứa các thông tin mô tả cho trang web, ví dụ tiêu đề (title), từ khóa, tác giả; tập tin định dạng (CSS), đoạn mã JavaScript, các thông tin này không được hiển thị ra cửa sổ trình duyệt, còn phần body chứa toàn bộ nội dung mà chúng ta muốn hiển thị ra cửa sổ trình duyệt. Bài tập này sẽ thêm một số thông tin mô tả cho tài liệu HTML.

Yêu cầu:

\- Thay đổi icon cho trang web của bạn (khi mở trang web, icon này sẽ xuất hiện trên tab của trình duyệt)

\[Gợi ý\]

\- Description: mô tả ngắn gọn chức năng của trang web

\- Keywords: các từ khóa dùng cho các cỗ máy tìm kiếm

\- Author: tác giả, người sở hữu trang web

\- Thay đổi icon: từ khóa tìm kiếm “icon png + html5”, sẽ thấy các ảnh icon có kích thước 512 x 512 (px). Lưu về máy và thêm dòng mã sau \<link rel="icon" href="html5.png" type="image/x-icon">

\[Mã tham khảo\]

\<head>

\<meta charset="utf-8">

\<title>Trang web dau tien\</title>

\<meta name="description" content="Đây là trang web để học HTML, CSS và JavaScript">

\<meta name="author" content="Nguyen Van Teo">

\<meta name="keywords" content="HTML, CSS, JavaScript">

\<meta name="copyright" content="Copyright © 2022 by Teo">

\<link rel="icon" href="html5.png" type="image/x-icon">

\</head>

Câu hỏi

Câu 8a. Trong UTF-8, UTF là viết tắt của các từ nào?

A. Uniform Text Format

B. Unicode Transformation Format

C. Uniform Transformation Format

D. Unicode Text Format

Câu 8b. Metadata is "data that provides \_\_\_\_\_\_\_\_about other data". In other words, it is "data about data".

A. format

B. information

C. structure

D. standard

Câu 8c. Technically, an \_\_\_\_\_\_\_\_is the collection of start tag, its attributes, an end tag and everything in between. On the other hand an HTML tag (either opening or closing) is used to mark the start or end of an element.

A. HTML attribute

B. HTML tag

C. HTML document

D. HTML element

Câu 8d. Indicate whether each of these filenames is not an acceptable name for a web document.

A. Sunflower.html

B. index.htm

C. Song\_Lyrics.html

D. cooking home page.html

Câu 8e. One of the following markup examples is incorrect. Which one?

A. \<img src = "birthday.jpg">

B. \<em>Congratulations!\<em>

C. \<a href="file.html">linked text\</a>

D. \<p>This is a new paragraph\</p>

Câu 8f. Trang web [https://validator.w3.org/](https://validator.w3.org/) dùng để làm gì?

A. Để hiển thị tài liệu của W3C

B. Để chạy mã nguồn HTML và cho ra kết quả

C. Để kiểm tra tính hợp lệ của mã HTML

D. Để đăng ký tên miền cho trang web

\-----

Bài sau: [HTML (6) - Hiển thị văn bản](https://legiacong.blogspot.com/2021/10/web-front-end-6-html-hien-thi-van-ban.html)