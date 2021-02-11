// let user = {
//     name: 'vasya',
//     age: 31,
//     wife: {
//         name: 'katya',
//         age: 18,
//         status: true,
//         parents: [
//             {type: 'faser', name: 'oleh', age: 56},
//             {type: 'mother', name: 'anya', age: 55},
//         ]
//     }
// };

// console.log(user.wife.parents[0].age);//56
// let uaerKeys = [];
// for (const userKey of user) {
//     console.log(userKey);
//     userKey.push(userKey);
// }
// console.log(userKey);
//
// //...20:09

// let userClone = user;
// console.log(user);
// userClone.state = 'asdqwe';
// console.log(user);
// user.popo = 'lolo';
// console.log(user);

// let a = 0;
// let b = a;
// b += 10;
// console.log(a);

// let str1 = 'okten';
// let str2 = str1;
// str2 += '!';
// console.log(str1, str2);

// //...20:17
// let users = [
//     {name: 'vasya', age: 31,status: true},
//
// ];

//DOM
// console.log(document);
// let p = document.getElementById('target');//1
// p.innerText = '89237146892354sdhbf';
// p.style.background = 'silver';
// p.style.marginTop = '100px';


// console.log(p);
// let plist = document.getElementsByTagName('p');
// console.log(plist[0]);
// console.log(plist[1]);
//
// let points = document.getElementsByClassName('point');
// // console.log(points);
// for (const point of points) {
//     console.log(point);
// }

// let points = document.getElementsByClassName('point');
// for (const point of points) {
//     if (point.innerText.length >5) {
//         point.style.background = 'tomato';
//     }
// }

// let p = document.getElementById('target');
//
// console.log(p.classList);
// p.classList.add('new-class');
// p.classList.add('new-class2');
// p.classList.add('new-class3');

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'jhasdfgjsg'
    },
    {},
    {},
];
let div = document.createElement('div');
div.innerText = 'sdhgfsjgdf';
//20:40
