# GIT
## Undo action
### Thay đổi commit message 
- git commit --amend
    - Gõ i -> vào chế độ insert
    - Gõ esc để thoát insert
    - Gõ “:wq” -> write and quit
- git commit --amend -m”message”
    - Thay thế toàn bộ commit message cũ bằng "message" mới
### Đưa từ vùng staging về working directory
- git restore --staged <file>
### Đưa từ vùng repository về working directory (uncommit)
git reset HEAD~1 (undo 1 commit cuối)
## Branching model
### Tạo branch mới
git branch <ten_branch>
### Checkout sang nhánh mới để làm 
git checkout <ten_branch>
### Tạo + chuyển sang nhánh mới 
git checkout -b <ten_branch>
* Mình checkout từ nhánh nào đang đứng thì nó sẽ copy history từ nhánh đó (ví dụ đứng ở main thì sẽ clone từ main)
## .gitignore file 
Dùng để bỏ qua các file/folder không cần git theo dõi.
- <file_name>
- <folder-name>/
## Checkout về 1 commit bất kỳ 
- Dùng git log để xem danh sách commit 
- Đến trạng thái của commit đó git checkout commit hash

# Javascript
## Conventions - Đặt tên
* snake_case_now_now: chưa dùng
* kebab-case-now-now: đặt tên file
* camelCaseNowNow: đặt tên biến
* PascalCaseNowNow: đặt tên class
## Format console
console.log with ‘ and “
- Dùng dấu backtick (`) thay vì dấu nháy đơn/kép
- Biến được chèn bằng cú pháp: ${ten_bien}
## Object 
Gom nhóm các thông tin thành 1 biến duy nhất, có thể lồng object trong object
- Khai báo: 
let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}
- Truy xuất: 
    - Dùng dấu chấm console.log(object.thuoctinh);
    - Dùng dấu ngoặc vuông console.log(object["thuoctinh"]);
- Thêm thuộc tính hoặc gán lại: 
    - object.thuoctinh=giatri;
    - object["sub-object"]["thuoctinh"] = giatri;
## Logical operator
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề
## Array - Mảng
- Tạo mảng: ["..","..",".."]
- Truy xuất mảng
    - Độ dài mảng: array.length
    - Lấy phần tử theo index: [0], [1], [2]
    - Truy xuất phần tử: 
        - console.log(students[0]); // → "An"
        - console.log(students[2]); // → "Chi"
    - Tìm index của một giá trị: dùng hàm indexOf()
        - students.indexOf("Chi");
## Function - Hàm 
Viết ra để tái sử dụng ở nhiều chỗ khác nhau. 
- Khai báo
function <nameFunction>() {
// code
}
- Gọi hàm: nameFunction(); 
- Parameter (Tham số): Là giá trị truyền vào hàm khi gọi, giúp hàm hoạt động linh hoạt hơn.
function greet(name) {
  console.log("Hello, " + name);
}
greet("An"); // → Hello, An
greet("Mai"); // → Hello, Mai
- Return value: Dùng từ khóa return để trả kết quả ra ngoài hàm.
function multiply(x, y) {
  return x * y;
}
let result = multiply(3, 5);
console.log(result); // → 15


