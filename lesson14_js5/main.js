// objects
// embedded objects
// for in
// Object.keys
// Object ref object
// array of objects
// JSON
// get elem by id
// style
// innerText
// classlist.add()
// get elements by tag name
// get elements by class name
// for of by elements
// document.createElement
// element.openChild
// loop + appendchild


// // objects
// // embedded objects
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
// console.log(user.wife);
// console.log(user.wife.parents[0].age);//56
//
// // for in  //itin
// let userKeys = [];
// for (const userKey in user) { // itin
//     console.log(userKey);
//     userKeys.push(userKey);
// }
// console.log(userKeys);
//
// // Object.keys
// let keys = Object.keys(user);
// console.log(keys);

// // Object ref object
// let userClone = user;
// console.log(user);
// userClone.state = 'asdqwe';
// console.log(user);
// user.popo = 'lolo';
// console.log(user);
//
// console.log('okten'[3]);
//
// let a = 0;
// let b = a;
// b += 10;
// console.log(a);

// // array of objects
// let str1 = 'okten';
// let str2 = str1;
// str2 += '!';
// console.log(str1, str2);

// // JSON
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let data = JSON.stringify(users);
// console.log(data);
// let result = JSON.parse(data);
// console.log(result);

// // get elem by id
// //   index.html
// //DOM - Document Object Model - об’єктна модель документа
// //   <div class="point"> okten</div>
// //   <div> hello world</div>
// //   <p id="target" class="point">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, neque!</p>
// console.log(document);
// let p = document.getElementById('target'); // 1
// console.log(p);
//
// // get elements by tag name
// let plist = document.getElementsByTagName('p');
// console.log(plist);
// console.log(plist[0]);
// console.log(plist[1]);
//
// // get elements by class name
// let points = document.getElementsByClassName('point');
// console.log(points);
// // for of by elements
// for (const point of points) {
//     console.log(point);
// }
//
// // innerText
// // style
// let p = document.getElementById('target'); // 1
// p.innerText = '892371468 92354sd hbf';
// p.style.background = 'silver';
// p.style.marginTop = '100px';
// p.innerText = '<b>892371468 92354sd hbf</b>';//not work
// p.innerHTML = '<b>892371468 92354sd hbf</b>';
//
// let points = document.getElementsByClassName('point');
// for (const point of points) {
//     // console.log(point);
//     if (point.innerText.length > 5) {
//         point.style.background = 'tomato';
//     } else {
//         point.style.background = 'silver';
//     }
// }
//
// // classlist.add()
// let p = document.getElementById('target'); // 1
// console.log(p.classList);
// p.classList.add('new-class');
// p.classList.add('new-class2');
// p.classList.add('new-class3');
// p.classList.remove('point');

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'jhasdfgjsg'
    },
    {
        title: 'juice',
        price: 30,
        image: 'usydyat'
    },
    {
        title: 'tomato',
        price: 10,
        image: 'xc;zkjc'
    },
    {
        title: 'tea',
        price: 45,
        image: 'rsrdrds'
    },
];

// // document.createElement
// let div = document.createElement('div');
//
// // element.appendChild
// // document.head.appendChild(div);
// div.innerText = 'liuy; lkj ewaew';
// div.style.background = 'silver';
// document.body.appendChild(div);
//
// // loop + appendChild
// for (const product of products) {
//     let item = document.createElement('div');
//     item.innerText = `${product.title} ${product.price}`;
//     document.body.appendChild(item);
// }

for (const product of products) {
    let container = document.createElement('div');
    container.classList.add('item');

    let title_price = document.createElement('h2');
    title_price.innerText = `${product.title} ${product.price}`;
    container.appendChild(title_price);

    let img = document.createElement('img');
    // img.src = product.image;
    img.src = "./img/orange.jpg";
    img.alt = `${product.title}`;
    img.classList.add('picture');
    container.appendChild(img);

    document.body.appendChild(container);
}