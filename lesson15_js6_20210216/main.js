// functions
// functions return
// string functions
// scope
// func with func
// hoisting
// func expression
// arrow
// ref in function
// arguments
// recursion
// selfinvoke
// local function

// functions
// functions return
console.log('====functions=====');
console.log('====functions return=====');
createDomElement('div', '====functions=====');
createDomElement('div', '====functions return=====');

// console.log('oktn');
// console.log('oktn2');
// console.log('oktn3');

// function foobar() {
//     console.log('oktn');
//     console.log('oktn2');
//     console.log('oktn3');
// }
// foobar();
// console.log('some stuff');
// console.log('some stuff2');
// foobar();

function pdvCalc(salary = 200000) {
    // let salary = 100000;
    let result = salary * 0.15;
    // console.log(result);
    return result;
}

// pdvCalc();
// pdvCalc(100000);
// pdvCalc(200000);
// pdvCalc(15000);
// pdvCalc(5000);

let res1 = pdvCalc(100000); //15000
console.log(res1);
let res2 = pdvCalc(res1);
console.log(res2);

// let res3 = pdvCalc(pdvCalc(100000));
// console.log(res3);

function createDomElement(tag, txt) {
    let element = document.createElement(tag);
    element.innerText = txt;
    document.body.appendChild(element);
}

createDomElement('h1', 'okten');
createDomElement('p', 'lorem ipsum');

// string functions
console.log('====string functions=====');
createDomElement('div', '====string functions=====');

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

let splitePhone = pn1.split('-'); // ["067", "123", "12", "12"]
console.log(splitePhone);


// scope
console.log('====scope=====');
createDomElement('div', '====scope=====');

let a = 100500;

function scopeFunc() {
    let b = 100500;
    a++;
}

console.log(a);
// console.log(b); // error

// func with func
console.log('====func with func=====');
createDomElement('div', '====func with func=====');

// Example 1
{
    function outer(number) {
        let res = pdvCalc(number);
        console.log(res);
    }

    outer(100000);
}

// Example 2
{
    function outer(x, y) {
        function calc(a, b) {
            return a + b;
        }

        let res = calc(x, y);
        console.log(res);
        return res;
    }

    // console.log(outer(10, 20));
    outer(10, 20);
}


// hoisting - всплытие
console.log('====hoisting=====');
createDomElement('div', '====hoisting=====');

console.log(xxx());

function xxx() {
    return 100;
}


// function expression
console.log('====function expression=====');
createDomElement('div', '====function expression=====');
{
    // foo(); // error
    let foo = function () {
        console.log('this is foo function');
    }
    foo();
}


// arrow
console.log('====arrow=====');
createDomElement('div', '====arrow=====');
{
    // foo(); // error

    // let foo = () => {console.log('this is foo function too')};
    let foo = () => console.log('this is foo function too');
    foo();

    let calculator1 = (a, b) => console.log(a + b);
    calculator1(100, 200);//300

    let calculator2 = (a, b) => {
        return a + b
    };
    console.log(calculator2(100, 250));//350

    let calculator3 = (a, b) => /*return*/ a + b;
    console.log(calculator3(150, 250));//400

    let calculator4 = (a, b) => {
        let result = a + b;
        console.log(result);//450
        // return result;
        return {one: a, two: b};
    }
    console.log(calculator4(150, 300));//450
}

// ref in function
console.log('====ref in function=====');
createDomElement('div', '====ref in function=====');

let bar = () => console.log('bar bar bar');
console.log(bar()); // undefined, нет return
console.log(bar); // () => console.log('bar bar bar')


// arguments
console.log('====arguments=====');
createDomElement('div', '====arguments=====');
{
    function calculator(...x) { //rest argument - array[]
        console.log(x); // [10, 20, 30, 40]
        let counter = 0;
        for (const number of x) {
            counter += number;
        }
        return counter;
    }

    console.log(calculator(10, 20, 30, 40));
}

{
    function calculator() {
        console.log(arguments); // Arguments(4)[10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
        let counter = 0;
        for (const argument of arguments) {
            counter += argument;
        }
        return counter;
    }

    console.log(calculator(10, 20, 30));
}


// selfinvoke
console.log('====selfinvoke=====');
createDomElement('div', '====selfinvoke=====');

// exempl 1
// <button onClick="respect()">press me to pay respect</button>
    function respect() {
    console.log('press me to pay respect :)');
}

// exempl 2
// in index.html
// <button onClick="(function() {console.log('press me to pay respect too :)');})()">press me to pay respect too</button>

// recursion
console.log('====recursion=====');
createDomElement('div', '====recursion=====');
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


//
console.log(!function asd() {
});