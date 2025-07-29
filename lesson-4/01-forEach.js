const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

function sum(array) {
    let sum = 0;
    array.forEach((number) => {
        sum = sum + number
    });
    return sum;
}
console.log("Sum:", sum(numbers));

function minmax(array) {
    let min = array[0];
    let max = array[0];
    array.forEach((number) => {
        if (number > max)
            max = number;
        if (number < min)
            min = number;
    });
    return { max, min };
}
let result = minmax(numbers);
console.log("Max:", result.max)
console.log("Min:", result.min);

let newNumbers = numbers.map (num => num*2);
console.log(newNumbers);

