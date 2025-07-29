# Javascript (cont)
## Phạm vi của biến
- Var - Global scope: Biến được khai báo ngoài mọi hàm hoặc khối lệnh ({}), có thể truy cập ở mọi nơi trong file.
`for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5 (vẫn truy cập được)`
    - var không có block scope, nên sau vòng lặp for, biến i vẫn tồn tại và bằng 5.
- Block scope (Scope: {}): Biến được khai báo bằng let hoặc const bên trong { } chỉ có thể truy cập trong khối đó.
`for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined. `
    - let có block scope, nên biến i chỉ tồn tại bên trong {} của vòng lặp. Ra ngoài thì i bị huỷ.

## Điều kiện nâng cao - Condition advance 
### if...else
Dùng khi có 1 điều kiện đúng hoặc sai.

``if (condition) {
	run code when condition = true
} else {
	run code when condition = false
}``
### if...else if...else
Dùng khi có nhiều điều kiện và muốn kiểm tra lần lượt. (Nếu cond1 sai thì cond2, nếu cond2 sai tiếp thì...)

`let score = 75;
if (score >= 90) {
  console.log("Giỏi");
} else if (score >= 70) {
  console.log("Khá");
} else {
  console.log("Trung bình");
}`
### switch...case 
Dùng khi muốn so sánh 1 biến với nhiều giá trị cụ thể.

`let day = 3;
switch (day) {
  case 1:
    console.log("Thứ Hai");
    break;
  case 2:
    console.log("Thứ Ba");
    break;
  case 3:
    console.log("Thứ Tư");
    break;
  default:
    console.log("Không hợp lệ");
}`
- default sẽ được chạy nếu không case nào khớp.
- keywork break >> là khi mà code đúng rồi sẽ break, ko chạy các case khác nữa
## So sánh 
### So sánh lỏng lẻo == và !=
- Tự động chuyển đổi kiểu dữ liệu (type coercion) trước khi so sánh.
- Dễ gây lỗi nếu không cẩn thận.
    - "5" == 5 // true (vì "5" được convert thành số 5)
    - null == undefined // true
    - "0" == false // true
### So sánh tuyệt đối === và !==
- Không chuyển đổi kiểu, so sánh cả giá trị và kiểu dữ liệu.
- An toàn, nên dùng trong thực tế.
    - "5" === 5    // false (khác kiểu: string vs number)
    - 5 === 5      // true
    - false === 0  // false
    - null === undefined // false
## Advance loop
### for...in
- Dùng cho object để duyệt tên thuộc tính (keys).
- Cho phép truy cập index của array

`for (let tênBiến in object) {
  // xử lý
}`
- tênBiến: bạn có thể đặt tên gì cũng được (như property, key, item, fruit,...)
- Nó sẽ duyệt các key (tên thuộc tính) trong object.
- Ex: 
let product = {
  Banana: 20,
  Apple: 30,
  Orange: 15
};

for (let key in product) {
  console.log(key); // in tên thuộc tính: Banana, Apple, Orange
  console.log(product[key]); // in giá trị: 20, 30,15
}
- Không thể dùng product.key vì key là biến → phải dùng product[key] (dùng ngoặc vuông).
- Nếu dùng product.key, JavaScript sẽ tìm thuộc tính tên "key" chứ không phải giá trị của biến key.
- Dùng for...in để lặp mảng

`const arr = ["a", "b", "c"];
for (let i in arr) {
  console.log(i); // index (0, 1, 2)
  console.log(arr[i]); // giá trị tương ứng (a, b, c)
}`

    - i là chỉ số (index) của mảng.
    - arr[i] là phần tử tương ứng.
### forEach
Dùng cho array, duyệt qua từng giá trị và phần tử.

`array.forEach((value, index) => {
  // xử lý ở đây
});`

Example:
const arr = ["a", "b", "c"];

arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

Result:
0: a
1: b
2: c
### for...of
Cũng dùng cho array, lặp qua các phần tử

`
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
// Kết quả: 10, 20, 30
`
### Break và continue 
#### Continue 
- Khi gặp continue, vòng lặp bỏ qua lần lặp hiện tại, và chuyển sang lần kế tiếp.
- Dùng khi bạn muốn skip 1 trường hợp nào đó.

`for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Bỏ qua khi i bằng 2
  }
  console.log(i);
}`

Kết quả: 0 1 3 4
#### Break
- Khi gặp break, vòng lặp sẽ dừng hoàn toàn, thoát ra ngoài vòng lặp.
- Dùng khi bạn không cần tiếp tục lặp nữa (ví dụ: đã tìm thấy kết quả).

`for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Dừng vòng lặp khi i bằng 5
  }
  console.log(i);
}`

Kết quả: 0 1 2 3 4
### for of
Một chuỗi (string) trong JavaScript thực chất là một mảng gồm các ký tự.
Ví dụ: "Playwright" có thể coi như ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
`
const str = "K9 2024";
for (let char of str) {
  console.log(char);
}`
## Utils functions
### String utils function 
- trim() loại bỏ khoảng trắng đầu và cuối (cách, tab, và các ký tự không in ra khác)
- toLowerCase (), toUpperCase()
- includes() kiểm tra xem chuỗi có chứa sub-string nào k
- replace()
- split() - cắt chuỗi thành mảng có nhiều chuỗi con
- substring() trả về 1 phần của chuỗi đấy từ số index x đến số index y
- indexOf() trả ra phần tử trong chuỗi, nếu -1 là ko có… Cái này là để đỡ phải đếm cho substring 
### Array Utils function
- map(): taọ ra mảng mới bằng cách áp dụng hàm lên từng phần của mảng gốc
- filter(): Lọc mảng theo điều kiện, trả về mảng mới
- find(): trả về phần tử điều tiên thoả mãn điều kiện
- reduce(): áp dụng 1 hàm lên phần tử từ trái qua phải để trả về 1 cái duy nhât
- some(): kiểm tra tìm thấy phần tử phù hợp với điều kiện
- every() - giống some nhưng kiểm tra tất cả các phần tử >>> phải tất cả ok thì mới true
- push() - thêm 1 hoặc nhiều phần tử vào cuối mảng
- shift() - loại bỏ phần tử đầu tiên của mảng và trả về phần tử bị loại bỏ
- sort() sắp xếp các phần tử của mảng (theo unicode: ASCII hoặc UTF-16) > thay đổi mảng, chuyển số snag chuỗi
- pop() Xóa phần tử cuối cùng trong mảng và trả về phần tử đó.
- unshift() Thêm một hoặc nhiều phần tử vào đầu mảng, và trả về độ dài mới.
- trim() Xóa khoảng trắng đầu và cuối chuỗi, trả về chuỗi mới.
    - Để xoá khoảng trắng ở đầu sử dụng trimStart()
    - Để xoá khoảng trắng ở cuối sử dụng trimEnd()






