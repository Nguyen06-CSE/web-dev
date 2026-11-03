// main.js - Thực hành Bài tập 15: Cú pháp, Kiểu dữ liệu và Biến trong JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dữ liệu bài tập 2b
    const typeofItems = [
        { expr: 'null', val: null, expected: typeof null, note: "Bug lịch sử của JS từ năm 1995: typeof null trả về 'object'" },
        { expr: 'undefined', val: undefined, expected: typeof undefined, note: "Biến chưa gán giá trị hoặc không xác định" },
        { expr: '0', val: 0, expected: typeof 0, note: "Số nguyên/thực đều thuộc kiểu 'number'" },
        { expr: 'True', val: undefined, expected: typeof True, note: "Chữ T hoa: biến chưa định nghĩa, typeof trả về 'undefined'" },
        { expr: 'true', val: true, expected: typeof true, note: "Chữ t thường: giá trị logic Boolean hợp lệ" },
        { expr: "'True'", val: 'True', expected: typeof 'True', note: "Chuỗi ký tự trong dấu nháy (string)" },
        { expr: '1e5', val: 1e5, expected: typeof 1e5, note: "Ký hiệu khoa học (100.000) thuộc kiểu 'number'" }
    ];

    const tableBody = document.getElementById('typeofTableBody');
    if (tableBody) {
        tableBody.innerHTML = typeofItems.map((item, idx) => `
            <tr>
                <td>${idx + 1}</td>
                <td><code>${item.expr}</code></td>
                <td><span class="badge ${item.expected}">${item.expected}</span></td>
                <td>${item.note}</td>
            </tr>
        `).join('');
    }

    // 2. Chức năng kiểm tra typeof tương tác trực tiếp
    const evalInput = document.getElementById('evalInput');
    const btnCheck = document.getElementById('btnCheck');
    const evalResult = document.getElementById('evalResult');

    if (btnCheck && evalInput && evalResult) {
        btnCheck.addEventListener('click', () => {
            const rawVal = evalInput.value.trim();
            if (!rawVal) {
                evalResult.innerHTML = '<span class="text-warning">Vui lòng nhập một giá trị hoặc biểu thức!</span>';
                return;
            }
            try {
                // Đánh giá biểu thức một cách an toàn
                const evaluated = Function('"use strict"; return (' + rawVal + ')')();
                const type = typeof evaluated;
                evalResult.innerHTML = `Biểu thức: <code>${rawVal}</code> &rarr; Giá trị: <strong>${evaluated}</strong> | Kiểu dữ liệu (typeof): <span class="badge ${type}">${type}</span>`;
            } catch (err) {
                // Nếu là tên biến chưa khai báo
                try {
                    const type = eval('typeof ' + rawVal);
                    evalResult.innerHTML = `Biểu thức: <code>${rawVal}</code> &rarr; Kiểu dữ liệu (typeof): <span class="badge ${type}">${type}</span> <em>(${err.message})</em>`;
                } catch (e) {
                    evalResult.innerHTML = `<span class="text-danger">Lỗi cú pháp: ${err.message}</span>`;
                }
            }
        });
    }

    // 3. Demo Lý thuyết 2a: Let, Const và Khối lệnh
    const btnRunDemo = document.getElementById('btnRunDemo');
    const demoOutput = document.getElementById('demoOutput');

    if (btnRunDemo && demoOutput) {
        btnRunDemo.addEventListener('click', () => {
            let logs = [];
            logs.push("== 1. Cú pháp câu lệnh & Khối lệnh ==");
            const msg = "Chao bac Teo!";
            logs.push(`Câu lệnh: ${msg}`);

            {
                const blockMsg = "Chao bac Teo tu trong block!";
                logs.push(`Khối lệnh: ${blockMsg}`);
            }

            logs.push("\n== 2. Biến let vs const ==");
            let diem = 7;
            logs.push(`Biến diem ban đầu: ${diem}`);
            diem = 8;
            logs.push(`Biến diem sau khi thay đổi: ${diem}`);

            const namSinh = 2000;
            logs.push(`Hằng số namSinh (const): ${namSinh}`);
            logs.push("Thử gán lại namSinh = 2001 -> Bị chặn: TypeError: Assignment to constant variable.");

            const sinhVien = { hoTen: "Nguyen Van Teo", tuoi: 20 };
            sinhVien.tuoi = 21;
            logs.push(`Đối tượng const sửa thuộc tính bên trong: ${JSON.stringify(sinhVien)}`);

            demoOutput.textContent = logs.join("\n");
        });
    }

    console.log("Bài tập 15 - JavaScript đã sẵn sàng!");
});
