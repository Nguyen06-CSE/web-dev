Bài trước: [HTML (6) - Hiển thị văn bản](https://legiacong.blogspot.com/2021/10/web-front-end-6-html-hien-thi-van-ban.html)

## 10\. Bố cục một trang web

Nhắc lại một chút, nhiệm vụ của HTML là sử dụng các phần tử của nó để tạo ra cấu trúc và thêm ngữ nghĩa cho tài liệu HTML. Mục đích của việc này là để phục vụ cho các công việc tiếp theo, như hiển thị nội dung, trang trí bằng CSS, lập trình tương tác bằng JavaScript, quá trình biên dịch, hoạt động của các trang tìm kiếm, hoạt động của các ứng dụng đọc tự động, phân tích dữ liệu được thuận lợi và hiệu quả.

Một tài liệu HTML với cấu trúc hợp lý và có ngữ nghĩa là một yếu tố quan trọng giúp chúng ta có được một trang web thành phẩm hoàn hảo cả về bố cục, màu sắc, hiệu ứng, nội dung, và trải nghiệm người dùng.

Như đã biết, cấu trúc cơ bản của một tài liệu HTML gồm các phần tử *html, head, title* và *body*. Trong đó, phần tử *body* chứa toàn bộ nội dung sẽ hiển thị ra màn hình, đó là phần nội dung các trang web. Trang web ở dạng mã nguồn được gọi là tài liệu HTML.

Nội dung của trang web rất đa dạng, ví dụ, có thể là một tờ báo, trang blog, trang thông tin của một công ty, giao diện game, các sản phẩm của một cửa hàng. Phần này sẽ tập trung tìm hiểu cách tạo ra một trang web có bố cục cơ bản nhất. Dựa trên đó, bạn có thể tùy chỉnh cho từng trang web cụ thể.

Ở những phần trước, bạn đã tìm hiểu các phần tử: *p, heading, list, pre, blockquote, figure, figcaption*, đây được xem như là các nguyên liệu để tạo nên nội dung web. Phần này sẽ tìm hiểu các phần tử để tổ chức các nội dung lại với nhau, để tạo thành các vùng nội dung lớn hơn.

### 10.1 Các phần tử tạo bố cục trang web

Trước khi HTML5 ra đời, để nhóm (grouping) các phần tử lại với nhau, nhằm tạo các vùng lớn hơn của một trang web, người ta thường sử dụng phần tử *div*. Tuy nhiên, HTML5 đã cung cấp hàng loạt các phần tử, với ngữ nghĩa rõ ràng hơn, để chia (sectioning) nội dung thành các vùng (section) riêng biệt, phần này sẽ tìm hiểu các phần tử như: *main, header, footer, section, article, nav, aside, address*.

Khi đọc tài liệu tiếng Anh, thường rất khó hiểu và hay nhập nhằng giữa hai từ “nhóm” (grouping) và “chia” (sectioning). Ngẫm nghĩ kĩ, thì thấy “nhóm” cũng là “chia”, mà “chia” cũng là “nhóm”. Tại sao vậy, tại vì nhóm những cái nhỏ lại, cũng có nghĩa là đã chia chúng ra khỏi cái lớn và ngược lại, chia nhỏ một cái lớn, cũng có nghĩa là tạo ra những nhóm nhỏ.

Xem hình ví dụ về “nhóm” và “chia”,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvRI5MjxTNai5QbSWL9LygHK7iwmMjC2TCiqw9Aftd0GWhgXy_IEJB3E0dIDB8_eUS-o2XLx8tFXZB79dkq9O1f1sGveVGsxSSVTX5z8N4gR46we92H4acFeqH5UulKFPTAzmjO3VqaqJc3CeSCgkFBLdoihTQOM4xTYuIdEoKIZePDQMxBUNfv77L/w400-h289/Nhom_1.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvRI5MjxTNai5QbSWL9LygHK7iwmMjC2TCiqw9Aftd0GWhgXy_IEJB3E0dIDB8_eUS-o2XLx8tFXZB79dkq9O1f1sGveVGsxSSVTX5z8N4gR46we92H4acFeqH5UulKFPTAzmjO3VqaqJc3CeSCgkFBLdoihTQOM4xTYuIdEoKIZePDQMxBUNfv77L/s700/Nhom_1.jpg)

Để dễ hiểu về các phần tử tạo bố cục trang web, phần này minh họa theo bố cục (layout) của một trang web cơ bản. Trang web này được chia thành các vùng: Main content, Header, Sidebars, Footer. Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizFAgO9XDyiDeCFbkqffIdeXYXuKFaYnQEyfc1uLny5FX8oyr9mz4HrI839Dx-HN1PzT6zjBblem4ZCbnjkRriX1qR0egSNNu1dyw-Hmh1lW4fxwr6HH-Pg0BHsfYrHuciHjGILhOIxQWW-Qxosj2CnfCFkxFDmK4Jewif7cZQnZfkgkpXRX1KxnDX/w400-h353/Nhom2.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizFAgO9XDyiDeCFbkqffIdeXYXuKFaYnQEyfc1uLny5FX8oyr9mz4HrI839Dx-HN1PzT6zjBblem4ZCbnjkRriX1qR0egSNNu1dyw-Hmh1lW4fxwr6HH-Pg0BHsfYrHuciHjGILhOIxQWW-Qxosj2CnfCFkxFDmK4Jewif7cZQnZfkgkpXRX1KxnDX/s569/Nhom2.jpg)

Vùng nội dung chính (main content)

Vùng nội dung chính là phần quan trọng nhất của một trang web, chứa nội dung liên quan đến chủ đề của trang đó.

Trong một website, các vùng tiêu đề (masthead, header), khung nội dung bổ trợ (sidebar), vùng quảng cáo (ad), và vùng cuối/chân trang (footer) thường xuất hiện nhiều lần, trong nhiều trang web (web page). Riêng vùng nội dung chính (main) chỉ xuất hiện một lần.

Để dễ hiểu, bạn hãy mở một trang web bất kỳ để quan sát. Ví dụ trang https://www.w3schools.com/html/default.asp

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwqy8lgHalAclns-qn1AG4kOCQ3h2q_XvP4wO1gwOkZI3ys3A4K4HUPS59Dzo9IyIhvMJFLC3mHiMOGSVTeZRxz0jyXwy6HPIbZOuqWJUEfWOrjTQxz8HEFW6-Siw7dh6TgqkFnFViqwzDdEVr99_VJRWX-P_ypzKgS9fZlCK1FHYrMMWYiJhJh7xs200/w400-h221/sections.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwqy8lgHalAclns-qn1AG4kOCQ3h2q_XvP4wO1gwOkZI3ys3A4K4HUPS59Dzo9IyIhvMJFLC3mHiMOGSVTeZRxz0jyXwy6HPIbZOuqWJUEfWOrjTQxz8HEFW6-Siw7dh6TgqkFnFViqwzDdEVr99_VJRWX-P_ypzKgS9fZlCK1FHYrMMWYiJhJh7xs200/s1295/sections.png)

Bạn thử bấm vào các mục ở khung Sidebar, ví dụ HTML Introduction, HTML Editors, để quan sát sự thay đổi nội dung của vùng Main. Bạn sẽ thấy, nội dung của vùng Main thay đổi sau mỗi lần bấm, trong khi các vùng còn lại vẫn giữ nguyên. Sau mỗi lần bấm, bạn cũng thấy sự thay đổi nội dung thanh địa chỉ (URL) của trình duyệt, điều đó có nghĩa là bạn (có thể) đã chuyển qua-lại giữa các trang web khác nhau của một website.

Trong HTML, bạn sử dụng phần tử main để tạo vùng Main.

Ví dụ,

\<body>

\<header>...\</header>

\<main>

\<h1>Nội dung chính của trang\</h1>

*<!-- các nội dung khác -->*

\</main>

\</body>

Các phần tử header, sidebar, và các phần tử xuất hiện ở nhiều trang, thì không nên để trong phần tử main. Phần tử main không nên lồng trong các phần tử article, aside, header, footer và nav.

**Phần đầu và phần chân (headers và footers)**

Đây là hai phần tử được đặt ở đầu và cuối của một vùng nội dung, nhằm tạo ra cấu trúc rõ ràng cho vùng nội dung đó.

***Phần đầu (headers)***

Phần tử *header* thường dùng để chứa nội dung giới thiệu, tuy nhiên, trong thực tế nó có thể chứa mọi thứ, miễn là liên quan đến mục đích giới thiệu, ví dụ logo, tiêu đề, khẩu hiệu, thanh điều hướng. Phần tử này thường được đặt ở đầu của trang web, hoặc phía trên cùng của một vùng (section) hoặc một bài viết (article).

Ví dụ, sử dụng phần tử header để chứa logo, tiêu đề của trang web và thanh điều hướng,

\[HTML\]

\<header>

\<img src="/images/logo.png">

\<h1>Trang blog của Tèo\</h1>

\<nav>

\<ul>

\<li>\<a href="">Home\</a>\</li>

\<li>\<a href="">Blog\</a>\</li>

\<li>\<a href="">About\</a>\</li>

\</ul>

\</nav>

\</header>

Trong một article, phần tử header thường được dùng để chứa: tiêu đề, tác giả, và ngày xuất bản của bài viết.

\<article>

\<header>

\<h1>Tiêu đề bài viết\</h1>

\<p>người viết Nguyễn Văn Tèo\</p>

\<p>ngày xuất bản: 11/11/2022\</p>

\</header>

\<p>...phần nội dung bài viết…\</p>

\</article>

**Phần chân (footers)**

Phần tử *footer* dùng để chứa các thông tin ở cuối một trang web, cuối một vùng (section) hoặc cuối một bài viết (article). Phần tử footer thường chứa tên tác giả, thông tin bản quyền (copyright), các tài liệu liên quan, hoặc các điều hướng (navigation).

Phần tử footer đặt ở cuối trang thì sẽ là thông tin kết thúc của toàn trang, tuy nhiên, nó cũng có thể được đặt ở cuối một section, article, nav, hoặc aside và sẽ là thông tin kết thúc của chính phần tử chứa nó. Mặc dù gọi là “phần chân” tuy nhiên không nhất thiết phải luôn luôn đặt footer ở cuối của các phần tử chứa nó, quan trọng là ngữ nghĩa của các nội dung mà phần tử footer chứa.

Ví dụ, phần chân của một bài viết trên blog,

\[HTML\]

\<article>

\<header>

\<h1>Tiêu đề bài viết\</h1>

\<p>người viết Nguyễn Văn Tèo\</p>

\<p>ngày xuất bản: 11/11/2018\</p>

\</header>

\<p>...phần nội dung bài viết…\</p>

\<footer>

\<p>\<small>Copyright &copy;2018 Tèo.\</small>\</p>

\<nav>

\<ul>

\<li>\<a href="">Previous\</a>\</li>

\<li>\<a href="">Next\</a>\</li>

\</ul>

\</nav>

\</footer>

\</article>

**Phân vùng (section)**

Với một tài liệu dài, bạn nên chia nhỏ nó ra thành nhiều phần thì sẽ dễ hiển thị và dễ đọc hơn.

Giả sử nội dung của trang web là một cuốn sách, thì việc chia nội dung thành nhiều chương sẽ giúp bạn làm việc với nó thuận tiện và chuyên nghiệp hơn; hoặc một trang báo với nhiều tin tức thì việc chia thành các chuyên mục (ví dụ: thể thao, văn hóa, giáo dục) cũng giúp nó trở nên chuyên nghiệp, dễ đọc. Để thực hiện việc chia này, bạn sử dụng phần tử *section*.

Phần tử *section* dùng để chia nội dung thành các vùng theo các chủ đề khác nhau. Mỗi phần tử *section* thường bao gồm heading (h1-h6) và phần nội dung. Có thể hiểu nôm na, phần tử *section* được sử dụng để liệt kê nội dung, giống như vai trò liệt kê các mục trong danh sách của phần tử *li*.

Cú pháp,

\<section>

\<h1>Tên chủ đề\</h1>

\<p>Nội dung của chủ đề\</p>

\</section>

Ví dụ,

\[HTML\]

\<section>

\<h1>Chương 1\</h1>

\<p>Nội dung của chương 1\</p>

\</section>

\<section>

\<h1>Chương 2\</h1>

\<p>Nội dung của chương 2\</p>

\</section>

Một ví dụ về phần tử *section*, lấy từ W3Schools,

\[HTML\]

*\<section>*

*\<h1>WWF\</h1>*

*\<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.\</p>*

*\</section>*

*\<section>*

*\<h1>WWF's Panda symbol\</h1>*

*\<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.\</p>*

*\</section>*

Ví dụ, sử dụng phần tử *section* để liệt kê các bài viết trên blog,

\[HTML\]

\<section>

\<h2>Tiêu đề bài viết 1\</h2>

\<p>Trích đoạn của bài viết 1\</p>

\</section>

\<section>

\<h2>Tiêu đề bài viết 2\</h2>

\<p>Trích đoạn của bài viết 2\</p>

\</section>

\<section>

\<h2>Tiêu đề bài viết 3\</h2>

\<p>Trích đoạn của bài viết 3\</p>

\</section>

Tuy nhiên, nếu chỉ đơn thuần chia nội dung trang web thành các vùng để định dạng, trang trí, xử lý tương tác, thì nên sử dụng phần tử *div* thay vì *section*.

***Bài viết (article)***

Phần tử *article* cũng có chức năng chia nội dung thành các vùng như phần tử *section*, tuy nhiên, có một điều khác là phần nội dung nằm trong phần tử *article* có thể tồn tại độc lập (không liên quan đến các nội dung khác), và có thể được sử dụng lại ở nơi khác. Ngay tên của phần tử đã phản ánh tính chất của nó, article là một bài viết.

Trong thực tế, phần tử *article* thường dùng để chứa một bài viết trên diễn đàn, báo điện tử, tạp chí, blog, hoặc chứa một bình luận của người dùng.

Ví dụ, sử dụng phần tử *article* để tạo một bài viết trên blog,

\[HTML\]

\<article>

\<h1>Tiêu đề của bài viết\</h1>

\<ul>

\<li>Tên tác giả\</li>

\<li>Thuộc thể loại: Bài viết mới\</li>

\</ul>

\<p>

Phần nội dung của bài viết

\</p>

\</article>

**Bài viết gồm nhiều phần (article chứa section)**

Nếu một article gồm nhiều nội dung, có thể chia nội dung thành các section.

Ví dụ,

\<article>

\<h1>Tiêu đề của bài viết\</h1>

\<ul>

\<li>Tên tác giả\</li>

\<li>Thuộc thể loại: Bài viết mới\</li>

\</ul>

\<section>

\<h2>Mở đầu\</h2>

\<p>Nội dung của phần mở đầu\</p>

\</section>

\<section>

\<h2>Nội dung 1\</h2>

\<p>Nội dung 1 của bài viết\</p>

\</section>

\<section>

\<h2>Nội dung 2\</h2>

\<p>Nội dung 2 của bài viết\</p>

\</section>

\<section>

\<h2>Kết luận\</h2>

\<p>Nội dung của phần kết luận\</p>

\</section>

\</article>

**Một vùng chứa nhiều bài viết (section chứa article)**

Ngược lại, một section cũng có thể chứa nhiều article.

Ví dụ,

\[HTML\]

\<section>

\<h2>Các bài viết mới\</h2>

\<article>

\<h1>Tiêu đề của bài viết 1\</h1>

\<ul>

\<li>Tên tác giả 1\</li>

\<li>Thuộc thể loại: Bài viết mới\</li>

\</ul>

\<p>

Phần nội dung của bài viết 1

\</p>

\</article>

\<article>

\<h1>Tiêu đề của bài viết 2\</h1>

\<ul>

\<li>Tên tác giả 1\</li>

\<li>Thuộc thể loại: Bài viết mới\</li>

\</ul>

\<p>

Phần nội dung của bài viết 2

\</p>

\</article>

\</section>

**Thông tin bổ trợ (aside)**

Phần tử aside được sử dụng để chứa các thông tin có liên quan đến nội dung chính, được đặt bên cạnh nội dung chính (trên, dưới, trái, phải). Aside có nghĩa là bổ sung thêm. Về mặt trực quan có thể hình dung phần tử aside giống với sidebar (thanh bên) trên giao diện web, tuy nhiên, hai cái này không phải là một. Aside mang tính bổ trợ về mặt ngữ nghĩa, trong khi sidebar có nghĩa là đặt ở bên cạnh khi hiển thị.

Trong thực tế, phần tử aside thường được dùng để chứa trích dẫn (quote), thông tin thêm (background information), danh sách các liên kết, phát biểu (callouts), hoặc bất cứ thứ gì liên quan (mà không quan trọng) đến tài liệu.

Ví dụ, sử dụng phần tử aside để liệt kê các liên kết liên quan tới phần nội dung,

\[HTML\]

\<h1>Một số kĩ năng sinh viên nên chuẩn bị\</h1>

\<p>Trong thời gian học tại trường Đại học, các bạn nên trang bị cho mình những thứ sau, để khi ra trường có thể tự tin làm việc, và hạnh phúc trong công việc.\</p>

\<p>Những thứ các bạn nên để ý là: kiến thức chuyên môn và cuộc sống, kĩ năng làm nghề, kĩ năng làm việc, kĩ năng sống; thái độ trong giao tiếp, trong công việc và thái độ với nghề mà mình đang theo đuổi.\</p>

\<aside>

\<h2>Một số cuốn sách về định hướng nên đọc\</h2>

\<ul>

\<li>Khuyến học\</li>

\<li>Cà phê cùng Tony\</li>

\<li>Khởi hành\</li>

\<li>Đúng việc\</li>

\<li>Trên đường băng\</li>

\<li>Code dạo ký sự\</li>

\</ul>

\</aside>

**Điều hướng (navigation)**

Phần tử *nav* được sử dụng để chứa các liên kết (link) điều hướng, thường được sử dụng để tạo trình đơn (menu) ngang, dọc. Lưu ý, không phải mọi liên kết đều phải đặt trong phần từ *nav*. Nav là viết rút gọn của navigation.

Ví dụ,

\[HTML\]

\<nav>

\<a href="#">Home\</a> |

\<a href="#">About\</a> |

\<a href="#">Blog\</a> |

\<a href="#">Sign in\</a>

\</nav>

**Thông tin liên hệ (address)**

Phần tử *address* được sử dụng để chứa các thông tin liên lạc với tác giả của bài viết hoặc người đăng bài viết. Phần tử này thường được để ở cuối của tài liệu, cuối vùng hoặc cuối bài viết. Phần tử *address* nên đặt trong phần tử *footer*.

Lưu ý: nội dung trong phần tử *address* thường là liên kết tới một email, trang thông tin tác giả, hoặc một website khác, chứ rất hiếm khi là một địa chỉ cư trú, hoặc địa chỉ văn phòng.

Ví dụ,

\<address>

Đóng góp bởi \<a href="../authors/teo/">Văn Tèo\</a>,

\<a href="http://www.nhaxuatban.com/">Nhà Xuất Bản\</a>

\</address>

### 10.2 Xem và đọc thêm

### Hỏi chatbot, tìm kiếm trên Google hoặc Youtube các từ khóa này, để đọc và xem thêm: main HTML element, header HTML element, footer HTML element, section HTML element, article HTML element, nav HTML element, aside HTML element, address HTML element.

### 10.3 Bài tập và câu hỏi

### Bài tập

**Bài tập 10.1:** Viết lại các đoạn mã trong phần lý thuyết.

**Bài tập 10.2:** Sử dụng các phần tử HTML đã học để tạo phần nội dung của một trang báo. Ví dụ, tuoitre.vn.

**Yêu cầu:**

\- Tối thiểu phải sử dụng các phần tử đã học trong phần Hiển thị văn bản và Tổ chức trang nội dung.

\- Không nhất thiết phải làm toàn bộ nội dung của trang báo, chỉ cần làm một phần nhỏ để minh họa cho các nội dung đã học.

**Bài tập 10.3:** Sử dụng các phần tử HTML đã học, để tạo phần nội dung của một trang dạy về công nghệ. Ví dụ, https://www.w3schools.com/html/default.asp

**Yêu cầu:**

\- Tối thiểu phải sử dụng các phần tử đã học trong phần Hiển thị văn bản và Tổ chức trang nội dung.

\- Không nhất thiết phải làm toàn bộ nội dung của trang báo, chỉ cần làm một phần nhỏ để minh họa cho các nội dung đã học.

**\[Gợi ý làm bài tập\]**

**Bài tập 10.2:** Tạo nội dung trang báo bằng HTML.

\- Tạo thư mục dự án

/layout\_tuoitre\_html

\-- layout\_tuoitre\_html.html

\-- images

\- Mở một trang báo trên trình duyệt. Ví dụ: tuoitre.vn

\- Sử dụng Developer tools để xem mã nguồn và phân tích bố cục của trang.

\- Trang web gồm các vùng header, main (section có id là content), footer.

*<!-- header -->*

\<header>

*<!-- header-top -->*

\<section>

\<ul>

\<li>\<a *href* ="#">\<img *src* ="images/logoTTTV.png">\</a>\</li>

\<li>...\</li>

\<li>Hotline: 0918.033.133\</li> \<li>Đặt báo\</li>

\<li>Quảng cáo\</li> \<li>Đăng nhập | Đăng ký\</li>

\</ul>

\</section>

*<!-- end header-top -->*

*<!-- header-middle -->*

\<section>

\<ul>

\<li>Youtube báo tuổi trẻ\</li>

\<li>Cần biết\</li> \<li>Nhà đất\</li>

\</ul>

\<div>Tìm kiếm tin tức\</div>

\</section>

*<!-- end header-middle -->*

*<!-- banner-top -->*

\<section> *<!-- banner cho quảng cáo -->* \</section>

*<!-- end banner-top -->*

*<!-- header-bottom -->*

\<section>

\<nav>

\<ul>

\<li>Media\</li> \<li>Thời sự\</li> \<li>Thế giới\</li>

\<li>Pháp luật\</li> \<li>Kinh doanh\</li>

\< li \> Công nghệ \</ li \> \< li \> Xe \</ li \> \< li \> Du lịch \</ li \>

\</ul>

\</nav>

\</section>

*<!-- end header-bottom -->*

\</header>

*<!-- end header -->*

*<!-- main -->*

\<main>

*<!-- tin-chính -->*

\<article>

\<img *src* ="images/anh\_main.jpg">

\<h2>Chủ tịch HĐND TP.HCM: 'Biến nguy thành cơ để phục hồi kinh tế - xã hội'\</h2>

\<p>UBND TP Hà Nội....bàn thành phố.\</p>

\<p>Từ 1-7, khi Hà Nội thí điểm mô hình chính quyền đô thị,.... các quận và thị

xã Sơn Tây \</ p \>

\</ article \>

*<!-- end tin-chính -->*

*<!-- ds-các-tin-mới -->*

\< section \> \< ul \> \< li \>\</ li \> \</ ul \> \</ section \>

*<!-- end ds-các-tin-mới -->*

*<!-- các-tin-khác -->*

\< section \> \< ul \> \< li \>\</ li \> \</ ul \> \</ section \>

*<!-- end các-tin-khác -->*

\</main>

*<!-- end main -->*

*<!-- footer -->*

\<footer>

*<!-- footer-icon -->*

\<section> \</section>

*<!-- end footer-icon -->*

*<!-- footer-middle -->*

\<section> \</section>

*<!-- end footer-middle -->*

*<!-- footer-bottom -->*

\<section> \</section>

*<!-- end footer-bottom -->*

\</footer>

*<!-- end footer -->*

\- Chèn các nội dung vào mỗi vùng, gồm hình ảnh, ul, section, article, các phần tử tạo nội dung khác.

**Bài tập 10.3:**

\- Tạo thư mục dự án

/layout\_w3schools\_html

\-- layout\_w3schools\_html.html

\-- images

\- Mở trang https://www.w3schools.com/html/default.asp

\- Sử dụng Developer tools để xem mã nguồn và phân tích bố cục của trang

\- Viết lại phần nội dung HTML, tạm thời bỏ qua các thuộc tính class, id không cần thiết

\- Viết một số thông tin cho phần tử head, để ý kích thước của icon sẽ hiển thị trên tab trình duyệt (48 x 48 px)

\<head>

\<meta *charset* ="utf-8">

\<title>HTML tutorial\</title>

\<meta *name* ="Keywords" *content* ="HTML, Python, CSS, SQL, How to, PHP">

\<meta *name* ="Description" *content* ="Well organized and easy to understand Web building tutorials">

\<link *rel* ="icon" *href* ="images/favicon.ico" *type* ="image/x-icon">

\</head>

\- Viết mã cho phần body. Khi xem mã nguồn của trang w3schools, bạn có thể thấy đoạn mã cho khung quảng cáo (ad) nằm phía trên cùng, hãy lướt qua đoạn mã quảng cáo, để tìm tới vùng header.

\- Bạn không tìm thấy thẻ header, nhưng bạn sẽ thấy 2 div có tên (id) là pagetop và topnav (top navigation). Có thể xem pagetop và topnav là 2 phần tử con của phần tử header.

\- Logo họ dùng kĩ thuật CSS để hiển thị, do chưa học CSS, nên sẽ tìm và tải logo dạng hình ảnh của w3schools từ trên mạng (kích thước 255 x 255 px)

\- Bạn tiếp tục sử dụng Developer tools và View page source, để tạo ra tài liệu HTML cho trang w3schools.

\- Dưới đây là một kết quả tham khảo.

\[layout\_w3schools\_html.html\]

<!DOCTYPE *html* >

\<html *lang* ="en">

\<head>

\<meta *charset* ="utf-8">

\<title>HTML tutorial\</title>

\<meta *name* ="Keywords" *content* ="HTML, Python, CSS, SQL, How to, PHP">

\<meta *name* ="Description" *content* ="Well organized and easy to understand Web building tutorials">

\<link *rel* ="icon" *href* ="images/favicon.ico" *type* ="image/x-icon">

\</head>

\<body>

\<header>

\<img *src* ="images/logo.png" *alt* ="" *title* ="Home">

\<div *id* ="pagetop">

\<a *href* ="#">Tutorials\</a>

\<a *href* ="#">References\</a>

\<a *href* ="#">Exercises\</a>

\<a *href* ="#">Videos\</a>

\<div>

\<a *href* ="#">Log in\</a>

\</div>

\<div>

\<a *href* ="#">Free Website\</a>

\<a *href* ="#">Get Certified\</a>

\<a *href* ="#">Upgrade\</a>

\</div>

\</div>

\<nav *id* ="topnav">

\<a *href* ="#">HTML\</a>

\<a *href* ="#">CSS\</a>

\<a *href* ="#">JavaScript\</a>

\<a *href* ="#">SQL\</a>

\</nav>

\</header>

\<div *id* ="sidenav">

\<h2>HTML Tutorials\</h2>

\<a *href* ="#">HTML HOME\</a>

\<a *href* ="#">HTML Introduction\</a>

\<a *href* ="#">HTML Editors\</a>

\<a *href* ="#">HTML Basic\</a>

\<a *href* ="#">HTML Elements\</a>

\</div>

\<main>

\<h1>HTML Tutorial\</h1>

\<div>

\<a *href* ="#">< Home\</a>

\<a *href* ="#">Next >\</a>

\</div>

\<div>

\<p>HTML is the standard markup language for Web pages.\</p>

\<p>With HTML you can create your own Website.\</p>

\<p>HTML is easy to learn - You will enjoy it!\</p>

\<a *href* ="#">Study our free HTML Tutorial »\</a>

\</div>

\</main>

\<footer>

\<div>

\<p>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.

Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.

While using W3Schools, you agree to have read and accepted our

\<a *href* ="#">cookie and privacy policy\</a>.\<br>\<br>

\<a *href* ="#">Copyright 1999-2022\</a> by Refsnes Data. All Rights Reserved.\<br>

\<a *href* ="#">W3Schools is Powered by W3.CSS\</a>.\<br>\<br>\</p>

\</div>

\</footer>

\</body>

\</html>

### Câu hỏi

**Câu hỏi 10a:** The content inside the \_\_\_\_\_\_ element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.

A. main

B. article

C. section

D. header

**Câu hỏi 10b:** The \_\_\_\_\_\_ element represents a container for introductory content or a set of navigational links.

A. head

B. footer

C. header

D. article

**Câu hỏi 10c:** The \_\_\_\_\_\_\_ element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).

A. aside

B. main

C. section

D. article

**Câu hỏi 10d:** The \_\_\_\_\_\_ element identifies content that is separate from, but tangentially related to, the surrounding content. In print, its equivalent is a sidebar, but it couldn’t be called “sidebar” because putting something on the “side” is a presentational description, not semantic.

A. main

B. aside

C. section

D. article

**Câu hỏi 10e:** The \_\_\_\_\_\_ element is used to create an area for contact information for the author or maintainer of the document. It is generally placed at the end of the document or in a section or article within a document.

A. footer

B. header

C. aside

D. address

\-----

Bài sau: [HTML (8) - Phần mềm lập trình web](https://legiacong.blogspot.com/2021/10/web-front-end-8-html-phan-mem-lap-trinh.html)