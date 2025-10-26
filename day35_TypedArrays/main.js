const myArr = new Uint32Array(10);
// console.log(myArr);

const myArr2 = new Uint8ClampedArray(10);
// console.log(myArr2);

const myArr3 = Int16Array.from("1234567890");
// console.log(myArr3);

// console.log(myArr3.constructor.name);
// console.log(myArr.BYTES_PER_ELEMENT);

myArr.fill(387);
// console.log(myArr);

const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.entries();
// console.log(myIterator);

let text = "";

for (const entry of myIterator) {
    // console.log(entry);
    continue;
}

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.intersection(B);

// console.log(C)

//Set
let mySet = new Set();

let myObj = {fname:"ID.", lname:"Inyang"};

mySet.add(myObj);

console.log(mySet);

myObj = null
mySet.add(myObj)

console.log(mySet);