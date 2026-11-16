Bài trước: [CSS (2) - Sự kế thừa, Xếp lớp](https://legiacong.blogspot.com/2023/03/web-front-end-29-css-2-su-ke-thua-xep.html)

## 1.4 Định chuẩn CSS, box model và đơn vị đo

**Định chuẩn CSS**

Như đã biết, nếu chúng ta không viết mã CSS để định dạng cho một phần tử HTML, thì trình duyệt sẽ lấy định dạng mặc định của nó để hiển thị trang web. Hiện tại đang có rất nhiều trình duyệt khác nhau, và định dạng mặc định của mỗi trình duyệt cũng khác nhau.

Bạn có thể xem mã CSS mặc định của một số trình duyệt:

\- Chrome: *https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css*

\- Firefox: *https://searchfox.org/mozilla-central/source/layout/style/res/html.css*

Do vậy, để kiểm soát được việc hiển thị của từng phần tử HTML, và đảm bảo giao diện trang web luôn ổn định trên mọi trình duyệt, chúng ta nên định chuẩn (hay thiết đặt lại) một số định dạng CSS quan trọng. Trong tiếng Anh, quá trình này được gọi là reset CSS, hay normalize CSS.

**Một số cách định chuẩn CSS**

Chúng ta có thể sử dụng một số cách sau để định chuẩn CSS:

\- Cách đầu tiên, đơn giản nhất là đặt lại giá trị của thuộc tính căn lề (margin), và khoảng đệm (padding) bằng 0 cho mọi phần tử (kí hiệu \*). Cách làm này không được khuyến khích, vì nó ảnh hưởng đến tốc độ xử lý, trong khi còn nhiều thiết lập mặc định khác lại không được thực hiện.

\<style>

\* {

margin: 0;

padding: 0;

}

…

\</style>

\- Cách 2, sử dụng các đoạn mã định chuẩn được tạo sẵn, đang có nhiều người sử dụng. Ví dụ normalize.css, reset CSS của Eric Meyer, bộ định chuẩn của Bootstraps.

\- Cách 3, chúng ta tự tạo ra bộ định chuẩn. Bạn nên dựa vào một bộ định chuẩn có sẵn, rồi tùy chỉnh theo yêu cầu cá nhân, chứ không nên xây dựng bộ định chuẩn từ con số 0.

Điều quan trọng cần nhớ là đoạn mã định chuẩn CSS luôn được thực thi đầu tiên, trước khi bạn thực hiện các lệnh CSS khác.

Chúng ta sẽ cùng sử dụng bộ định chuẩn normalize.css.

\- Vào trang chứa mã nguồn của normalize.css. https://necolas.github.io/normalize.css/

\- Bấm vào nút Download, trang web sẽ hiển thị toàn bộ mã nguồn của normalize.css > xem qua một số đoạn mã CSS để hiểu thêm > chép toàn bộ mã nguồn này, lưu vào một tập tin trong thư mục *css*, đặt tên là *normalize.css*

\- Trong tập tin HTML, khai báo để luôn thực thi đoạn mã trong *normalize.css* đầu tiên.

\<title>Cooking with Nada Surf\</title>

**\<** **link** ***rel*** **\="** **stylesheet** **"** ***href*** **\="** **css/mormalize.css** **"** **\>**

\<style>

Xem hình minh họa cấu trúc thư mục, các tập tin mã nguồn:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEi4ASv5kYfgd3PNciNpWQdJIUSPT5iBOcurL_V0PSAEIwkMyd8s0YIM3_56EROyFhx8ZO0q7AqhiRAkYwwHnBKLZy3qKs0dNE6oiCV65jHo6PEeBzrrlsK_tcMgaH-hHGK5yaoEJoWRDtjsR0iRtPfCJ_2-ryH5AIcocP2P0r9AkiIuJLaIdKAL3UCq=w400-h226)](https://blogger.googleusercontent.com/img/a/AVvXsEi4ASv5kYfgd3PNciNpWQdJIUSPT5iBOcurL_V0PSAEIwkMyd8s0YIM3_56EROyFhx8ZO0q7AqhiRAkYwwHnBKLZy3qKs0dNE6oiCV65jHo6PEeBzrrlsK_tcMgaH-hHGK5yaoEJoWRDtjsR0iRtPfCJ_2-ryH5AIcocP2P0r9AkiIuJLaIdKAL3UCq)

Vậy là một số phần tử HTML quan trọng đã được định chuẩn. Chúng ta đã có thể viết thêm các mã định dạng CSS, mà không phải lo giao diện không theo ý muốn, hoặc hiển thị không đồng nhất trên các trình duyệt khác nhau.

**Box model**

Trong việc định dạng hiển thị, chúng ta sẽ phải đặt các phần tử HTML ở một vị trí cụ thể trên giao diện, với chiều rộng, chiều dài xác định, hoặc đổ màu nền. Để tiện lợi cho việc này, CSS đưa ra khái niệm *mô hình cái hộp* (box model).

Mô hình cái hộp là công cụ CSS sử dụng để hiển thị các phần tử HTML.

CSS quy ước: mỗi phần tử HTML sẽ có một hình chữ nhật tương ứng. Hình chữ nhật này gồm vị trí hiển thị (tọa độ x, y), chiều rộng, chiều dài, đường viền (border), căn lề (margin), khoảng đệm (padding), màu nền…v.v.

Một tài liệu HTML có bao nhiêu phần tử thì có bấy nhiêu cái hộp (trừ các phần tử trong vùng *head*), không phân biệt là phần tử kiểu inline hay block. Cấu trúc cha-con của tài liệu HTML cũng được thể hiện trong mô hình cái hộp, cụ thể: hộp-cha (của phần tử cha) sẽ chứa hộp-con (của phần tử con).

Ví dụ, đoạn mã sau minh họa box model, gồm 5 cái hộp, với cấu trúc lồng nhau.

…

\<style>

body { border: 1px solid red; }

h1 { border: 1px solid red; }

div { border: 1px solid red; }

p { border: 1px solid red; }

em { border: 1px solid red; }

\* { padding: 3px}

\</style>

\</head>

\<body>

\< h1 *id* \=" tieu-de " \> Hi bac Teo!\</ h1 \>

\< div \>

\< p \> Mô hình cái hộp là cách thức tổ

chức của CSS để \< em \> hiển thị \</ em \> các phần tử ra giao diện.\</ p \>

\</ div \>

…

Qua quan sát, bạn sẽ thấy các hộp của phần tử kiểu block có chiều rộng chiếm hết màn hình, trong khi các hộp của phần tử kiểu inline có kích thước vừa đủ để chứa nội dung bên trong.

Chúng ta cũng có thể sử dụng Developer tools để quan sát box model một cách trực quan. Như hình sau:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiXMiHqZOixlCIihf8jHJsz_WdkxxJ-5x-Pkvh0ToB1niBAGVYt949wQmEj-hpFZGsGBOFZPIJstvC5Vg0QHEaytMCe27no6w7wkDjkx1fbLs2PR9yPrWCjNvvIBCz5E5X67b3Mt_7UHQ7OjOPacix0vCgQzGG9xcJqml3Mq2KCvCoIt_tJds_v_nl8=w400-h238)](https://blogger.googleusercontent.com/img/a/AVvXsEiXMiHqZOixlCIihf8jHJsz_WdkxxJ-5x-Pkvh0ToB1niBAGVYt949wQmEj-hpFZGsGBOFZPIJstvC5Vg0QHEaytMCe27no6w7wkDjkx1fbLs2PR9yPrWCjNvvIBCz5E5X67b3Mt_7UHQ7OjOPacix0vCgQzGG9xcJqml3Mq2KCvCoIt_tJds_v_nl8)

Chúng ta có thể sử dụng Developer tools để điều chỉnh các thông số của cái hộp. Trong cửa sổ Styles, bấm đúp chuột vào giá trị, điền giá trị mới, hoặc dùng mũi tên lên-xuống của bàn phím để điều chỉnh. Kết quả sẽ được thay đổi ngay lập tức trên giao diện. Tuy nhiên, các điều chỉnh trong Developer tools không ảnh hưởng tới tập tin mã nguồn. Do vậy, khi giao diện đã theo ý muốn, bạn có thể chép các giá trị đã điều chỉnh vào tập tin mã nguồn. Đây cũng là một phương pháp để viết mã CSS.

**Đơn vị đo kích thước trong CSS**

Trong phần box model, chúng ta đã thực hiện điều chỉnh các *giá trị* liên quan đến khoảng cách giữa các phần tử (căn lề) (margin), độ dày của biên (border), khoảng cách giữa biên và vùng nội dung (khoảng đệm) (padding). Trong quá trình CSS cho các phần tử, chúng ta cũng phải xác định các *giá trị* liên quan đến kích thước của chữ, khoảng lùi đầu hàng (indent). Các *giá trị* luôn phải có đơn vị đo đi kèm. Vậy đơn vị đo trong CSS là gì?

CSS có nhiều đơn vị đo, chúng thuộc một trong hai loại sau: đơn vị đo tuyệt đối (absolute), và đơn vị đo tương đối (relative).

***Đơn vị đo tuyệt đối***

Đơn vị đo tuyệt đối là đơn vị đo tường minh, đang được dùng nhiều trong cuộc sống. Ví dụ:

*\- cm*: centimet

*\- mm*: minimet

*\- in*: inch (1in = 96px = 2.54cm)

*\- pt*: point (1pt = 1/72in)

*\- pc*: pica (1pc = 12pt)

*\- px*: pixel, tương đương 1/96in

Tuy nhiên, ngoại trừ pixel, trong làm web người ta ít sử dụng kiểu đơn vị đo này, vì chúng không linh hoạt.

***Đơn vị đo tương đối***

Đơn vị đo tương đối là đơn vị đo không tường minh, vì chúng dựa trên một độ đo khác, như dựa trên kích cỡ của phông chữ mặc định, hoặc dựa trên kích thước của phần tử cha. Ví dụ:

*\- em*: tương đương với kích thước phông chữ của phần tử đang xét (hoặc phần tử cha)

*\- ex*: tương đương với kích thước của chữ x

*\- rem*: viết rút gọn của *root* *em*, tương đương với *em* của phần tử html (phần tử root)

*\- ch*: tương đương với độ rộng của số 0 trong phông chữ hiện hành

*\- vw*: tương đương với 1/100 độ rộng của cửa sổ trình duyệt (viewport)

*\- vh*: tương đương với 1/100 độ cao của cửa sổ trình duyệt (viewport)

*\- vmin*: tương đương với 1/100 kích thước cửa sổ trình duyệt (giữa độ rộng và độ cao, cái nào nhỏ hơn thì lấy làm chuẩn)

*\- vmax*: tương đương với 1/100 kích thước của cửa sổ trình duyệt (giữa độ rộng và độ cao, cái nào lớn hơn thì lấy làm chuẩn)

\- % (phần trăm): mặc dù chỉ là con số, về bản chất nó cũng có thể được xếp vào nhóm đơn vị đo tương đối

\- fr: được dùng riêng trong CSS grid, là viết tắt của fraction, nghĩa là một phần của thùng chứa (container)

***Lưu ý***

**\-** Với đơn vị đo tương đối, các phần tử con không kế thừa giá trị tương đối từ phần tử cha, mà nó kế thừa giá trị đã được quy đổi (đã được tính toán)

\- Đơn vị đo tuyệt đối được dùng nhiều nhất là *px*

\- Đơn vị đo tương đối được dùng nhiều là: *%*, *em, rem, vw, vh, fr*

Phần dưới đây trình bày sơ lược một số đơn vị đo.

***% (phần trăm)***

Là con số, theo sau là ký hiệu %, là đơn vị tương đối dùng để xác định kích thước dựa trên một thuộc tính tương ứng của phần tử cha.

Một số thuộc tính phổ biến sử dụng % bao gồm width, height, margin, padding và font-size. Lưu ý nhỏ: Riêng với margin và padding, dù là khoảng cách trên, dưới, trái hay phải, giá trị phần trăm luôn được tính dựa theo chiều rộng (width) của phần tử cha.

Trong thiết kế bố cục (layout), đơn vị % đóng vai trò quan trọng giúp trang web co giãn linh hoạt, giữ được tỷ lệ cân đối giữa các thành phần khi kích thước cửa sổ trình duyệt thay đổi.

Ví dụ:

\<div *style* ="color: red; width: 200px">

\<p *style* ="width: 50%">width: 50% == 100px\</p>

\<p *style* ="width: 90%">width: 90% == 180px\</p>

\</div>

Kết quả,

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgFn51bqFUcXNlsq5ncbaS4kBTNnJY1j6w-P8NBSS_g0rWJk2X4-zpjxWmEoegA33BW3UifwqaAvUgOFUASW4vQiVFhEGKrXjL2vzoqWbdIfyCKYGnpKksltUrBe_nCoRogXaQkN3uxhxzWE89kizSHVZn9S49kSFvmIOkmAJqzuVBupS1Uzge_nmPk=w400-h211)](https://blogger.googleusercontent.com/img/a/AVvXsEgFn51bqFUcXNlsq5ncbaS4kBTNnJY1j6w-P8NBSS_g0rWJk2X4-zpjxWmEoegA33BW3UifwqaAvUgOFUASW4vQiVFhEGKrXjL2vzoqWbdIfyCKYGnpKksltUrBe_nCoRogXaQkN3uxhxzWE89kizSHVZn9S49kSFvmIOkmAJqzuVBupS1Uzge_nmPk)

***em***

Là đơn vị đo tương đối. Trong kĩ thuật soạn thảo truyền thống, một em sẽ có kích thước đúng bằng độ rộng của chữ M (viết hoa), trong tiếng Anh chữ “m” đọc là “em”.

Thực tế trong CSS, 1 em luôn bằng đúng giá trị font-size hiện hành của phần tử đó (nếu dùng cho các thuộc tính như margin, padding, width,...). Như vậy, nếu văn bản có font-size là 16px thì một em sẽ là 16px, nếu phông chữ có font-size là 12px thì một em sẽ là 12px.

Đừng nhầm đơn vị đo em với phần tử em trong HTML. Hai khái niệm này hoàn toàn khác nhau, và không liên quan gì với nhau.

Khi trình duyệt đã xác định được giá trị của em, thì có thể sử dụng đơn vị đo này cho nhiều mục đích khác, như căn lề, thụt đầu hàng, xác định kích thước cho các phần tử.

Tương tự như việc sử dụng độ đo là phần trăm (%), sử dụng em giúp cho các thành phần duy trì được tỉ lệ cố định, cho dù kích thước của văn bản có thay đổi.

Ví dụ: đoạn mã sau thiết lập font-size cho h1 và h2 lần lượt là 32px và 20px. Sau đó, thiết lập margin đều là 2em, nhưng khi xem kết quả trên trình duyệt sẽ thấy khoảng căn lề (margin-left) của h1 và h2 là khác nhau, lần lượt là 64px và 40px. Bạn có thể sử dụng tab Computed trong Developer tools để kiểm tra kết quả.

\<style>

body { border: 1px solid red; }

h1 {

font-size: 32px;

margin-left: 2em;

}

h2 {

font-size: 20px;

margin-left: 2em;

}

\</style>

\</head>

\<body>

\<h1>Font-size: 32px \</h1>

\< h2 \> font-size: 20px \</ h2 \>

\</ body \>

Màn hình kết quả:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEj3rp2ZWWm_EC1neWs7TjdS2JWdtQsPC6RqMRVUHiah5MeCtTxJgWDDcU_erDrWbRXiNP8XQIFjxiHy7wCZZF899R4rIXtvPO5QP6Cse4BRjZMdB3m47ONd0a5Pd2oce4YnFSALlZokF6-WRNtyfeJhvEdRTtz9lXfMA02ke8EJDnsvVAI84rbgGqSZ=w400-h200)](https://blogger.googleusercontent.com/img/a/AVvXsEj3rp2ZWWm_EC1neWs7TjdS2JWdtQsPC6RqMRVUHiah5MeCtTxJgWDDcU_erDrWbRXiNP8XQIFjxiHy7wCZZF899R4rIXtvPO5QP6Cse4BRjZMdB3m47ONd0a5Pd2oce4YnFSALlZokF6-WRNtyfeJhvEdRTtz9lXfMA02ke8EJDnsvVAI84rbgGqSZ)

Lưu ý: 1 *em* tương đương với kích thước phông chữ hiện tại của phần tử. Vậy nếu phần tử hiện tại không thiết lập kích thước phông chữ thì sao? Khi đó 1 *em* sẽ tương đương với kích thước phông chữ của phần tử cha của nó.

***Rem***

Sử dụng đơn vị đo là *em* có khá nhiều ưu điểm, tuy nhiên trong một số trường hợp, do việc tính giá trị *em* phải dựa vào phần tử cha, điều này gây ra bất tiện cho lập trình viên khi tài liệu HTML gồm nhiều cấp. Để khắc phục nhược điểm này, có thể sử dụng đơn vị đo khác là *rem*.

*Rem* là viết tắt của “root em”. Một *rem* sẽ tương đương với kích thước phông chữ của phần tử *html*. Như vậy, nếu thiết lập kích thước cho một phần tử bất kì là *rem*, nghĩa là kích thước của phần tử đó sẽ được tính theo kích thước của phần tử *html* chứ không phải phần tử cha của nó.

Nếu bạn không chủ động khai báo font-size cho thẻ \<html>, hầu hết các trình duyệt hiện nay sẽ mặc định lấy 16px. Do đó, 1rem = 16px, 2rem = 32px,...

Ví dụ,

\<style>

h1 { font-size: 3rem; }

body {

font-size: 10px;

}

\</style>

\</head>

\<body>

\<h1>font-size: 3rem == 48px\</h1>

\</body>

Chúng ta sẽ tìm hiểu kĩ hơn các đơn vị đo trong các tình huống sử dụng cụ thể, mục tiêu là hiểu rõ ý nghĩa và sử dụng các độ đo một cách chuyên nghiệp, hiệu quả.

## 1.5 Xem và đọc thêm

Hỏi Chatbot, tìm kiếm trên Google hoặc Youtube các từ khóa này, để đọc và xem thêm: CSS, sự kế thừa trong CSS, Kỹ thuật xếp lớp, Định chuẩn CSS, Box model, Đơn vị đo trong CSS.

\-----

Bài sau: [CSS (4) - Bài tập & Ôn tập (Tổng quan)](https://legiacong.blogspot.com/2023/04/web-front-end-31-css-4-bai-tap-on-tap.html)