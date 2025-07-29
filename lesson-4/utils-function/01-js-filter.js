const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

/// Lọc các giá trị trong scores > 80. 
let score80up = scores.filter(score => score > '80');
console.log("Score >80:", score80up);
/// Lọc các giá trị trong ages ≥ 18. 
let age18up = ages.filter(age => age >= '18');
console.log("Ages >=18:", age18up);
/// Lọc các từ trong words có độ dài > 5. 
let word5up = words.filter(word => word.length >5);
console.log("Word >5:", word5up);
