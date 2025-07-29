
const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

/// Tính tổng các giá trị trong scores. 
let sum = scores.reduce((total, score) => total + score, 0);
console.log("Score Sum", sum);
/// Tính tích các giá trị trong numbers. 
let tich = numbers.reduce((multiple, number) => multiple * number, 1);
console.log("Tich:", tich);
/// Tính tổng các giá trị trong expenses. 
let tong = expenses.reduce((total, expense) => total + expense, 0);
console.log("Tong Expenses:", tong);