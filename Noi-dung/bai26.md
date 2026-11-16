Bài trước: [CSS (14) - Mô hình cái hộp (1)](https://legiacong.blogspot.com/2023/08/css-14-mo-hinh-cai-hop-1.html)

\-----

### 4.1.7 Thuộc tính Display

Nhắc lại một chút về hai kiểu hiển thị quen thuộc, một là kiểu block, hai là kiểu inline. Mặc định, phần tử kiểu block có chiều rộng chiếm trọn một hàng, chiều cao vừa đủ để chứa hết nội dung; phần tử kiểu inline nằm theo hàng, có chiều rộng và chiều cao vừa đủ để chứa hết nội dung. Chúng ta không thể thay đổi được kích thước (width và height) của phần tử kiểu inline.

Mỗi phần tử HTML sẽ có kiểu hiển thị mặc định. Tuy nhiên, chúng ta vẫn có thể thay đổi kiểu hiển thị của một phần tử bằng thuộc tính *display*.

Thuộc tính *display:*

– Giá trị: *inline | block | run-in | flex | grid | flow | flow-root | list-item | table | table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | inline-block | inline-table | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | inline-flex | inline-grid | contents | none*

– Mặc định: *inline*

– Áp dụng: *mọi phần tử*

– Kế thừa: *có*

Thuộc tính *display* sẽ xác định kiểu hiển thị của phần tử, ngoài hai kiểu quen thuộc là block và inline, còn có nhiều kiểu khác như *flex, grid*, *list-item*, *inline-block*, và các kiểu liên quan đến table.

Nói chung, tổ chức W3C không khuyến khích việc thay đổi kiểu hiển thị mặc định của các phần tử. Tuy nhiên, trong nhiều trường hợp, việc thay đổi kiểu hiển thị đã trở thành phổ biến. Ví dụ, kiểu hiển thị mặc định của phần tử *li* là block, nhưng để tạo một menu ngang thì cần thiết lập kiểu hiển thị của *li* là inline. Hoặc kiểu hiển thị mặc định của phần tử *a* là inline, nhưng để có thể thiết lập chiều cao và chiều rộng cho nó thì cần thiết lập kiểu hiển thị là block. Ví dụ,

ul.navigation li { display: inline; }

ul.navigation li a { display: block; }

Lưu ý: việc thay đổi kiểu hiển thị chỉ có ý nghĩa làm thay đổi cách nó được trình bày trên giao diện, chứ không làm thay đổi bản chất kiểu phần tử (block hoặc inline) của nó. Vì vậy, sẽ không thể đặt một phần tử kiểu block vào trong một phần tử kiểu inline, dù đã đổi kiểu hiển thị bằng thuộc tính *display*.

Giá trị *none* của thuộc tính *display* được sử dụng khá phổ biến để cắt bỏ một nội dung nào đó trên giao diện (khi màn hình hiển thị có kích thước nhỏ), tất nhiên trong mã nguồn và khi in nội dung trang kết quả thì vẫn có phần nội dung này. Khác với cách dùng *display: none,* nếu thiết lập một phần tử với *visibility: hidden* thì nội dung không được hiển thị nhưng nó vẫn chiếm một vùng trắng trên giao diện.

Lưu ý: thiết lập *display: none* cho một phần tử nghĩa là không cho hiển thị nội dung lên giao diện chứ không làm giảm dung lượng của mã nguồn, và do đó không thể tăng tốc độ tải trang về máy bằng cách này được.

### 4.1.8 Tạo bóng cho hộp

Ở phần định dạng văn bản, chúng ta đã biết cách tạo bóng cho văn bản bằng thuộc tính *text-shadow*. Để tạo bóng cho hộp (tính từ đường viền vào trong, không tính vùng margin) sẽ sử dụng thuộc tính *box-shadow*, cách làm việc của thuộc tính này khá giống với thuộc tính *text-shadow*.

Thuộc tính *box-shadow*:

– Giá trị: *‘horizontal-offset’ ‘vertical-offset’ ‘blur distance’ ‘spread distance’ color inset | none*

– Mặc định: *none*

– Áp dụng: *mọi phần tử*

– Kế thừa: *không*

Trong đó,

– *horizontal offset* là khoảng dịch của bóng sang phía phải so với hộp ban đầu, nếu giá trị này là âm, bóng sẽ được dịch sang phía trái

– *vertical offset* là khoảng dịch của bóng xuống phía dưới so với hộp ban đầu, nếu giá trị này là âm, bóng sẽ được dịch lên phía trên

– *color*: màu của bóng, nếu bỏ qua giá trị này, bóng sẽ cùng màu với “màu mặt trước” (foreground color) của phần tử

– *blur distance* là khoảng mờ của bóng, giá trị 0 là không có khoảng mờ, giá trị càng cao khoảng mờ càng lớn, đơn vị đo là px

– *spread distance* là độ tràn (khoảng tràn) của bóng, giá trị dương là tràn ra ngoài, giá trị âm là thu gọn vào trong. Dùng để tăng hoặc giảm kích thước của bóng

– *inset* là từ khóa, nếu được thiết lập, bóng sẽ đổ vào phía trong phần tử

Xem hình ví dụ dưới đây. Hình (A) là tạo bóng đơn giản, bóng sẽ dịch phải 5px, dịch xuống 10px so với hộp ban đầu. Hình (B) thêm khoảng mờ 4px. Hình (C) thêm độ tràn 8px. Hình (D) đổ bóng vào phía trong của hộp.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhVO_DG76bI8jG3TWvOWOcFwJsTHgMufhqp5HC_oBFnaYoueIoYIW8xxpqkprYcFlH-s5UhZcDbMUFsnPQ6aTQErgs511IhzO_7ODVx_ChQyDjkIld2-S0ZUhPtg3mulbcx338nR-KlxvHnYsruSs47C5xGNcz4bVXjhrJd2Df66SZKIYFzFG2MFvnal8c=w400-h278)](https://blogger.googleusercontent.com/img/a/AVvXsEhVO_DG76bI8jG3TWvOWOcFwJsTHgMufhqp5HC_oBFnaYoueIoYIW8xxpqkprYcFlH-s5UhZcDbMUFsnPQ6aTQErgs511IhzO_7ODVx_ChQyDjkIld2-S0ZUhPtg3mulbcx338nR-KlxvHnYsruSs47C5xGNcz4bVXjhrJd2Df66SZKIYFzFG2MFvnal8c)

Cũng như thuộc tính *text-shadow*, có thể tạo nhiều bóng cho hộp, mỗi chuỗi giá trị của một bóng ngăn cách bằng dấu phẩy (,), bóng được tạo bởi chuỗi giá trị nằm trước sẽ nằm phía trên của hộp, sau đó đến bóng của các chuỗi tiếp theo.

Ví dụ,

box-shadow: 5px 10px 4px 10px green inset, 5px 10px yellow;

Lưu ý: *text-shadow, box-shadow*, và *gradient* sẽ đòi hỏi nhiều tài nguyên của CPU để xử lý, do đó, sẽ làm giảm tốc độ hiển thị kết quả của trình duyệt, vì vậy không nên lạm dụng quá nhiều các đặc tính này.

### 4.1.9 Xem và đọc thêm

– \[1\] *Jenifer Niederst Robbins, **Learning Web Design**, O’Reilly, 2018, trang 355 - 386*

– \[2\] Box model: https://www.youtube.com/watch?v=OXGznpKZ\_sA&t=4316s

– \[3\] Box shadow: [https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

– \[4\] https://www.youtube.com/watch?v=OXGznpKZ\_sA&t=4316s

### 4.1.10 Bài tập và thực hành

Bài tập 4.1a. Viết lại các đoạn mã trong phần lý thuyết.

Bài tập 4.1b. Bạn có thể tham khảo mã nguồn, hình ảnh ở đây: [https://learningwebdesign.com/5e/materials/](https://learningwebdesign.com/5e/materials/) (vào thư mục con có tên là *ch14*).

Các bước thực hiện:

**Thêm padding**

Trong bài tập này, chúng ta sẽ bắt đầu thêm các thuộc tính cho cái hộp (box) để cải thiện giao diện trang web cho tiệm bánh hư cấu Black Goose Bakery.

Hãy bắt đầu bằng cách làm quen với tài liệu nguồn. Mở tập tin *bakery.html* trong trình duyệt và một trình soạn thảo mã nguồn để quan sát quá trình bạn làm việc. Tập tin định kiểu (style sheet) đã được thêm vào bằng chỉ dẫn *@import* trong phần tử **style**. Tài liệu HTML đã bao gồm các phần header (bao gồm cả phần nav), main, aside, và footer.

\[*bakery.html*\]

<!doctype *html* >

\<html>

\<head>

\<meta *charset* ="UTF-8">

\<title>Black Goose Bakery\</title>

\<meta *name* ="viewport" *content* ="width=device-width, initial-scale=1">

\<link *href* ="https://fonts.googleapis.com/css?family=Stint+Ultra+Expanded" *rel* ="stylesheet">

\<style>

@import **url** (bakery-styles.css);

\</style>

\</head>

\<body>

\<header>

\<nav>

\<ul>

\<li>\<a *href* ="">Menu\</a>\</li>

\<li>\<a *href* ="">News\</a>\</li>

\<li>\<a *href* ="">About\</a>\</li>

\<li>\<a *href* ="">Contact\</a>\</li>

\</ul>

\</nav>

\<h1>\<img *src* ="images/bgb\_logo.png" *alt* ="Black Goose Bakery">\</h1>

\<p>The delicious baked goods you love at Black Goose Bistro...now available to go!\</p>

\</header>

\<main>

\<h2>Fresh from the Oven\</h2>

\<h3>Breads\</h3>

\<p>\<img *src* ="images/bread.png" *alt* ="round loaf of bread on cutting board"> Our breads are made daily from

highest-quality whole grain flour, water, salt, and yeast or sourdough starter. Simply and naturally, and never

any preservatives. Patience is key to achieving the proper level of fermentation and baking each loaf to

perfection. Available in whole grain, sourdough, olive loaf, classic rye, and potato-onion.\</p>

\<p *class* ="more">\<a *href* ="">Learn more about our baking process...\</a>\</p>

\<h3>Muffins\</h3>

\<p>\<img *src* ="images/muffin.png" *alt* ="one chocolate chip muffin"> Every day, we offer a large selection of muffins,

including blueberry, multi-berry, bran, corn, lemon-poppyseed, and chocolate. Our muffins are made from scratch

each day. Stop by to see our seasonal muffin flavors!\</p>

\<p *class* ="more">\<a *href* ="">Learn more about how we make our muffins...\</a>\</p>

\</main>

\<aside>

\<h2>Hours\</h2>

\<p>\<span *class* ="day">Monday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Tuesday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Wednesday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Thursday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Friday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Saturday:\</span> 6am to 4pm\</p>

\<p>\<span *class* ="day">Sunday:\</span> 6am to 4pm\</p>

\</aside>

\<footer>

\<p>All content copyright &copy; 2017, Black Goose Bistro.\</p>

\</footer>

\</body>

\</html>

Bây giờ, hãy xem tập tin *bakery-styles.css* trong trình soạn thảo mã nguồn của bạn. Chúng ta đã sử dụng các chú thích (comments) trong tập tin CSS để tổ chức các đoạn mã CSS liên quan đến từng phần (bạn sẽ được đánh giá cao khi tổ chức mã CSS một cách hợp lý trong quá trình làm việc). Bạn sẽ tìm thấy các mã CSS để định dạng văn bản, màu sắc và nền (backgrounds) — tất cả đều là các thuộc tính mà chúng ta đã đề cập trong tài liệu cho đến thời điểm này, vì vậy bạn sẽ thấy quen thuộc. Hãy thêm một số chỉ dẫn vào *bakery-styles.css* để thêm padding vào các phần tử."

\[*bakery-styles.css*\]

@charset "UTF-8";

body {

font-family: Georgia, serif;

font-size: 100%;

background-color: white;

}

*/\* link styles \*/*

a:link, a:visited { color: #DC6903; }

a:focus, a:hover, a:active { color: #F9AB33; }

*/\* header styles \*/*

header {

color: white;

background: **url** (images/croissants\_banner.jpg) no-repeat center center;

background-size: cover;

text-align: center;

}

header p {

font-style:italic;

font-size:1.2 em;

}

*/\* nav styles \*/*

nav, footer {

font-family: verdana, sans-serif;

background-color: #783F27;

}

nav ul li a:link, nav ul li a:visited {

color: #F9AB33;

}

nav ul li a:focus, nav ul li a:hover, nav ul li a:active {

color: #fff;

}

nav ul li {

font-size:.8em;

text-transform: uppercase;

letter-spacing:.2em;

}

*/\* main "products" styles \*/*

main {

font-family: 'Stint Ultra Expanded', cursive;

background-color: white;

line-height: 1.8em;

color: #555;

}

h3 {

text-transform: uppercase;

letter-spacing:.2em;

color: #7A0002;

}

p.more {

font-family: verdana, sans-serif;

text-transform: uppercase;

font-size:.8em;

}

*/\* aside "hours" styles \*/*

aside {

background: **url** (images/scallop.png) repeat-y left top;

background-color: #F6F3ED;

}

*/\* misc styles \*/*

footer {

color: #EADDC4;

text-align: center;

font-size:.8em;

}

h2 {

font-family: 'Stint Ultra Expanded', cursive;

}

.day {

color: #783F27;

font-family:verdana,sans-serif;

font-size:.8em;

text-transform: uppercase;

}

\[Trang web *Black Goose Bakery trước khi CSS*\]

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2y1foZmBSMkAQ3LZljiqH3UsWyFX6hxIiNx2boKu-69Fux5ssII3RF8ad-Gwx_GWFWUgFmjFBMVV6_xXC2YPWVMPCEiWB7v1B34Gn84GIrAH5GsPlv3hBGdXabucG6-DEd8Xmde6uHTgV74-bD5s3TCT0nUWUYNFiv_LnKJOoLQJavZYEqK29wFk-Yk/s320/14a.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2y1foZmBSMkAQ3LZljiqH3UsWyFX6hxIiNx2boKu-69Fux5ssII3RF8ad-Gwx_GWFWUgFmjFBMVV6_xXC2YPWVMPCEiWB7v1B34Gn84GIrAH5GsPlv3hBGdXabucG6-DEd8Xmde6uHTgV74-bD5s3TCT0nUWUYNFiv_LnKJOoLQJavZYEqK29wFk-Yk/s641/14a.png)

1\. Việc đầu tiên chúng ta sẽ làm là thiết lập thuộc tính *box-sizing* (cách tính kích thước của hộp) thành *border-box* cho tất cả các phần tử trong tài liệu. Hãy thêm các chỉ dẫn mới này vào phần tử style có sẵn. Việc này sẽ giúp cho việc tính kích thước đơn giản hơn về sau.

*html {*

*box-sizing: border-box;*

*}*

*\* {*

*box-sizing: inherit;*

*}*

2\. Bây giờ, hãy tìm các định dạng cho phần header và đặt chiều cao (height) cho nó. Theo mặc định, nó sẽ chiếm 100% chiều rộng của trang, nên chúng ta không cần lo lắng về chiều rộng nữa. Bạn sẽ thiết lập chiều cao cho nó là 15em, vì nó có vẻ đủ lớn để chứa nội dung và hiển thị ảnh nền bánh croissant, nhưng bạn có thể tùy chỉnh nó.

*header {*

*…*

*height: 15em;*

*}*

3\. Phần main sẽ cần một khoảng đệm nhỏ (padding), vì vậy, hãy thêm 1em padding ở tất cả các phía. Bạn có thể thêm khai báo này sau các định dạng sẵn có của *main*.

*main {*

*…*

*padding: 1em;*

*}*

4\. Tiếp theo, chúng ta sẽ tùy chỉnh một chút cho phần tử aside ("Hours - giờ mở cửa"). Chúng ta sẽ cần thêm padding (khoảng đệm) ở phía bên trái để hiển thị một phần ảnh nền (họa tiết vỏ sò – tiling scallop). Có nhiều cách để thiết lập padding khác nhau cho từng phía, chúng ta sẽ thực hiện theo cách giúp bạn có kinh nghiệm về việc cố tình ghi đè các khai báo đã có trước đó.

Sử dụng thuộc tính *padding* dạng rút gọn để thêm padding 1em cho tất cả các phía của phần tử aside. Sau đó, viết tiếp một khai báo để thêm padding 45px cho phía trái. Bởi vì khai báo *padding-left* được viết sau, nó sẽ ghi đè lên thiết lập 1em đã được áp dụng bằng thuộc tính padding trước đó.

*aside {*

*…*

*padding: 1em;*

*padding-left: 45px;*

*}*

5\. Cuối cùng, phần chân trang (footer) trông mỏng và chật chội. Hãy thêm padding cho nó, điều này sẽ làm tăng chiều cao của chân trang và tạo không gian cho nội dung.

*footer {*

*…*

*padding: 1em;*

*}*

6\. Lưu tập tin *bakery-styles.css*, và mở (hoặc tải lại) tập tin *bakery.html* trong trình duyệt để xem kết quả công việc của bạn. Bạn sẽ thấy giao diện có thay đổi, nhưng khá ít.

**Thao tác với đường viền**

Trong bài tập này, chúng ta sẽ làm quen với một số thủ thuật vui vui với đường viền (borders) trên trang Black Goose Bakery. Ngoài việc đặt đường viền xung quanh các phần nội dung của trang, chúng ta sẽ sử dụng đường viền để làm nổi bật hơn các tiêu đề chính và thay thế cho gạch chân dưới các liên kết (links).

1\. Mở tập tin *bakery-styles.css* trong trình soạn mã (nếu bạn chưa mở). Chúng ta sẽ bắt đầu với những điều cơ bản bằng cách sử dụng thuộc tính border rút gọn, để thêm một đường kẻ đôi, màu nâu vàng xung quanh phần tử main. Thêm khai báo mới này vào chỉ dẫn *main* có sẵn:

*main {*

*…*

*padding: 1em;*

***border: double 4px #EADDC4;***

*}*

2\. Bây giờ hãy thử một số thuộc tính *border-radius* để thêm các góc bo tròn cho các phần *main* và *aside*. Bán kính bo tròn là 25-pixel. Chúng ta chọn pixel thay vì em ở đây, vì không muốn bán kính bo góc thay đổi theo kích thước của văn bản. Bắt đầu bằng cách thêm khai báo này vào mã CSS của *main*:

***border-radius: 25px;***

Và chỉ thêm góc bo tròn tương ứng vào riêng góc trên bên phải của phần tử *aside*:

*aside {*

*…*

***border-top-right-radius: 25px;***

*}*

3\. Chỉ để cho vui (và để luyện tập), chúng ta sẽ thêm một đường viền trang trí vào hai bên của các tiêu đề món nướng (*h3*). Tìm chỉ dẫn đã có của phần tử h3 và thêm một khai báo để tạo một đường viền nét liền, dày 1 pixel ở phía trên tiêu đề. Thêm một khai báo khác để tạo đường viền nét liền dày hơn, 3 pixel, ở bên trái. Chúng ta muốn các đường viền này có cùng màu với văn bản, vì vậy chúng ta không cần chỉ định thuộc tính *border-color*. Cuối cùng, để ngăn văn bản bị dính vào đường viền bên trái, hãy đệm thêm một chút (padding) (1em) vào phía bên trái của nội dung tiêu đề:

*h3 {*

*…*

***border-top: 1px solid;***

***border-left: 3px solid;***

***padding-left: 1em;***

*}*

4\. Điều cuối cùng chúng ta sẽ làm là thay thế đường gạch chân chuẩn bằng một đường viền dưới (bottom border) để trang trí dưới các liên kết (links). Bắt đầu bằng cách tắt đường gạch chân cho tất cả các liên kết. Thêm chỉ dẫn này vào mã CSS:

*a {*

***text-decoration: none;***

*}*

Sau đó thêm đường viền, nét đứt, độ dày 1-pixel ở đáy của liên kết:

*a {*

*text-decoration: none;*

***border-bottom: 1px dotted;***

*}*

Như thường lệ, khi bạn thêm một đường viền vào một phần tử, bạn nên thêm một chút đệm (padding) để giữ cho mọi thứ không bị dính sát vào nhau:

*a {*

*text-decoration: none;*

*border-bottom: 1px dotted;*

***padding-bottom:.1em;***

*}*

Bây giờ bạn có thể lưu tập tin CSS, và tải lại *bakery.html* trong trình duyệt để xem kết quả.

**Thêm lề (margin space) xung quanh các phần tử**

Đã đến lúc điều chỉnh lề xung quanh các phần tử của trang bakery. Chúng ta sẽ bắt đầu bằng cách điều chỉnh lề cho toàn bộ tài liệu, và sau đó tinh chỉnh từng phần từ trên xuống dưới. Bạn cần mở tập tin *bakery-styles.css* trong trình soạn mã.

1\. Một thông lệ phổ biến là đặt lề (margin) cho phần tử *body* bằng 0, nhờ đó loại bỏ việc đặt lề mặc định của trình duyệt. Thêm khai báo lề này vào CSS của *body*, sau đó lưu tập tin và mở nó trong trình duyệt. Bạn sẽ thấy các phần tử sẽ tiến đến sát mép cửa sổ mà không có khoảng trống nào.

*body {*

*…*

***margin: 0;***

*}*

2\. Nếu bạn là người tinh ý, bạn có thể nhận thấy vẫn còn một chút khoảng trắng phía trên thanh điều hướng (navigation bar) có màu. Có điều này là do lề trên (top margin) của danh sách *ul* đang đẩy toàn bộ phần tử *nav* xuống so với mép trên của trình duyệt. Chúng ta hãy xử lý vấn đề đó. Thêm một chỉ dẫn mới cho *nav* vào CSS:

*nav ul {*

***margin: 0;***

*}*

3\. Lề (margin) rất hữu ích để dịch chuyển các phần tử xung quanh trong bố cục (layout). Ví dụ, chúng ta muốn đẩy thẻ *h1* chứa logo xuống một chút, bạn sẽ thêm một lề vào cạnh trên của nó. Chúng tôi đã thử nghiệm với vài giá trị trước khi quyết định chọn 1.5em cho chỉ dẫn này:

*header h1 {*

***margin-top: 1.5em;***

*}*

Tôi muốn đoạn giới thiệu (intro paragraph) trong phần đầu trang (header) gần với logo hơn, nên hãy thử một chút "phá cách" là sử dụng lề trên âm (negative top margin) để kéo nó lên. Thêm khai báo này vào chỉ dẫn CSS đã có:

*header p {*

*…*

***margin-top: -12px;***

*}*

4\. Đặt lề cho phần tử *main* là 2.5% ở tất cả các phía:

*main {*

*…*

***margin: 2.5%;***

*}*

5\. Thêm một chút không gian phía trên các tiêu đề *h3* trong phần main. Chúng tôi đã chọn 2.5em, nhưng bạn có thể thử nghiệm với các giá trị khác nhau để xem bạn thích cái nào nhất:

*h3 {*

*…*

***margin-top: 2.5em;***

*}*

6\. Cuối cùng, thêm một chút không gian xung quanh phần tử *aside*. Lần này, chúng ta sẽ đặt các giá trị khác nhau cho mỗi bên để thử nghiệm. Đặt 1em cho lề trên, 2.5% cho lề bên phải, 0 cho lề dưới, và 10% cho lề bên trái. Chúng tôi sẽ để bạn tự làm phần này. Bạn có thể thực hiện tất cả những thay đổi đó chỉ bằng một khai báo không?

7\. Lưu lại tập tin CSS một lần nữa và tải lại trang trong trình duyệt để xem kết quả.

**Bài tập 4.1c. Bạn có thể tham khảo mã nguồn, hình ảnh ở đây:** [https://learningwebdesign.com/5e/materials/](https://learningwebdesign.com/5e/materials/) (vào thư mục con có tên là *ch14*).

Các bước thực hiện:

**Adding a little padding**

In this exercise, we’ll begin adding box properties to improve the appearance of a site for the fictional Black Goose Bakery.

Start by getting familiar with the source document. Open *bakery.html* in a browser and a text editor to see what you’ve got to work with. The style sheet has been added with an @import rule in the style element. The document has been marked up with header (including a nav section), main, aside, and footer sections.

\[*bakery.html*\]

<!doctype *html* >

\<html>

\<head>

\<meta *charset* ="UTF-8">

\<title>Black Goose Bakery\</title>

\<meta *name* ="viewport" *content* ="width=device-width, initial-scale=1">

\<link *href* ="https://fonts.googleapis.com/css?family=Stint+Ultra+Expanded" *rel* ="stylesheet">

\<style>

@import **url** (bakery-styles.css);

\</style>

\</head>

\<body>

\<header>

\<nav>

\<ul>

\<li>\<a *href* ="">Menu\</a>\</li>

\<li>\<a *href* ="">News\</a>\</li>

\<li>\<a *href* ="">About\</a>\</li>

\<li>\<a *href* ="">Contact\</a>\</li>

\</ul>

\</nav>

\<h1>\<img *src* ="images/bgb\_logo.png" *alt* ="Black Goose Bakery">\</h1>

\<p>The delicious baked goods you love at Black Goose Bistro...now available to go!\</p>

\</header>

\<main>

\<h2>Fresh from the Oven\</h2>

\<h3>Breads\</h3>

\<p>\<img *src* ="images/bread.png" *alt* ="round loaf of bread on cutting board"> Our breads are made daily from

highest-quality whole grain flour, water, salt, and yeast or sourdough starter. Simply and naturally, and never

any preservatives. Patience is key to achieving the proper level of fermentation and baking each loaf to

perfection. Available in whole grain, sourdough, olive loaf, classic rye, and potato-onion.\</p>

\<p *class* ="more">\<a *href* ="">Learn more about our baking process...\</a>\</p>

\<h3>Muffins\</h3>

\<p>\<img *src* ="images/muffin.png" *alt* ="one chocolate chip muffin"> Every day, we offer a large selection of muffins,

including blueberry, multi-berry, bran, corn, lemon-poppyseed, and chocolate. Our muffins are made from scratch

each day. Stop by to see our seasonal muffin flavors!\</p>

\<p *class* ="more">\<a *href* ="">Learn more about how we make our muffins...\</a>\</p>

\</main>

\<aside>

\<h2>Hours\</h2>

\<p>\<span *class* ="day">Monday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Tuesday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Wednesday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Thursday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Friday:\</span> 5am to 3pm\</p>

\<p>\<span *class* ="day">Saturday:\</span> 6am to 4pm\</p>

\<p>\<span *class* ="day">Sunday:\</span> 6am to 4pm\</p>

\</aside>

\<footer>

\<p>All content copyright &copy; 2017, Black Goose Bistro.\</p>

\</footer>

\</body>

\</html>

Now take a look at *bakery-styles.css* in your text editor. I used comments in the style sheet to organize the styles related to each section (bonus points for you if you keep the styles organized as you go along!). You will find styles for text formatting, colors, and backgrounds—all properties that we’ve covered so far in this book, so they should look familiar. Now let’s add some rules to *bakery-styles.css* to add padding to the elements.

\[*bakery-styles.css*\]

@charset "UTF-8";

body {

font-family: Georgia, serif;

font-size: 100%;

background-color: white;

}

*/\* link styles \*/*

a:link, a:visited { color: #DC6903; }

a:focus, a:hover, a:active { color: #F9AB33; }

*/\* header styles \*/*

header {

color: white;

background: **url** (images/croissants\_banner.jpg) no-repeat center center;

background-size: cover;

text-align: center;

}

header p {

font-style:italic;

font-size:1.2 em;

}

*/\* nav styles \*/*

nav, footer {

font-family: verdana, sans-serif;

background-color: #783F27;

}

nav ul li a:link, nav ul li a:visited {

color: #F9AB33;

}

nav ul li a:focus, nav ul li a:hover, nav ul li a:active {

color: #fff;

}

nav ul li {

font-size:.8em;

text-transform: uppercase;

letter-spacing:.2em;

}

*/\* main "products" styles \*/*

main {

font-family: 'Stint Ultra Expanded', cursive;

background-color: white;

line-height: 1.8em;

color: #555;

}

h3 {

text-transform: uppercase;

letter-spacing:.2em;

color: #7A0002;

}

p.more {

font-family: verdana, sans-serif;

text-transform: uppercase;

font-size:.8em;

}

*/\* aside "hours" styles \*/*

aside {

background: **url** (images/scallop.png) repeat-y left top;

background-color: #F6F3ED;

}

*/\* misc styles \*/*

footer {

color: #EADDC4;

text-align: center;

font-size:.8em;

}

h2 {

font-family: 'Stint Ultra Expanded', cursive;

}

.day {

color: #783F27;

font-family:verdana,sans-serif;

font-size:.8em;

text-transform: uppercase;

}

\[*Before shot of the Black Goose Bakery site*\]

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSCNlNMsAzKDRPx9aMZyPFCqTq9ljLsE35Iw1yul4DpDb8EVfxW2w-TnHVPRd8U0bWIofqiwAG2RrKCZxw9vcskg-6Sn8WMIlAxmGWlCinqm2KrhaNocXx2fe3sqjsq4uFCyS4P62q1Sst3GxiU3rTXWt2GuAWj0dVFRcB7A_eCJK-5suNFy0BltvcffI/w369-h400/mo%20hinh%20cai%20hop.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSCNlNMsAzKDRPx9aMZyPFCqTq9ljLsE35Iw1yul4DpDb8EVfxW2w-TnHVPRd8U0bWIofqiwAG2RrKCZxw9vcskg-6Sn8WMIlAxmGWlCinqm2KrhaNocXx2fe3sqjsq4uFCyS4P62q1Sst3GxiU3rTXWt2GuAWj0dVFRcB7A_eCJK-5suNFy0BltvcffI/s576/mo%20hinh%20cai%20hop.png)

1\. The first thing we’ll do is to set the *box-sizing* model to *border-box* for all the elements in the document. Add these new rules to the existing style element. This will make measurements simpler going forward.

*html {*

*box-sizing: border-box;*

*}*

*\* {*

*box-sizing: inherit;*

*}*

2\. Now find the styles for the *header* and give it a height. It will fill 100% of the width of the page by default, so the width is taken care of. I picked 15em for the height because it seemed tall enough to accommodate the content and show a nice amount of the croissant background image, but you can play around with it.

*header {*

*…*

*height: 15em;*

*}*

3\. The *main* section is going to need a little padding, so add 1em of padding on all sides. You can add this declaration after the existing *main* styles.

*main {*

*…*

*padding: 1em;*

*}*

4\. Next, we’ll get a little fancier with the *aside* element (“Hours”). We’ll need extra padding on the left side for the tiling scallop background image to be visible. There are several approaches to applying different padding amounts to each side, but I’m going to do it in a way that gives you experience deliberately overriding earlier declarations.

Use the *padding* shorthand property to add 1em of padding on all sides of the aside element. Then write a second declaration that adds 45 pixels of padding on just the left side. Because the *padding-left* declaration comes second, it will override the 1em setting applied with the shorthand.

*aside {*

*…*

*padding: 1em;*

*padding-left: 45px;*

*}*

5\. Finally, that footer is looking skinny and cramped. Let’s add padding, which will increase the height of the footer and give the content some space.

*footer {*

*…*

*padding: 1em;*

*}*

6\. Save the *bakery-styles.css* document, and then open (or reload) *bakery.html* in the browser to see the result of your work. The changes at this point are pretty subtle.

**Border tricks**

In this exercise, we’ll have some fun with borders on the Black Goose Bakery page. In addition to putting borders around content sections of the page, we’ll use borders to beef up the headlines and as an alternative to underlines under links.

1\. Open *bakery-styles.css* in a text editor if it isn’t already. We’ll start with the basics by using the shorthand *border* property to add a tan double rule around the *main* element. Add the new declaration to the existing rule for *main*:

*main {*

*…*

*padding: 1em;*

***border: double 4px #EADDC4;***

*}*

2\. Now try out some *border-radius* properties to add generous rounded corners to the *main* and *aside* sections. A 25-pixel radius should do. Pixels are my choice over ems here because I don’t want the radius to scale with the text. Start by adding this declaration to the styles for *main*:

***border-radius: 25px;***

And give just the top-right corner of the *aside* a matching rounded corner:

*aside {*

*…*

***border-top-right-radius: 25px;***

*}*

3\. Just for fun (and practice), we’ll add a decorative border on two sides of the baked goods headings (*h3*). Find the existing rule for *h3* elements and add a declaration that adds a 1-pixel solid rule on the top of the headline. Add another that adds a thicker 3-pixel solid rule on the left. I want the borders to be the same color as the text, so we don’t need to specify the *border-color*. Finally, to prevent the text from bumping into the left border, add a little bit of padding (1em) to the left of the headline content:

*h3 {*

*…*

***border-top: 1px solid;***

***border-left: 3px solid;***

***padding-left: 1em;***

*}*

4\. The last thing we’ll do is to replace the standard underline with a decorative bottom border under links. Start by turning off the underline for all links. Add this rule in the “link styles” section of the style sheet:

*a {*

***text-decoration: none;***

*}*

Then add a 1-pixel dotted border to the bottom edge of links:

*a {*

*text-decoration: none;*

***border-bottom: 1px dotted;***

*}*

As is often the case when you add a border to an element, it is a good idea to also add a little padding to keep things from bumping together:

*a {*

*text-decoration: none;*

*border-bottom: 1px dotted;*

***padding-bottom:.1em;***

*}*

Now you can save the style sheet and reload bakery.html in the browser to see the result.

**Adding margin space around elements**

It’s time to adjust the margins around the elements on the bakery page. We’ll start by adjusting margins on the whole document, and then make tweaks to each section from top to bottom. You should have *bakery-styles.css* open in a text editor.

1\. It is a common practice to set the margin for the *body* element to zero, thus clearing out the browser’s default margin setting. Add this margin declaration to the *body* styles, and then save the file and open it in a browser. You’ll see that the elements now go to the very edge of the window with no space between.

*body {*

*…*

***margin: 0;***

*}*

2\. If you are a careful observer, you may have noticed that there is still a bit of whitespace above the colored navigation bar. That happens to be the top margin of the *ul* list pushing the whole *nav* element down from the top edge of the browser. Let’s take care of that. Add a new style rule in the “nav styles” section of the style sheet:

*nav ul {*

***margin: 0;***

*}*

3\. Margins are good for nudging elements around in the layout. For example, I think I’d like to move the *h1* with the logotype down a bit, so I’ll add a margin to its top edge. I played around with a few values before deciding on 1.5em for this new style rule:

*header h1 {*

***margin-top: 1.5em;***

*}*

I’d like the intro paragraph in the header to be a little closer to the logotype, so let’s get wacky and use a negative top margin to pull it up. Add this declaration to the existing style rule:

*header p {*

*…*

***margin-top: -12px;***

*}*

4\. Give the *main* section a 2.5% margin on all sides:

*main {*

*…*

***margin: 2.5%;***

*}*

5\. Add a little extra space above the *h3* headings in the main area. I’ve chosen 2.5em, but you can play around with different values to see what you like best:

*h3 {*

*…*

***margin-top: 2.5em;***

*}*

6\. Finally, add some space around the *aside*. This time, we’ll do different amounts on each side for kicks. Put 1em on the top, 2.5% on the right side, 0 on the bottom, and 10% margin on the left. I’m going to let you do this one yourself. Can you make all those changes with one declaration?

7\. Save the style sheet again, and reload the page in the browser to see the result.

### 4.1.11 Câu hỏi ôn tập

Câu 1. Trong CSS, các thành phần của box model gồm:

A. box, margin area, boder, padding area, inner edge, content area

B. outer edge, model, boder, padding area, inner edge, content area

C. outer edge, margin area, radius, padding area, inner edge, content area

D. outer edge, margin area, boder, padding area, inner edge, content area

Câu 2. Thứ tự các giá trị của padding hợp lý là:

A. padding: right top bottom left;

B. padding: top right bottom left;

C. padding: top bottom right left;

D. padding: left top right bottom;

Câu 3. Khi tạo bóng cho hộp bằng thuộc tính box-shadow, giá trị của …………….. là khoảng dịch của bóng sang phía phải so với hộp ban đầu, nếu giá trị này là âm, bóng sẽ được dịch sang phía trái.

A. vertical-offset

B. blur distance

C. spread distance

D. horizontal-offset

Câu 4. Trong CSS, giá trị nào không thể thiết lập cho thuộc tính display?

A. block

B. inline

C. flex

D. hidden

\-----

Bài sau: