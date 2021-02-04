// // let str = 'STRING';
// // let num = -0.23;
// // let bool = false;
// //
// // let undef = undefined;
// // let nul = null;
// //
// // let obj = {};
// // let symb = Symbol('d');
// // let bInt = BigInt(999999999999999999999999999999999999999999999);
// //
// // console.log(bInt);
//
// //
// let cars = ['Volvo', 'Merc', 'Zaz', 'Lanos', false, 889900, [[[8, 9, 'Hello']]]];
// // console.log(cars);
// // console.log(cars[0], cars[2], cars[5], cars[99999999]);
// // console.log(cars[6][0][0][2]);
//
// // cars[2] = 'Ymaha faser';
// // cars[99] = 'Chevy';
// // cars[6][0][0] = 'TEST';
// // console.log(cars);
//
// // cars[7] = 'HELLO';
// // cars[8] = '22';
//
// // cars.push('DEC_2020');//end
// // cars.push('DEC_2021');
// // cars.push('DEC_2022');
// //
// // cars.unshift(99);//start
// // cars.unshift(98);
// // cars.unshift(97);
// //
// // cars.pop();//del last
// // cars.pop();
// // let delLastElem = cars.pop();//del last
// // let delFirstElem = cars.shift();//del first
// //
// // console.log(delLastElem);
// // console.log(delFirstElem);
// // console.log(cars);
//
// // console.log(cars.length);
//
let user = {
    name: 'Viktor',
    age: 25,
    studenst: ['Dima', 'Val', 'Vova'],
    job: {
        tittle: 'Middle',
        comoany: 'Inocsoft'
    }
}

//
// // user.age = 22;
// // user.laptop = 'Dell';
// // user.job.tittle = 'Junior';
// //
// // // delete user.studenst;//видалити поле об’єкта
// // user.studenst.pop();
// //
// // console.log(user.studenst);
// // console.log(user.age);
// // console.log(user);
//
// // let keys = Object.keys(user);
// // let values = Object.values(user);
// // let entries = Object.entries(user);
// //
// // console.log(keys);
// // console.log(values);
// // console.log(entries);
// // console.log(Object.keys(user.job));
//
// // let names = ['Dima', 'Ira', 'Olga'];
// // document.write(`Привіт ${names[0]}`)
// // document.write(`Привіт ${names[1]}`)
// // document.write(`Привіт ${names[2]}`)
//
// // let names = ['Dima', 'Ira', 'Olga', 'Ivan', 'Katya', 'Oleg', 'Viktor'];
// // // let names = ['Dima', 'Ira', 'Olga'];
//
// // for (let i = 0; i < 3; i++) {
// // }or (let i = 0; i < names.length; i++) {
// //     // document.write(`Привіт ${names[i]}`);
// //     // document.write(`Привіт ${names[i]}<hr>`);
// //     document.write(names[i]);
// //     document.write('<hr>');
// //     console.log(i);
// // }
//
// // for (let name of names) {
// //     document.write(name);
// //     document.write('<hr>');
// // }
// // //itar
// // for (let i = 0; i < names.length; i++) {
// //     const name = names[i];
// //
// // }
// // //iter
// // for (const name of names) {
// //
// // }
//
// // let i = 0;
// // while (i < names.length){
// //     document.write(names[i]);
// //     document.write('<hr>');
// //     console.log(i);
// //     i++;
// // }
//
// // //itin
// // for (const key in user) {//єдиний цикл, що вміє працювати з об’єктами
// //     console.log(key);
// // }
// // //те саме, що попереднє, але довше більше гірше...
// // let string = Object.keys(user);
// // for (const string1 of string) {
// //     console.log(string1);
// // }
//
// // for (let i = 0; i < 10; i++) {
// //     for (let j = 0; j < 15; j++) {
// //         for (let k = 0; k < 25; k++) {
// //             console.log(k);
// //         }
// //     }
// // }
//
// // for (let i = 0; i < 10; i++) {
// //     if (i === 2 || i === 5){
// //         continue;
// //     }else if (i === 9){
// //         break;
// //     }
// //     console.log(i);
// // }

let keysToShow = ['age', 'name', 'car'];
// console.log(user.age);
// console.log(user.name);

for (const key of keysToShow) {
    console.log(key);
    console.log(user[key]);
    console.log('--------------');
}
