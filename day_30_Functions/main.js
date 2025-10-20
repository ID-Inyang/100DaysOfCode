function myFunction(p1, p2) {
    return p1 * p2;
}

// console.log(myFunction(89, 78));

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius();

// console.log(value);

const car = new Object({type: "Fiat", model: "500", color: "white"});
const car2 = {type: "Fiat", model: "500", color: "white"};
// console.log(car.type === car2.type);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());