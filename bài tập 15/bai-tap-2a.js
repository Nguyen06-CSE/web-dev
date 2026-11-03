// =============================================================================
// BÀI TẬP 2A: VIẾT LẠI CÁC ĐOẠN MÃ TRONG PHẦN LÝ THUYẾT
// JavaScript (2) - Cú pháp, kiểu dữ liệu và biến
// Tác giả: Lê Gia Công (Langbiang)
// =============================================================================

console.log('--- 2.1 CÚ PHÁP (SYNTAX) ---');

// 1. Câu lệnh (Statement)
// Câu lệnh có thể kết thúc bằng dấu chấm phẩy (;) - khuyến khích sử dụng
const message1 = 'Chao bac Teo!';
console.log('Câu lệnh kết thúc bằng dấu chấm phẩy:', message1);

// Hoặc kết thúc bằng cách xuống hàng (new line)
const message2 = 'Chao bac Teo!'
console.log('Câu lệnh kết thúc bằng xuống dòng:', message2)

// 2. Khối lệnh (Block)
// Tập hợp nhiều câu lệnh trong cặp ngoặc nhọn {}, cuối khối lệnh không cần dấu chấm phẩy
{
    const messageBlock = 'Chao bac Teo tu trong block!';
    console.log(messageBlock);
}

// 3. Khoảng trắng (Whitespace)
// Trình thông dịch bỏ qua các khoảng trắng thừa, dùng khoảng trắng hợp lý giúp code dễ đọc
const messageFormatted = 'Chao bac Teo!';
console.log('Đoạn mã có khoảng trắng rõ ràng:', messageFormatted);


console.log('\n--- 2.2 KIỂU DỮ LIỆU & TOÁN TỬ TYPEOF ---');

// Kiểm tra kiểu dữ liệu của các giá trị cơ bản và phức tạp bằng toán tử typeof
console.log("typeof 'hi bac Teo'      :", typeof 'hi bac Teo');       // string
console.log("typeof 123               :", typeof 123);                // number
console.log("typeof true              :", typeof true);               // boolean
console.log("typeof {ten: 'van teo'}  :", typeof { ten: 'van teo' }); // object
console.log("typeof [1, 2, 3]         :", typeof [1, 2, 3]);          // object (mảng trong JS là object)


console.log('\n--- 2.3 BIẾN (VARIABLES) VỚI VAR, LET, CONST ---');

// 1. Từ khóa 'let': Cho phép gán lại giá trị, có phạm vi khối (block scope)
let diem = 7;
console.log('Điểm ban đầu (let):', diem);
diem = 8;
console.log('Điểm sau khi gán lại (let):', diem);

// Khai báo nhiều biến trên cùng một hàng bằng 'let'
let x = 1, y = 2, z = 3;
console.log('Khai báo nhiều biến cùng hàng (x, y, z):', x, y, z);

// 2. Từ khóa 'const': Khai báo hằng số, phải gán giá trị ngay và không thể gán lại giá trị khác
const namSinh = 2000;
console.log('Năm sinh (const):', namSinh);

// Nếu thực hiện: namSinh = 2001;
// Sẽ báo lỗi: TypeError: Assignment to constant variable.
try {
    // Thử gán lại biến const bằng eval để bắt lỗi trực quan
    eval('namSinh = 2001');
} catch (error) {
    console.log('Lỗi khi cố gán lại const:', error.message);
}

// Lưu ý với const cho object hoặc mảng:
// Không được gán lại biến bằng một object/array mới, nhưng có thể thay đổi các phần tử/thuộc tính bên trong.
const sinhVien = { hoTen: 'Nguyen Van Teo', tuoi: 20 };
sinhVien.tuoi = 21; // Hoàn toàn hợp lệ
console.log('Đối tượng const sau khi sửa thuộc tính bên trong:', sinhVien);
