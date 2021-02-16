function pdvCalc(salary) {
    let result = salary * 0.15;
    // console.log(result);
    return result;
}

pdvCalc(100000);
pdvCalc(200000);
pdvCalc(15000);
pdvCalc(5000);

let res1 = pdvCalc(100000); //salary
console.log(res1);
let res2 = pdvCalc(res1);
console.log(res2);


function createDomElement(tag, txt) {
    let element = document.createElement(tag);
    element.innerText = txt;
    document.body.appendChild(element);
}

createDomElement('h1', 'okten');
createDomElement('p', 'lorem ipsum');

let str = 'hello okten';
let toUpperCaseStr = str.toUpperCase();
console.log(toUpperCaseStr);

createDomElement('h2', toUpperCaseStr);
console.log(str.length);
let replaceAllStr = str.replaceAll('l', '!');
console.log(replaceAllStr);

let pn1 = '067-123-12-12';
let cleanPn1 = pn1.replaceAll('-', '');
console.log(cleanPn1);

let splitePhone = pn1.split('-');
console.log(splitePhone);

// <!--         // scope -->
// let a = 100500;
//
//...

function outer(number) {
    let res = pdvCalc(number);
    console.log(res);
}

outer(100000);

function outer1(x, y) {
    function calc(a, b) {
        let res = a + b;
        console.log(res);
        return res;
    }
}

outer1(10, 20);
console.log(outer1(10, 20));


// hoisting

console.log(xxx);

function xxx() {
    return 100;
}

// function expression
{
    let foo = function () {
        console.log('this is foo function');
    }
    foo();
}

// arrow
// let foo = () => {console.log('this is foo function')};
let foo = () => console.log('this is foo function');
foo();

// let calculator = (a, b) => console.log(a + b);
// calculator(100,200);

// let calculator = (a, b) => {return a + b};
// let calculator = (a, b) => /*return*/ a + b;


//....


let bar = () => console.log('bar bar bar');


// arguments
function calculator1(...x) {
    console.log(x);
    let counter = 0;
    for (const number of x) {
        counter += number;
    }
    return counter;
}

console.log(calculator1(10, 20, 30, 40));

function calculator2() {
    console.log(arguments);
    let counter = 0;
    for (const argument of arguments) {
        counter += argument;
    }
    return counter;
}

console.log(calculator2(10, 20, 30, 40));

//   selfinvoke
// <button onClick="(function() {console.log('jhgsdjasdgjkfgakjgdfjk');})()"> press me</button>


//   recursion

function increment(start) {
    start++;
    if (start > 10) {
        return
    } else {
        console.log(start);
    }
    increment(start);
}

increment(0);


console.log(!function asd(){});