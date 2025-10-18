// Floating point arithmetic is not always 100% accurate
let x = 0.2 + 0.1;
// console.log(x);

x = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(x);

x = 10;
let y = 940;
let z = y/x;

x = '100';
y = '10';
z = x * y

x = NaN;
y = "i5";
// console.log(y);
z = x + y;
// console.log(z);
// console.log(isNaN(z));
// console.log(typeof NaN);

y = -2 / 0;
// console.log(y)

x = 0xff;
// console.log(x)

let myNumber = 32;
// console.log("Base 32: ")
// console.log(myNumber.toString(32));
// console.log("\nBase 16: ");
// console.log(myNumber.toString(16));
// console.log("Prove: " + 0x20);
// console.log("\nBase 12: ");
// console.log(myNumber.toString(12));
// console.log("\nBase 10: ")
// console.log(myNumber.toString(10));
// console.log("\nBase 8: ")
// console.log(myNumber.toString(8));
// console.log("\nBase 2: ")
// console.log(myNumber.toString(7));

x = new Number(500);
y = new Number(500);
// console.log(x == y)

x = 9.656;

// console.log(x.toExponential(2));

// console.log(x.toExponential(4));

// console.log(x.toExponential());

x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));