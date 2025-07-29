const { stripVTControlCharacters } = require("util");

const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 

/// Kiểm tra tất cả giá trị trong scores có > 70 không. 
let score70up = scores.every(score => score >'70');
console.log("Scrore70up:",score70up);
/// Kiểm tra tất cả giá trị trong ages có > 15 không. 
let agemorethan15 = ages.every(age => age > '15');
console.log("Agemorethan15:",agemorethan15);
/// Kiểm tra tất cả từ trong words có độ dài > 3 không. 
let wordmorethan3 = words.every(word => word.length > 3);
console.log("More than 3:", wordmorethan3);