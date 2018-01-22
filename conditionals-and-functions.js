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

/*
let storeA = 3.10;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);
*/

/* An if block is a control statement. The conditional helps us get more out of our code. An if block is a control statement. It is a block of code that allows us to control the flow through our program. We can use the if statement with an ifelse statement to create an if - elseif conditional. Additionally, we can also make an if, elseif, else statement that will provide an either a or b or neither.
 */
/*
let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
if (storeAIsLower) {
	console.log("Store A has a lower price.");
}	else if (storeB < storeA) {
	console.log("Store B has a lower price.");
}
else {
	console.log("The price at Store A is the same price as Store B");
}
*/

/* A conditional is good if you only need to use the if, elseif, if statement once. If you need to use the conditional code in several places in your code or in code across several files we should use functions. Functions are a way to encapsulate our code in a way that is reuseable. It is similar to an if block but it is named. Imagine functions like variables that contain code. Functions have two main features which are parameters and the code they execute. Parameters allow us to pass variables into our code, we need this in order to do scope. Passing parameters also lets us know wherre the parameters are comming from. In order to run a function, we need to call it by its name followed by paranthesis. Inside the paranthesis we pass the value. The values are in order. When we call it the value order will be assigned to the variable in sequential order. We can call the code multiple times. In this example we add additional compareStorePrices to call the function multiple times.
 */
/*
function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.");
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.");
	} else {
		console.log("The price at Store A is the same price as Store B");
	}
}

compareStorePrices(10,5);
compareStorePrices(5,10);
compareStorePrices(10,10);
*/

/* Functions can also give us values. To have a function give us a value we need a return statement stop at 1240
*/

/*
function squareNum (number) {
	return number * number;
}

let squaredNumber = squareNum(7);
console.log (squaredNumber);
*/
/* JavaScript has three leveles of scope. Global, function, and block

 */
/*
let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if (1===1) {
		let b=8
	}
	console.log(b);
	return n+m;
}
 */
/*
let ourArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ['a', 'b', 'c']];

let newArr = ourArray[10];
console.log(ourArray);
console.log(ourArray[9]);
console.log(newArr[1]);
 */

/* There are three elements of for loops (counter, comparison, and incrementer)
 */

/*
let ourArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ['a', 'b', 'c']];
	let arrLen = ourArray.length;
	for(let i = 0; i<arrLen; i++) {
//	for(let i = 0; i<ourArray.length; i++) {
// for(let i = 3; i<9; i++) {
		console.log(ourArray[i]);
		for(let j = 0; j < 10; j++) {
//	console.log("i is equal to: " +i);
			console.log('j is equal to: ' + j);
		}
	}
	*/
let x = 0;
while (x<10) {
	console.log('ran');
	x = x +1;
}