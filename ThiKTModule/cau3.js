class Book {
    constructor(id, name, year, amount, status) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.amount = amount;
        this.status = status;
    }
    setId(id) {
        this.id = id
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setYear(year) {
        this.year = year;
    }
    getYear() {
        return this.year;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getAmount() {
        return this.amount;
    }
    setStatus(status) {
        this.status = status
    }
    getStatus() {
        return this.status
    }
    toString() {
        return `Id:${this.id}, Name:${this.name}, Year:${this.year}, Amount:${this.amount}, Status:${this.status}`
    }
}

let b1 = new Book("12345", "Toán", 2000, 3, "True");
let b2 = new Book("23456", "Văn", 1998, 4, "True");
let b3 = new Book("37456", "Tiếng Anh", 1999, 5, "False");
let bookList = [b1, b2, b3];

function addBook() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let amount = document.getElementById("amount").value;
    let status = document.getElementById("status").value;
    let book = new Book(id, name, year, amount, status);
    bookList.push(book);
    showBook();
}

function addOldBook(index) {
    let book = bookList[index];
    let amountAdd = +prompt("Thêm số sách", book.getAmount());
    book.amount = book.amount + amountAdd;
    showBook();
}

function takeBook(index) {
    let book = bookList[index];
    let amountDec = +prompt("Nhập số sách mượn", book.getAmount());
    book.amount = book.amount - amountDec;
    if(book.amount == 0){
        book.status = "False"
    }
    showBook();
}

function displayMost() {
    let m = 0;
    let b = "";
    for (let i = 0; i < bookList.length; i++) {
        if (m < bookList[i].amount) {
            m = bookList[i].amount;
            b = bookList[i].name;
        }
    }
    alert("Sách nhiều nhất là: " + b);
}
function showBook() {
    let table = `<table border="1">
               <tr>
                 <th>Mã số sách</th>
                 <th>Tên sách</th>
                 <th>Năm xuất bản</th>
                 <th>Số quyển</th>
                 <th>Tình trạng</th>
                 <th>Thêm sách đã có</th>
                 <th>Mượn sách</th>
               </tr>`;
    for (let i = 0; i < bookList.length; i++) {
        table += `<tr>
                <td>${bookList[i].getId()}</td>
                <td>${bookList[i].getName()}</td>
                <td>${bookList[i].getYear()}</td>
                <td>${bookList[i].getAmount()}</td>
                <td>${bookList[i].getStatus()}</td>
                <td><button id="oldbook" onclick="addOldBook(${i})">Thêm sách</button></td>
                <td><button id="take" onclick="takeBook(${i})">Mượn sách</button></td>
              </tr>`;
    }
    table += `</table>`;
    document.getElementById("result").innerHTML = table;
}

showBook();