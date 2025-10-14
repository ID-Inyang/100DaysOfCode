// let x = 6;
// let y = 3;
// console.log((x < 10 && y > 1), (x < 10 || y > 1), !(x === y));

// --------------JAVASCRIPT LOOPS-------------
// let text = 'ID. You the greatest in the world and you should know it';
// let texts = text.split(' ');
// console.log(texts);

// let fullText = texts.join(' ');

// for (let i = 0; i < texts.length; i++) {
//     console.log(texts[i]);
//     fullText += texts[i] + ' ';
// }

// console.log(fullText);



// while(i > 0){
//     text += "\nThe number is " + i;
//     console.log(text);
//     i--;
// }

// console.log(text);

//-------- DO WHILE LOOP ---------
// let i = 0;
// let message = '';
// do {
//     message += "\nThe number is ..." + i;
//     i++;
//     // console.log(message);
// }
// while (i < 10)

// const cars = ["","BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let text = "";
// let i = 0;
// for (; i < 10; ) {
//     text += cars[i] + " ";
//     i++
//     console.log(text);
// }

// let i = 0;
// let text = "";

// for (;cars[i];){
//     text += cars[i] + " ";
//     console.log(text);
//     i++;
// }


// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i + "...The 17 Inc.\n"
// }
// console.log(text)

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        break;
}

// console.log(day);

let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//     console.log("\nj: " + j);
//     loop2: for (let i = 1; i < 5; i++) {
//         if (i === 3) { break loop2; }
//         text += i;
//         console.log("i: " + i);
//     }
// }

let x = "John";
let y = new String("John");

console.log(x == y);
console.log("...");
console.log(x === y);