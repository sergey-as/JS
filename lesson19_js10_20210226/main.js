
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

function getObject(){
    // console.log(('dsjfjsd'));
    let inputs = document.getElementsByTagName('input');
    // for (const input of inputs) {
    //     console.log(input);
    //     console.log(input.value);
    // }

    let textAreaEleet = document.getElementsByTagName('textarea')[0].value;
    let name = inputs[0].value;
    let age = inputs[1].value;
    let user = {name, age, msg: textAreaEleet};
    console.log(user);
}

let target = document.getElementById('target');
// target.onclick = function (){};
target.onclick = getObject ();