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
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));

// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(4));
// console.log(x.toPrecision(6));

x = 123;
// console.log(x.valueOf());
// console.log((123).valueOf());
// console.log((100 + 23).valueOf());

// console.log(Number(true));
// console.log(Number("10.25"));
// console.log(Number(new Date("1970-01-01")));

// console.log(parseInt("-10"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("c 10 years"));



// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));
// console.log("8hp")

// x = Number.NEGATIVE_INFINITY;
// console.log(x)

// console.log(5 & 1);
// console.log(~5);
// console.log(5 << 1);
// console.log(5^1);
x = 5;
y = 1;

console.log(x <<= y);