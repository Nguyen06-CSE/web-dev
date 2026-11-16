Bài trước: [CSS (1) - Tổng quan](https://legiacong.blogspot.com/2023/03/web-front-end-28-css-1-tong-quan.html)

## 1.2 Sự kế thừa

Bạn có đôi mắt, khuôn mặt, hay tính cách giống cha hoặc mẹ của bạn không? Nếu có, rất có thể bạn đã được kế thừa nó từ cha hoặc mẹ của bạn. Trong CSS cũng có tình huống kiểu như vậy, những gì chúng ta định dạng cho phần-tử-cha, thì mặc định, chúng cũng được truyền xuống cho các phần-tử-con. Tổng quát hơn, khi chúng ta định dạng CSS cho một phần tử, thì một số định dạng cũng áp dụng luôn cho các phần tử chứa trong nó.

Ví dụ,

\[CSS\]

p {

font-size:41 px;

color:red;

}

\[HTML\]

\< p \> Cuối tuần đi đá banh, giúp thêm \< em \> năng lượng \</ em \> để làm việc \</ p \>

Như bạn thấy, chúng ta chỉ định dạng cho phần tử *p* có cỡ chữ 41px và màu đỏ, chứ không định dạng cho phần tử *em*. Tuy nhiên, do *em* nằm trong *p* nên nội dung của *em* cũng có cỡ chữ 41px và màu đỏ.

***Cấu trúc của tài liệu***

Làm sao biết được phần tử nào chứa phần tử nào? Để biết được sự kế thừa giữa chúng? Như đã biết, tài liệu HTML đã ngầm chứa trong nó một cấu trúc phân cấp (hierarchy).

Ví dụ: bạn hãy quan sát một tài liệu HTML sau đây. Tài liệu có phần tử gốc là html chứa các phần tử head và body. Phần tử body chứa các phần tử h1, h2 và p. Một số phần tử p lại chứa các phần tử kiểu inline như img, em. Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiq71Z2Ujvbgg1zHEHdeahc9hisgkG3MZ2KiLRu3UlRCA1oBTi8HUJaU8jrTIG9Zz36llE4ftU8ZVHScKc-cUIJ5vfxoYUpRN5xgL4IptGVhCqhKyqucyfFcLvDTIvtY75SjYbaRY3N8OB4dkav8DTdJ_GNpwx6Ou3VKgnSIZUCM8w_r5PFjvyOzm81=w400-h235)](https://blogger.googleusercontent.com/img/a/AVvXsEiq71Z2Ujvbgg1zHEHdeahc9hisgkG3MZ2KiLRu3UlRCA1oBTi8HUJaU8jrTIG9Zz36llE4ftU8ZVHScKc-cUIJ5vfxoYUpRN5xgL4IptGVhCqhKyqucyfFcLvDTIvtY75SjYbaRY3N8OB4dkav8DTdJ_GNpwx6Ou3VKgnSIZUCM8w_r5PFjvyOzm81)

Một cách hình ảnh, tài liệu HTML được tổ chức dưới dạng một cái cây lộn ngược (upside-down tree), với gốc là html, và các cành mọc xuống từ gốc. Cây này được gọi là cây-HTML hay cây DOM.

Cây DOM là gì?

Cây DOM (Document Object Model - mô hình đối tượng tài liệu - mô hình dưới dạng đối tượng của tài liệu).

Cây DOM là cấu trúc dữ liệu dạng cây, phân cấp, do trình duyệt tạo ra dựa trên tài liệu HTML. Trong đó, mỗi phần tử HTML được chuyển thành một nút (đối tượng) của cây. Bạn có thể sử dụng CSS hoặc JavaScript để tham chiếu và tương tác với các nút này.

Để trải nghiệm với cây DOM: bạn mở một trang web > mở Developer tools > chọn tab Elements để quan sát cây DOM.

***Mối quan hệ giữa các nút trong cây-HTML***

Để dễ hiểu, có thể xem mối quan hệ giữa các nút trong cây DOM như là mối quan hệ trong một dòng tộc, mỗi phần tử HTML là một thành viên trong dòng tộc.

\- Mọi phần tử nằm trong một phần tử nào đó, thì được gọi hậu duệ (descendants) của nó. Ví dụ, các phần tử *h1, h2, p, em, img* được gọi là hậu duệ của phần tử *body*

\- Phần tử chứa trực tiếp phần tử khác được gọi là cha (parent), các phần tử được-chứa gọi là con (child). Ví dụ, phần tử *p* chứa *em*, nên *p* là cha, *em* là con

\- Với một phần tử bất kì, mọi phần tử ở mức cao hơn mà có mối liên hệ nội tộc (…ông-cha-con-cháu…) thì được gọi là tổ tiên (ancestors) của nó. Ví dụ, tổ tiên của *img* là *p*, *body*, *html*

\- Hai phần tử có cùng cha thì được gọi là anh em (siblings), Ví dụ, *h1, h2, p* là anh em, vì đều có cha là *body*

***Mọi thuộc tính đều được kế thừa?***

Như ở ví dụ đang xét, khi thiết lập định dạng font cho phần tử *p*, nó sẽ tác động lên mọi phần tử *p* của tài liệu HTML và các phần tử văn bản kiểu *inline* (*em*) nằm trong *p*. Có nghĩa là, phần tử *em* đã kế thừa thuộc tính định dạng font từ phần tử *p*. Tuy nhiên, phần tử *img* cũng nằm trong *p* nhưng sẽ không kế thừa thuộc tính định dạng font, vì hình ảnh thì không có thuộc tính font. Vậy là sẽ có một số thuộc tính được kế thừa và có một số thuộc tính thì không.

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEh_Ndccaddnlx8dz30O2W4PxEWIVUQ9d0LtX3nnf1yVjdw9a-0xEO_wSi5hy4_7rq9oKduLR-TT3WnQ_XRAIZHq1G_BHZSJTMY02uJpjQJ3jeQXfK3hAX2uDJuJxK9d4fbuJWwBLo1XINre4n6_xigCZ_dX_015Tfegh7TanQ-YM8DaQD6zOtCKDhQL)](https://blogger.googleusercontent.com/img/a/AVvXsEh_Ndccaddnlx8dz30O2W4PxEWIVUQ9d0LtX3nnf1yVjdw9a-0xEO_wSi5hy4_7rq9oKduLR-TT3WnQ_XRAIZHq1G_BHZSJTMY02uJpjQJ3jeQXfK3hAX2uDJuJxK9d4fbuJWwBLo1XINre4n6_xigCZ_dX_015Tfegh7TanQ-YM8DaQD6zOtCKDhQL)

Nói chung, các thuộc tính liên quan đến định dạng văn bản (ví dụ: font-size, color, style) thì sẽ được kế thừa, các thuộc tính liên quan đến borders, backgrounds, margins sẽ không được kế thừa.

Tính kế thừa có chọn lọc này rất hữu dụng trong một số tính huống. Ví dụ, nếu muốn thiết lập thuộc tính font cho tất cả các phần tử văn bản, thay vì phải thiết lập cho từng phần tử văn bản thì có thể thiết lập một lần cho phần tử *body*. Ngược lại, khi thiết lập thuộc tính *border* (đường biên) cho một phần tử *p* nào đó thì chắc chắn là không muốn có *border* cho cả các phần tử *em*, *strong*, hay *a* nằm ở trong nó.

Khi thiết lập thuộc tính cho một phần tử, nó sẽ ghi đè (override) lên thuộc tính được kế thừa tương ứng. Ví dụ, với phần tử *em* là con của phần tử *p*, nếu thiết lập phông chữ cho *p* là *sans-serif* và thiết lập phông chữ cho *em* là *serif* thì thuộc tính được áp dụng cho *em* sẽ là *serif*.

## 1.3 Kĩ thuật xếp lớp

**Nhiều định dạng CSS cùng tác động lên một phần tử HTML**

Quay trở lại chữ CSS, nó là viết tắt của Cascading Style Sheets, hiểu nôm na “style sheets” là đoạn mã định dạng, thế còn “cascading” có nghĩa là gì?

Như đã đề cập, chúng ta có thể cùng lúc viết mã CSS ở 3 nơi khác nhau (trong phần tử HTML, trong tài liệu HTML và ngoài tài liệu HTML), và chắc chắn sẽ có tình trạng cùng lúc có nhiều hơn một đoạn mã CSS cùng áp lên một phần tử. Hoặc do tính kế thừa trong CSS, cũng sẽ dẫn tới tình trạng tương tự, một phần tử sẽ nhận được cùng lúc nhiều định dạng từ các phần tử cha, ông của nó.

Ví dụ: đoạn mã CSS trong *style* định dạng *p* có màu đỏ, đoạn mã CSS trong phần tử *p* định dạng *p* có màu xanh, vậy cuối cùng *p* có màu gì?

\< style \>

p {

font-size:41 px;

**color****:****red****;**

}

\</ style \>

\< body \>

\< p ***style*** **\="** **color: green** **"** \> Cuối tuần đi đá banh, giúp thêm \< em \> năng lượng \</ em \> để làm việc \</ p \>

\</ body \>

Hoặc, phần tử *body* được định dạng nền màu xám, *p* là con của *body* được định dạng nền màu vàng? vậy *p* sẽ có nền màu gì?

body {

background-color: gray;

}

p {

font-size: 41px;

color: red;

background-color: yellow;

}

\</style>

Khi có nhiều định dạng CSS cùng tác động lên một phần tử, CSS sẽ sử dụng “kỹ thuật xếp lớp” để xác định: cuối cùng định dạng nào sẽ được áp dụng.

Kỹ thuật xếp lớp là cách trình duyệt sử dụng để kết hợp các chỉ dẫn CSS từ nhiều nguồn khác nhau và giải quyết xung đột khi có nhiều thuộc tính CSS cùng tác động lên một phần tử HTML.

Để xác định CSS nào sẽ áp dụng lên 1 phần tử HTML, trình duyệt dựa vào 3 yếu tố sau:

\- Chỉ-dẫn-CSS từ đâu đến (priority of style source)

\- Tính rõ ràng, chính xác của chỉ-dẫn-CSS (specificity)

\- Thứ tự thực thi chỉ-dẫn-CSS (rule order)

Chỉ-dẫn-CSS từ đâu đến

CSS của trình duyệt

Như đã biết, nếu chúng ta không viết mã CSS để định dạng cho tài liệu HTML, thì trình duyệt sẽ lấy định dạng mặc định của nó để hiển thị trang web. W3C gọi kiểu định dạng này là user agent style sheet. Mỗi trình duyệt (ví dụ Chrome, Firefox) sẽ có bộ định dạng mặc định khác nhau.

Ví dụ, bạn chỉ viết mã HTML cho trang index.html, không viết mã CSS.

\[index.html\]

*<!doctype html>*

*\<html>*

*\<head>*

*\<meta charset="UTF-8">*

*\<title>Cooking with Nada Surf\</title>*

*\</head>*

*\<body>*

*\<h1>Hi bac Teo!\</h1>*

*\</body>*

*\</html>*

Tuy nhiên, khi bạn sử dụng Developer tools để quan sát mã CSS thì sẽ thấy trang web đã được định dạng bằng CSS mặc định của trình duyệt. Xem hình minh họa.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUBQgCccQlZUrgpxmgTPBJQxWg27uf-aYbaGZ3LIkxUboeFMVn2D3OFa4goslfNNyzy0DfECPzHz3PgCd9jRrfKs02j4yAZy6mxkhIHNXqdLnG08cd5fWARDahUY83lNjL5HnZSBx7hY5OjvXN1TljtM3SwCcWs5PiiPGcRoeeGGrO-1ijwv9YJf1wRpY/w400-h210/user%20agent.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUBQgCccQlZUrgpxmgTPBJQxWg27uf-aYbaGZ3LIkxUboeFMVn2D3OFa4goslfNNyzy0DfECPzHz3PgCd9jRrfKs02j4yAZy6mxkhIHNXqdLnG08cd5fWARDahUY83lNjL5HnZSBx7hY5OjvXN1TljtM3SwCcWs5PiiPGcRoeeGGrO-1ijwv9YJf1wRpY/s740/user%20agent.png)

*CSS do người dùng tạo ra*

Trong quá trình duyệt web, người dùng có thể tự thiết lập chế độ hiển thị trang web theo ý của họ. Các thiết lập của người dùng sẽ ghi đè lên định dạng mặc định của trình duyệt.

*CSS do lập trình viên tạo ra*

Nếu lập trình viên có viết mã CSS để định dạng cho tài liệu HTML (author style sheet), thì mã này sẽ có độ ưu tiên cao hơn mã CSS của người dùng và của trình duyệt.

Bảng sau cho biết độ ưu tiên của mã CSS dựa trên nguồn. Thứ tự ưu tiên sẽ tăng dần từ trên xuống:

CSS mặc định của trình duyệt

CSS do người duyệt web định nghĩa

CSS do lập trình viên định nghĩa

Các định dạng CSS do lập trình viên đánh dấu là “!important”

Các định dạng CSS do người duyệt web đánh dấu là “!important”

**Tính rõ ràng, chính xác của chỉ-dẫn-CSS**

Trong thực tế, sẽ có tình huống: một phần tử HTML bị nhiều chỉ dẫn CSS áp dụng lên nó. Ví dụ, ở đoạn mã dưới đây, phần tử *h1* được định dạng màu đỏ, phần tử có *id=“tieu-de”* được định dạng màu vàng; cả hai định dạng này đều áp dụng lên dòng chữ “Hi bac Teo!”. Vậy cuối cùng dòng chữ này có màu gì?

…

\<style>

h1 {

color: red;

}

#tieu-de {

color: yellow;

}

\</style>

\</head>

\<body>

\< h1 *id* \=" tieu-de " \> Hi bac Teo!\</ h1 \>

\</body>

…

Trong tình huống này, CSS quy định: nếu hai (hay nhiều) chỉ dẫn trong một tài liệu CSS xung đột với nhau, thì sẽ dựa vào loại của bộ chọn (type of selector) để xác định độ ưu tiên. Bộ chọn nào càng rõ ràng, chính xác, và cụ thể (specificity) thì có độ ưu tiên cao hơn. Như ở ví dụ đang xét, bộ chọn *h1* sẽ áp dụng cho tất cả mọi phần tử *h1*, như vậy ít có tính "cụ thể" bằng bộ chọn dựa trên định danh (#tieu-de), vì định danh là duy nhất cho một phần tử. Kết quả là bộ chọn dựa trên định danh sẽ có độ ưu tiên cao hơn, và dòng chữ “Hi bac Teo!” sẽ có màu vàng.

Bạn có thể trải nghiệm về specificity tại trang web: https://specificity.keegan.st/

**Thứ tự thực thi chỉ-dẫn-CSS (rule order)**

Sau khi đã xem xét đến nguồn xuất phát và kiểu bộ chọn để xác định độ ưu tiên cho các định dạng CSS, thì vẫn có thể xảy ra trường hợp nhiều chỉ dẫn CSS cùng tác động lên một phần tử HTML, như trường hợp sau:

…

\<style>

h1 { color: red; }

h1 { color: yellow; }

h1 { color: green; }

\</style>

\</head>

\<body>

\<h1 *id* ="tieu-de">Hi bac Teo!\</h1>

\</body>

…

Khi đó, CSS đưa ra quy tắc *“cái nào gần đối tượng (HTML) cần định dạng hơn sẽ có độ ưu tiên cao hơn (cái cuối cùng sẽ có độ ưu tiên cao nhất)”*. Vậy, *h1* sẽ có màu xanh. Nếu để ý sẽ thấy, khi thực thi mã nguồn, trình duyệt sẽ thực hiện từ trên xuống dưới, từ trái sang phải. Mã CSS luôn xuất hiện trước phần tử HTML. Nên mã CSS càng gần phần tử HTML hơn càng được thực thi sau, và mã CSS cuối cùng sẽ định dạng đè lên các mã CSS trước đó.

Ví dụ dưới đây, màu vàng sẽ được áp dụng cho phần tử *h1*,

h1 {

color: red;

color: green;

color: yellow;

}

Trong trường hợp sau, chỉ dẫn CSS trong tập tin *main3.css* sẽ có độ ưu tiên cao nhất.

\<link *rel* ="stylesheet" *href* ="main1.css">

\<link *rel* ="stylesheet" *href* ="main2.css">

\<link *rel* ="stylesheet" *href* ="main3.css">

Tóm lại

Kỹ thuật xếp lớp là cách trình duyệt xác định: cuối cùng, định dạng CSS nào sẽ được áp dụng lên một phần tử HTML (khi có nhiều hơn một định dạng CSS cùng được áp dụng). Dựa vào CSS từ đâu đến, độ cụ thể của bộ chọn và thứ tự thực thi mã nguồn, trình duyệt sẽ xác định được “trọng số ưu tiên” (weight), định dạng (hay chỉ dẫn) CSS nào có độ ưu tiên cao nhất thì sẽ được áp dụng. Xem hình minh họa.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_lQ6B7lAo40D-jgij5Gdd7oeo00PJJw5QMLHaffdN16fyoV7ZUcV1bLDWjN7cjQpt38Yvq7Gr1y_0iroX8Vcs9co5m6drrW0gVYuN6K9ZQer63WdcD8Guz8cYFlUflPrH-rVA9WGMhEXJu-fAM4qyx_3ATFN_RTZGubvZtsx_mNEZnIS5KCQu3bt8vs0/w400-h201/ki%20thuat%20cascading.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_lQ6B7lAo40D-jgij5Gdd7oeo00PJJw5QMLHaffdN16fyoV7ZUcV1bLDWjN7cjQpt38Yvq7Gr1y_0iroX8Vcs9co5m6drrW0gVYuN6K9ZQer63WdcD8Guz8cYFlUflPrH-rVA9WGMhEXJu-fAM4qyx_3ATFN_RTZGubvZtsx_mNEZnIS5KCQu3bt8vs0/s709/ki%20thuat%20cascading.jpg)

  
Ở hình minh họa trên, chỉ-dẫn-CSS3 sẽ được áp dụng lên phần tử HTML.

\-----

Bài sau: [CSS (3) - Định chuẩn CSS, box model và đơn vị đo](https://legiacong.blogspot.com/2023/03/web-front-end-30-css-3-tong-quan-bai.html)