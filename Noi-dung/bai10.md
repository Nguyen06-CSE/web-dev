Bài trước: HTML (27) - [Tập làm dự án (đưa website lên mạng)](https://legiacong.blogspot.com/2023/03/web-front-end-27-html-tap-lam-du-ua.html)

\-----

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-jg5DIM6AnE9__eFJdSBDGQ3dcRRwnut_pUuErGo82yqvwMJFdQQT6qCi7hSRheghE-JLq80jJXn8QVUHdn2FN_jU7NwJPfniZ4rSwlc-Y0qekx_rycwei49D7wOnbD8MGm4S-Sg9W1QeGdQS-vNeJ3nyuuhTbXRzIwq5saWTnrnSEv6YbSiPIinWbVI/w310-h400/bia.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-jg5DIM6AnE9__eFJdSBDGQ3dcRRwnut_pUuErGo82yqvwMJFdQQT6qCi7hSRheghE-JLq80jJXn8QVUHdn2FN_jU7NwJPfniZ4rSwlc-Y0qekx_rycwei49D7wOnbD8MGm4S-Sg9W1QeGdQS-vNeJ3nyuuhTbXRzIwq5saWTnrnSEv6YbSiPIinWbVI/s852/bia.jpg)

## Lời nói đầu

Sau khi học xong cuốn sách đầu tiên, LẬP TRÌNH WEB, Phần 1 - HTML căn bản, bạn đã có hiểu biết nhất định về: con đường nghề nghiệp, nghề làm web, cách học, khả năng sử dụng tiếng Anh. Đặc biệt, bạn cũng đã được trang bị các kiến thức cơ bản về HTML, biết sử dụng HTML để tạo ra nội dung trang web, biết đưa trang web lên Internet để mọi người có thể truy cập.

Như đã biết, trong lập trình web, HTML được sử dụng để:

\- Hiển thị tất cả các loại nội dung của trang web, ví dụ: văn bản, hình ảnh, âm thanh, bản đồ

\- Tạo ra ngữ nghĩa cho tài liệu HTML, giúp tài liệu HTML có cấu trúc rõ ràng, đúng đặc tả

\- Thông qua form của HTML, chúng ta có thể thu thập thông tin từ người dùng; gửi dữ liệu từ client về server

Như vậy, với HTML, chúng ta đã tạo ra được nội dung cho trang web. Tuy nhiên, bạn sẽ thấy, nội dung trang web được hiển thị khá đơn điệu và nhàm chán. Trang web không được chia cột, không có màu sắc, không có hiệu ứng.

Để hiển thị trang web một cách chuyên nghiệp, có bố cục, có màu sắc, có các hiệu ứng ấn tượng thì chúng ta phải sử dụng tới công cụ để định dạng và trang trí. Công cụ đó chính là CSS.

Đây là cuốn sách thứ hai trong loạt các cuốn sách về lập trình web.

Sách được viết theo kiểu tự học, với mỗi chủ đề: luôn bắt đầu là các kiến thức căn bản, các khái niệm, các đoạn mã thực hành minh họa; cuối cùng là các bài tập và câu hỏi.

Sách cũng có các câu hỏi, bài thực hành bằng tiếng Anh, giúp bạn từng bước nâng cao khả năng đọc tài liệu tiếng Anh.

Nội dung của cuốn sách này:

\- Tổng quan về CSS

\- Định dạng văn bản

\- Màu sắc

\- Định dạng nền

\- Bố cục trang web

\- Các chủ đề mở rộng

\- Tập làm dự án

Bạn cứ yên tâm, AI càng phát triển thì bạn nào có kiến thức nền tảng càng tốt, và trải nghiệm làm việc càng nhiều, thì càng có lợi thế. Thử tưởng tượng: ai cũng ra lệnh cho AI làm việc được, thì giá trị của bạn sẽ là gì? Là đánh giá được sản phẩm của AI làm ra hay chỉ dừng lại ở việc ra lệnh? Nếu không có chuyên môn sâu: bạn không thể hiểu được AI đã tạo ra cái gì, và bạn có dám dùng sản phẩm đó hay không?

Cuốn sách tiếp theo bạn nên học là LẬP TRÌNH WEB, Phần 3 - JavaScript căn bản.

Dù đã cố gắng, nhưng tài liệu này chắc chắn còn hạn chế về kiến thức, kỹ năng và nhận định. Mong bạn, luôn đọc trong tâm thế hoài nghi.

Tác giả.

## 1\. Tổng quan về CSS

Trong phần này, bạn sẽ tìm hiểu về:

\- CSS là gì?

\- Sự kế thừa

\- Kĩ thuật xếp lớp

\- Định chuẩn CSS

\- Box model

\- Đơn vị đo trong CSS

## 1.1 CSS là gì?

CSS là viết tắt của 3 từ tiếng Anh: Cascading Style Sheets, dịch sát nghĩa là *mã định dạng theo kĩ thuật xếp lớp*. Bạn sẽ tìm hiểu về *kỹ thuật xếp lớp* (cascade) ở các phần sau.

CSS là một ngôn ngữ định kiểu (là định dạng kiểu dáng), được sử dụng để mô tả kiểu hiển thị (presentation) cho các phần tử trong tài liệu HTML hoặc XML. CSS chỉ dẫn một phần tử HTML sẽ được hiển thị như thế nào trên màn hình, trên giấy hoặc các phương tiện hiển thị khác.

Tổ chức W3C quản lý và đưa ra các đặc tả cho CSS.

Học CSS là học cú pháp của ngôn ngữ này; học cách tìm và định dạng các phần tử HTML, để chúng ta có được trang web với cách bố trí, hiển thị, màu sắc, các hiệu ứng theo ý muốn.

Lưu ý, từ CSS có khi được sử dụng như là một động từ, ví dụ “bạn hãy CSS cái hình đó đi”. Có khi lại được sử dụng như một danh từ, ví dụ “dùng CSS để định dạng cái hình đó”.

Hiểu đơn giản, bạn dùng HTML để tạo ra phần thô của một căn nhà, sau đó dùng CSS để sơn và trang trí cho ngôi nhà.

Để dễ hiểu, chúng ta sẽ cùng thực hành với CSS.

Muốn thực hành với CSS, bạn chỉ cần một phần mềm viết mã đơn giản (ví dụ Notepad hoặc VS Code) và trình duyệt để hiển thị kết quả. Như trong phần tìm hiểu về trình duyệt web, khi nhận được mã HTML và CSS, Rendering engine (Gecko, Webkit hoặc Blink) sẽ phân tích mã HTML, CSS và hiển thị nội dung của trang web ra màn hình.

Để CSS cho trang web, bạn cần thực hiện ba bước sau:

\- Có sẵn tài liệu HTML, nếu chưa có thì bạn cần tạo ra tài liệu HTML

\- Viết các *chỉ dẫn định dạng* (style rule, gọi tắt là chỉ dẫn) để mô tả cách thức hiển thị cho các phần tử HTML, bạn muốn phần tử sẽ hiển thị ra trình duyệt như thế nào thì mô tả trong các *chỉ dẫn*. Ví dụ mô tả về màu sắc, kích thước, vị trí của phần tử

\- Gắn, hay áp các chỉ dẫn vào tài liệu HTML. Khi trình duyệt hiển thị trang web, nó sẽ dựa vào các chỉ dẫn để định dạng các phần tử HTML

Chúng ta sẽ thực hành từng bước.

***Bước 1. Viết tài liệu HTML***

Mở Notepad và tạo ra tập tin sau:

\[index.html\]

<!DOCTYPE *html* >

\<html>

\<head>

\<meta *charset* ="UTF-8">

\<title>Document\</title>

\</head>

\<body>

\<p>Cu Teo hoc CSS\</p>

\</body>

\</html>

Vậy là bạn đã có phần tử HTML là *\<p>*. Xem kết quả trên trình duyệt sẽ thấy dòng chữ *Cu Teo hoc CSS* có màu đen, cỡ chữ bình thường.

***Bước 2. Viết các chỉ dẫn***

Bạn muốn dòng chữ có màu đỏ và cỡ chữ lớn hơn? Hãy viết chỉ dẫn sau, lưu lại tập tin mã nguồn và xem kết quả:

…

\<title>Document\</title>

**\<style>**

**p {**

**color: red;**

**font-size: 54px;**

**}**

**\</style>**

\</head>

…

Chúng ta cùng xem xét chỉ dẫn sau:

*p {*

*color: red;*

*font-size: 54px;*

*}*

Một chỉ dẫn gồm hai phần là Bộ chọn và Khai báo.

\- Bộ chọn (selector): xác định phần tử hoặc nhóm phần tử sẽ được định dạng

\- Khai báo (declaration): cho biết các phần tử sẽ được định dạng như thế nào

Như ở ví dụ trên,

*\- p* là bộ chọn

\- *{ color: red; font-size: 54px; }* là khai báo

Phần khai báo:

\- Được giới hạn bằng cặp ngoặc nhọn ({})

\- Bên trong ngoặc nhọn là các cặp *thuộc tính: giá trị* (*property: value*)

\- Giữa *thuộc tính* và *giá trị* có một dấu hai chấm (:) và một khoảng trắng

\- Cuối mỗi cặp *thuộc tính: giá trị* là dấu chấm phẩy (;)

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9J5l-ixKbmwcmdKjGGPKSVwra1OFKYCBsYQ2q5tuafDMZBfVlIrImccyNpTiAc_p3ZkWkFuuxTsYzirpqLj1Nnp25Tw_OjtLxODJvfI3vz47gvdMRwdu3dHpPWtf-13F_1xRP3OGDuZ6tFrdaXRlmuNCO4UReIZvIMrgJGmyd_Km5OUnKjvUMEtBc/w400-h203/ChiDanCSs.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9J5l-ixKbmwcmdKjGGPKSVwra1OFKYCBsYQ2q5tuafDMZBfVlIrImccyNpTiAc_p3ZkWkFuuxTsYzirpqLj1Nnp25Tw_OjtLxODJvfI3vz47gvdMRwdu3dHpPWtf-13F_1xRP3OGDuZ6tFrdaXRlmuNCO4UReIZvIMrgJGmyd_Km5OUnKjvUMEtBc/s702/ChiDanCSs.jpg)

**Bộ chọn**

Trong đoạn mã CSS ở ví dụ trên, bộ chọn là phần tử *p*. Đây được gọi là bộ chọn dựa theo loại phần tử (element type), là kiểu bộ chọn cơ bản nhất.

Nội dung trong phần khai báo của mỗi chỉ dẫn sẽ tác động lên tất cả các phần tử *p* trong tài liệu HTML. Ở phần sau sẽ tìm hiểu thêm các bộ chọn phức tạp hơn.

Trong CSS, việc xác định đúng bộ chọn và sử dụng bộ chọn một cách hợp lý là một kỹ năng quan trọng cần để ý.

**Khai báo**

Ở phần trên đã mô tả chi tiết cú pháp của một khai báo. Vì CSS không quan tâm tới các khoảng trắng và dấu xuống hàng dư thừa. Vì vậy với khai báo gồm nhiều cặp *“thuộc tính: giá trị”* thì nên viết mỗi cặp trên một hàng để dễ quan sát mã nguồn.

Nếu bạn viết chỉ dẫn trên một hàng, không có khoảng trắng, chương trình chạy vẫn đúng, nhưng rất khó quan sát mã nguồn, ví dụ:

*p{color:red;font-size:54px;}*

Bạn nên viết theo cách sau:

*p {*

*color: red;*

*font-size: 54px;*

*}*

**Thuộc tính**

Thuộc tính (property) là các yếu tố liên quan đến việc định dạng một phần tử HTML, ví dụ màu chữ, màu nền, kích thước phông chữ, vị trí hiển thị…v.v.

Tên các thuộc tính được quy định sẵn trong đặc tả của CSS. Chúng ta cần phải học để biết ý nghĩa của mỗi thuộc tính. Ví dụ: thuộc tính *color* dùng để thiết lập màu của chữ, thuộc tính *font-size* dùng để thiết lập kích cỡ của chữ.

**Giá trị**

Với mỗi thuộc tính sẽ có các giá trị tương ứng đi kèm. Ví dụ thuộc tính *color* sẽ có các giá trị là tên của các màu (ví dụ *red, green, blue*), thuộc tính *font-size* sẽ có giá trị là kích thước của chữ được tính bằng *px*. Điều quan trọng bạn cần biết là thuộc tính nào đi với giá trị nào.

Tóm lại: với mỗi loại bộ chọn sẽ có các thuộc tính chuẩn đi kèm, và với mỗi thuộc tính sẽ có những giá trị phù hợp, các phần sau sẽ làm quen với một số thuộc tính và giá trị này, đồng thời học cách để sử dụng chúng một cách chính xác và hiệu quả.

Như vậy, bạn đã làm được 2 việc là: viết mã HTML và viết chỉ dẫn định dạng (thường gọi là viết mã CSS). Việc sau cùng là gắn các chỉ dẫn định dạng vào tài liệu HTML, hay còn gọi là áp CSS vào tài liệu HTML.

***Bước 3. Gắn CSS vào tài liệu HTML***

Gắn CSS vào tài liệu HTML chính là việc chỉ cho trình duyệt biết mã CSS đang được để ở đâu? Để khi biên dịch, trình duyệt có thể tìm được mã CSS để định dạng nội dung hiển thị.

Mã CSS có thể để ở đâu?

Bạn có thể để mã CSS ở 3 nơi khác nhau:

\- Để mã CSS ở trong tài liệu HTML

\- Để mã CSS ở ngoài tài liệu HTML

\- Để mã CSS ở trong phần tử HTML

Ứng với 3 nơi để mã CSS, sẽ có 3 cách để chỉ cho trình duyệt tìm được mã CSS là: sử dụng phần tử *\<style>*, sử dụng phần tử *link* và sử dụng thuộc tính *style*.

**Để mã CSS ở trong tài liệu HTML**

Để mã CSS ở trong tài liệu HTML (embedded style sheets), đây chính là cách bạn đã thực hiện ở ví dụ phía trên. Bạn đã viết mã CSS trong tài liệu HTML, cụ thể là trong tập tin index.html.

Bạn đã dùng phần tử \<style> để báo cho trình duyệt biết: mã CSS sẽ đặt ở trong phần tử này. Phần tử \<style> phải được đặt trong phần tử \<head>. Bằng cách này, mã CSS chỉ áp dụng được cho chính tài liệu HTML chứa nó.

**Để mã CSS ở ngoài tài liệu HTML**

Để mã CSS ở ngoài tài liệu HTML (external style sheets) là phương pháp được sử dụng nhiều nhất và có nhiều ưu điểm.

Mã CSS sẽ được viết trong một tập tin riêng, có phần mở rộng là *.css*, tập tin này được liên kết tới một hoặc nhiều tài liệu HTML bằng phần tử *link*. Bằng cách này, với một tập tin CSS có thể áp dụng cho nhiều tài liệu HTML khác nhau.

Ví dụ,

Tại thư mục chứa tập tin index.html, bạn tạo thêm thư mục *css,* trong thư mục *css* tạo tập tin *style.css*.

Trong tập tin *style.css*, viết đoạn mã sau:

body {

background-color: blue;

}

Thực hiện gắn CSS với tài liệu HTML bằng phần tử *link.* Trong tập tin *index.html*, thêm dòng mã sau:

…

\<title>Document\</title>

**\<** **link** ***rel*** **\="** **stylesheet** **"** ***href*** **\="** **css/style.css** **"** **\>**

\<style>

…

Lưu lại các tập tin mã nguồn, mở trình duyệt sẽ thấy trang web có nền màu xanh.

Thuộc tính *rel="stylesheet"* cho biết mối quan hệ giữa tập tin sẽ được liên kết (*style.css*) với tập tin hiện tại (*index.html*) là gì? Trong trường hợp này, *style.css* sẽ là mã định dạng (stylesheet) cho *index.html*. *rel* là viết tắt của relationship.

Thuộc tính *href="css/style.css"* cho biết bị trí của tập tin chứa mã CSS. *href* là viết tắt của *hypertext reference*, nghĩa là tham chiếu tới một siêu văn bản.

**Để mã CSS ở trong phần tử HTML**

Để mã CSS ở trong phần tử HTML (inline style) được thực hiện bằng cách thêm thuộc tính *style* vào thẻ mở (open tag), nội dung mã CSS chính là giá trị của thuộc tính.

Với cách này, mã CSS chỉ áp dụng được cho chính phần tử HTML chứa nó. Bạn nên hạn chế sử dụng cách này, trừ một số trường hợp đặc biệt cần phải ghi đè mã CSS của hai phương pháp trên. Vì việc đưa mã định dạng vào trong phần tử HTML sẽ gây ra rất nhiều khó khăn khi cần thay đổi việc hiển thị của toàn bộ trang web.

Ví dụ, để mã CSS trong phần tử \<p> như sau:

\<body>

\<p *style* ="color: yellow">Cu Teo hoc CSS\</p>

\</body>

Lưu lại mã nguồn, xem kết quả trên trình duyệt sẽ thấy chữ có màu vàng.

*Chú thích trong CSS*

*Trong CSS, nội dung nằm trong cặp dấu /\* \*/ sẽ được hiểu là chú thích. Ví dụ:*

…

\<style>

***/\* định dạng phần tử p \*/***

p {

…

*Khi thực thi đoạn mã CSS, trình duyệt sẽ bỏ qua đoạn mã chú thích. Do vậy, bạn có thể sử dụng chú thích để che đi các đoạn mã trong lúc tìm và sửa lỗi.*

Phần tiếp theo bạn sẽ tìm hiểu một số khái niệm quan trọng của CSS, hiểu các khái niệm này sẽ giúp bạn làm việc với CSS được nhẹ nhàng và chuyên nghiệp. Nếu bạn chưa thể hiểu rõ các khái niệm này cũng không sao, vì trong các bài học kế tiếp sẽ có nhắc lại chúng trong các tình huống cụ thể.

\-----

Bài sau: [CSS (2) - Sự kế thừa, Xếp lớp](https://legiacong.blogspot.com/2023/03/web-front-end-29-css-2-su-ke-thua-xep.html)