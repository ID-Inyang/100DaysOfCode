let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
 "television"], false);
 addEntry(["work", "ice cream", "cauliflower", "lasagna",
 "touched tree", "brushed teeth"], false);
 addEntry(["weekend", "cycling", "break", "peanuts",
 "beer"], true);

//  console.log(journal);

// for (let entry of journal) {
//  console.log(`${entry.events.length} events.`); 
//     // console.log(entry.events);
//     for (let event of entry.events) {
//         console.log(event);
//     }
// }

let numArr = [5, 10, 15, 20, 25, 30];
// console.log(numArr)
// for (let num of numArr) {
//     console.log(num);
// }

// console.log("       okay       \n   ".trim(), 'ty');
// console.log("Today".padStart(6, "0"))

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(", "));

function b(...nums){
    return nums
}

console.log(Math.max(b(4, 6, 8, 9, 7, 0)))