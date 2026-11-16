Bài trước: [CSS (10) - Định dạng màu](https://legiacong.blogspot.com/2023/06/css-10-inh-dang-mau.html)

## 3.2 Bộ chọn theo trạng thái & thuộc tính

Như đã biết, trong CSS, các bộ chọn được chia thành 4 loại, gồm: Bộ chọn cơ bản (basic selector), Bộ chọn gộp (grouping selector), Bộ chọn tổ hợp (combinator) và Bộ chọn theo trạng thái (pseudo-class, pseudo-element).

Trong đó, Bộ chọn theo trạng thái gồm 2 loại:

– Bộ chọn lớp giả (pseudo class): chọn “lớp giả” là chọn theo các trạng thái của phần tử, ví dụ *a:visited{}* sẽ chọn các phần tử *a* đã được người dùng duyệt qua

– Bộ chọn phần tử giả (pseudo element): chọn "phần tử giả" là chọn các phần tử không tồn tại một cách tường minh trong tài liệu HTML, ví dụ *p::first-line{}* chọn hàng đầu tiên của phần tử *p*

Phần này sẽ tìm hiểu kĩ hơn về Bộ chọn lớp giả và Bộ chọn phần tử giả. Ngoài ra, chúng ta cũng tìm hiểu thêm về Bộ chọn theo thuộc tính (thuộc Bộ chọn cơ bản).

### 3.2.1 Bộ chọn lớp giả (pseudo-class)

Để ý các liên kết (link) trên một trang web, nếu chưa được bấm chuột vào, chúng sẽ có màu xanh, ngược lại, nếu đã được bấm chuột vào, chúng sẽ có màu tím. Có hiện tượng này là do trình duyệt đã lưu lại trạng thái của các liên kết, cho biết chúng đã được bấm chuột hay chưa (clicked, visited).

Ngoài ra, trình duyệt cũng cung cấp một số thông tin trạng thái khác, như khi người dùng đang rê chuột lên một phần tử (hover), một phần tử có là cái đầu tiên của một loại, là con đầu tiên/cuối cùng của một phần tử cha; phần tử có được chọn không (checked) hay phần tử có bị vô hiệu không (disabled).

Trong CSS, chúng ta có thể định dạng phần tử dựa trên các trạng thái như vậy, bằng cách sử dụng bộ chọn pseudo-class.

Pseudo-class được gọi nôm na là “lớp giả”. Sao lại gọi là “lớp giả”? Như đã biết, thuộc tính *class* được sử dụng để gán định danh cho phần tử, các phần tử có cùng giá trị *class* (cùng định danh) sẽ được xem là cùng một lớp. Tuy nhiên, trạng thái của phần tử không được thể hiện tường minh trong mã nguồn, nghĩa là không có định danh, mà nó được xác định ngầm (dựa vào vị trí của phần tử trong mã nguồn hoặc tương tác của người dùng), các phần tử có cùng trạng thái cũng được xem là cùng một lớp, nhưng lớp này không tường minh, nên gọi là “lớp giả”.

Cú pháp của pseudo-class thường được bắt đầu bằng tên một phần tử, tiếp theo là dấu hai chấm (:), cuối cùng là tên của trạng thái, ví dụ: *li:first-child*.

Có rất nhiều loại bộ chọn pseudo-class*,* ví dụ:

– Bộ chọn pseudo-class cho liên kết

– Bộ chọn pseudo-class dựa trên thao tác người dùng

– Bộ chọn pseudo-class dựa trên cấu trúc tài liệu HTML

– Bộ chọn pseudo-class cho các input của form

**Bộ chọn pseudo-class cho liên kết**

Bộ chọn pseudo-class cho liên kết được sử dụng để định dạng các liên kết dựa trên trạng thái của nó. Cụ thể,

*–:link* dùng để định dạng cho liên kết chưa được người dùng bấm vào

*–:visited* dùng để định dạng cho liên kết đã được người dùng bấm vào

Ví dụ: mặc định, liên kết người dùng chưa bấm vào sẽ có màu xanh, bấm vào rồi sẽ có màu tím. Tuy nhiên, chúng ta có thể sử dụng CSS để thay đổi màu mặc định của liên kết thành các màu khác,

a:link {

color: maroon;

}

a:visited {

color: gray;

}

**Bộ chọn pseudo-class dựa trên thao tác người dùng**

Phần này sẽ tìm hiểu các bộ chọn pseudo-class dựa trên thao tác của người dùng, gồm ba bộ chọn sau:

*–:focus* áp dụng khi người dùng chọn phần tử để nhập nội dung, phần tử được chọn sẽ nổi bật hơn so với các phần tử còn lại, bộ chọn này hay áp dụng cho các ô nhập liệu của form. Ví dụ, ô nhập liệu sau sẽ có nền màu vàng khi người dùng chọn,

input:focus { background-color: yellow; }

*–:hover* áp dụng khi người dùng rê con trỏ chuột trên một phần tử, mặc dù có thể áp dụng trên mọi phần tử HTML, tuy nhiên, bộ chọn này hay được áp dụng trên các liên kết, nhằm gây chú ý cho người sử dụng. Ví dụ, liên kết sẽ đổi màu nền khi người dùng rê chuột lên,

a:hover {

color: maroon;

background-color: #ffd9d9;

}

*–:active* áp dụng khi một phần tử (nút hoặc liên kết) đang được bấm chuột. Ví dụ, liên kết sẽ đổi màu nền khi người dùng đang bấm chuột lên,

a:active {

color: red;

background-color: # ffd9d9;

}

**CSS cho các trạng thái của một liên kết**

Nhà thiết kế web thường định dạng CSS cho tất cả các trạng thái của một liên kết, nhằm làm cho giao diện sinh động, cuốn hút hơn. Nói chung, tâm lý người dùng luôn muốn nhận lại một kết quả gì đó sau mỗi thao tác của họ, như cập nhật các liên kết họ đã ghé thăm, khi rê chuột lên một liên kết sẽ có hiệu ứng xuất hiện, hoặc khi bấm chuột vào liên kết nó sẽ chuyển màu để báo việc bấm chuột đã có tác dụng.

Chú ý: khi áp dụng các bộ chọn pseudo-class vừa tìm hiểu ở trên cho một liên kết, cần để ý đến thứ tự của các bộ chọn, nếu thứ tự không phù hợp sẽ dẫn đến chúng hoạt động không đúng. Ví dụ, nếu để hai bộ chọn *:link* và *:visited* sau cùng, nó sẽ làm mất tác dụng của các bộ chọn khác. Thứ tự của các bộ chọn nên theo là, *:link,:visited,:focus,:hover,:active*

Ví dụ,

a { text-decoration: none; } /\* bỏ dấu gạch chân \*/

a:link { color: maroon; }

a:visited { color: gray; }

a:focus { color: maroon; background-color: #ffd9d9; }

a:hover { color: maroon; background-color: #ffd9d9; }

a:active { color: red; background-color: #ffd9d9; }

**Bộ chọn pseudo-class dựa trên cấu trúc tài liệu HTML**

Chúng ta có thể sử dụng bộ chọn pseudo-class để chọn ra các phần tử dựa vào vị trí của nó trong cấu trúc tài liệu HTML. Dưới đây là một số bộ chọn,

| *:root* | *:empty* | *:first-child* | *:last-child* | *:only-child* |
| --- | --- | --- | --- | --- |
| *:first-of-type* | *:last-of-type* | *:only-of-type* | *:nth-child()* | *:nth-last-child()* |
| *:nth-of-type()* | *:nth-last-of-type()* |  |  |  |

Bạn có thể lên mạng để tìm hiểu thêm về các bộ chọn này, hoặc có thể đọc thêm ở đây: *https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#tree-structural\_pseudo-classes*

Ví dụ: để chọn phần tử đầu tiên trong một nhóm các phần tử cùng cấp (anh em), chúng ta sử dụng *:first-child*.

\[HTML\]

\<p>Một số nội dung cần học để làm web front-end\</p>

\< ul \>

\< li \> HTML \</ li \>

\< li \> CSS \</ li \>

\< li \> JS \</ li \>

\< li \> React \</ li \>

\</ ul \>

\[CSS\]

li:first-child { color: red; }

\[Kết quả\]

*Dòng chữ HTML có màu đỏ*

**Bộ chọn pseudo-class cho các input của form**

Bộ chọn pseudo-class cho các input của form sẽ chọn ra các phần tử dựa vào thuộc tính HTML và trạng thái của các input trước và sau khi tương tác. Ví dụ,

| :autofill | :enabled | :disabled | :read-only | :placeholder-show |
| --- | --- | --- | --- | --- |
| *:default* | *:checked* | *:indeterminate* | *:blank* | *:valid* |
| *:invalid* | *:in-range* | *:out-of-range* | *:required* | *:optional* |

Ví dụ:

\[HTML\]

\<div>

\<input *type* ="checkbox" *name* ="my-checkbox" *id* ="opt-in">

\<label *for* ="opt-in">Chọn\</label>

\</div>

\[CSS\]

*/\* Định dạng label khi người dùng đánh dấu chọn \*/*

input:checked + label {

color: red;

}

*/\* Định dạng ô chọn khi được chọn \*/*

input\[type="checkbox"\]:checked {

box-shadow: 0 0 0 3px hotpink;

}

**Các bộ chọn pseudo-class khác**

Ngoài 4 bộ chọn chúng ta đã tìm hiểu, còn có nhiều bộ chọn pseudo-class khác. Bạn có thể tìm hiểu thêm ở trên mạng hoặc tại đây: *https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes*

### 3.2.2 Bộ chọn phần tử giả (pseudo-element)

Trong CSS, không chỉ có bộ-chọn-lớp-giả (pseudo-class), mà nó còn có bộ-chọn-phần-tử-giả (pseudo-element). Bộ chọn pseudo-element không chọn các phần tử trong tài liệu HTML, cũng không chọn phần tử dựa vào trạng thái của nó, mà sẽ chọn các đối tượng “giả”, dựa vào vị trí hiển thị của các đối tượng trên cửa sổ trình duyệt. Có nhiều bộ chọn *pseudo-element,* phần này chúng ta sẽ tìm hiểu một số bộ chọn gồm: *::first-line,::first-letter,::before* và *::after*.

**Bộ chọn::first-line**

Bộ chọn *::first-line* được sử dụng để chọn hàng đầu tiên của một phần tử văn bản (khi văn bản hiển thị trên trình duyệt). Tuy nhiên, với bộ chọn này, chỉ có thể áp dụng được các thuộc tính sau,

*color, font, background*

*word-spacing, letter-spacing, text-decoration*

*vertical-align, text-transform, line-height*

Ví dụ,

p::first-line {

color: red;

}

**Bộ chọn::first-letter**

Bộ chọn *::first-letter* được sử dụng để chọn kí tự đầu tiên của một phần tử văn bản (khi văn bản hiển thị trên trình duyệt). Tuy nhiên, với bộ chọn này, chỉ có thể áp dụng được các thuộc tính sau,

*color, font, text-decoration*

*text-transform, vertical-align, padding*

*background, margin, line-height*

*border, float, letter-spacing, word-spacing*

Ví dụ, chúng ta sẽ làm nổi chữ cái đầu tiên của một đoạn (tạo drop cap):

\[HTML\]

\<p>Ví dụ, chúng ta sẽ làm nổi chữ cái đầu tiên của một đoạn \</p>

\[CSS\]

p::first-letter {

color: white;

background-color: #333;

border-radius: 2px;

font-size: 200%;

box-shadow: 3px 3px 0 yellow;

padding: 6px 3px;

margin-right: 5px;

}

**Bộ chọn::before**

Bộ chọn *::before* được sử dụng để chèn thêm nội dung vào trước một phần tử mà không cần chỉnh sửa mã nguồn HTML (cái này được gọi là thêm nội dung bằng CSS).

Ví dụ, đoạn mã CSS sau sẽ thêm cụm từ “Đọc thêm: ” vào trước phần tử *p*,

p::before {

content: "Đọc thêm: ";

color: red;

font-weight: bold;

}

**Bộ chọn::after**

Bộ chọn *::after* được sử dụng để chèn thêm nội dung vào sau một phần tử mà không cần chỉnh sửa mã nguồn HTML (cái này được gọi là thêm nội dung bằng CSS).

Ví dụ, đoạn mã CSS sau sẽ thêm cụm từ “(Kết thúc)” vào sau phần tử *p*,

p::after {

content: "(Kết thúc)";

color: red;

font-weight: bold;

}

### 3.2.3 Bộ chọn dựa vào thuộc tính

Chúng ta có thể tạo bộ chọn dựa vào tên và giá trị thuộc tính của phần tử. Cách làm này giúp tạo ra các bộ chọn rất linh hoạt mà không cần phải thêm thuộc tính *class* hoặc *id* vào các phần tử.

**element\[attribute\]**

Đây là bộ chọn đơn giản, nó sẽ chọn ra các phần tử với tên thuộc tính cụ thể, không quan tâm tới giá trị của thuộc tính.

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, có thuộc tính *title*

img\[title\] {border: 3px solid;}

**element\[attribute=“giá trị”\]**

Bộ chọn này sẽ chọn ra các phần tử với tên và giá trị thuộc tính cụ thể. Vì giá trị có phân biệt chữ hoa/chữ thường nên cần xác định giá trị chính xác.

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, có tên thuộc tính là *title* và giá trị là *“con vịt”*,

img\[title="con vịt"\] {border: 3px solid;}

**element\[attribute~=“giá trị”\]**

Bộ chọn này sẽ chọn ra các phần tử với tên thuộc tính và một phần giá trị của thuộc tính.

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, mà trong giá trị thuộc tính *title* có chứa từ *“con”*, như vậy, các phần tử *img* với *title* có giá trị là *“con gà”* hay *“ vịt con”* đều được chọn.

img\[title~="con"\] {border: 3px solid;}

**element\[attribute|=“giá trị”\]**

Bộ chọn này sẽ chọn ra các phần tử với tên thuộc tính và giá trị thuộc tính sẽ bắt đầu bằng một từ cụ thể, sau đó là dấu gạch nối (hyphen) (-).

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, mà trong giá trị thuộc tính *title* bắt đầu là từ *“con”*, sau đó là dấu (-), như vậy các phần tử *img* với *title* có giá trị là *“con-gà”* hay *“con-vịt”* đều được chọn.

img\[title|="con"\] {border: 3px solid;}

**element\[attribute^=“phần đầu của giá trị”\]**

Bộ chọn này sẽ chọn ra các phần tử, với tên thuộc tính và phần đầu của giá trị được xác định trước.

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, mà trong giá trị thuộc tính *src* bắt đầu là chuỗi *“/images/icons”*.

img\[src^="/images/icons"\] {border: 3px solid;}

**element\[attribute$=“phần cuối của giá trị”\]**

Bộ chọn này sẽ chọn ra các phần tử, với tên thuộc tính và phần cuối của giá trị được xác định trước.

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, mà trong giá trị thuộc tính *src* kết thúc là chuỗi *“.jpg”*.

img\[src^=".jpg"\] {border: 3px solid;}

**element\[attribute\*=“một phần giá trị bất kì”\]**

Bộ chọn này sẽ chọn ra các phần tử, với tên thuộc tính và một phần bất kì trong giá trị thuộc tính.

Ví dụ, bộ chọn sau sẽ chọn ra tất cả các phần tử *img*, mà trong giá trị thuộc tính *title* có chứa chuỗi *“on”.* Như vậy các phần tử *img* với *title* có giá trị là *“con-gà”* hay *“con-vịt”* hay *“anh-chon”* đều được chọn.

img\[title\*="on"\] {border: 3px solid;}

### 3.2.4 Xem và đọc thêm

– \[1\] *Jenifer Niederst Robbins, **Learning Web Design**, O’Reilly, 2018, trang 316 - 3*

– \[2\] *Pseudo-class: [https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)*

*–* \[3\] Pseudo-element: *https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements*

### 3.2.5 Bài tập và thực hành

Bài tập 3.2a. Viết lại các đoạn mã trong phần lý thuyết.

Bài tập 3.2b. Làm một menu đơn giản như hình sau:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjZptMId0yrhFyssBnARTL8iu0T79SEFKgiI3KILC6oXDc793RJSq4HwODqp1vr9WPfdJGmoDqwhWp985nBFfIMFPEC_OomQakGDHczrzsFbwg9pZT9mHQg4RDO5BkmEHyxBkOYcfok_35uxfg4T1UOLtzrRe24lvCEbDfdBn6htxxA9A4JX57EY1_0kas=w400-h344)](https://blogger.googleusercontent.com/img/a/AVvXsEjZptMId0yrhFyssBnARTL8iu0T79SEFKgiI3KILC6oXDc793RJSq4HwODqp1vr9WPfdJGmoDqwhWp985nBFfIMFPEC_OomQakGDHczrzsFbwg9pZT9mHQg4RDO5BkmEHyxBkOYcfok_35uxfg4T1UOLtzrRe24lvCEbDfdBn6htxxA9A4JX57EY1_0kas)

Khi rê chuột vào một mục của menu, nền của nó sẽ chuyển thành mà xám, chữ chuyển thành màu trắng.

Bạn có thể làm theo clip: [https://www.youtube.com/watch?v=OXGznpKZ\_sA&t=9151s](https://www.youtube.com/watch?v=OXGznpKZ_sA&t=9151s). Hoặc dựa vào clip và tự làm một cái mới.

\[Gợi ý làm bài tập\]

\[Bài tập 3.2b\]. Phần này chúng ta sẽ tự làm một menu.

– Tạo thư mục cho dự án (ví dụ *menu*)

– Trong thư mục *menu*, tạo thư mục *css*

*–* Trong thư mục *menu* tạo 4 tập tin *frontend.html*, *backend.html* và *devops.html* với nội dung bất kì và tập tin *index.html*.

– Trong thư mục *css* tạo tập tin *style.css*.

\[index.html\]

<!DOCTYPE *html* >

\<html>

\<head>

\<meta *charset* ="utf-8">

\<title>Menu\</title>

\<link *rel* ="stylesheet" *href* ="css/style.css">

\<style>

\</style>

\</head>

\<body>

\<nav>

\<h2>Học làm web\</h2>

\<ul>

\<li>\<a *href* ="frontend.html">Front-end\</a>\</li>

\<li>\<a *href* ="backend.html">Back-end\</a>\</li>

\<li>\<a *href* ="devops.html">Devops\</a>\</li>

\</ul>

\</nav>

\<p>Để học thêm về làm web, mời bạn vào trang web của \<a *href* ="https://legiacong.blogspot.com">nhóm Langbiang\</a>\</p>

\</body>

\</html>

\[CSS\]

*/\* sử dụng phông chữ Roboto của Google, vào trang font của Google, lấy đường dẫn về đây \*/*

@import **url** ('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap');

*/\* thiết đặt CSS mặc định của trình duyệt về dạng chuẩn - reset CSS \*/*

\* {

margin: 0;

padding: 0;

box-sizing: border-box;

}

body {

margin: 0.5rem;

font-family: Roboto, sans-serif;

text-align: center;

}

nav {

border: 2px solid #333;

border-radius: 2rem;

*/\* giới hạn chiều ngang của nav \*/*

max-width: 600px;

*/\* căn giữa cái hộp nav \*/*

margin: 0 auto 1rem;

font-size: 3rem;

line-height: 7rem;

}

h2 {

padding: 1rem;

background-color: gold;

*/\* bo 2 góc phía trên\*/*

border-radius: 2rem 2rem 0 0;

}

ul {

list-style-type: none;

}

li {

border-top: 1px solid #333;

}

*/\* hiển thị mỗi mục menu là một khối để làm hiệu ứng cho đẹp \*/*

li a {

display: block;

}

li a,

li a:visited {

text-decoration: none;

color: #333;

}

li a:hover,

li a:focus {

background: #333;

color: whitesmoke;

cursor: pointer;

}

*/\* bo 2 góc dưới cho mục cuối của menu \*/*

li:last-child a{

border-radius: 0 0 2rem 2rem;

}

### 3.2.6 Câu hỏi ôn tập

Câu 1. A \_\_\_\_\_\_\_ is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.

A. pseudo-element

B. pseudo-class

C. id

D. class

Câu 2. In CSS, a \_\_\_\_\_\_\_\_\_ selector applies styles to parts of your document content in scenarios where there isn't a specific HTML element to select.

A. element

B. pseudo-class

C. id

D. pseudo-element

Câu 3. Ví dụ, mã nguồn HTML có nhiều phần tử *img*, trong đó có 2 phần tử *img* với *title* có giá trị lần lượt là “con gà” và “ vịt con”. Bạn chỉ muốn chọn ra 2 phần tử *img* này, vậy bạn sẽ sử dụng bộ chọn nào dưới đây:

A. img\[title\] {border: 3px solid;}

B. img\[title~="con"\] {border: 3px solid;}

C. img\[title|="con"\] {border: 3px solid;}

D. img\[title="con"\] {border: 3px solid;}

Câu 4. Ví dụ, mã nguồn HTML có nhiều phần tử *img*, trong đó có một số phần tử *img* có thuộc tính *title*. Bạn chỉ muốn chọn ra các phần tử *img* với thuộc tính *title* đi kèm (mà không quan tâm tới giá trị của thuộc tính), thì bạn sẽ sử dụng bộ chọn nào dưới đây:

A. img\[title\] {border: 3px solid;}

B. img\[title~=\*\] {border: 3px solid;}

C. img\[title|="\*"\] {border: 3px solid;}

D. img\[title="\*"\] {border: 3px solid;}

\-----

Bài sau: [CSS (12) - Ảnh nền (1)](https://legiacong.blogspot.com/2023/07/css-12-anh-nen-1.html)