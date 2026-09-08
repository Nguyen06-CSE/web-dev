---
layout: post
title: "[Chủ đề] Hướng dẫn xây dựng RESTful API chuẩn Clean Architecture với .NET 8"
date: 2026-09-08 10:00:00 +0700
categories: [Backend, DotNet]
tags: [csharp, dotnet, clean-architecture, api, postgresql]
excerpt: "Bài viết chia sẻ chi tiết cách tổ chức thư mục, phân tách Controller - Service - Repository và áp dụng JWT Authentication trong .NET 8."
---

## 📌 Giới thiệu bài viết
Trong bài viết này, mình sẽ cùng các bạn tìm hiểu cách thiết kế một hệ thống RESTful API hoàn chỉnh theo mô hình **Clean Architecture** sử dụng **.NET 8** và **PostgreSQL**.

### Vấn đề gặp phải
Khi dự án phình to, việc viết toàn bộ logic trong Controller khiến code bị rối (Spaghetti code) và khó Unit Test...

---

## 🛠 1. Chuẩn bị môi trường & Công cụ
- .NET 8 SDK
- PostgreSQL Server & pgAdmin
- Docker (Tùy chọn)
- Visual Studio / VS Code

---

## 🏗 2. Thiết kế kiến trúc các tầng (Architecture)

### Tầng Domain (Core)
Chứa các Entity và Interfaces cơ bản...

```csharp
public class Product
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
Tầng Application & Infrastructure
Xử lý Business Logic và truy xuất cơ sở dữ liệu qua Entity Framework Core...

📊 3. Đánh giá & Tối ưu hiệu năng
Caching với Redis: Giảm thời gian phản hồi từ 120ms xuống còn 15ms cho các truy vấn đọc.

Indexing Database: Tối ưu các câu lệnh SQL Query.

💡 Bài học rút ra (Takeaways)
Tách biệt rõ ràng vai trò của từng Layer giúp việc bảo trì và viết Unit Test dễ dàng hơn.

Luôn chú trọng việc Validation dữ liệu ngay từ tầng Request.

🔗 Tài liệu tham khảo
Official Microsoft .NET Documentation

Clean Architecture with ASP.NET Core


---

## 5. FILE `README.md` DÀNH CHO REPOSITORY GITHUB
*File này hiển thị ngay khi truy cập vào Repository của bạn.*

```markdown
# 🚀 Personal Tech Blog - Cao Khôi Nguyên

Chào mừng đến với Repository chứa mã nguồn Blog cá nhân của tôi!

- **Live Site:** [https://Nguyen06-CSE.github.io](https://Nguyen06-CSE.github.io)
- **Công nghệ sử dụng:** GitHub Pages, Jekyll, Markdown, HTML/CSS.

## 📝 Cách đăng bài mới
1. Clone repo về máy: `git clone [https://github.com/Nguyen06-CSE/Nguyen06-CSE.github.io.git](https://github.com/Nguyen06-CSE/Nguyen06-CSE.github.io.git)`
2. Tạo file mới trong thư mục `_posts/` theo định dạng: `YYYY-MM-DD-ten-bai-viet.md`
3. Soạn thảo nội dung theo cú pháp Markdown.