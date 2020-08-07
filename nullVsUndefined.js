//1$$$
 let Pakhi;
console.log(pakhi);

//2nd reason

function add(num1 , num2){
    console.log(num1 + num2);

}
const result = add( 12, 33);
console.log(result);


//3$$$$$ if you dont pass any parameter , they are getting undefined.

function add(num1 , num2){
    console.log( num1, num2);
}
//this function out put getting 2 undefined bacause 1st is not getting parameter , 2nd is not returning result
const result = add( 12);
console.log(result);

// 4th part is for undefined if the object not finded in variable , then , it will show undefined

 const premik = { name: "azim Ahmed " , phone: 2563217856, house: "ranking street wari"}
 console.log(premik.gf);

let fun = undefined; //// usually not uses for recommended
console.log(fun);

//5th reason why shows undefined
let ages = [23, 323, 334]
console.log(ages[4]);
