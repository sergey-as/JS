//JSON
// let user = {name:'vasya', age: 23, status: false};
// let user = {'name':'vasya', 'age': 23, 'status': false};
// let user = '{"name":"vasya", "age": 23, "wife": {"name":"anya", "age": 123}}';

let user = {name: 'vasya', age: 23, asd: undefined, wife: {name: 'anya', age: 123}};
let jsonUser = JSON.stringify(user);
console.log(user);
console.log(jsonUser);
let clearUser = JSON.parse(jsonUser);
console.log(clearUser);

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(responce => responce.json()) //json -> obj js
//     .then(photos => {
//         for (let i = 0; i < 20; i++) {
//             const photo = photos[i];
//             document.write(
//                 `<div class="photo-item">
//                 <h2>${photo.id} ${photo.title}</h2>
//                 <img src="${photo.url}" alt"">
//                 </div>`
//             );
//         }
//     });

// const baseURL = "https://api.sampleapis.com/futurama/characters";
// fetch(baseURL)
//     .then(resp => resp.json())
//     // .then(characters => console.log(characters));
//     .then(characters => {
//         for (const character of characters) {
//             document.write(`
//                 <div>
//                     <h3>${character.name.first} ${character.name.middle} ${character.name.last}</h3>
//                     <p>${character.gender} ${character.species}</p>
//                     <img src="${character.images.main}" alt="">
//                 </div>
//             `);
//         }
//     });

const baseURL = "https://api.sampleapis.com/futurama/characters";
fetch(baseURL)
    .then(resp => resp.json())
    .then(characters => {
        let jsonCharacters = JSON.stringify(characters);
        console.log(jsonCharacters);
        let objCharacters = JSON.parse(jsonCharacters);
        console.log(objCharacters);
    });
