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

// console.log('start');
// setInterval(() =>console.log('interval'),1000);
// console.log('end');

// let x = [];
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(responce => {
//         return responce.json();
//     })
//     .then(users => {
//         // console.log(users)
//         x = users;
//     });
//
// setTimeout(() => console.log(x), 2000);


// let target = document.getElementById('target');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(responce => { return responce.json();})
//     .then(users => {
//         for (let user of users) {
//             let p = document.createElement('p');
//             p.innerText = user.id + ' ' + user.name + ' - ';
//             p.style.background = 'silver';
//             target.appendChild(p);
//             let a = document.createElement('a');
//             a.innerText = 'details';
//             // a.href = `userDatails.html?id=${user.id}`;
//             a.href = `userDatails.html?data=${JSON.stringify(user)}`;
//             p.appendChild(a);
//
//         }
//     });


let target = document.getElementById('target');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => { return responce.json();})
    .then(users => {
        for (let user of users) {
            let p = document.createElement('p');
            p.innerText = user.id + ' ' + user.name + ' - ';
            p.style.background = 'silver';
            target.appendChild(p);
            let a = document.createElement('a');
            a.innerText = 'details';
            // a.href = `userDatails.html?id=${user.id}`;
            a.href = `userDatails.html?id=${user.id}`;
            p.appendChild(a);

        }
    });
