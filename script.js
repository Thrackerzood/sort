//freeCodeCamp algorithms

// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

const sym = (...args) => [...new Set(args.reduce(diff))]

const diff = (arg1, arg2) => [
   ...arg1.filter(e => !arg2.includes(e)),
   ...arg2.filter(e => !arg1.includes(e))
]

console.log(sym([1,2,3],[5,2,1,4]))


//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

function pairwise(arr, arg) {
   let pairIndices = [];
   for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] + arr[j] == arg
           && !pairIndices.includes(i)
           && !pairIndices.includes(j)) {
         pairIndices.push(i, j);
         break;
       }
     }
   }
   return pairIndices.reduce((sum, curr) => sum + curr, 0);
 }
 console.log(pairwise([1,4,2,3,0,5], 7))

//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort

function bubbleSort(array) {
   for(let i = 0; i<array.length; i++){
     for(let j = 0; j<array.length;j++){
       if(array[j+1] < array[j]){
         let npm = array[j]
         array[j] = array[j+1]
         array[j+1] = npm
       }
     }
   }
   return array;
 }
 
 console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

function selectionSort1(array) {
   for(let i = 0; i<array.length;i++){
     let min = i
     for(let j = i+1; j<array.length;j++){
       if(array[j] < array[min]){
         min = j
       }
     }
     let tmp = array[i]
     array[i] = array[min]
     array[min] = tmp
   }
   return array;
 }
 
 console.log(selectionSort1([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

 function swap(a,b,array){
    let tmp = array[a]
    array[a] = array[b]
    array[b] = tmp
 }

 function selectionSort2(array) {
   for (let i = 0; i < array.length - 1; i++) {
     let min = i;
     for (let j = i + 1; j < array.length; j++) {
       if (array[min] > array[j]) min = j;
     }
     swap(i,min,array)
   }
   return array;
 }
 
 console.log(selectionSort2([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

function swaps(array){
   array.push(54,3,5,6,3,1,4)
}

 function information(array){
   swaps(array)
   return array
 }

 console.log(information([1,2,3,4,5]))

 //https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

function insertionSort(array) {
   for (let i = 1; i < array.length; i++) {
     let curr = array[i];
     for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
       array[j + 1] = array[j];
     }
     array[j + 1] = curr;
   }
   return array;
}
 
 insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

 