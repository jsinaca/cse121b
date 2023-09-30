/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let addNum1 = parseInt(document.getElementById('add1').value);
    let addNum2 = parseInt(document.getElementById('add2').value);
    document.getElementById('sum').value = add(addNum1, addNum2);
}
document.getElementById('addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
let substract = function  (number1, number2) {
    return number1 - number2;
};
let substractNumbers = function  () {
    let subNum1 = parseInt(document.getElementById('subtract1').value);
    let subNum2 = parseInt(document.getElementById('subtract2').value);
    document.getElementById('difference').value = substract(subNum1, subNum2);
}
document.getElementById('subtractNumbers').addEventListener('click',substractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let mulNum1 = parseInt(document.getElementById('factor1').value);
    let mulNum2 = parseInt(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(mulNum1, mulNum2);
}
document.getElementById('multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1/number2;

const divideNumbers = () => {
    let mulNum1 = parseInt(document.getElementById('dividend').value);
    let mulNum2 = parseInt(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(mulNum1, mulNum2);
}
document.getElementById('divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
let dat = new Date();
let yr = dat.getFullYear();
// let yr = 1993;
document.getElementById('year').innerHTML = yr

/* ARRAY METHODS - Functional Programming */
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById('array').innerHTML = numbers;
/* Output Odds Only Array */
const odd = numbers.filter((number) => {return number%2 === 1} );
document.getElementById('odds').innerHTML = odd;

/* Output Evens Only Array */
const even = numbers.filter((number) => {return number%2 === 0} );
document.getElementById('evens').innerHTML = even;

/* Output Sum of Org. Array */
const sum = numbers.reduce((initial, total) => initial + total);
document.getElementById('sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
const multByTwo = numbers.map((num) => num*2);
document.getElementById('multiplied').innerHTML = multByTwo;

/* Output Sum of Multiplied by 2 Array */
const sumByTwo = multByTwo.reduce((initial, total) => initial + total);
document.getElementById('sumOfMultiplied').innerHTML = sumByTwo;
