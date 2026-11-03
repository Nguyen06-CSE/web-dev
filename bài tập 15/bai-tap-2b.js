// =============================================================================
// BÀI TẬP 2B: SỬ DỤNG TOÁN TỬ TYPEOF, ĐIỀN KẾT QUẢ VÀO BẢNG VÀ GIẢI THÍCH
// JavaScript (2) - Cú pháp, kiểu dữ liệu và biến
// Tác giả: Lê Gia Công (Langbiang)
// =============================================================================

console.log('=== KẾT QUẢ BÀI TẬP 2B ===\n');

// 1. null
console.log("1. typeof null      =>", typeof null);
console.log("   -> Giải thích: Bug lịch sử từ phiên bản đầu của JavaScript, null đại diện cho giá trị rỗng nhưng typeof trả về 'object'.\n");

// 2. undefined
console.log("2. typeof undefined =>", typeof undefined);
console.log("   -> Giải thích: Biến chưa được gán giá trị hoặc giá trị không xác định, trả về 'undefined'.\n");

// 3. 0
console.log("3. typeof 0         =>", typeof 0);
console.log("   -> Giải thích: Số 0 thuộc kiểu dữ liệu số (number).\n");

// 4. True (chữ T viết hoa)
console.log("4. typeof True      =>", typeof True);
console.log("   -> Giải thích: JavaScript phân biệt chữ hoa chữ thường. 'True' không phải từ khóa boolean, được coi là tên biến chưa khai báo nên typeof trả về 'undefined'.\n");

// 5. true (chữ t viết thường)
console.log("5. typeof true      =>", typeof true);
console.log("   -> Giải thích: Từ khóa giá trị logic đúng thuộc kiểu 'boolean'.\n");

// 6. 'True'
console.log("6. typeof 'True'    =>", typeof 'True');
console.log("   -> Giải thích: Đặt trong cặp dấu nháy nên đây là chuỗi ký tự (string).\n");

// 7. 1e5
console.log("7. typeof 1e5       =>", typeof 1e5);
console.log("   -> Giải thích: Ký hiệu khoa học của số 100000 (1 * 10^5), thuộc kiểu 'number'.\n");
