// array clonning and copying methods


const originalArray = [1,2,3,4,5];

let clonedArray1 = originalArray;
clonedArray1.pop()
const copyiedArray = Array.from(originalArray);

copyiedArray.pop()

let copiedArray2 = [...originalArray];
copiedArray2.pop()
console.log(originalArray, copiedArray2)