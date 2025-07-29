const scores = [85, 90, 78]; 
const numbers = [1, 2, 3, 4]; 


/// Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90. 
let newScores = scores.map(score => {
    if (score < 90) {
    return score + score * 0.1;
  } else {
    return score - score * 0.05;
  }
});
console.log("Arrnew:",newScores);
// Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi. 
let arr = numbers.map(number => String(number));
console.log("Arrnew:",arr);
/// Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
let double = scores.map(score => score*2);
console.log("Arrnew:",double);


let x = 0;
for (let i = 0; i < 5; i++) {
    x += i;
}
console.log(x);