// // s = a * b;
// //  10 20
// //  27 12
// //  1  96
//
// function square(a, b) {
//     return a * b;
// }
//
// console.log(square(6, 3.2));
//
// //
// let arr = [];
//
// function fillArrayBynumbers() {
//     arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// }
//
// console.log(arr);
// fillArrayBynumbers();
// console.log(arr);

// //
// let myGlobalObject = {} // []
// let myGlobalArr = [] // []
// let res;
//
// function square(a, b) {
//     let result = a * b;
//     myGlobalObject.result = result;
//     myGlobalObject['result'] = result;
//     myGlobalArr.push(result);
//     res = result;
//     return  result;
// }
//
// console.log(square(10, 20));
// console.log(myGlobalObject);
// console.log(myGlobalArr);
// console.log(res);


// //
// // arguments
// function xxx(a, b, c, d) {
//     console.log(arguments);
// }
//
// function twoArgs(a, b) {
//     return a + b;
//
// }
//
// function threeArgs(a, b, c) {
//     return a - b - c;
// }

// // overload
// function calc() {
//     if (arguments.length === 2) {
//         return twoArgs(arguments[0], arguments[1]);
//     }
//     if (arguments.length === 3) {
//         return threeArgs(arguments[0], arguments[1], arguments[2]);
//     }
// }

// console.log(calc(10, 20));
// console.log(calc(10, 20, 30));
// //
// // // err:
// // let foo = () => {
// //     console.log(arguments);
// // };
// // foo(1,2,3);
//
//
// //
// function bar(...x){
// console.log(x);
// }
// bar(1,2,3,44,5,6);


// //
// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 13,
//     status: true,
//     wife: {status: false}
// };
// // let name = user.name;
// // let id = user.id;
// // let age = user.age;
// // let wife = user.wife;
// // console.log(name, id, age, wife);
// // let {name, id, age, wife: {status}, wife} = user;
// // console.log(name, id, age, status, wife);
// let {name, id, age, status, wife: {status: sts}, wife} = user;
// console.log(name, id, age, status, wife, sts);


//
let user = {name:'vasya', age:123}
let user2 = {...user};