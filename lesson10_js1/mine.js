var a;
a = 1500;//number
var b = '1500';//string
let c = false;//bulean > < >= <= == ...

//Константа
const user = {
    name: 'serj',
    age: 33,
    status: true
};

//Масив
let wallet = [100, 200, 200, 200, 500, 200, 1000];
console.log(a);
console.log(b);
console.log(wallet);
console.log(wallet[5]);
console.log(user);
console.log(user.name);
console.log(user['name']);

// document.write('jhgjkhgjh'+'<br>');
// // document.write(<a href="">kuu</a>);
// document.write(a+'<br>');
// document.write(b);

// alert(a);


let title = 'helo okten';
document.write('<h1>' + title + '</h1>');
document.write(`<h1>${title}</h1>`);


let useres = [
    {username: 'vasya', password: '1234'},
    {username: 'petya', password: 'qwerty'},
    {username: 'kokos', password: '1111'}
];
console.log(useres);
console.log(useres[0]);
console.log(useres[0].password);
console.log(useres[0]['password']);

console.log(useres[2].username);
console.log(useres[2].password);
document.write(useres[2].username);
document.write(useres[2].password);

let x;
console.log(x);

let car = null;
console.log(car);

console.log(10 + 20);
console.log(14 % 5);//4 - остача
let a1 = 10;
let a2 = 100;
let reslt = a1 + a2;
console.log(reslt);

console.log('asdasd' / []);

console.log(10 + 20 + '!');
console.log('!' + 10 + 20);

let foo = 5 > 6;
console.log(foo);

let foo1 = 5 != 6;
console.log(foo1);

console.log(!(5 === 6));

console.log(!true);
console.log(!false);
console.log('-----');

console.log(true && false);//и
console.log(true || false);//или

// let myAge = +prompt('what is your age?');
// // parseInt() или +prompt, а не prompt
// console.log(+('123'));
// // parseFloat()
// if (myAge >= 18) {
//     document.write('dev hub');
// } else {
//     document.write('multiki');
// }

// console.log(typeof )


// let color = prompt('color?');
//
// if (color === 'red') {
//     console.log('stop');
// } else if (color === 'yellow') {
// } else if (color === 'green') {
// } else {
// }
//
// switch (color) {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'green':
//         break;
//     default:
//
// }


console.log('---------');
console.log(!!'hello');
console.log(!!100);
console.log(!!-100);
console.log(!!' ');

console.log(!!0);
console.log(!!'');
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);

let userAge = +prompt('?');
if (userAge) {

}else {

}