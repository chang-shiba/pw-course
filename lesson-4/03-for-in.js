const student = { "name": "Alex", "age": 10, "salary": 20 };

/// In tên và giá trị mỗi thuộc tính của student 
for (let value in student) {
    console.log(value, student[value]);
}
/// Tính tổng các giá trị số trong student 
let sum = 0;
for (let value in student) {
    if (typeof student[value] === 'number') {
        sum = sum + student[value]
    }
}
console.log ("Tổng số",sum)
/// Tạo mảng chứa tên các thuộc tính của student 
const key = []
for (let value in student) {
    key.push(value);
}
console.log("Tên các thuộc tính:", key);