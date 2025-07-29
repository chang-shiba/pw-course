const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];


/// Tìm giá trị đầu tiên trong scores > 80. 
let first80up = scores.find(score => score > 80);
console.log("Score>80:", first80up);
/// Tìm giá trị đầu tiên trong ages > 20. 
let age20up = ages.find(age => age > 20);
console.log("Age >20:", age20up);
/// Tìm từ đầu tiên trong words có độ dài > 5. 
let word5up = words.find(word => word.length > 5);
console.log("Word >5:", word5up);