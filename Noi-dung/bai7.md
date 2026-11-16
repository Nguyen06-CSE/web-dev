Bài trước: [HTML (5) - Hoàn thiện trang web đơn giản](https://legiacong.blogspot.com/2021/09/web-front-end-5-htmlhoan-thien-trang.html)

\-----

9\. Hiển thị văn bản

Qua các bài học trước, bạn đã có những khái niệm căn bản về cấu trúc của một tài liệu HTML và có thể tạo được một trang web đơn giản. Phần này sẽ tập trung vào việc hiển thị nội dung dạng văn bản của một trang web.

Để hiển thị văn bản, bạn cần biết cách sử dụng phần tử HTML phù hợp (đặc biệt là về mặt ngữ nghĩa) để hiển thị các đoạn văn bản, các đề mục, các danh sách, các kí tự đặc biệt, tổ chức trang nội dung.

Việc sử dụng phần tử một cách hợp lý sẽ giúp trang web có thứ hạng cao trong kết quả của các trang tìm kiếm (ví dụ Google), được nhiều người biết đến, và các phần mềm phân tích nội dung có thể tự động phân tích trang web với độ chính xác cao.

Trong phần này sẽ đề cập đến các nội dung sau:

\- Đoạn văn bản và đề mục

\- Danh sách

\- Một số phần tử hiển thị nội dung khác

9.1 Đoạn văn bản và đề mục

Đoạn văn bản

Theo nghĩa thông thường, đoạn văn bản (gọi tắt là đoạn) là tập hợp của nhiều câu, toàn bộ văn bản là tập hợp của các đoạn. Trong HTML, đoạn là một chuỗi các từ có chiều dài bất kì. Để tạo một đoạn, sử dụng phần tử p, đây là phần tử cơ bản nhất trong việc hiển thị văn bản. Chữ p là viết tắt của paragraph.

Lưu ý: tất cả nội dung văn bản đều phải được bọc lại bằng các phần tử, nếu không, phần văn bản đó sẽ không có ngữ nghĩa và người lập trình sẽ không thể kiểm soát được việc hiển thị.

Ở chế độ mặc định, phần tử p được hiển thị theo kiểu khối (block). Nghĩa là, nó sẽ luôn được hiển thị ở một hàng mới và sẽ chiếm toàn bộ chiều rộng khả dụng của phần tử chứa phần tử p.

Ngoài việc chứa văn bản (text), phần tử p còn có thể chứa hình ảnh, các phần tử nội tuyến (inline); tuy nhiên, nó không thể chứa phần tử đề mục (heading), danh sách (list), phân vùng (sectioning), và các phần tử kiểu khối khác.

Ví dụ,

\<p>Ngày đầu tiên đi học\</p>

\<p>Vậy, làm web là làm ra sản phẩm mà nó cung cấp các tài nguyên web cho người dùng. Sản phẩm này chính là các trang web được hiển thị trong các trình duyệt.\</p>

Đề mục

Một văn bản không chỉ có các đoạn, hình ảnh, mà còn có hệ thống đề mục (hay hệ thống tiêu đề).

Đề mục (heading) là một từ, cụm từ, hoặc ký hiệu, giúp người đọc có thể tìm kiếm và định vị được thông tin.

Hệ thống đề mục thường gồm nhiều cấp khác nhau, thể hiện cấu trúc, bố cục, hay bộ khung (outline) của một văn bản. Để dễ hiểu, hãy liên tưởng tới hệ thống heading trong Microsoft Word.

Để tạo đề mục, có thể sử dụng các phần tử: h1, h2, h3, h4, h5, h6. Đây là 6 loại đề mục khác nhau. Trong đó, phần tử h1 sẽ tạo ra đề mục mức cao nhất (heading level 1 – đề mục mức 1), h2 sẽ tạo ra đề mục mức 2, h3 sẽ tạo ra đề mục mức 3…v.v. Khi có các đề mục, trình duyệt sẽ sử dụng chúng để tạo ra bố cục cho văn bản. Phần mềm đọc văn bản tự động (screen reader) sẽ dựa vào các đề mục để tóm tắt nội dung và dễ dàng duyệt qua toàn bộ văn bản. Các công cụ tìm kiếm cũng sử dụng hệ thống đề mục trong thuật toán tìm kiếm của chúng, các đề mục mức cao hơn sẽ có trọng số lớn hơn.

Trong thực tế, nên sử dụng phần tử h1 cho đề mục mức cao nhất, sau đó tùy theo nội dung văn bản để sử dụng các đề mục mức thấp hơn.

Ví dụ,

\[HTML\]

<!DOCTYPE html>

\<html>

\<head>

\<meta charset="utf-8">

\<title>Trang web dau tien\</title>

\</head>

\<body>

\<h1>1 Mở đầu\</h1>

\<h2>1.1 Về tài liệu này\</h2>

\<p>Tài liệu này thích hợp cho người chưa biết gì về làm web, và muốn học (hoặc tự học) để có thể theo nghề làm web.\</p>

\<h2>1.2 Làm web là làm gì\</h2>

\<p>Để trả lời câu hỏi “làm web là làm gì”, hãy bắt đầu từ nhu cầu của người sử dụng.\</p>

\<h1>2 HTML căn bản\</h1>

\<h2>2.1 Tạo một trang web đơn giản\</h2>

\<h3>2.1.1 Chuẩn bị nội dung cho trang web\</h3>

\<p>Bước 1. Nhập nội dung\</p>

\<p>Bước 2. Lưu lại thành tập tin index.html\</p>

\<h3>2.1.2 Cấu trúc cơ bản của một tài liệu HTML\</h3>

\<p>Điều quan trọng nhất cần biết là tài liệu HTML được tạo ra từ các phần tử HTML. Toàn bộ tài liệu HTML là tập hợp của rất nhiều các phần tử HTML khác nhau tạo thành.\</p>

\<h3>2.1.3 Thêm cấu trúc và ngữ nghĩa cho một tài liệu HTML\</h3>

\<p>Như đã biết, HTML là công cụ được sử dụng để hiển thị nội dung lên trình duyệt.

Tuy nhiên, cần phải hiểu là HTML chỉ tập trung vào việc tổ chức nội dung sao cho nó có tính cấu trúc, có tính ngữ nghĩa. \</p>

\</body>

\</html>

\[Kết quả\]

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMb_uf6LH_Qp8qpw0mv-zjWqNxQto4eKbF6AbgVB2aDo2xL3641dLS-KXd4nQ4YLqNIqweVmI1T7S7VyvQY-kFCz8kdKez9I3jU0x4b1Z3bXy0EXe3lLVTmtM_acYAFpP8DPEkwfcd1Qw/w400-h200/01.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMb_uf6LH_Qp8qpw0mv-zjWqNxQto4eKbF6AbgVB2aDo2xL3641dLS-KXd4nQ4YLqNIqweVmI1T7S7VyvQY-kFCz8kdKez9I3jU0x4b1Z3bXy0EXe3lLVTmtM_acYAFpP8DPEkwfcd1Qw/s1273/01.jpg)

**Đánh dấu kết thúc một chủ đề**

Để đánh dấu kết thúc một chủ đề/ý tưởng và chuyển sang chủ đề/ý tưởng khác, sử dụng phần tử hr, phần tử này sẽ tạo một đường kẻ ngang (horizontal rule) giữa hai chủ đề/ý tưởng.

Nếu bạn chỉ muốn tạo một đường kẻ ngang trên trang web thì bạn sẽ dùng border trong CSS chứ không nên sử dụng phần tử hr.

Ví dụ,

\[HTML\]

*\<h1>* *The Main Languages of the Web* *\</h1>* *\<p>* *HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content.**\</p>* *\<hr>* *\<p>* *CSS is a language that describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work, because it can control the layout of multiple web pages all at once.**\</p>*

\[Kết quả\]

*Lưu đoạn mã trên vào một tập tin.html, mở bằng trình duyệt để xem kết quả.*

### 9.2 Danh sách

Trong khi trình bày một văn bản, bạn rất hay gặp phải tình huống cần phải liệt kê hàng loạt các đối tượng, ví dụ: các bước để làm một món ăn, các ngôn ngữ lập trình cần phải học, danh mục các thuật ngữ. Để liệt kê các đối tượng như vậy, trong HTML có khái niệm “danh sách” (list).

HTML cung cấp ba loại danh sách:

\- Danh sách không có thứ tự (unordered list)

\- Danh sách có thứ tự (ordered list)

\- Danh sách mô tả (description list)

Mặc định, phần tử danh sách được hiển thị theo kiểu khối (block), tuy nhiên, có thể thay đổi kiểu hiển thị bằng CSS.

**Danh sách không có thứ tự**

Danh sách không có thứ tự là một dãy các mục (item), trong đó tính trước sau của mỗi mục là không quan trọng. Mỗi mục thường được trình duyệt đánh dấu bằng một ký tự đầu dòng (dấu đầu dòng) (bullet). Trong thực tế, phần lớn các danh sách sẽ thuộc loại này.

Để tạo danh sách không có thứ tự, sử dụng phần tử *ul*, viết tắt của unordered list (danh sách không có thứ tự).

Để tạo mỗi mục của danh sách, sử dụng phần tử *li*, viết tắt của list item (mục của danh sách).

Cú pháp là,

\<ul>

\<li>phần tử 1\</li>

\<li>phần tử 2\</li>

\</ul>

Ví dụ,

\[HTML\]

\<ul>

\<li>Mãng cầu\</li>

\<li>Trái dừa\</li>

\<li>Ổ qua\</li>

\<li>Khoai môn\</li>

\</ul>

\[Kết quả\]

*· Mãng cầu*

*· Trái dừa*

*· Ổ qua*

*· Khoai môn*

Mặc định, mỗi mục sẽ được trình duyệt đánh dấu bằng dấu chấm tròn (trên mã nguồn thì không xuất hiện các dấu này), nếu muốn thay bằng dấu khác cần sử dụng CSS.

Chú ý: sau thẻ mở < *ul>* phải là một hoặc nhiều phần tử *li*, chứ không cho phép chèn văn bản hoặc các phần tử khác, tuy nhiên, trong phần tử *li* thì có thể chứa văn bản hoặc các phần tử bất kì. Ví dụ, đoạn mã dưới đây là không hợp lệ.

\[HTML\]

\<ul>

kiểm tra trên trang validator sẽ bị báo lỗi dòng này!

\<li>Lê Văn Bơ\</li>

\<li>Trần Văn Mít\</li>

\<li>Nguyễn Văn Tèo\</li>

\</ul>

**Danh sách có thứ tự**

Danh sách có thứ tự là một dãy các mục, trong đó tính trước sau của mỗi mục là quan trọng, ví dụ, danh sách các bước hướng dẫn để làm một công việc. Để thể hiện tính thứ tự của các mục, trình duyệt sẽ tự động sử dụng các số hoặc các chữ cái để gắn vào phía trước mỗi mục, giá trị của các số/chữ sẽ được tự động tăng cùng với các mục.

Để tạo danh sách có thứ tự, sử dụng phần tử *ol*, viết tắt của ordered list (danh sách có thứ tự).

Để tạo mỗi mục của danh sách, sử dụng phần tử *li*, viết tắt của list item (phần tử của danh sách).

Cú pháp là,

*\<ol>*

*\<li>phần tử 1\</li>*

*\<li>phần tử 2\</li>*

*\</ol>*

Ví dụ,

\[HTML\]

\<ol>

\<li>Lê Văn Bơ\</li>

\<li>Trần Văn Mít\</li>

\<li>Nguyễn Văn Tèo\</li>

\</ol>

\[Kết quả\]

*1\. Lê Văn Bơ*

*2\. Trần Văn Mít*

*3\. Nguyễn Văn Tèo*

Để ý là, mặc dù trong đoạn mã HTML không ghi các số 1, 2, 3, nhưng khi hiển thị ra màn hình lại thấy có các số. Như đã nói ở trên, trình duyệt đã tự đánh số thứ tự cho mỗi mục trong thẻ *\<ol>*. Nếu không muốn đánh số thứ tự là 1, 2, 3, mà muốn là a, b, c, hoặc I, II, III, thì sử dụng CSS.

Sau thẻ mở < *ol>* phải là một hoặc nhiều phần tử *li*, không cho phép chèn văn bản hoặc các phần tử khác, tuy nhiên, trong phần tử *li* thì có thể chèn văn bản hoặc các phần tử bất kỳ trong đó. Ví dụ, đoạn mã dưới đây là không hợp lệ.

\[HTML\]

\<ol>

kiểm tra trên trang validator sẽ bị báo lỗi dòng này!

\<li>Lê Văn Bơ\</li>

\<li>Trần Văn Mít\</li>

\<li>Nguyễn Văn Tèo\</li>

\</ol>

Với danh sách có thứ tự, giá trị bắt đầu luôn là 1, I, i, A hoặc a. Để thay đổi giá trị bắt đầu, sử dụng thuộc tính start. Ví dụ,

\[HTML\]

\<ol start="4">

\<li>Lê Văn Bơ\</li>

\<li>Trần Văn Mít\</li>

\<li>Nguyễn Văn Tèo\</li>

\</ol>

\[Kết quả\]

*Danh sách sẽ được đánh số bắt đầu bằng 4.*

*4\. Lê Văn Bơ*

*5\. Trần Văn Mít*

*6\. Nguyễn Văn Tèo*

Một số ví dụ, sử dụng thuộc tính *start*,

| **HTML** | **Kết quả** |
| --- | --- |
| \<ol type="i" start="4"> | Danh sách sẽ được đánh số bắt đầu từ iv |
| \<ol type="I" start="4"> | Danh sách sẽ được đánh số bắt đầu từ IV |
| \<ol type="A" start="4"> | Danh sách sẽ được đánh thứ tự từ chữ D |
| \<ol type="a" start="4"> | Danh sách sẽ được đánh thứ tự từ chữ d |

**Danh sách mô tả**

Danh sách mô tả (description list, definition list) là loại danh sách được sử dụng để biểu diễn dữ liệu theo kiểu từng cặp *tên/giá trị* (name/value), ví dụ: tên thuật ngữ/mô tả, câu hỏi/đáp án.

Để tạo danh sách kiểu mô tả, sử dụng ba phần tử sau:

*\- dl* để tạo danh sách, *dl* viết tắt của description list hoặc definition list

*\- dt* để tạo một mục cho danh sách (*tên*), *dt* viết tắt của description term hoặc definition term

*\- dd* để tạo phần định nghĩa/mô tả cho một mục (*giá trị*), *dd* viết tắt của describe a definition hoặc define a description.

Cú pháp là,

\<dl>

\<dt>mục từ 1\</dt>

\<dd>định nghĩa cho mục từ 1\</dd>

\<dt>mục từ 2\</dt>

\<dd>định nghĩa cho mục từ 2\</dd>

\</dl>

Ví dụ,

\[HTML\]

\<dl>

\<dt>HTML\</dt>

\<dd>Hypertext Markup Language\</dd>

\<dt>WWW\</dt>

\<dd>World Wide Web\</dd>

\</dl>

\[Kết quả\]

*HTML*

*Hypertext Markup Language*

*WWW*

*World Wide Web*

Chú ý: phần tử *dl* chỉ chứa các phần tử *dt* và *dd*. Một mục *tên* (dt) có thể có nhiều *giá trị* (dd) hoặc ngược lại. Phần tử *dt* không thể chứa các phần tử Đề mục (heading), hoặc các phần tử nhóm nội dung (content-grouping element, ví dụ *p*) tuy nhiên, phần tử *dd* thì có thể chứa phần tử bất kì.

Ví dụ,

\[HTML\]

\<dl>

\<dt>\<h1>HTML\</h1>\</dt>

\<dd>\<h1>Hypertext Markup Language\</h1>\</dd>

\<dt>WWW\</dt>

\<dd>World Wide Web\</dd>

\</dl>

\[Kết quả\]

Kiểm tra trên trang [https://validator.w3.org/](https://validator.w3.org/) sẽ có báo lỗi ở phần tử *dt* đầu tiên.

**Danh sách lồng nhau**

Một danh sách có thể chứa danh sách khác, miễn là danh sách con phải được đặt trong phần tử *li* của danh sách cha.

Ví dụ,

\[HTML\]

\<ol>

\<li>Mục 1\</li>

\<li>Mục 2

\<ul>

\<li>Nội dung 1\</li>

\<li>Nội dung 2\</li>

\</ul>

\</li>

\<li>Mục 3\</li>

\</ol>

\[Kết quả\]

*1\. Mục 1*

*2\. Mục 2*

*o Nội dung 1*

*o Nội dung 2*

*3\. Mục 3*

Thực tế, ngoài việc tạo ra các thông tin kiểu liệt kê, bạn có thể sử dụng phần tử danh sách (ol, ul) để tạo ra các thành phần khác của trang web, như menu, breadcrumb (một loại điều hướng, giúp người dùng xác định vị trí hiện tại của họ trong website).

### 9.3 Một số phần tử hiển thị nội dung khác

Ở các phần trước, đã đề cập tới một số phần tử cốt lõi để hiển thị văn bản như: đoạn, đề mục, danh sách. Phần này sẽ tìm hiểu thêm một số phần tử HTML để hiển thị văn bản nữa, gồm: blockquote, pre, figure, figcaption. Rất khó để xếp những phần tử này vào một loại nào đó, tuy nhiên, chúng đều có hai đặc điểm, một là được hiển thị kiểu khối (block) và hai là được sử dụng để nhóm nội dung (grouping content).

**Hiển thị một trích dẫn dài (long quotations)**

Để đánh dấu và hiển thị phần nội dung được trích dẫn dài (trích dẫn gồm nhiều hàng) từ nguồn khác, lời nhận xét của khách hàng (testimonial), và phần sao chép từ nguồn khác, bạn sẽ sử dụng phần tử *blockquote*. Nội dung bên trong phần tử *blockquote* nên được bọc lại bằng các phần tử HTML khác như *p, heading, ol, ul, dl*.

Ví dụ,

\[HTML\]

\<p>Đôi khi cũng phải nhìn lại bản thân, phải yêu bản thân mình, phải thương lấy nó, bởi nó là người bạn gần gũi nhất, trung thành nhất, yêu chứ không nuông chiều, như Sophia Loren đã nói:\</p>

\<blockquote>

\<p>Hãy yêu bản thân vô điều kiện, như là bạn yêu những người thân thiết với mình bất chấp khuyết điểm của họ.\</p>

\<p>Love yourself unconditionally, just as you love those closest to you despite their faults.\</p>

\</blockquote>

\[Kết quả\]

*Đôi khi cũng phải nhìn lại bản thân, phải yêu bản thân mình, phải thương lấy nó, bởi nó là người bạn gần gũi nhất, trung thành nhất, yêu chứ không nuông chiều, như Sophia Loren đã nói:*

*Hãy yêu bản thân vô điều kiện, như là bạn yêu những người thân thiết với mình bất chấp khuyết điểm của họ.*

*Love yourself unconditionally, just as you love those closest to you despite their faults.*

**Hiển thị văn bản được định dạng sẵn**

Như đã biết, khi biên dịch mã HTML để hiển thị, trình duyệt sẽ bỏ qua các khoảng trắng và các ký tự xuống hàng dư thừa. Vì vậy, với một số văn bản mà nhất thiết phải giữ các khoảng trắng, và các ký tự xuống hàng, ví dụ như một đoạn mã chương trình, một bài thơ, thì hãy sử dụng phần tử *pre*.

Khi gặp phần tử *pre*, trình duyệt sẽ hiển thị ra đúng những gì đang có ở dạng mã nguồn, cả nội dung và hình thức trình bày, nghĩa là giữ nguyên tất cả các khoảng trắng và các kí tự xuống hàng. Phần tử *pre* thuộc kiểu hiển thị khối, phông chữ mặc định được sử dụng là loại phông mà các ký tự có độ rộng bằng nhau, thường được gọi là monospace (ví dụ Courier). Pre là viết tắt của preformatted text.

Ví dụ,

\[HTML\]

\<pre>

NGÀY ĐẦU TIÊN ĐI HỌC

Ngày đầu tiên đi học

Mẹ dắt tay đến trường

Em vừa đi vừa khóc

Mẹ dỗ dành bên em

Tác giả: Viễn Phương

\</pre>

\<p>

NGÀY ĐẦU TIÊN ĐI HỌC

Ngày đầu tiên đi học

Mẹ dắt tay đến trường

Em vừa đi vừa khóc

Mẹ dỗ dành bên em

Tác giả: Viễn Phương

\</p>

\[Kết quả\]

Xem trên trình duyệt để thấy sự khác nhau khi sử dụng hai phần tử pre và p.

**Phần tử figure và figcapion**

Phần tử *figure* là phần tử hiển thị kiểu khối, nó có thể chứa hình ảnh, đoạn mã, video, bảng, hoặc các loại dữ liệu khác, dùng để minh họa thêm cho nội dung được đề cập trong văn bản. Ví dụ sau khi trình bày về “cấu trúc của một tài liệu HTML gồm những thành phần nào”, để dễ hiểu bạn sẽ dùng phần tử figure để chèn thêm một cái hình, minh họa về cấu trúc của một tài liệu HTML.

Nếu cần thêm chú thích cho: hình ảnh, đoạn mã, video hoặc bảng, nằm trong phần tử *figure* thì sử dụng phần tử *figcaption*. Phần tử *figcaption* có thể nằm trước hoặc sau phần nội dung mà nó chú thích. Caption có nghĩa là chú thích (từ comment cũng có nghĩa là chú thích, nhưng là chú thích cho đoạn mã). Từ figure có nghĩa là hình ảnh, hình minh họa (thường được đánh số) trong các cuốn sách. Ví dụ, xem minh họa trong hình 10 (figure 10).

Ví dụ, hiển thị hình ảnh và chú thích

\[HTML\]

\<figure>

\<img src="HTML-structure.png" alt="HTML document structure">

\<figcaption>

Cấu trúc một tài liệu HTML

\</figcaption>

\</figure>

Ví dụ, hiển thị đoạn mã và chú thích

\<figure>

\<pre>\<code>

body {

background-color: #000;

color: red;

}

\</code>\</pre>

\<figcaption>

Cú pháp viết CSS

\</figcaption>

\</figure>

### 9.4 Xem và đọc thêm

Sử dụng các từ khóa này, tìm kiếm trên chatbot, Google hoặc Youtube để đọc và xem thêm: p element, h element, hr element, ol element, ul element, li element, dl element, blockquote element, pre element, figure element, breadcrumbs.

## 9.5 Bài tập và thực hành

### (Không nên sử dụng Google hoặc AI để dịch toàn bộ các bài tập bằng tiếng Anh ra tiếng Việt, mà nên đọc trực tiếp bằng tiếng Anh, nếu gặp từ mới thì chỉ dịch chính từ đó ra tiếng Việt để hiểu. Mục đích để rèn khả năng đọc hiểu tài liệu tiếng Anh).Bài tập 9.1: Viết lại các đoạn mã trong phần lý thuyết.Bài tập 9.2: Sử dụng ul/li hoặc ol/li để tạo menu như hình dưới đây (khung màu xanh).

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQMlv2Z5DtR_6Vl_xd80PsgyH1jthsweXg19nGDJz3RZZPyCw2orM21Sgt1QMN5Q4z7zmcHSL312WNiBkaf74ilYFZx1Ev3Rc234jPGftwJKryD9zAAiPUNDSjwV9Y4z6Z2IULUjSApY5voDRDsCeJMiVm7vk4Hxj-u5QretXv7G4-jDRd-nMoglek/w400-h70/Menu.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQMlv2Z5DtR_6Vl_xd80PsgyH1jthsweXg19nGDJz3RZZPyCw2orM21Sgt1QMN5Q4z7zmcHSL312WNiBkaf74ilYFZx1Ev3Rc234jPGftwJKryD9zAAiPUNDSjwV9Y4z6Z2IULUjSApY5voDRDsCeJMiVm7vk4Hxj-u5QretXv7G4-jDRd-nMoglek/s783/Menu.jpg)

Bài tập 9.3: Tạo breadcrumbs như hình sau.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwxE6inRGeuUWcILOKi5zSC40a0dd0hFvtmFB56GYyyL5dOnEaiBcNdkURvVVlNbzcnAArX0tp9WLx1E5_r987DSnbn7aY-sp1Cfh28HzOJmtnadZ88NfNVH2palfZ8kO_T4ZV1HYD9yASBabEcKXZrqzYJ7xKLlb6DDLO9Lptn18isYiNzL4j5-R5/w400-h58/breadcrumbs.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwxE6inRGeuUWcILOKi5zSC40a0dd0hFvtmFB56GYyyL5dOnEaiBcNdkURvVVlNbzcnAArX0tp9WLx1E5_r987DSnbn7aY-sp1Cfh28HzOJmtnadZ88NfNVH2palfZ8kO_T4ZV1HYD9yASBabEcKXZrqzYJ7xKLlb6DDLO9Lptn18isYiNzL4j5-R5/s354/breadcrumbs.png)

Bài tập 9.4: Marking up a recipe

The owners of the Black Goose Bistro have decided to share recipes and news on their site. In the exercises in this chapter, we’ll assist them with content markup. In this exercise, you will find the raw text of a recipe. It’s up to you to decide which element is the best semantic match for each chunk of content. You’ll use paragraphs, headings, lists, and at least one special content element.

Tapenade (Olive Spread)

This is a really simple dish to prepare and it’s always a big hit at parties. My father recommends:

"Make this the night before so that the flavors have time to blend. Just bring it up to room temperature before you serve it. In the winter, try serving it warm."

Ingredients

- 1 8oz. jar sundried tomatoes
- 2 large garlic cloves
- 2/3 c. kalamata olives
- 1 t. capers

Instructions

1\. Combine tomatoes and garlic in a food processor. Blend until as smooth as possible.

2\. Add capers and olives. Pulse the motor a few times until they are incorporated, but still retain some texture.

3\. Serve on thin toast rounds with goat cheese and fresh basil garnish (optional).

### Câu hỏiCâu 9a: Trong HTML, chữ "hr" trong phần tử hr là viết tắt của chữ nào?A. Horizontal RulerB. Header C. Heading rulerD. Horizontal RuleCâu 9b: Trong HTML, chữ “pre” trong phần tử pre là viết tắt của chữ nào?A. Preferred textB. Preformatted textC. Previous textD. Part referenceCâu 9c: Trong HTML, chữ ‘dl” trong phần tử dl là viết tắt của chữ nào?A. Document listB. Data listC. Description listD. Data linkCâu 9d: Trong HTML, chữ ‘ul” trong phần tử ul là viết tắt của chữ nào?A. unordered list B. unorder listC. unordered lineD. under listCâu 9e: Trong HTML, chữ ‘ol” trong phần tử ol là viết tắt của chữ nào?A. over listB. over lineC. ordered listD. order list

\-----

Bài sau: [HTML (7) - Bố cục một trang web](https://legiacong.blogspot.com/2021/10/web-front-end-7-html-to-chuc-trang-noi.html)