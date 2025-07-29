const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 }; const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

/// In lần lượt từng ký tự của str 
for (let value of str) {
    console.log(value);
}

///Tạo mảng đảo ngược từ str 
///không biết làm bài này.

/// Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
console.log("Vị trí đầu tiên của 3:", dupArr.indexOf(3));
console.log("Vị trí cuối cùng của 3:", dupArr.lastIndexOf(3));

/// Lọc các phần tử xuất hiện 1 lần trong dupArr 
/// Đếm số lần xuất hiện
const count = {};  
for (let value of dupArr) {
    if (count[value]) {
        count[value]++;
    } else {
        count[value] = 1;
    }
}
/// Lấy count value = 1
const result = [];

for (let value of dupArr) {
    if (count[value] === 1) {
        result.push(value);
    }
}
console.log("Các phần tử xuất hiện 1 lần",result);