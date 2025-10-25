const myArr = new Uint32Array(10);
// console.log(myArr);

const myArr2 = new Uint8ClampedArray(10);
// console.log(myArr2);

const myArr3 = Int16Array.from("1234567890");
// console.log(myArr3);

// console.log(myArr3.constructor.name);
// console.log(myArr.BYTES_PER_ELEMENT);

myArr.fill(387);
console.log(myArr);

const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.values();