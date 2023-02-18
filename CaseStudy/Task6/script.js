class hocVien {
    constructor(mahv, ten, lop, email, ngaysinh, module) {
        this.mahv = mahv;
        this.ten = ten;
        this.lop = lop;
        this.email = email;
        this.ngaysinh = ngaysinh;
        this.module = module;
    }
    setMaHV(mahv) {
        this.mahv = mahv;
    }
    getMaHV() {
        return this.mahv;
    }
    setTen(ten) {
        this.ten = ten;
    }
    getTen() {
        return this.ten;
    }
    setLop(lop) {
        this.lop = lop;
    }
    getLop() {
        return this.lop;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setNgaySinh(ngaysinh) {
        this.ngaysinh = ngaysinh;
    }
    getNgaySinh() {
        return this.ngaysinh;
    }
    setModule(module) {
        this.module = module;
    }
    getModule() {
        return this.module;
    }

    toString() {
        return `Mã học viên:${this.mahv}, Tên:${this.ten}, Lớp:${this.lop}, Email:${this.email}, Ngày sinh:${this.ngaysinh}, Module:${this.module}`
    }
}

let hv1 = new hocVien("HV-0001", "Nguyễn Văn A", "C1022G1", "nguyenvana@gmail.com", "01/01/2004", 1);
let hv2 = new hocVien("HV-0002", "Nguyễn Văn B", "C1122G1", "nguyenvanb@gmail.com", "02/02/2004", 3);
let hv3 = new hocVien("HV-0003", "Nguyễn Thị C", "C1222G1", "nguyenthic@gmail.com", "03/03/2004", 6);
let danhSachHocVien = [hv1, hv2, hv3];

function themHocVien() {
    let mahv = document.getElementById("mahv").value;
    let ten = document.getElementById("ten").value;
    let lop = document.getElementById("lop").value;
    let email = document.getElementById("email").value;
    let ngaysinh = document.getElementById("ngaysinh").value;
    let module = document.getElementById("module").value;
    let hocvien = new hocVien(mahv, ten, lop, email, ngaysinh, module);
    danhSachHocVien.push(hocvien);
    hienDanhSach();
}

function hienDanhSach() {
    let table = `<table border="1">
               <tr>
                 <th>Mã học viên</th>
                 <th>Tên</th>
                 <th>Lớp</th>
                 <th>Email</th>
                 <th>Ngày sinh</th>
                 <th>Module</th>
               </tr>`;
    for (let i = 0; i < danhSachHocVien.length; i++) {
        table += `<tr>
                <td>${danhSachHocVien[i].getMaHV()}</td>
                <td>${danhSachHocVien[i].getTen()}</td>
                <td>${danhSachHocVien[i].getLop()}</td>
                <td>${danhSachHocVien[i].getEmail()}</td>
                <td>${danhSachHocVien[i].getNgaySinh()}</td>
                <td>${danhSachHocVien[i].getModule()}</td>
              </tr>`;
    }
    table += `</table>`;
    document.getElementById("result").innerHTML = table;
}

function xoaHocVien(hocVienXoa) {
    hocVienXoa = prompt("Nhập mã học viên cần xoá: ");

    for (let i = 0; i < danhSachHocVien.length; i++) {
        if ((danhSachHocVien[i].mahv.indexOf(hocVienXoa)) == -1) {
            alert("Mã học viên không tồn tại!");
            break;
        } else {
            if (hocVienXoa == danhSachHocVien[i].mahv) {
                danhSachHocVien.splice(i, 1);
                hienDanhSach();
            }
        }
    }
}



function suaHocVien(hocVienSua) {
    hocVienSua = prompt("Nhập mã học viên cần sửa: ");
    for (let i = 0; i < danhSachHocVien.length; i++) {
        if (hocVienSua == danhSachHocVien[i].mahv) {
            let hocVien = danhSachHocVien[i];
            let mahv = prompt("Nhập mã học viên mới", hocVien.getMaHV());
            let ten = prompt("Nhập tên học viên mới", hocVien.getTen());
            let lop = prompt("Nhập lớp học viên mới", hocVien.getLop());
            let email = prompt("Nhập email học viên mới", hocVien.getEmail());
            let ngaysinh = prompt("Nhập ngày sinh học viên mới", hocVien.getNgaySinh());
            let module = prompt("Nhập module học viên mới", hocVien.getModule());
            hocVien.mahv = mahv;
            hocVien.ten = ten;
            hocVien.lop = lop;
            hocVien.email = email;
            hocVien.ngaysinh = ngaysinh;
            hocVien.module = module;
            hienDanhSach();
        }
    }
}

hienDanhSach();