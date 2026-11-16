Bài trước: [HTML (2) - Trình duyệt web](https://legiacong.blogspot.com/2021/06/web-2-trinh-duyet-web-la-gi.html)

\-----

6\. URL, siêu liên kết và siêu văn bản

Như đã biết,

\- Web là không gian thông tin toàn cầu. Không gian thông tin này được tạo bởi một mạng lưới gồm nhiều tài nguyên kết nối với nhau

\- Mỗi một tài nguyên được định vị bằng một địa chỉ duy nhất, gọi là URL

\- Để đi tới các tài nguyên này, người dùng chỉ việc bấm chuột vào các siêu liên kết (hyperlink, gọi tắt là link - liên kết) trong các trang web

\- Trang web là các siêu văn bản

\- Như vậy, lập trình viên sẽ là người tạo ra các siêu văn bản, trong đó có chứa các siêu liên kết để kết nối các tài nguyên với nhau

6.1 URL là gì?

URL là viết tắt của Uniform Resource Locator, dịch sát nghĩa là bộ định vị tài nguyên thống nhất, hiểu nôm na là địa chỉ của một tài nguyên web, hay địa chỉ web (web address).

URL là một tham chiếu tới tài nguyên web, cho biết một tài nguyên web nằm ở đâu trên hệ thống mạng và dùng giao thức (hay phương thức) gì để lấy (hay truy cập) được tài nguyên đó.

Một số giao thức có sử dụng URL: HTTP để truy cập web, FTP để truyền tập tin, mailto để gửi email, JDBC để truy cập cơ sở dữ liệu.

Trong các trình duyệt, URL của một trang web được hiển thị trên thanh địa chỉ của trình duyệt (address bar).

URL cũng xuất hiện trong các thẻ của HTML, như các thẻ: \<a href=URL>, \<img src=URL>, \<script src=URL>, \<link href=URL>.

URL có định dạng như sau:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjASMg5qJidwHjnsni0ErIgAPg4yk8w6qbj0tTLb4aOPXHbvYFEVyj93uWAz97JyIs6IhgUN5_-gu6P6GnIT-1vwvuLga1Sp3rTQqe8HjL0eZ08-6-XB8MxmLsniT7YN3S_zVvm5-rawOuiEfHOanTAr6saXtDqE75MrpsFaT0zKScp4zW_RjPy-YhKJYU/w400-h84/Dinh%20dang%20cua%20URL%201.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjASMg5qJidwHjnsni0ErIgAPg4yk8w6qbj0tTLb4aOPXHbvYFEVyj93uWAz97JyIs6IhgUN5_-gu6P6GnIT-1vwvuLga1Sp3rTQqe8HjL0eZ08-6-XB8MxmLsniT7YN3S_zVvm5-rawOuiEfHOanTAr6saXtDqE75MrpsFaT0zKScp4zW_RjPy-YhKJYU/s699/Dinh%20dang%20cua%20URL%201.jpg)

Ý nghĩa các thành phần trong một URL,

\- Scheme là giao thức được sử dụng để trao đổi thông tin giữa client và server. Một số scheme phổ biến: http, https, ftp, file, mailto, data, irc. Scheme được ngăn cách với các thành phần phía sau bằng dấu “://”

\- Domain (hay domain name) là tên miền của máy server, cũng được gọi là hostname, ví dụ: en.wikipedia.org, daotao.congty.vn. Máy tính của người dùng sẽ đổi tên miền này thành địa chỉ IP để nó có thể tìm thấy và giao tiếp với máy server. Cũng có thể phân chia tên miền thành các thành phần nhỏ hơn như: tên miền con (sub domain), tên miền riêng, tên miền cấp 2 hoặc cấp 1 (top level domain); ví dụ trong daotao.congty.vn, thì daotao là tên miền con, congty là tên miền riêng, và vn là tên miền cấp 2

\- Port là cổng, được sử dụng để giao tiếp giữa client và server. Trong giao thức HTTP nếu không chỉ định rõ, thì giá trị của port sẽ được ngầm hiểu là 80, giao thức HTTPS là 443

\- Path là đường dẫn (đường dẫn thư mục, đường dẫn tuyệt đối) của tài nguyên web trên máy server. Đường dẫn luôn bắt đầu bằng dấu xuyệt (slash) (/), có nghĩa là thư mục gốc, mỗi thư mục ngăn cách nhau bằng một dấu “/”. Ví dụ: /wiki/Uniform\_Resource\_Locator; /e-learning/ViewCourses.php; hay /C:/Users/Win%208.1/Downloads/openemr/trangweb.html

\- Ngoài ra, URL cũng có thể chứa chuỗi truy vấn hoặc một định danh. Chuỗi truy vấn (query string) là chuỗi chứa các cặp key=value, nằm ngay sau dấu?, ví dụ: code=3151. Định danh vùng nội dung (fragment\_id) là một vị trí trên một trang web, được đánh dấu bằng một cái tên cụ thể, ví dụ một vùng trên trang web có tên là #noi-dung

Xem hình minh họa một URL cụ thể,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5rhcl0AmAOB6JEIEfnA85OAJLR_X06W4EVdj4skbAwGxnTsrLTHdqrrjm7HSUjurIQ7TCRtkJBAbhImd75agr0_5lWuwujGws_RUVPFfZuOBGskVVnYf7qDegLgcIOmxY7lXFESPUrzQ/w400-h171/Vi+du+URL+2.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5rhcl0AmAOB6JEIEfnA85OAJLR_X06W4EVdj4skbAwGxnTsrLTHdqrrjm7HSUjurIQ7TCRtkJBAbhImd75agr0_5lWuwujGws_RUVPFfZuOBGskVVnYf7qDegLgcIOmxY7lXFESPUrzQ/s786/Vi+du+URL+2.jpg)

### 6.2 Giao thức File

Nếu chú ý, khi dùng trình duyệt để mở trang web trên đĩa cứng, địa chỉ của trang web (URL) trên thanh địa chỉ (address bar) sẽ không bắt đầu bằng http:// hoặc https:// như khi duyệt web thông thường, mà sẽ bắt đầu là file://, ví dụ:

\- Bạn mở notepad, nhập vào dòng mã sau:

\<h1>Chao ban!\</h1>

\- Lưu lại tập tin vào đĩa cứng (ví dụ: lưu vào Desktop), với phần mở rộng của tập tin là.html (ví dụ: index.html)

\- Sau đó, mở tập tin index.html bằng trình duyệt

\- Xem đường dẫn trên thanh địa chỉ (address bar) của trình duyệt, bạn sẽ thấy nội dung của đường dẫn là:

file:///C:/Users/Maxsys/Desktop/index.html

Tại sao vậy?

Như đã biết, vì URL là một địa chỉ của một tài nguyên web, trong trường hợp này là địa chỉ của một trang web. URL cho biết vị trí của trang web trên hệ thống mạng và để lấy được trang web đó thì cần sử dụng giao thức gì. Vậy ở đây, trình duyệt đã không dùng giao thức HTTP, hoặc HTTPS để lấy nội dung trang web mà dùng giao thức File.

Giao thức File có tên đầy đủ là giao thức File URI, được đặc tả trong RFC 1630 và RFC 1738, sử dụng để truy cập và lấy về nội dung của thư mục hoặc tập tin bất kì. URI (Uniform Resource Identifier) – tạm dịch là “chuỗi định danh tài nguyên thống nhất” hay “chuỗi nhận dạng tài nguyên thống nhất”, là một chuỗi ký tự, được sử dụng để xác định, nhận dạng một tên hoặc một tài nguyên.

Ví dụ, trên máy tính đang chạy Windows, bạn hãy gõ dòng lệnh file:///C:/ vào cửa sổ Run hoặc gõ vào thanh địa chỉ của trình duyệt để xem kết quả.

Ví dụ khác, giả sử đã có tập tin index.html trong ổ đĩa C, gõ lệnh file:///C:/index.html vào cửa sổ Run hoặc trình duyệt để xem kết quả.

Cú pháp của giao thức File có dạng:

file://host/path

Trong đó,

\- host là tên của máy tính dạng FQDN (tên miền dạng đầy đủ)

\- path là đường dẫn thư mục

Nếu tham số host không được cung cấp, giao thức File sẽ ngầm hiểu là truy cập tại máy tính cục bộ (localhost), khi đó, cú pháp file://host/path sẽ bị lược bớt đi phần host trở thành file:///path

Như vậy, khi mở một trang web bằng cách nhập vào đường dẫn kiểu như thế này: file:///C:/index.html, nghĩa là trình duyệt đã dùng giao thức File để truy cập và lấy về tập tin mã nguồn (index.html), sau đó sẽ biên dịch mã HTML và hiển thị nội dung của trang web.

## 6.3 Siêu liên kết

Như đã biết, web là một mạng lưới thông tin, một nút trong mạng lưới chính là một tài nguyên web. Đường nối giữa các nút chính là các Siêu liên kết.

Tài nguyên web: có thể là một trang web, một website hoặc một ứng dụng web, một đoạn văn bản, một hình ảnh, một video, …v.v.

Dưới góc nhìn của lập trình viên, tài nguyên web là các tài liệu HTML (tập tin HTML).

Siêu liên kết (hyperlink) hay liên kết (links) là một tham chiếu giữa các tài nguyên web với nhau, người dùng có thể bấm vào các liên kết này để di chuyển giữa các tài nguyên trên không gian web.

Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFl4fpzxGgyTD-G08H-LCO-4ihb1aMKhZxu6Q1ur6zBKW4ZbcLRcZ0mkwWpJKejonHETFFCekM1QzmcKehD8JQVyHO6yqRlwHau4xrRDryy0Fv4q1Sw3o0eA_-e3HNDTYBdTNSOisFGeA/w400-h204/Sieu+lien+ket+3.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFl4fpzxGgyTD-G08H-LCO-4ihb1aMKhZxu6Q1ur6zBKW4ZbcLRcZ0mkwWpJKejonHETFFCekM1QzmcKehD8JQVyHO6yqRlwHau4xrRDryy0Fv4q1Sw3o0eA_-e3HNDTYBdTNSOisFGeA/s701/Sieu+lien+ket+3.jpg)

Chúng ta cùng tạo một siêu liên kết:

\- Mở notepad, nhập vào đoạn mã sau

\<a href="https://vi.wikipedia.org/">Trang Wiki\</a>

\- Lưu vào đĩa cứng với tên bất kỳ (ví dụ: link.html)

\- Mở tập tin link.html bằng trình duyệt

\- Bạn sẽ thấy dòng chữ Trang Wiki trên giao diện web

\- Bấm vào dòng chữ Trang Wiki, trang Wikipedia sẽ mở ra cho bạn (đảm bảo máy của bạn đang có kết nối Internet)

Ở ví dụ trên, bạn đã tạo một siêu liên kết, để liên kết giữa:

\- Máy tính của bạn tới máy server của Wikipedia

\- Trang web của bạn tới trang web của Wikipedia

\- Tài liệu link.html tới trang chủ của Wikipedia

Để tạo liên kết, bạn đã sử dụng tới thẻ \<a>\</a> của HTML.

6.4 Siêu văn bản

Siêu văn bản (hypertext) là văn bản có chứa siêu liên kết. Vậy, tài liệu HTML chính là một siêu văn bản.

Siêu văn bản cũng được hiểu là một tài liệu có chứa văn bản, và nhiều hơn thế. Nghĩa là ngoài văn bản còn có các thẻ, bảng biểu, hình ảnh, video và các kiểu dữ liệu khác.

Với văn bản thông thường, nội dung của văn bản được tổ chức theo kiểu tuần tự, nghĩa là bạn cần đọc theo thứ tự từ trước đến sau. Tuy nhiên, với siêu văn bản, nhờ các siêu liên kết bạn có thể đọc các nội dung không theo trình tự. Xem hình minh họa,

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8UcR3T8PF-dzAaeyTOtTzT1CTmHfFK9wpXMFnChF-V4Nnqzt-k01xr0ffDzKNu05UPSe0qlOfi_VtoQ4SVkp-vb3esKqwJfW9Bg3ztq79C9o_1EKaMVzdv96_S-Ku_dEkfwEXhGX4FKY/w400-h259/Sieu+van+ban+4.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8UcR3T8PF-dzAaeyTOtTzT1CTmHfFK9wpXMFnChF-V4Nnqzt-k01xr0ffDzKNu05UPSe0qlOfi_VtoQ4SVkp-vb3esKqwJfW9Bg3ztq79C9o_1EKaMVzdv96_S-Ku_dEkfwEXhGX4FKY/s691/Sieu+van+ban+4.jpg)

Như vậy, tài liệu HTML (mã nguồn HTML) là siêu văn bản, và kết quả hiển thị của tài liệu HTML này trên trình duyệt cũng được gọi là siêu văn bản.

HTML là ngôn ngữ để tạo ra siêu văn bản.

Tiện học về siêu văn bản, đọc lại định nghĩa về văn bản:

Văn bản là gì?

Văn bản (text) là những thứ có thể đọc được. Cụ thể hơn, văn bản chính là tập hợp các kí tự (letter) hoặc các từ (word) có ngữ nghĩa.

Trong thông tin và truyền thông, văn bản là từ, là câu, là đoạn, không bao gồm thông tin định dạng và được lưu dưới dạng mã ASCII (để máy tính có thể hiểu và xử lý được). Những thứ không phải là văn bản bao gồm: các đối tượng đồ họa (graphic), các số (không ở dạng ASCII), và mã chương trình (dạng nhị phân).

Ví dụ một đoạn văn bản,

\[Words, sentences, paragraphs. This book, for example, consists of text. Text processing refers to the ability to manipulate words, lines, and pages. Typically, the term text refers to text stored as ASCII codes (that is, without any formatting). Objects that are not text include graphics, numbers (if they're not stored as ASCII characters), and program code.\]

6.5 Xem và đọc thêm

\- Từ khóa tìm kiếm: URL, URL wiki, Parts of the URL, hyperlink, siêu liên kết, hypertext, siêu văn bản

6.6 Bài tập và câu hỏi

Bài tập

Bài tập 6.1: Quan sát một số URL trên mạng

\- Mở trình duyệt, nhập vào thanh địa chỉ một URL bất kỳ, ví dụ: https://en.wikipedia.org/

\- Trình duyệt sẽ đổi tên miền en.wikipedia.org thành địa chỉ IP, kết nối tới máy server dựa trên IP và lấy về trang web. Bạn vào cửa sổ cmd, gõ lệnh: ping en.wikipedia.org, ghi lại địa chỉ IP máy server của wikipedia

\- Server sẽ chuyển hướng và gửi trang mặc định về cho trình duyệt, ví dụ https://en.wikipedia.org/wiki/Main\_Page

\- Di chuyển chuột vào các liên kết (ít nhất 5 liên kết) có trên trang web, quan sát trên thanh trạng thái (status bar) của trình duyệt (thanh ngang phía dưới của cửa sổ trình duyệt), ghi lại các URL mà bạn quan sát được.

\- Thêm thông tin cổng và URL để quan sát kết quả, ví dụ nếu giao thức là https thì thêm cổng 443, giao thức http thì thêm cổng 80, ví dụ: https://en.wikipedia.org:443/wiki/Main\_Page. Bạn sẽ thấy trang web vẫn hiển thị bình thường (không bị lỗi)

\- Kiểm tra xem trang wikipedia có hỗ trợ giao thức HTTP hay không, bằng cách nhập vào URL sau: [http://en.wikipedia.org:80/wiki/Main\_Page](http://en.wikipedia.org/wiki/Main_Page). Hay trình duyệt hoặc server đã tự chuyển thành HTTPS? Giải thích thêm về hiện tượng này?

\- Vào trang Tiki.vn, sử dụng trang web, quan sát và ghi lại giá trị của chuỗi truy vấn “query\_string” trong URL. Ví dụ: https://tiki.vn/search?q=loa%20m%C3%A1y%20t%C3%ADnh

Bài tập 6.2: Quan sát URL trên máy cục bộ

\- Trên máy cục bộ, sử dụng phần mềm Notepad tạo một tập tin HTML có nội dung bất kỳ, ví dụ: D:\\index.html với nội dung là dòng chữ “Xin chao”.

\- Mở tập tin index.html bằng trình duyệt, sẽ thấy dòng chữ “Xin chao” xuất hiện trên màn hình.

\- Quan sát đường dẫn sẽ thấy URL có nội dung sau: file:///D:/index.html

Từ URL trên, có một vài nhận xét: trình duyệt đã sử dụng giao thức File để lấy nội dung tập tin index.html. Do server chính là máy cục bộ nên có tên là localhost, và đã bị lược bỏ. Bạn có thể thêm localhost vào URL để truy cập tập tin index.html như bình thường (file://localhost/D:/index.html).

Từ file://localhost/D:/index.html lược bỏ đi localhost sẽ thành file:///D:/index.html, đó là lý do tại sao có 3 cái dấu xuyệt (///) liền nhau.

\- Tạo thư mục mới có tên là mywebsite, chuyển tập tin index.html vào trong thư mục vừa tạo, quan sát URL để hiểu thêm về đường dẫn thư mục. Ví dụ: file:///D:/mywebsite/index.html

Câu hỏi

Câu 6a. A Uniform Resource Locator (URL) is a reference to a web resource that specifies its location on a computer network and a \_\_\_\_\_\_\_ for retrieving it.

A. address

B. channel

C. format

D. mechanism

Câu 6b. Các thành phần thường có trong một URL gồm?

A. schema, fragment\_id, query\_string, path, port, domain

B. scheme, fragment\_id, query\_string, path, socket, domain

C. scheme, fragment\_id, query\_string, path, port, domain

D. scheme, fragment\_id, query\_language, path, port, domain

Câu 6c. Khi mở tập tin C:\\index.html bằng trình duyệt, giao thức trình duyệt đã sử dụng trong URL là?

A. http

B. https

C. file

D. ftp

Câu 6d. Khi mở tập tin C:\\index.html bằng trình duyệt, tại sao lại có ba dấu xuyệt (///) liền nhau?

A. Là cú pháp để truy cập tập tin trên máy cục bộ

B. Do lược bỏ tên của máy tính (localhost)

C. Là chuẩn của giao thức FTP

D. Là chuẩn của giao tiếp SSL

Câu 6e. In computing, a hyperlink, or simply a link, is a \_\_\_\_\_\_\_\_\_\_\_ to data that the user can follow by clicking or tapping. A hyperlink points to a whole document or to a specific element within a document.

A. reference

B. format

C. following

D. calling

Câu 6f. Hypertext is \_\_\_\_\_\_\_displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access. Hypertext documents are interconnected by hyperlinks, which are typically activated by a mouse click, keypress set, or screen touch. Apart from text, the term "hypertext" is also sometimes used to describe tables, images, and other presentational content formats with integrated hyperlinks.

A. link

B. text

C. format

D. web

\-----