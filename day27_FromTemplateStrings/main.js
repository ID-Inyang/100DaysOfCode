let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// console.log(`VAT + 1: ${1 + VAT}`);
// console.log(`Price * (1 + VAT): ${price * (1 + VAT)}`);
// console.log(total);

// let body = document.querySelector('body');

// let header = "Template Strings";
// let tags = ["template strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;
// for (const c of tags) {
//     html += `<li>${c}</li>`;
// }

// html += `</ul>`;

// body.innerHTML = html;

let text = "HI!";
let letter = text.at(-2);
let code = text.codePointAt(0);
// console.log(letter);

// for (let i = 0; i < text.length; i++) {
//     console.log(text.charCodeAt(i));
// }

let text1 = "Welcome to";
let text2 = "the C4.";
let text3 = text1.concat(" ", text2);


let text4 = "Apple, Banana, Kiwi";
// let part = text4.slice(-12, -6);

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13)
// console.log(part);

let text5 = "Wayne's world";
let result = text5.isWellFormed();

let text6 = "Wayne's World \uD800";
result = text6.isWellFormed();

let text7 = "Code \uD800";
result = text7.toWellFormed();
// console.log(result);

let text8 = "       Hello ID.!         ";
// console.log(text8.trim());
// console.log(text8.trimEnd())

let text9 = "5";
let padded = text9.padStart(4, "0");
// console.log(padded)

let text10 = "5";
let padded2 = text10.padEnd(4,"0");
// console.log(padded2);

text = "Hello world! ";
result = text.repeat(2);
// console.log(result);

text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

text = text.replaceAll("Microsoft","T.R.A.P");
text = text.replaceAll(/and/g,"dogs");
// console.log(text.split());

text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
index = text.lastIndexOf('located');
// console.log(text.search(/locate/g));

text = "The rain in SPAIN stays mainly in the plain";
let iterator = text.matchAll("ain");
// console.log(iterator);
// console.log(text.match(/ain/gi));

text = "Hello world, welcome to the universe.";
// console.log(text.includes("world"));
// console.log(text.includes("world", 12/2));

console.log(text.startsWith("world", 6));
console.log(text.endsWith("world", 11));