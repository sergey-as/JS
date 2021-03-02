// let url = new URL(location.href);
// console.log(url);
// let data = url.searchParams.get('data');
// console.log(data);
// let user = JSON.parse(data);
// console.log(user);
//
// let div = document.createElement('div');
// div.innerText = `user ${user.id} ${user.name}`;
// document.body.appendChild(div);

let url = new URL(location.href);
let id = url.searchParams.get('id');
console.log(id);

fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(responce => { return responce.json();})
    .then(user => {
        console.log(user);
let div = document.createElement('div');
div.innerText = `user ${user.id} ${user.name}`;
document.body.appendChild(div);
    });
