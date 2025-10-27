// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["oranges", 200]
// ]);

// for (const x of fruits.keys()) {
//     // console.log(x);
// }

const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);

console.log(result);