---
layout: post
title: "Hướng dẫn xây dựng RESTful API đơn giản với .NET 8 Web API"
date: 2026-09-08
categories: [Dotnet, Backend, API]
---

Trong bài viết này, chúng ta sẽ cùng nhau tạo nhanh một dịch vụ RESTful API quản lý sản phẩm bằng **.NET 8 Web API**.

## 1. Yêu cầu chuẩn bị
- .NET 8 SDK
- Visual Studio 2022 hoặc VS Code
- Postman (hoặc Dùng Swagger tích hợp sẵn)

## 2. Khởi tạo Dự án

Mở Terminal và chạy lệnh sau để tạo Web API dự án mới:

```bash
dotnet new webapi -n ProductManagementApi
cd ProductManagementApi
3. Tạo Model Product
Tạo file Models/Product.cs:

C#
namespace ProductManagementApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}
4. Tạo Controller
Tạo file Controllers/ProductsController.cs:

C#
using Microsoft.AspNetCore.Mvc;
using ProductManagementApi.Models;

namespace ProductManagementApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop Dell XPS", Price = 1500 },
            new Product { Id = 2, Name = "Chuột Logitech MX Master 3S", Price = 100 }
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_products);
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            product.Id = _products.Count + 1;
            _products.Add(product);
            return CreatedAtAction(nameof(GetAll), new { id = product.Id }, product);
        }
    }
}
5. Chạy ứng dụng
Chạy lệnh:

Bash
dotnet run
Truy cập https://localhost:7xxx/swagger để kiểm tra các API vừa tạo.

Kết luận
Chỉ với vài thao tác cơ bản, bạn đã có một RESTful API hoàn chỉnh sẵn sàng phát triển thêm các tính năng như kết nối CSDL Entity Framework Core!


---

### 4. `_posts/2026-09-08-test-post.md`
```markdown
---
layout: post
title: "Bài viết thử nghiệm (Test Post)"
date: 2026-09-08
categories: [Test]
---

# Bài viết kiểm tra giao diện

Đây là bài viết dùng để kiểm tra khả năng hiển thị Markdown và layout `post.html` trên Jekyll.

### Kiểm tra Code Block Python
```python
def say_hello(name: str) -> str:
    return f"Hello, {name}! Welcome to my blog."

print(say_hello("Khoi Nguyen"))
Kiểm tra Danh sách Checklist
[x] Tạo cấu trúc thư mục

[x] Cấu hình file _config.yml

[x] Viết bài blog đầu tiên

[ ] Push code lên GitHub Pages


---

### 5. `_config.yml`
```yaml
title: "Khoi Nguyen | Backend & Tech Blog"[cite: 1]
author: "Cao Khôi Nguyên"[cite: 1]
email: "nguyen.cse06@gmail.com"[cite: 1]
description: "Blog chia sẻ hành trình học tập, kiến thức Backend (.NET, Node.js, FastAPI), thiết kế hệ thống và trải nghiệm lập trình."[cite: 1]
url: "https://Nguyen06-CSE.github.io"[cite: 1]
theme: minima[cite: 1]

# Cấu hình mạng xã hội
github_username: Nguyen06-CSE[cite: 1]
linkedin_username: alexnguyen-fs[cite: 1]

# Jekyll options
markdown: kramdown[cite: 1]
plugins:[cite: 1]
  - jekyll-feed[cite: 1]
  - jekyll-seo-tag[cite: 1]