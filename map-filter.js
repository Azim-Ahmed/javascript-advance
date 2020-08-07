//1st type

// const numbers = [12, 3, 4, 5, 4, 3];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// 2nd type

// const numbers = [12, 3, 4, 5, 4, 3];

// const result = numbers.map( x => x * x);
// console.log(result);

// 3rd type


// const numbers = [12, 3, 4, 5, 4, 3];
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

// 4th type 

const numbers = [12, 3, 4, 5, 4, 3];
const results = numbers.map(result);
function result(element){
    return element * element
}
console.log(results);

