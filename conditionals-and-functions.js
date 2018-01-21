/*
Conditionals, Functions, Scope, and Loops
 */

/*
 Often times in the real word and in coding we like to compare things. Conditionals are a piece of code that evaluate the true or false using the boolean we can use these to help us build complex pieces of logic or to ensure a piece of code only executes on a condition. There are several types of conditionals we can use in our code. Equals which ensure two values are the same, greater than which ensures one value is larger than another, less than which ensures one value is smaller than another, greater than or equal which ensures one value is greater than or equal to a second value, smaller than or equal which ensures one value in smaller that or equal to a second value, and not equals. See below for examples. Note how in the equal example there are three equal symbols (===) this forces the JavaScript, a weakly typed language, to ensure the comparison operation is the same type without conversion for both elements in the conditional. Two equal signs  (==) will tell the conditional to ignore the type
 */

/*
// Equals
let equals = 1 === 1;
*/

/*
// Greater Than
let greaterthan = 5 > 1;
*/

/*
//Less Than
let lessthan = 2 < 10;
*/

/*
//Greater Than or Equal
let greaterThanEq = 5 >= 5;
*/

/*
//Less Than or Equal
let lessThanEq = 4 <= 9;
*/

/*
//Not Equals
let notEquals = 5 !== 2;
*/


let storeA = 3.10;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);
