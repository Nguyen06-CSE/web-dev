Bài trước: [HTML (3) - URL, siêu liên kết và siêu văn bản](https://legiacong.blogspot.com/2021/07/web-3-url-sieu-lien-ket-va-sieu-van-ban.html)

## 7\. Tạo một trang web đơn giản

Tới bài học này, bạn đã có kiến thức căn bản về web, trình duyệt, URL, siêu liên kết, siêu văn bản. Bạn đã biết được rằng, mỗi một tài nguyên trên mạng sẽ được đại diện bằng một URL. Gắn kết các tài nguyên này bằng siêu liên kết sẽ tạo ra web. Một trang web là một tài liệu gồm văn bản, hình ảnh, video,…v.v có chứa siêu liên kết, do vậy trang web là một siêu văn bản.

Phần này chúng ta sẽ cùng nhau tạo ra một trang web đơn giản.

7.1 HTML

HTML là gì?

HTML, viết tắt của HyperText Markup Language - ngôn ngữ đánh dấu siêu văn bản, là một ngôn ngữ (lưu ý: không phải ngôn ngữ lập trình) được sử dụng để tạo ra nội dung cho trang web.

Hiểu nôm na, HTML là ngôn ngữ, sử dụng phương pháp đánh dấu bằng các thẻ, để tạo ra các siêu văn bản, tức là các trang web.

Ví dụ, bạn hãy quan sát một siêu văn bản sau:

\<h1>Chao bac Teo\</h1>

Ở siêu văn bản trên, chúng ta đã sử dụng ngôn ngữ HTML (là cặp thẻ \<h1> \</h1>) để đánh dấu dòng chữ “Chao bac Teo” là một tiêu đề. Khi trình duyệt thực thi dòng mã trên, nó sẽ làm cho dòng chữ “Chao bac Teo” xuất hiện với vai trò là một tiêu đề cấp 1.

Tài liệu HTML là gì?

Tài liệu HTML (HTML document) là mã nguồn của trang web, được viết bằng ngôn ngữ HTML, được lưu trong một tập tin có phần mở rộng là.html. Trình duyệt sẽ thực thi mã nguồn này để tạo ra trang web.

Trang web tĩnh là gì?

Trang web tĩnh (static web page, flat page hoặc stationary page): là trang web chứa nội dung cố định, nội dung này là giống nhau với mọi người dùng, mọi ngữ cảnh. Người dùng không có khả năng tương tác với nó.

Mã nguồn của trang web tĩnh thường là một tài liệu HTML, được lưu dưới dạng một tập tin.

Mã nguồn của trang web tĩnh có thể được lưu trong cơ sở dữ liệu, thậm chí bao gồm cả các trang được tạo ra bằng một mẫu có sẵn (template) và được phân phối thông qua một server ứng dụng, miễn là các trang kết quả không thể thay đổi và luôn thể hiện như khi nó được lưu trữ.

Trang web tĩnh được dùng để chứa các thông tin cố định, ít hoặc không cần cập nhật.

Chúng ta sẽ cùng nhau tạo ra một trang web tĩnh.

Chuẩn bị nội dung cho trang web

Bước 1. Nhập nội dung

Mở chương trình Notepad, nhập vào nội dung sau (lưu ý nhập đúng nội dung, đúng định dạng):

NGAY DAU TIEN DI HOC

Ngay dau tien di hoc

Me dat tay den truong

Em vua di vua khoc

Me do danh ben em

Tac gia: Vien Phuong

Bước 2. Lưu lại thành tập tin index.html

Vào trình đơn File\\Save của Notepad, lưu lại thành tập tin, để trong ổ đĩa\\thư mục bất kỳ, tốt nhất là tạo một thư mục mới có tên là LapTrinhWeb rồi lưu tập tin vào trong đó, đặt tên tập tin là index.html. Chú ý: để chắc chắn phần mở rộng của tập tin là “.html” chứ không phải là “.html.txt” thì trong lúc lưu, tới phần nhập tên cho tập tin, mục File name, bạn phải bao phần tên và phần mở rộng bằng dấu nháy kép (“”), ví dụ “index.html”.

Bước 3. Thử mở tập tin index.html bằng trình duyệt

Để mở tập tin index.html bằng trình duyệt, chỉ cần bấm đúp chuột (double click) vào tập tin index.html, hoặc bấm chuột phải vào tập tin, chọn Open with, chọn một trình duyệt bất kỳ, nội dung là đoạn thơ sẽ xuất hiện trên trình duyệt.

Tuy nhiên, để ý là, mặc dù trong cửa sổ soạn thảo Notepad, phần nội dung đã được ngắt dòng rồi, nhưng kết quả thì không như vậy, tất cả các câu thơ nằm trên cùng một dòng nối tiếp nhau.

\[Kết quả\]

NGAY DAU TIEN DI HOC Ngay dau tien di hoc Me dat tay den truong Em vua di vua khoc Me do danh ben em Tac gia: Vien Phuong

Những thứ sẽ bị trình duyệt bỏ qua khi hiển thị một văn bản

\- Chuỗi khoảng trắng (spaces): khi gặp một chuỗi khoảng trắng (nhiều khoảng trắng liên tiếp), trình duyệt sẽ chỉ ghi nhận khoảng trắng đầu tiên để hiển thị, các khoảng trắng sau đó sẽ bị bỏ qua

\- Ký hiệu xuống hàng (line break, carriage return): khi gặp ký tự xuống hàng (hoặc nhiều ký tự xuống hàng liên tiếp), trình duyệt sẽ chuyển thành một khoảng trắng

\- Các tab cũng được chuyển thành một khoảng trắng

\- Vì đặc tính bỏ qua chuỗi khoảng trắng, ký hiệu xuống hàng, và tab, nên phần văn bản hoặc các phần tử nội tuyến (inline element) khác sẽ được đặt cạnh nhau, liên tục, và chỉ bị ngắt dòng khi gặp một phần tử khối (block element) kế tiếp.

\- Các thẻ (tag) mà trình duyệt không hiểu cũng bị bỏ qua. Tuy nhiên, một số trình duyệt sẽ xem nội dung của các thẻ mà nó không nhận ra là dạng văn bản thông thường và trình duyệt sẽ hiển thị nội dung này ra giao diện.

\- Phần chú thích (comment) sẽ bị bỏ qua, không hiển thị

Rút ra được điều gì từ 3 bước trên?

\- Ba bước trên, bạn mới làm được một việc là nhập nội dung văn bản vào một tập tin, sau đó mở tập tin bằng trình duyệt để xem kết quả.

\- Tuy nhiên, kết quả hiển thị tại trình duyệt lại không giống như khi ở cửa sổ Notepad, các dấu xuống hàng (line break) đã bị bỏ qua.

\- Nếu chỉ thực hiện như ba bước vừa rồi thì không thể hiển thị nội dung lên trình duyệt một cách chuyên nghiệp, có bố cục, có định dạng và cấu trúc theo ý muốn. Để làm được điều này, chúng ta cần sử dụng tới một công cụ để hiển thị nội dung lên trình duyệt, đó chính là HTML. Nội dung ở đây có thể là văn bản, hình ảnh, video, quy trình xử lý nghiệp vụ.

Vì vậy, bước tiếp theo sẽ bổ sung thêm một số thứ vào tập tin index.html, để biến nó trở thành một tài liệu HTML thực thụ.

7.2 Cấu trúc cơ bản của một tài liệu HTML

Chúng ta sẽ bắt đầu bằng một số khái niệm cơ bản.

Thẻ HTML là gì?

Thẻ HTML (HTML tag) là các từ khóa (keyword), được sử dụng để báo cho trình duyệt biết cách hiển thị các nội dung. Trình duyệt sẽ không hiển thị các từ khóa này ra ngoài giao diện. Thẻ HTML thường gồm hai phần: thẻ mở (opening tag, start tag) và thẻ đóng (closing tag, end tag).

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg387_FiMuzl_43ZYdvKCcEjstmarc22ifjVBMwmp761lOsO-ESTVu6SKNpjFaTC5zCJPOvaX8xdfdYT-3rC7AWpnfuvWDJ6tYnRbPWkhPmDLjZvuBdmIMj9E8aDRfMyD9mmWxVk1lgYGs/w400-h188/html1.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg387_FiMuzl_43ZYdvKCcEjstmarc22ifjVBMwmp761lOsO-ESTVu6SKNpjFaTC5zCJPOvaX8xdfdYT-3rC7AWpnfuvWDJ6tYnRbPWkhPmDLjZvuBdmIMj9E8aDRfMyD9mmWxVk1lgYGs/s698/html1.jpg)

Như bạn đã biết, HTML là ngôn ngữ “đánh dấu” (markup). Đánh dấu nghĩa là sao: là dùng các thẻ để đánh dấu “chỗ này là tiêu đề, chỗ khác là một đoạn văn bản, chỗ này sẽ hiển thị hình ảnh, chỗ khác sẽ hiển thị một video”. Đây chính là ý nghĩa của chữ “đánh dấu” trong khái niệm HTML.

Nhìn lại cú pháp của thẻ HTML sẽ thấy, thẻ mở và thẻ đóng có “tên thẻ” giống nhau, chỉ khác nhau là trong thẻ đóng có thêm dấu xuyệt “/” (forward-slash). Ví dụ: \<html>\</html>, hoặc \<p>\</p>. Đừng nhầm dấu xuyệt (/) với dấu xuyệt ngược (\\) (backslash).

Khi lập trình, nên viết tên thẻ ở dạng chữ thường, mặc dù trình duyệt không phân biệt chữ hoa và chữ thường. Ví dụ, nên viết thẻ là \<strong> thay vì \<Strong> hoặc \<STRONG>. Khi viết thẻ mở thì viết luôn thẻ đóng, để tránh quên thẻ đóng, dễ sinh ra lỗi.

Phần tử HTML là gì?

Như vậy, với cặp thẻ HTML, chúng ta đã tạo ra được một cái “thùng rỗng”, giờ chỉ việc bỏ nội dung vào giữa cặp thẻ này để tạo ra các phần tử HTML.

Hình dưới đây là cú pháp một phần tử HTML thông thường (gọi là phần tử HTML thông thường vì còn có các phần tử HTML đặc biệt),

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPxwmZ-9lpbVqko8FdwA4w8stYJJKBUCgCqDfGk4Epm5M-YoDVPPn-tzqV6YiOYG95arQDG8EZ0RCKa1_m4Vsqh3lEJ9YyFF99XzqmhssTkXmVgjYA_wTZEWNzdODGT8t4BuEclL_-xOo/w400-h140/html2.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPxwmZ-9lpbVqko8FdwA4w8stYJJKBUCgCqDfGk4Epm5M-YoDVPPn-tzqV6YiOYG95arQDG8EZ0RCKa1_m4Vsqh3lEJ9YyFF99XzqmhssTkXmVgjYA_wTZEWNzdODGT8t4BuEclL_-xOo/s754/html2.jpg)

Phần tử HTML (HTML element) là thành phần cơ bản để tạo ra tài liệu HTML. Như vậy, tài liệu HTML, hay mã nguồn của trang web tĩnh chẳng qua là việc sắp xếp, tập hợp rất nhiều các phần tử HTML.

Một phần tử HTML (thường) sẽ bắt đầu là thẻ mở, tới phần nội dung, và cuối cùng là thẻ đóng.

Thẻ HTML và phần tử HTML có phải là một?

Rõ ràng, thẻ HTML (HTML tag) và phần tử HTML (HTML element) là hai khái niệm khác nhau, tuy thực tế, mọi người vẫn hay sử dụng để thay thế cho nhau.

Nói chung, cả hai đều là những thứ để tạo ra một trang web. Tuy nhiên, thẻ HTML là thành phần để tạo ra phần tử HTML.

7.2 Cấu trúc cơ bản của tài liệu HTML

Chúng ta cùng tìm hiểu xem Cấu trúc cơ bản của một tài liệu HTML gồm những gì, được tổ chức như thế nào?

Xem hình minh họa Cấu trúc cơ bản của một tài liệu HTML5,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCQmRvnlS5YD3D6d702cLcYdfWgL0QxPhB4Z-KPbqD496d-r2PEKQ5_HgFk8FiIFHt4S8fWfx55nBEQLfzPqtM_0Fk5hdjTdVGsbFJpLhTHbYU848o_OLPa1K-wo4Oywbajj71ryz3N3k/w400-h364/html3.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCQmRvnlS5YD3D6d702cLcYdfWgL0QxPhB4Z-KPbqD496d-r2PEKQ5_HgFk8FiIFHt4S8fWfx55nBEQLfzPqtM_0Fk5hdjTdVGsbFJpLhTHbYU848o_OLPa1K-wo4Oywbajj71ryz3N3k/s490/html3.jpg)

Diễn giải hình trên,

Một tài liệu HTML luôn được bắt đầu bằng dòng khai báo, mục đích là để cho trình duyệt biết được tài liệu bên dưới được viết bằng HTML phiên bản bao nhiêu. Từ đó, trình duyệt sẽ dùng đặc tả (specification) tương ứng để biên dịch mã HTML. Từ khóa để khai báo là <!DOCTYPE>, đây không phải là một thẻ HTML, bạn có để ý thấy dấu “!” không? các thẻ HTML sẽ không có dấu “!” này. DOCTYPE là ghép của 2 từ DOCument và TYPE, nghĩa là LOẠI TÀI LIỆU.

Ví dụ,

\- Nếu tài liệu được viết bằng HTML5 thì sẽ khai báo là:

<!DOCTYPE html>

\- Nếu tài liệu được viết bằng HTML 4.01 Strict thì sẽ khai báo là:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

Sau phần khai báo, đến phần tử html, toàn bộ tài liệu HTML sẽ được chứa trong phần tử này. Phần tử html được gọi là phần tử gốc (root element), vì nó chứa tất cả các phần tử khác của tài liệu, và nó không nằm trong bất kì phần tử nào.

Bên trong phần tử html có hai phần tử con là phần tử head và phần tử body. Phần tử head và body giúp chia một tài liệu HTML thành hai phần riêng biệt. Trong đó, phần tử head chứa các thông tin mô tả về chính tài liệu này, ví dụ tiêu đề (title), tập tin định dạng (CSS), đoạn mã JavaScript. Các thông tin trong phần tử head không được hiển thị ra cửa sổ trình duyệt. Phần tử body chứa toàn bộ nội dung mà chúng ta muốn hiển thị ra cửa sổ trình duyệt.

Trong phần head có phần tử title, phần tử này sẽ chứa tiêu đề của trang web, nó sẽ xuất hiện trên thanh tiêu đề của trình duyệt. Phần tử title bắt buộc phải nằm trong phần tử head.

Chúng ta sẽ làm tiếp “Bước 4” để có được trang web đầu tiên.

Bước 4. Tạo một trang web thực sự

Bổ sung thêm cấu trúc của một tài liệu HTML vào tập tin index.html, để nó trở thành một tài liệu HTML (trang web) thực thụ. Lúc này tập tin index.html sẽ như sau:

<!DOCTYPE html>

\<html>

\<head>

\<title>Trang web dau tien\</title>

\</head>

\<body>

NGAY DAU TIEN DI HOC

Ngay dau tien di hoc

Me dat tay den truong

Em vua di vua khoc

Me do danh ben em

Tac gia: Vien Phuong

\</body>

\</html>

Lưu lại tập tin index.html, mở lại tập tin này bằng trình duyệt và xem kết quả có thay đổi gì không?

Bạn sẽ thấy không có gì thay đổi, ngoại trừ thanh tiêu đề của trang web bây giờ sẽ là “Trang web dau tien”, chúng ta có thể thay đổi nội dung trong phần tử title để xem sự thay đổi trên thanh tiêu đề của trình duyệt. Nhớ lưu lại sự thay đổi tại tập tin index.html và làm tươi/tải lại trang web (refresh, reload) trên trình duyệt, để thấy sự thay đổi.

HTML là văn bản thô, và cũng là một tài liệu (document), mời bạn đọc thêm về 2 khái niệm này:

Văn bản thô là gì

Văn bản thô (plain text hay unformatted text) là văn bản ở dạng tự nhiên nhất, không bao gồm thông tin định dạng. Tài liệu word là văn bản đã bao gồm thông tin định dạng, do vậy đó không phải là văn bản thô. Ví dụ, văn bản tạo bằng Notepad hoặc các Text Editor/code editor/IDE để làm web là văn bản thô.

Văn bản thô là nguyên liệu để tạo ra mã nguồn các trang web (tài liệu HTML).

Ví dụ một đoạn văn bản thô,

\<head>

\<title>My webpage\</title>

\</head>

Tài liệu là gì?

Tài liệu (document) là vật mang tin, được hình thành trong quá trình hoạt động của cơ quan, tổ chức, cá nhân.

Các loại tài liệu: văn bản, dự án, bản vẽ thiết kế, bản đồ, công trình nghiên cứu, sổ sách, biểu thống kê; âm bản, dương bản phim, ảnh, vi phim; băng, đĩa ghi âm, ghi hình; tài liệu điện tử; bản thảo tác phẩm văn học, nghệ thuật; sổ công tác, nhật ký, hồi ký, bút tích, tài liệu viết tay; tranh vẽ hoặc in; ấn phẩm và vật mang tin khác.

## 7.3 Thêm cấu trúc và ngữ nghĩa cho nội dung

HTML có hai chức năng chính, một là tạo ra bố cục hay cấu trúc (structure) cho trang web, hai là tạo ngữ nghĩa (meaning, semantic) cho nội dung.

Tạo bố cục chính là tạo ra phần nội dung cho trang web, ví dụ trang web sẽ gồm: tiêu đề, logo, menu, nội dung chính, phần bên phải, bên trái, phần chân trang.

Tạo ra ngữ nghĩa cho nội dung chính là ý nghĩa của các thẻ bạn sử dụng. Ví dụ: tiêu đề cấp một (\<h1>), tiêu đề cấp hai (\<h2>), đoạn văn bản (\<p>), danh sách (\<ul>).

Việc sắp xếp lại vị trí của các nội dung, chia cột, tạo màu sắc, hiệu ứng là chức năng của CSS chứ không phải của HTML.

Bởi vậy, công việc của lập trình viên là phải lựa chọn phần tử HTML phù hợp nhất để bọc lại các phần nội dung, sao cho nó có cấu trúc phù hợp và phản ánh tốt nhất ngữ nghĩa của nó. Ví dụ, nếu nội dung ở dạng bảng thì phải chọn phần tử table để bọc lại nội dung đó, chứ không thể bọc nó bằng phần tử danh sách (list).

Để hiển thị nội dung có cấu trúc, bên cạnh việc lựa chọn phần tử phù hợp thì lập trình viên còn phải sắp xếp, bố trí các phần tử sao cho hợp lý, hiểu nôm na là tạo bố cục (outline), nghĩa là các phần tử nào sẽ đặt cạnh nhau, phần tử nào sẽ lồng vào nhau. Cấu trúc của một tài liệu HTML chính là DOM (Document Object Model), bạn sẽ tìm hiểu về DOM ở các phần sau.

Khi nội dung đã có cấu trúc phù hợp, người lập trình sẽ dễ dàng thực hiện việc trang trí cho các phần tử bằng CSS hoặc lập trình tương tác với các phần tử bằng JavaScript.

Chúng ta sẽ tiếp tục làm Bước 5 để tạo trang web đơn giản.

Bước 5. Tạo cấu trúc cho phần nội dung

Ở Bước 4, bạn đã tạo được trang web thực sự, với cấu trúc cơ bản của một tài liệu HTML. Tuy nhiên, phần nội dung của trang web (đoạn thơ) vẫn chưa được đặt vào trong các phần tử HTML phù hợp. Điều này không được khuyến khích trong thực tế, vì nó tạo ra tình trạng không thể định dạng và không thể kiểm soát được sự xuất hiện của nó ở cửa sổ trình duyệt.

Vì vậy, công việc của phần này là tìm các phần tử HTML phù hợp để bao lại phần nội dung, vừa để tạo ra cấu trúc cho phần nội dung, vừa để tiện cho việc trang trí hoặc lập trình tương tác về sau. Đây cũng công việc chính của người làm HTML: chọn phần tử HTML phù hợp để biểu diễn nội dung.

\- Mở tập tin index.html bằng Notepad

\- Đặt dòng chữ NGAY DAU TIEN DI HOC vào trong phần tử h1, hay nói cách khác là dùng thẻ \<h1> để bọc lại dòng chữ này. Phần tử h1 được sử dụng để tạo ra tiêu đề mức 1, h1 là viết tắt của heading level 1. Hiểu nôm na, nội dung nào được bọc bằng thẻ \<h1> thì trình duyệt sẽ hiểu đây là tiêu đề mức cao nhất, vì vậy nó sẽ hiển thị nội dung này với phông chữ lớn, in đậm.

\- Dùng thẻ \<p> để bọc lại mỗi câu thơ và dòng thông tin về tác giả, p là viết tắt của paragraph (đoạn văn bản)

\- Dùng thẻ \<em> bọc lại tên tác giả, để nhấn mạnh tên tác giả, em là viết tắt của emphasis.

Lúc này tập tin index.html sẽ như sau:

<!DOCTYPE html>

\<html>

\<head>

\<title>Trang web dau tien\</title>

\</head>

\<body>

\<h1>NGAY DAU TIEN DI HOC\</h1>

\<p>Ngay dau tien di hoc\</p>

\<p>Me dat tay den truong\</p>

\<p>Em vua di vua khoc\</p>

\<p>Me do danh ben em\</p>

\<p>Tac gia: \<em>Vien Phuong\</em>\</p>

\</body>

\</html>

Lưu lại tập tin index.html, và ra ngoài trình duyệt để xem kết quả, sẽ thấy đoạn thơ được hiển thị có bố cục tốt hơn, tên bài thơ được in đậm, mỗi câu thơ nằm trên một hàng, tên tác giả được in nghiêng.

\[Kết quả\]

NGAY DAU TIEN DI HOC

Ngay dau tien di hoc

Me dat tay den truong

Em vua di vua khoc

Me do danh ben em

Tac gia: Vien Phuong

7.4 Phần tử kiểu block và inline

Như đã biết, phần tử body sẽ chứa toàn bộ nội dung được hiển thị ra màn hình. Nghĩa là, phần tử body sẽ chứa tất cả các phần tử tạo ra nội dung trang web. Như vậy, phần tử body là phần tử cha, trong nó sẽ có các phần tử con. Chúng ta sẽ hiểu thêm về quan hệ cha-con khi tìm hiểu về DOM.

Cứ tưởng tượng, phần tử body chính là một hình chữ nhật lớn, có chiều rộng đúng bằng chiều rộng của cửa sổ trình duyệt, chiều dài không hạn chế, hình chữ nhật này được chia thành các hàng, dùng để chứa các phần tử con, mỗi phần tử con cũng là một hình chữ nhật, nhưng nhỏ hơn.

Mặc định, mỗi phần tử HTML sẽ thuộc một trong hai kiểu hiển thị là block (kiểu khối) hoặc inline (kiểu nội tuyến, trong hàng).

Hình sau minh họa hai kiểu hiển thị block và inline,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgky6-Ay5fyzczVLbgvhFTyMnsq9UfZf5ROkwTvSzpGNf_Cul4akZdh6ccfqH71a-Wfa_w5PjkOZeTxHqaS_YRT2UzP_JOc_PuVOT_gPqQVknjGpbbMOgNGuvA8jR2FL5L7jk7VkzI3sAregspW0XsOS_sY9JxIYb3lUjngsIA8FGS6C48b0lZLdHRy7vc/w400-h174/block_inlne.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgky6-Ay5fyzczVLbgvhFTyMnsq9UfZf5ROkwTvSzpGNf_Cul4akZdh6ccfqH71a-Wfa_w5PjkOZeTxHqaS_YRT2UzP_JOc_PuVOT_gPqQVknjGpbbMOgNGuvA8jR2FL5L7jk7VkzI3sAregspW0XsOS_sY9JxIYb3lUjngsIA8FGS6C48b0lZLdHRy7vc/s956/block_inlne.jpg)

Hiển thị kiểu block

Phần tử kiểu block, khi hiển thị luôn chiếm toàn bộ chiều ngang khả dụng (là chiều ngang của phần tử chứa nó). Ví dụ, một phần tử nằm ngay sau phần tử body sẽ luôn chiếm toàn bộ một dòng của cửa sổ trình duyệt.

Một số phần tử (thẻ) HTML có kiểu hiển thị block gồm,

| \<address> | \<article> | \<aside> | \<blockquote> | \<canvas> | \<dd> |
| --- | --- | --- | --- | --- | --- |
| \<div> | \<dl> | \<dt> | \<fieldset> | \<figcaption> | \<figure> |
| \<footer> | \<form> | \<h1>-\<h6> | \<header> | \<hr> | \<li> |
| \<main> | \<nav> | \<noscript> | \<ol> | \<output> | \<p> |
| \<pre> | \<section> | \<table> | \<tfoot> | \<ul> | \<video> |

Hiển thị kiểu inline

Phần tử kiểu inline (inline-level) khi hiển thị sẽ không chiếm hết hết chiều ngang khả dụng của phần tử chứa nó, mà chỉ chiếm chiều ngang vừa đủ để hiển thị nó. Khác phần tử inline sẽ sắp xếp liên tiếp nhau, cho tới khi nào hết chiều ngang của phần tử chứa.

Một số phần tử (thẻ) HTML có kiểu hiển thị inline,

| [\<a>](https://www.w3schools.com/tags/tag_a.asp) | [\<abbr>](https://www.w3schools.com/tags/tag_abbr.asp) | [\<acronym>](https://www.w3schools.com/tags/tag_acronym.asp) | [\<b>](https://www.w3schools.com/tags/tag_b.asp) | [\<bdo>](https://www.w3schools.com/tags/tag_bdo.asp) | [\<big>](https://www.w3schools.com/tags/tag_big.asp) |
| --- | --- | --- | --- | --- | --- |
| [\<br>](https://www.w3schools.com/tags/tag_br.asp) | [\<button>](https://www.w3schools.com/tags/tag_button.asp) | [\<cite>](https://www.w3schools.com/tags/tag_cite.asp) | [\<code>](https://www.w3schools.com/tags/tag_code.asp) | [\<dfn>](https://www.w3schools.com/tags/tag_dfn.asp) | [\<em>](https://www.w3schools.com/tags/tag_em.asp) |
| [\<i>](https://www.w3schools.com/tags/tag_i.asp) | [\<img>](https://www.w3schools.com/tags/tag_img.asp) | [\<input>](https://www.w3schools.com/tags/tag_input.asp) | [\<kbd>](https://www.w3schools.com/tags/tag_kbd.asp) | [\<label>](https://www.w3schools.com/tags/tag_label.asp) | [\<map>](https://www.w3schools.com/tags/tag_map.asp) |
| [\<object>](https://www.w3schools.com/tags/tag_object.asp) | [\<q>](https://www.w3schools.com/tags/tag_q.asp) | [\<samp>](https://www.w3schools.com/tags/tag_samp.asp) | [\<script>](https://www.w3schools.com/tags/tag_script.asp) | [\<select>](https://www.w3schools.com/tags/tag_select.asp) | [\<small>](https://www.w3schools.com/tags/tag_small.asp) |
| [\<span>](https://www.w3schools.com/tags/tag_span.asp) | [\<strong>](https://www.w3schools.com/tags/tag_strong.asp) | [\<sub>](https://www.w3schools.com/tags/tag_sub.asp) | [\<sup>](https://www.w3schools.com/tags/tag_sup.asp) | [\<textarea>](https://www.w3schools.com/tags/tag_textarea.asp) | [\<time>](https://www.w3schools.com/tags/tag_time.asp) |
| [\<tt>](https://www.w3schools.com/tags/tag_tt.asp) | [\<var>](https://www.w3schools.com/tags/tag_var.asp) |  |  |  |  |

Hình dưới đây minh họa kiểu hiển thị của các phần tử trong trang index.html,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX1AydhpKnii2gxpP5WAFmYZVNejWmsUO6vYAUIxrC-oH-MwkGJS8zmxExWAhiqOxJBlx_AkJ7_wIWq_MV9qGQWakTDRS3xC11-BFyiMWZGP1p59jYw7tAsjD65e0pVbaGwLP_2D4dD_c5Qf_a29bKxCJZr0axS2CpSFDTSWRFD6zjyaGS-Z4Zct6Z1Rc/w400-h138/ketquaBlock.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX1AydhpKnii2gxpP5WAFmYZVNejWmsUO6vYAUIxrC-oH-MwkGJS8zmxExWAhiqOxJBlx_AkJ7_wIWq_MV9qGQWakTDRS3xC11-BFyiMWZGP1p59jYw7tAsjD65e0pVbaGwLP_2D4dD_c5Qf_a29bKxCJZr0axS2CpSFDTSWRFD6zjyaGS-Z4Zct6Z1Rc/s899/ketquaBlock.jpg)

Định dạng mặc định của trình duyệt

Như đã biết, nhiệm vụ của HTML là tạo cấu trúc và ngữ nghĩa cho nội dung. Tuy nhiên, quan sát trang index.html trên trình duyệt, sẽ thấy nội dung nằm trong phần tử h1 có phông chữ lớn, nét đậm, nội dung nằm trong phần tử p có phông chữ nhỏ hơn, nội dung nằm trong phần tử em được in nghiêng. Vậy thông tin định dạng này ở đâu ra? Đó chính là thông tin định dạng mặc định của trình duyệt (user agent style sheets). Khi bạn học về CSS sẽ tạo các định dạng mới để thay thế cho định dạng mặc định này.

7.5 Xem và đọc thêm

Sử dụng các từ khóa này để tìm kiếm trong chatbot, Google hoặc Youtube để đọc và xem thêm: HTML căn bản, HTML tutorial, phần tử kiểu inline, inline element, phần tử kiểu block, block element.

## 7.6 Bài tập và câu hỏi

Bài tập

(Không nên sử dụng Google hoặc AI để dịch toàn bộ các bài tập bằng tiếng Anh ra tiếng Việt, mà nên đọc trực tiếp bằng tiếng Anh, nếu gặp từ mới thì chỉ dịch chính từ đó ra tiếng Việt để hiểu. Mục đích để rèn khả năng đọc hiểu tài liệu tiếng Anh).

**Bài tập 7.1:** Viết lại các đoạn mã trong phần lý thuyết.

**Bài tập 7.2:** Entering content

1\. Type the home page content below into the new document in your text editor (e.g Notepad). Copy it exactly as you see it here, keeping the line breaks the same.

Black Goose Bistro

The Restaurant

The Black Goose Bistro offers casual lunch and dinner fare in a relaxed atmosphere. The menu changes regularly to highlight the freshest local ingredients.

Catering

You have fun. We'll handle the cooking. Black Goose Catering can handle events from snacks for a meetup to elegant corporate fundraisers.

Location and Hours

Seekonk, Massachusetts;

Monday through Thursday 11am to 9pm; Friday and Saturday, 11am to midnight

2\. Select “Save” or “Save as” from the File menu of text editor to save document into harddisk. The first thing you need to do is create a new folder that will contain all of the files for the site. The technical name for the folder that contains everything is the local root directory. Name the new folder bistro, and save the text file as index.html in it. The filename needs to end in.html to be recognized by the browser as a web document.

3\. Let’s take a look at index.html in a browser. Double-click the filename in the File Explorer to launch your default browser, or right-click the file for the option to open it in the browser of your choice.

4\. You should see some text on the screen.

\[Result\]

Black Goose Bistro The Restaurant The Black Goose Bistro offers casual lunch and dinner fare in a relaxed atmosphere. The menu changes regularly to highlight the freshest local ingredients. Catering You have fun. We'll handle the cooking. Black Goose Catering can handle events from snacks for a meetup to elegant corporate fundraisers. Location and Hours Seekonk, Massachusetts; Monday through Thursday 11am to 9pm; Friday and Saturday, 11am to midnight

**Bài tập 7.3:** Adding minimal structure

1\. Open the new index.html document if it isn’t open already and add the DOCTYPE declaration:

<!DOCTYPE html>

2\. Put the entire document in an HTML root element by adding an \<html> start tag after the DOCTYPE and an \</html> end tag at the very end of the text.

3\. Next, create the document head that contains the title for the page. Insert \<head> and \</head> tags before the content. Within the head element, add information about the character encoding \<meta charset="utf-8">, and the title, “Black Goose Bistro”, surrounded by opening and closing \<title> tags.

4\. Finally, define the body of the document by wrapping the text content in \<body> and \</body> tags. When you are done, the source document should look like this (the markup is shown in color to make it stand out):

<!DOCTYPE html>

\<html>

\<head>

\<meta charset="utf-8">

\<title>Black Goose Bistro\</title>

\</head>

\<body>

Black Goose Bistro

The Restaurant

The Black Goose Bistro offers casual lunch and dinner fare in a relaxed atmosphere. The menu changes regularly to highlight the freshest local ingredients.

Catering

You have fun. We'll handle the cooking. Black Goose Catering can handle events from snacks for a meetup to elegant corporate fundraisers.

Location and Hours

Seekonk, Massachusetts;

Monday through Thursday 11am to 9pm; Friday and Saturday, 11am to midnight

\</body>

\</html>

5\. Save the document in the bistro directory, so that it overwrites the old version. Open the file in the browser or hit Refresh or Reload if it is open already.

\[Result\]

Black Goose Bistro The Restaurant The Black Goose Bistro offers casual lunch and dinner fare in a relaxed atmosphere. The menu changes regularly to highlight the freshest local ingredients. Catering You have fun. We'll handle the cooking. Black Goose Catering can handle events from snacks for a meetup to elegant corporate fundraisers. Location and Hours Seekonk, Massachusetts; Monday through Thursday 11am to 9pm; Friday and Saturday, 11am to midnight

Bài tập 7.4: Defining text elements

1\. Open the document index.html in your text editor, if it isn’t open already.

2\. The first line of text, “Black Goose Bistro,” is the main heading for the page, so we’ll mark it up as a Heading Level 1 (h1) element. Put the opening tag, \<h1>, at the beginning of the line and the closing tag, \</h1>, after it, like this:

\<h1>Black Goose Bistro\</h1>

3\. Our page also has three subheads. Mark them up as Heading Level 2 (h2) elements in a similar manner. I’ll do the first one here; you do the same for “Catering” and “Location and Hours.”

\<h2>The Restaurant\</h2>

4\. Each h2 element is followed by a brief paragraph of text, so let’s mark those up as paragraph (p) elements in a similar manner. Here’s the first one; you do the rest:

\<p>The Black Goose Bistro offers casual lunch and dinner fare in a relaxed atmosphere. The menu changes regularly to highlight the freshest local ingredients.\</p>

5\. Finally, in the Catering section, I want to emphasize that visitors should just leave the cooking to us. To make text emphasized, mark it up in an emphasis element (em) element, as shown here:

\<p>You have fun. \<em>We'll handle the cooking.\</em> Black Goose Catering can handle events from snacks for a meetup to elegant corporate fundraisers.\</p>

6\. Now that we’ve marked up the document, let’s save it as we did before, and open (or reload) the page in the browser. You should see a page that looks much like the one in the following figure. If it doesn’t, check your markup to be sure that you aren’t missing any angle brackets or a slash in a closing tag.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpds0pz8pLcVYGPUGdyikw22k8j3oLFy4-tHtyLMcmN_H2XTjIvQ-OJo0nEFdofiMpYhDUtjQdV8hOPCgSvf1QtfDI98SCZ1r7j8kys4_jr7zWAbXE_hmVIjZgDGRWgK6w8dRCUPIegDVPOU-wqGwRt-BN3qzHV7DElH9NCVOMJ2kazxV9FZd-2dH0uMY/w400-h259/BaiTap7.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpds0pz8pLcVYGPUGdyikw22k8j3oLFy4-tHtyLMcmN_H2XTjIvQ-OJo0nEFdofiMpYhDUtjQdV8hOPCgSvf1QtfDI98SCZ1r7j8kys4_jr7zWAbXE_hmVIjZgDGRWgK6w8dRCUPIegDVPOU-wqGwRt-BN3qzHV7DElH9NCVOMJ2kazxV9FZd-2dH0uMY/s999/BaiTap7.jpg)

### Câu hỏiCâu 7a: A static web page (sometimes called a flat page or a stationary page) is a web page that is delivered to the user's web browser exactly as stored, in contrast to \_\_\_\_\_\_\_\_\_\_ which are generated by a web application.A. dynamic web pagesB. web rootC. InternetD. databaseCâu 7b: Một phần tử HTML (thông thường) gồm các thành phần sau:A. thẻ mở, thẻ đóngB. thẻ mở, nội dungC. thẻ mở, nội dung, thẻ đóngD. thẻ đóng, nội dungCâu 7c: Cấu trúc cơ bản của một tài liệu HTML gồm:A. Phần khai báo (doctype), phần tử html, phần tử head, phần tử title, phần tử body B. Phần khai báo (doctype), phần tử html, phần tử header, phần tử title, phần tử bodyC. Phần khai báo (doctype), phần tử html, phần tử head, phần tử link, phần tử bodyD. Phần khai báo (doctype), phần tử html, phần tử p, phần tử title, phần tử bodyCâu 7d: Phát biểu nào sau đây là hợp lý:A. HTML tạo ra cấu trúc và ngữ nghĩa cho phần nội dung trang webB. HTML thực hiện việc trang trí cho trang webC. HTML xử lý các tương tác của người dùng trên giao diện webD. HTML vừa tạo ra phần nội dung vừa thực hiện trang trí cho trang webCâu 7e: Phát biểu nào đúng khi nói về “<!DOCTYPE html>”?A. Là một thẻ HTMLB. Là một khai báo trong tài liệu HTMLC. Là một phần tử HTMLD. Là một chú thích trong HTML

\-----