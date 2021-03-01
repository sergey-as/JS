// Siblings
// type node element ....
// events


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users
//     .filter(value => value.status)
//     .sort((a,b) =>a.age-b.age)
//     .forEach(value => {
//     let div = document.createElement('div');
//     div.innerText = JSON.stringify(value);
//     document.body.appendChild(div);
// });

// Array.prototype.customForEach = function (callback  ){
//     for (const element of this) {
//         callback(element);
//     }
// };
// users.customForEach((x)=>console.log(x));
// users.customForEach((x)=>x.asd = 'asdfgt');
// users.customForEach((x)=>console.log(x));

//*1*/
let inputs = document.getElementsByTagName('input');

let target = document.getElementById('target');

//
// // target.onclick = function (){};
// // target.onclick = function () {
// //     // console.log(('dsjfjsd'));
// //     let inputs = document.getElementsByTagName('input');
// //     let name = inputs[0].value;
// //     let age = inputs[1].value;
// //     // for (const input of inputs) {
// //     //     console.log(input);
// //     //     console.log(input.value);
// //     // }
// //
// //     let textAreaElement = document.getElementsByTagName('textarea')[0].value;
// //     let user = {name, age, msg: textAreaElement};
// //     console.log(user);
// // }
// //
// // target.onclick = function () {
// //     console.log(('hello'));
// // }
//
// target.addEventListener('click', function () {
//     // console.log(('dsjfjsd'));
//     let name = inputs[0].value;
//     let age = inputs[1].value;
//     // for (const input of inputs) {
//     //     console.log(input);
//     //     console.log(input.value);
//     // }
//
//     let textAreaElement = document.getElementsByTagName('textarea')[0].value;
//     let user = {name, age, msg: textAreaElement};
//     console.log(user);
// });
//
// target.addEventListener('click', () => console.log('hallo'));
//
// for (const input of inputs) {
//     input.addEventListener('mouseover', () => {
//         input.style.background = 'silver';
//     });
//
//     input.addEventListener('mouseleave', () => {
//         input.style.background = 'white';
//     });
// }

//*2*/
let box = document.getElementById('box');
// box.addEventListener();
box.onmousemove = function (e) {
    // console.log('.');
    // console.log(e);

    // console.log(e.x, e.y);
    this.style.background = `rgb(${e.x},${e.y},${e.x})`;
};

// // document.onmousemove = function (e){
// //     console.log(e.target);
// // };
//
// let clientMap = [];
// document.onclick = function (e){
//     console.log(e.target);
//     clientMap.push({coords:{x:e.x, y: e.y},target:e.target});
// };
//
// document.ondblclick = function (){
//     console.log(clientMap);
// };

box.onclick = (e) => {
    let height = +getComputedStyle(box).height.replace('px', '');// 200px
    // console.log(height);
    box.style.height = height / 2 + 'px';
    // box.style.transition = 300+'ms';
};

// let getComputedStyleBox = getComputedStyle(box);
// console.log(getComputedStyleBox.height);

inputs[0].oninput = function () {
    // console.log(this.value);
    box.innerText = this.value;
};

function renderArray(arr, where) {
    for (const arrElement of arr) {
        let div = document.createElement('div');
        div.innerText = JSON.stringify(arrElement);
        where.appendChild(div);
    }
};

let x = document.getElementById('x');
x.onclick = function () {
    // console.log(x.checked);
    if (x.checked) {
        let target1 = document.getElementById('target1');
        renderArray(users, target1);
    }else{
        target1.innerText = '';
    }
};


