let car = {
    made: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);

let person = {
    name: "Chang",
    address: {
        street: "ThaiThinh",
        city: "Hanoi",
        country: "Vietnam"
    },
};
console.log(person.address.street);

let student = {
    name: "chang",
    grades: {
        math: 8,
        english: 10
    }
}; 
console.log(student["grades"]["math"]);

let settings = {
    volume: 8,
    brightness: 10
}
settings.volume = "10";
console.log(settings.volume);