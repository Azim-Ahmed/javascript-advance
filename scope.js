// if we use a variable in function we cannot call from outside a function , we must do call from inside a function,
// if a variable outside a function , we can use a both sides , like inside and outside function


let bonus = 20;


function sum(first1, second2){
    let result = first1 + second2 + bonus;
    if (result > 4) {
        var mood = " happy"
         mood = " angrya"
         console.log(mood);
    }
    return result;
} 
const output = sum(2, 2);
console.log(output);