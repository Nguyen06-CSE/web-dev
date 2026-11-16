Bài trước: [CSS (7) - Định dạng chữ](https://legiacong.blogspot.com/2023/05/css-7-inh-dang-chu.html)

## 2.3 Bộ chọn

### 2.3.1 Các loại bộ chọn

Ở các phần trước, chúng ta đã biết cách sử dụng tên của phần tử để làm bộ chọn (selector). Trong phần này, chúng ta sẽ tìm hiểu chi tiết hơn về bộ chọn.

Có một số loại bộ chọn phổ biến sau:

– Bộ chọn cơ bản (basic selector).

– Bộ chọn gộp (grouping selector).

– Bộ chọn tổ hợp (combinator).

– Bộ chọn theo trạng thái (pseudo-class, pseudo-element).

**Bộ chọn cơ bản**

Bảng sau liệt kê một số bộ chọn cơ bản:

| ***Bộ chọn*** | ***Cú pháp*** |
| --- | --- |
| Bộ chọn phổ quát (universal selector): chọn mọi phần tử | *\* {}*  *ns \| \* {}*  *\* \| \* {}* |
| Bộ chọn theo tên phần tử (type selector, element selector): chọn các phần tử theo tên. | *elementname* {}  Ví dụ:  *p {}* // chọn mọi phần tử p trong tài liệu HTML |
| Bộ chọn theo class: chọn các phần tử theo giá trị của thuộc tính class | *.classname{}*  Ví dụ:  *.menu{}* // chọn mọi phần tử có thuộc tính *class="menu"* |
| Bộ chọn theo ID: chọn phần tử theo giá trị của thuộc tính ID | *#idname{}*  *#top{} //* chọn phần tử có thuộc tính *id="top"* |
| Bộ chọn theo thuộc tính (attribute): chọn các phần tử theo tên, hoặc giá trị của thuộc tính | *\[attr\] \[attr=value\] \[attr~=value\] \[attr\|=value\] \[attr^=value\] \[attr$=value\] \[attr\*=value\]*  Ví dụ:  *\[autoplay\] {}* // chọn các phần tử có thuộc tính tên là *autoplay,* mà không cần quan tâm tới giá trị của thuộc tính |

**Bộ chọn gộp**

Trường hợp cần định dạng giống nhau cho nhiều phần tử HTML, thì chúng ta có thể gộp các bộ chọn lại, giúp dễ đọc và rút gọn mã nguồn. Sử dụng dấu phẩy (,) để ngăn cách giữa các bộ chọn.

Ví dụ:

*p, h1, div { color: red; }*

**Bộ chọn tổ hợp**

Là bộ chọn được tạo ra bằng cách tổ hợp (kết hợp) từ hai thành phần trở lên.

Bảng sau liệt kê một số bộ chọn tổ hợp:

| ***Bộ chọn*** | ***Cú pháp*** |
| --- | --- |
| Bộ chọn theo hậu duệ (descendant combinator): chọn các phần tử là hậu duệ (con, cháu, chắt,…v.v) của một phần tử | *A B{}*  Ví dụ:  *div span{}* // chọn các *span* nằm trong *div* |
| Bộ chọn gồm các con trực tiếp (child combinator) | *A > B{}*  Ví dụ:  *ul > li* // chọn các *li* là con của *ul* |
| Bộ chọn gồm các “phần tử em” (general sibling combinator): chọn các phần tử cùng cha, nằm bên phải một phần tử | *A ~ B{}*  Ví dụ:  *p ~ span{}* // chọn các *span* nằm phía sau (tính từ trái sang phải), cùng cấp (cùng phần tử cha) với *p* |
| Bộ chọn gồm một "phần tử em" (adjacent sibling combinator) | *A + B{}*  Ví dụ:  *h2 + p{}* // chọn một phần tử *p* nằm ngay sau *h2* |

**Bộ chọn theo trạng thái**

Bộ chọn theo trạng thái gồm 2 loại:

– Bộ chọn lớp giả (pseudo class): chọn “lớp giả” là các trạng thái của phần tử, ví dụ *a:visited{}* sẽ chọn các phần tử *a* đã được người dùng duyệt qua

– Bộ chọn phần tử giả (pseudo element): chọn các "phần tử giả", là các phần tử không tồn tại trong tài liệu HTML, ví dụ *p::first-line{}* chọn hàng đầu tiên của phần tử *p*

### 2.3.2 Cú pháp của bộ chọn

Về mặt thực hành, chúng ta có nhiều cách để viết bộ chọn. Trong phần này, chúng ta sẽ hệ thống lại các cách viết, để tiện khi lập trình.

Chúng ta có các cách viết bộ chọn sau:

– Bộ chọn đơn (simple selector): là các bộ chọn chỉ gồm một thành phần. Ví dụ: các bộ chọn cơ bản, bộ chọn theo trạng thái.

– Bộ chọn hỗn hợp (compound selector): là bộ chọn gồm một dãy liên tục (không có khoảng trắng) các bộ chọn đơn. Ví dụ *a#selected {}* // chọn các phần tử có tên là *a* và có thuộc tính *id="selected"*

– Bộ chọn phức (complex selector): là bộ chọn gồm một hoặc nhiều bộ chọn đơn/bộ chọn hỗn hợp, ngăn cách nhau bằng các dấu tổ hợp. Ví dụ: *a#selected >.icon {}*, *.box h2 + p {}*

– Bộ chọn gộp (gộp các bộ chọn): là một dãy các bộ chọn, ngăn cách nhau bằng dấu phẩy (,). Ví dụ: *#main, article.heading {}*.

### 2.3.3 Thực hành với một số bộ chọn

Chúng ta đã biết về các loại bộ chọn trong CSS, phần này sẽ thực hành với một số bộ chọn, giúp chúng ta hiểu kĩ hơn về chúng.

Để tiện thực hành, theo dõi và kiểm tra kết quả, chúng ta sẽ sử dụng đoạn mã HTML sau:

\[index.html\]

<!DOCTYPE *html* >

\<html>

\<head>

\<meta *charset* ="utf-8">

\<title>Selectors\</title>

\<style>

\</style>

\</head>

\<body>

\<h2 *class* ="greencolor">The Back of the New $20\</h2>

\<p>Have you seen the "Series \<em>2004\</em> $20 Notes"? The U.S. Treasury has rolled out yet another revamp of the

U.S. \<a *href* ="">\<em>twenty\</em>\</a> dollar bill in an effort to stop those pesky counterfeiters once and for

all.\</p>

\<h2 *class* ="greencolor">The first 20s\</h2>

\<ul>

\<li>

\<h3>This is \<em>first\</em> item\</h3>

\</li>

\<li>This is \<em>second\</em> item\</li>

\<li>

\<h2>This is \<em>third\</em> item\</h2>

\</li>

\</ul>

\<h2 *id* ="yellowcolor">Too Many \<em>20s\</em>\</h2>

\<p *class* ="violetcolor">The last paragraph\</p>

\<h2>Another 20s\</h2>

\</body>

\</html>

– Bộ chọn phổ quát

\* { color: red; } */\* mọi phần tử đều có chữ màu đỏ \*/*

Để tiện quan sát kết quả, sau mỗi ví dụ, chúng ta sẽ xóa đoạn mã CSS của ví dụ trước, rồi mới viết thêm đoạn mã CSS.

– Bộ chọn là tên phần tử

h2 { color:red;} */\* các phần tử h2 có chữ màu đỏ \*/*

– Bộ chọn theo class

Thuộc tính *class* sẽ thực hiện phân lớp các phần tử vào các nhóm một cách logic, tất cả các phần tử giá trị *class* giống nhau sẽ cùng thuộc về một nhóm. Nhiều phần tử có thể có *class* giống nhau, và một phần tử có thể thuộc về nhiều *class*.

Sử dụng *class* để tạo ra bộ chọn gồm các phần tử có giá trị *class* giống nhau, trước *class* sẽ có thêm dấu chấm (.).

.greencolor { color:green;} */\* phần tử nào có giá trị class là greencolor sẽ có màu xanh \*/*

– Bộ chọn theo ID

Như đã biết, thuộc tính *id* được sử dụng để gán định danh (identifier) cho một phần tử bất kì, định danh này là duy nhất trong tài liệu HTML. Trong CSS, có thể sử dụng *id* làm bộ chọn để thực hiện định dạng cho phần tử, trước *id* sẽ có thêm dấu thăng (#) (octothorpe hoặc hash symbol).

# yellowcolor { color:yellow;} */\* phần tử có giá trị ID là yellowcolor sẽ có màu vàng \*/*

– Bộ chọn theo thuộc tính

\[class\] { color:violet;} */\* phần tử có thuộc tính là class sẽ có màu tím, không quan tâm giá trị class là gì \*/*

– Bộ chọn gộp

h3, p,# yellowcolor { color:blue } */\* các phần tử h3, p và phần tử có id="yellowcolor" sẽ có màu blue\*/*

– Bộ chọn theo hậu duệ

Bộ chọn theo hậu duệ sẽ chọn các phần tử là con, cháu, chắt,…v.v của một phần tử.

Để chọn theo hậu duệ, sử dụng một dãy các bộ chọn, mỗi bộ chọn ngăn cách nhau bằng một khoảng trắng. Khoảng trắng này có nghĩa là phần tử phía sau sẽ là hậu duệ của phần tử phía trước. Ví dụ,

li em { color: red }

Bộ chọn trên có nghĩa là: chỉ có các phần tử *em* là hậu duệ của phần tử *li* mới có chữ màu đỏ, trong khi các phần tử *em* còn lại sẽ không bị tác động bởi chỉ dẫn CSS này. Xem hình ví dụ,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgUTpEru4wZ77Z3XzxtkhOJFJgwUI4ufzaqd2zE5-5CzcMJsVIpesHq3g96fKcQBuYvQC04JjNm8HW1ePS6nKAuO_Qq1WzqhyNeWUsu_SiwO3-z9uYe0J46TavksHM_TdjCRmyciA4tqANhQ4_hzRCGWDQ2yBR3D62NVPizHr09_SZnOsp9td1e0l98=w400-h294)](https://blogger.googleusercontent.com/img/a/AVvXsEgUTpEru4wZ77Z3XzxtkhOJFJgwUI4ufzaqd2zE5-5CzcMJsVIpesHq3g96fKcQBuYvQC04JjNm8HW1ePS6nKAuO_Qq1WzqhyNeWUsu_SiwO3-z9uYe0J46TavksHM_TdjCRmyciA4tqANhQ4_hzRCGWDQ2yBR3D62NVPizHr09_SZnOsp9td1e0l98)

Ví dụ sau sẽ kết hợp bộ chọn gộp và chọn theo hậu duệ, mọi phần tử *em* nằm trong *h1,* hoặc *h2*, hoặc *h3* sẽ có chữ màu đỏ.

h1 em, h2 em, h3 em { color: red; }

Bộ chọn theo hậu duệ cũng có thể lồng nhau theo nhiều cấp, ví dụ sau sẽ thiết lập chữ màu đỏ cho các phần tử *em* nằm trong *h3* và *h3* phải nằm trong *li*.

li h3 em { color: red; }

– Bộ chọn gồm các con trực tiếp

Cách chọn này cũng tương tự như chọn theo các hậu duệ, tuy nhiên, chỉ giới hạn cho các hậu duệ là con trực tiếp. Con trực tiếp của một phần tử được hiểu là các phần tử nằm ở cấp dưới, liền kề trong tài liệu HTML (không có cấp nào xen vào giữa). Sử dụng dấu lớn hơn (>) để thể hiện bộ chọn này.

Ví dụ, chỉ dẫn CSS sau sẽ làm cho chữ trong phần tử *em* có màu đỏ, tuy nhiên, chỉ có phần tử *em* là con trực tiếp của *p* mới chịu tác động, trong khi các phần tử *em* khác thì không chịu tác động.

p > em { color: red; }

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgNXRW7-o1DwM2w93P4lbT2PkoKHaOiG5l4r_bMDXAS640D2TGqcfDy5HLC1LWMgxPKoqzYXDlPFXBrzFBlUHB-9wguTmZ9g_3Cjl4mjQQhvul7vTkO_cOaYLZqKY7gpGDjrMQKQa539oPrM7ogo0Hnsp9cMS_RJwMcFXfdaNBexqL9aKfC1iLkI__I=w400-h290)](https://blogger.googleusercontent.com/img/a/AVvXsEgNXRW7-o1DwM2w93P4lbT2PkoKHaOiG5l4r_bMDXAS640D2TGqcfDy5HLC1LWMgxPKoqzYXDlPFXBrzFBlUHB-9wguTmZ9g_3Cjl4mjQQhvul7vTkO_cOaYLZqKY7gpGDjrMQKQa539oPrM7ogo0Hnsp9cMS_RJwMcFXfdaNBexqL9aKfC1iLkI__I)

– Bộ chọn gồm một "phần tử em"

Các phần tử có cùng cha thì được gọi là anh em; trong tài liệu HTML, phần tử anh sẽ nằm trước, phần tử em nằm sau; trong cấu trúc cây (cây DOM), phần tử anh nằm ở phía trái, phần tử em nằm ở phía phải.

Chọn một em liền kề của một phần tử là chọn duy nhất một phần tử là em liền kề của nó. Sử dụng dấu cộng (+) để thể hiện bộ chọn này.

Ví dụ, chỉ dẫn CSS sau sẽ làm cho chữ trong phần tử *h2* có màu đỏ, tuy nhiên, chỉ có một phần tử *h2* nằm ngay sau *ul* mới chịu tác động, trong khi các phần tử *h2* khác thì không chịu tác động.

ul + h2 { color: red; }

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiVE2KAf4LwmyhoBUcjVQixhfyCYLnHgD33V5AHS0a2l9zgSM2CGq8FVWRnaZa6lSzyRWigjzlI-cJqpDJxvv1qY1ok3SD5s2Dhnj-Xtw5-mhGlnm-8WlAPbS3eXdWguuzw3Fq0JXfbBW4bIb_wLAO2zdG-Os4VCuAwGlU0vS1FuyVsttLPSIX0FIPd=w400-h293)](https://blogger.googleusercontent.com/img/a/AVvXsEiVE2KAf4LwmyhoBUcjVQixhfyCYLnHgD33V5AHS0a2l9zgSM2CGq8FVWRnaZa6lSzyRWigjzlI-cJqpDJxvv1qY1ok3SD5s2Dhnj-Xtw5-mhGlnm-8WlAPbS3eXdWguuzw3Fq0JXfbBW4bIb_wLAO2zdG-Os4VCuAwGlU0vS1FuyVsttLPSIX0FIPd)

– Bộ chọn gồm các “phần tử em”

Bộ chọn gồm các phần tử em của một phần tử sẽ chọn tất cả các phần tử là em (có tên được chỉ định) của nó. Sử dụng dấu ngã (~) để thể hiện bộ chọn này.

Ví dụ, chỉ dẫn CSS sau sẽ làm cho chữ trong phần tử *h2* có màu đỏ, tuy nhiên, chỉ những phần tử *h2* nằm sau *ul* (cùng cha *body*) mới chịu tác động, trong khi các phần tử *h2* nằm phía trước và các vị trí khác thì không chịu tác động.

ul ~ h2 { color: red; }

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhcY5-6KA9WpReRU6QtHZ92bDAzmd5dAYIHDkww0XW7L4Lmfh0RG_2ysVyNKd9dse8R7uM8rgyvz4A3L0Ra38g_fqOJTPDeO_XK-LDkm0A3OpsD-bNDuBLkVli81cLnchdquFUFa_XHeG8_m5P4yf4KzOTSuH3QU7FApnpC75v_Aad09-Qa9_kYXZcT=w400-h290)](https://blogger.googleusercontent.com/img/a/AVvXsEhcY5-6KA9WpReRU6QtHZ92bDAzmd5dAYIHDkww0XW7L4Lmfh0RG_2ysVyNKd9dse8R7uM8rgyvz4A3L0Ra38g_fqOJTPDeO_XK-LDkm0A3OpsD-bNDuBLkVli81cLnchdquFUFa_XHeG8_m5P4yf4KzOTSuH3QU7FApnpC75v_Aad09-Qa9_kYXZcT)

– Bộ chọn hỗn hợp

Ví dụ:

p.violetcolor { color: violet; }

Chọn phần tử có tên là *p* và có *class="violetcolor".*

### 2.3.4 Tính rõ ràng, chính xác của chỉ-dẫn-CSS

Như đã biết, khi có hai chỉ dẫn CSS bị xung đột thì chỉ dẫn nào càng rõ ràng, càng chính xác thì càng có độ ưu tiên cao hơn.

Trong CSS, danh sách dưới đây sẽ liệt kê các loại bộ chọn có tính rõ ràng, chính xác từ cao xuống thấp:

– Định dạng CSS trực tiếp trong phần tử HTML bằng thuộc tính *style*

– ID

– Class

– Bộ chọn là tên phần tử

Tuy nhiên, nếu bộ trọn bao gồm nhiều thành phần thì việc xác định bộ chọn nào có độ ưu tiên cao hơn sẽ được thực hiện như sau:

– Tạo ra 3 cái hộp rỗng \[ \] \[ \] \[ \]

– Đếm số ID có trong bộ chọn, điền vào hộp đầu tiên (tính từ trái qua phải)

– Đếm số class và pseudo-class có trong bộ chọn, điền vào hộp thứ 2

– Đếm số tên phần tử có trong bộ chọn, điền vào hộp thứ 3

– Duyệt từ trái sang phải, bộ chọn nào có thành phần ưu tiên nhiều hơn thì có độ ưu tiên cao hơn

Ví dụ,

Xét hai chỉ dẫn, cùng định dạng CSS cho *p*:

p { color: red; }

p.violetcolor { color: violet; }

Dễ nhận thấy, các phần tử *p* sẽ có chữ màu đỏ. Tuy nhiên, phần tử *p* có kèm *class="violetcolor"* có chữ màu đỏ không? Để biết được, chúng ta đo độ “rõ ràng, chính xác”.

(1) p { color: red; } \[0\] \[0\] \[1\]

(2) p.violetcolor { color: violet; } \[0\] \[1\] \[1\]

Xét các hộp, từ trái sang phải thấy chỉ dẫn 2 có độ ưu tiên cao hơn. Do vậy, phần tử *p* có kèm *class="violetcolor"* sẽ có chữ màu tím.

Quan sát một ví dụ khác:

(1) p { line-height: 1.2em; } \[0\] \[0\] \[1\]

(2) blockquote p { line-height: 1em; } \[0\] \[0\] \[2\]

(3) p.intro { line-height: 2em; } \[0\] \[1\] \[1\]

Xét độ ưu tiên dựa vào tính “rõ ràng, chính xác”: chỉ dẫn (3) có độ ưu tiên cao nhất, vì có 1 class; tiếp đến là chỉ dẫn 2, vì có 2 tên phần tử; cuối cùng là chỉ dẫn (1). Kết quả là dòng văn bản trong blockquote thấp hơn các đoạn thông thường, và dòng văn bản có class=“intro” là cao nhất (ngay cả khi nó nằm trong blockquote).

Bạn có thể tìm kiếm theo từ khóa “specificity calculator” để sử dụng công cụ tính độ “rõ ràng, chính xác” của bộ chọn. Ví dụ, có thể sử dụng trang web: [https://specificity.keegan.st/](https://specificity.keegan.st/). Bạn chỉ cần nhập bộ chọn, hệ thống sẽ tính các chỉ số ID, class, element. Hoặc bấm vào nút “Sort by specificity” để hệ thống sắp xếp thứ tự ưu tiên theo độ “rõ ràng, chính xác” của bộ chọn.

### 2.3.5 Xem và đọc thêm

– \[1\] *Jenifer Niederst Robbins, **Learning Web Design**, O’Reilly, 2018, trang 281 - 286*

– \[2\] CSS selector: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Selectors

– \[3\] Specificity Calculator: https://specificity.keegan.st/

### 2.3.6 Bài tập và thực hành

Bài tập 2.3a. Viết lại các đoạn mã trong phần lý thuyết.

Bài tập 2.3b. Sử dụng mã HTML (*menu.html*) của bài tập phần Phông chữ.

Trong bày tập này, chúng ta sẽ thêm một số chỉ dẫn định kiểu, sử dụng các bộ chọn hậu duệ (descendant), ID và lớp (class), kết hợp với các thuộc tính phông chữ (font) và màu sắc (color) mà chúng ta đã tìm hiểu trước đó.

1\. Chúng ta muốn thêm một vài màu sắc nổi bật, để thu hút sự chú ý vào các phần tử "new item!" nằm cạnh một số tên món trong thực đơn. Chúng đã được đánh dấu bằng thẻ \<strong>, vì vậy chúng ta có thể áp dụng thuộc tính **color** cho phần tử \<strong>. Thêm chỉ dẫn này vào vùng mã CSS, lưu lại tập tin, và mở lại trang web trên trình duyệt:

*strong {*

*font-style: italic;*

*color: tomato;*

*}*

Mã định dạng đã có hiệu lực, nhưng hiện tại phần tử \<strong> "Very spicy" trong đoạn mô tả cũng có màu đỏ "tomato" luôn, và chúng ta không muốn điều này. Giải pháp là sử dụng một bộ chọn theo ngữ cảnh (contextual selector) để chỉ nhắm vào những phần tử \<strong> xuất hiện bên trong các phần tử dt. Hãy xóa khai báo màu sắc mà bạn vừa viết khỏi chỉ dẫn của \<strong>, và tạo một chỉ dẫn mới chỉ nhắm vào các phần tử \<strong> bên trong các phần tử dt.

*dt strong { color: tomato; }*

2\. Nhìn lại tập tin mã nguồn, bạn sẽ thấy nội dung được chia thành ba thẻ `div` với id là: `info`, `appetizers`, và `entrees`. Chúng ta có thể sử dụng những thẻ này để định kiểu. Đầu tiên, hãy làm một việc đơn giản là áp dụng màu xanh lam (teal) cho văn bản trong thẻ `div` có ID là **"info"**. Vì màu sắc được kế thừa, nên chúng ta chỉ cần áp dụng thuộc tính này cho thẻ `div` và nó sẽ được truyền xuống cả thẻ `h1` và `p`:

*#info { color: teal; }*

3\. Bây giờ, chúng ta sẽ làm cho đoạn văn bản bên trong phần "info" trở nên đặc biệt hơn một chút, bằng cách in nghiêng nó mà không làm ảnh hưởng đến các đoạn văn bản khác trên trang web. Một lần nữa, giải pháp là sử dụng bộ chọn theo ngữ cảnh. Chỉ dẫn này sẽ chỉ chọn những đoạn văn bản nằm trong phần "info" của tài liệu.

*#info p { font-style: italic; }*

4\. Chúng ta muốn định dạng đặc biệt cho phần giá trên thực đơn. May mắn là tất cả chúng đều đã được đánh dấu bằng các thẻ `<span>`:

*\<span class="price">$3.95\</span>*

Bởi vậy, việc chúng ta phải làm chỉ là viết chỉ dẫn, sử dụng bộ chọn class để thay đổi phông chữ thành Georgia hoặc phông có chân nào đó, cho chữ nghiêng và màu xám (gray):

*.price {*

*font-family: Georgia, serif;*

*font-style: italic;*

*color: gray;*

*}*

5\. Tương tự, trong div “info”, chúng ta có thể thay đổi diện mạo của các span có class là “label”, để chúng nổi bật hơn:

*.label {*

*font-weight: bold;*

*font-variant: small-caps;*

*font-style: normal;*

*}*

6\. Cuối cùng, có một đoạn cảnh báo ở cuối trang, chúng ta muốn làm cho nó nhỏ và có màu đỏ. Nó đã được gán class là “warning”, nên chúng ta có thể dùng nó để làm bộ chọn nhằm định kiểu riêng cho đoạn văn bản này. Nhân tiện, chúng ta cũng sẽ áp dụng kiểu định dạng này cho phần tử `<sup>` (dấu hoa thị phía đầu cảnh báo). Chú ý, chúng ta sử dụng bộ chọn gộp (grouped selector), nên chúng ta không phải viết thêm một chỉ dẫn riêng.

*p.warning, sup {*

*font-size: small;*

*color: red;*

*}*

\[Kết quả\]

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhgCfgeHLvYdTTSWJW52i_VJ7ff9U_l9uNIEjP2Gy_paeTAIsVYQFO_dlBI0RUxNi4IUIS0c2Gek1r0Uh0tvyBmMcYZC1-dN_35Y0kL46RxTUmqfXs6TnaqPSvdOCYDHc1X503_8sgcU-Rwc6I0_RMt31AXMtmDkiQLVIlY6sGiPrZEw--kUnxf7N00=w400-h305)](https://blogger.googleusercontent.com/img/a/AVvXsEhgCfgeHLvYdTTSWJW52i_VJ7ff9U_l9uNIEjP2Gy_paeTAIsVYQFO_dlBI0RUxNi4IUIS0c2Gek1r0Uh0tvyBmMcYZC1-dN_35Y0kL46RxTUmqfXs6TnaqPSvdOCYDHc1X503_8sgcU-Rwc6I0_RMt31AXMtmDkiQLVIlY6sGiPrZEw--kUnxf7N00)

Bài tập 2.3c. Sử dụng mã HTML (*menu.html*) của bài tập trong phần Phông chữ.

This time, we’ll add a few more style rules using descendant, ID, and class selectors combined with the font and color properties we’ve learned about so far.

1\. I’d like to add some attention-getting color to the “new item!” elements next to certain menu item names. They are marked up as strong, so we can apply the color property to the strong element. Add this rule to the embedded style sheet, save the file, and reload it in the browser:

*strong {*

*font-style: italic;*

*color: tomato;*

*}*

That worked, but now the *strong* element “Very spicy” in the description is “tomato” red too, and that’s not what I want. The solution is to use a contextual selector that targets only the *strong* elements that appear in *dt* elements. Remove the color declaration you just wrote from the strong rule, and create a new rule that targets only the strong elements within definition list terms:

*dt strong { color: tomato; }*

2\. Look at the document source, and you will see that the content has been divided into three unique divs: *info*, *appetizers*, and *entrees*. We can use these to our advantage when it comes to styling. For now, let’s do something simple and apply a teal color to the text in the *div* with the ID “info”. Because color inherits, we need to apply the property only to the *div* and it will be passed down to the *h1* and *p*:

*#info { color: teal; }*

3\. Now let’s get a little fancier and make the paragraph inside the “info” section italic in a way that doesn’t affect the other paragraphs on the page. Again, a contextual selector is the answer. This rule selects only paragraphs contained within the info section of the document:

*#info p { font-style: italic; }*

4\. I want to give special treatment to all of the prices on the menu. Fortunately, they have all been marked up with span elements:

*\<span class="price">$3.95\</span>*

So now all we have to do is write a rule using a class selector to change the font to Georgia or some serif font, make the prices italic, and gray them back:

*.price {*

*font-family: Georgia, serif;*

*font-style: italic;*

*color: gray;*

*}*

5\. Similarly, in the “info” div, I can change the appearance of the spans that have been marked up as belonging to the “label” class to make the labels stand out:

*.label {*

*font-weight: bold;*

*font-variant: small-caps;*

*font-style: normal;*

*}*

6\. Finally, there is a warning at the bottom of the page that I want to make small and red. It has been given the class “warning,” so I can use that as a selector to target just that paragraph for

styling. While I’m at it, I’m going to apply the same style to the sup element (the footnote asterisk) earlier on the page so they match. Note that I’ve used a grouped selector, so I don’t need to write a separate rule.

*p.warning, sup {*

*font-size: small;*

*color: red;*

*}*

\[Result\]

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhgCfgeHLvYdTTSWJW52i_VJ7ff9U_l9uNIEjP2Gy_paeTAIsVYQFO_dlBI0RUxNi4IUIS0c2Gek1r0Uh0tvyBmMcYZC1-dN_35Y0kL46RxTUmqfXs6TnaqPSvdOCYDHc1X503_8sgcU-Rwc6I0_RMt31AXMtmDkiQLVIlY6sGiPrZEw--kUnxf7N00=w400-h305)](https://blogger.googleusercontent.com/img/a/AVvXsEhgCfgeHLvYdTTSWJW52i_VJ7ff9U_l9uNIEjP2Gy_paeTAIsVYQFO_dlBI0RUxNi4IUIS0c2Gek1r0Uh0tvyBmMcYZC1-dN_35Y0kL46RxTUmqfXs6TnaqPSvdOCYDHc1X503_8sgcU-Rwc6I0_RMt31AXMtmDkiQLVIlY6sGiPrZEw--kUnxf7N00)

### 2.3.7 Câu hỏi ôn tập

Câu 1. Muốn định dạng mọi phần tử *div* và *h1* đều có chữ màu đỏ, dùng chỉ dẫn CSS nào?

A. div > h1 { color: red; }

B. div ~ h1 { color: red; }

C. div h1 { color: red; }

D. div + h1 { color: red; }

Câu 2. Muốn định dạng mọi phần tử *div* và có thuộc tính *class="intro"* có chữ màu đỏ, dùng chỉ dẫn CSS nào?

A. div >.intro { color: red; }

B. div.intro { color: red; }

C. div.intro { color: red; }

D. div#intro { color: red; }

Câu 3. Muốn định dạng mọi phần tử *div* và có thuộc tính *id="intro"* có chữ màu đỏ, dùng chỉ dẫn CSS nào?

A. div >.intro { color: red; }

B. div.intro { color: red; }

C. div #intro { color: red; }

D. div#intro { color: red; }

Câu 4. Trong 3 chỉ dẫn CSS sau: (1) p { line-height: 1.2em; }, (2) blockquote p { line-height: 1em; }, (3) p.intro { line-height: 2em; }, xét theo độ “rõ ràng, chính xác, specificity”, cái nào có độ ưu tiên cao nhất?

A. 1

B. 2

C. 3

D. 2 và 3

Câu 5. Muốn định dạng hàng đầu tiên của đoạn có chữ màu đỏ, dùng chỉ dẫn CSS nào?

A. p::first-line{ color: red; }

B. p>first-line{ color: red; }

C. p+first-line{ color: red; }

D. p~first-line{ color: red; }

\-----

Bài sau: [CSS (9) - Định dạng dòng & đoạn](https://legiacong.blogspot.com/2023/06/css-9-inh-dang-dong-oan.html)