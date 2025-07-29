const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 

/// Kiểm tra scores có giá trị nào > 80 không. 
let score80up = scores.some(score => score > 80);
console.log ("Có Scores>80:", score80up);
/// Kiểm tra ages có giá trị nào < 18 không. 
let ageunder18 = ages.some(age => age < 18);
console.log ("Có Ages<18:", ageunder18);
/// Kiểm tra words có từ nào dài > 5 không. 
let wordlonger5 = words.some(word => word.length < 18);
console.log ("Có Words>5:", wordlonger5);