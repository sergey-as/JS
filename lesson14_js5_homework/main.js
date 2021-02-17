let task;

// 1. создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
task = 1;
console.log('----' + task + '----');

let car = {brand: 'honda', model: 'civic', maxSpeed: 270};
let bear = {kingdom: 'Animalia', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'};
let user = {name: 'Serhii', age: 43, status: true};
let drink = {type: 'alcoholic beverage', place_of_origin: 'Russia', main_ingredients: 'Water_alcohol'};
let cellphone = {manufacturer: 'Nokia', released: '1September2000', discontinued: 2005, sold: '126 million'};
// console.log(car);
// console.log(bear);
// console.log(user);
// console.log(drink);
// console.log(cellphone);

// 2. создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
task = 2;
console.log('----' + task + '----');
let man = {name: 'vasya', age: 40, children: ['misha', 'lena'], wife: {name: 'olya', age: 34}};
let bike = {
    brand: 'ardis',
    color: 'red',
    consists_of: ['handlebar', 'wheels', 'frame', 'pedals'],
    materials: {frame: 'metal', wheels: 'rubber'}
};
let box = {type: 'pakage', colors: ['red', 'green'], dimensions: {width: 15, length: 20, high: 10}};

// 3. При помощи for in вывести все ключи всех объектов из задания 1 и 2
task = 3;
console.log('----' + task + '----');
for (const carKey in car) {
    console.log(carKey);
}
for (const bearKey in bear) {
    console.log(bearKey);
}
for (const userKey in user) {
    console.log(userKey);
}
for (const drinkKey in drink) {
    console.log(drinkKey);
}
for (const cellphoneKey in cellphone) {
    console.log(cellphoneKey);
}
for (const manKey in man) {
    console.log(manKey);
}
for (const bikeKey in bike) {
    console.log(bikeKey);
}
for (const boxKey in box) {
    console.log(boxKey);
}

// 4. При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
task = 4;
console.log('----' + task + '----');
console.log(Object.keys(car));
console.log(Object.keys(bear));
console.log(Object.keys(user));
console.log(Object.keys(drink));
console.log(Object.keys(cellphone));
console.log(Object.keys(man));
console.log(Object.keys(bike));
console.log(Object.keys(box));

// 5. Создать массив из 10 объектов cars и заполнить его машинами
// с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
task = 5;
console.log('----' + task + '----');
let cars = [
    {model: 'civic', year: 1988, power: 75, color: 'red'},
    {model: 'accord', year: 2000, power: 130, color: 'white'},
    {model: 'cr-v', year: 2002, power: 150, color: 'green'},
    {model: 'sierra', year: 1989, power: 60, color: 'blue'},
    {model: 'fusion', year: 2004, power: 65, color: 'green'},
    {model: 'rav4', year: 2010, power: 130, color: 'silver'},
    {model: 'corolla', year: 1997, power: 65, color: 'black'},
    {model: 'camry', year: 2010, power: 150, color: 'white'},
    {model: 'megane', year: 2015, power: 95, color: 'black'},
    {model: 'clio', year: 2003, power: 55, color: 'silver'}
];

// 6. Создать массив объектов cities и заполнить его объектами с полями
// название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
task = 6;
console.log('----' + task + '----');

let cities = [
    {name: 'Kyiv', population: 3500000, country: 'Ukraine', region: 'Europe'},
    {name: 'Kharkiv', population: 1500000, country: 'Ukraine', region: 'Europe'},
    {name: 'London', population: 9000000, country: 'England', region: 'Europe'},
    {name: 'Tokyo', population: 14000000, country: 'Japan', region: 'Kanto'}
];

// 7. Создать массив объектов cars и заполнить его машинами с полями
// модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
task = 7;
console.log('----' + task + '----');
let cars7 = [
    {model: 'civic', year: 1988, power: 75, color: 'red', driver: {name: 'petro', age: 37, sex: 'male', experience: 7}},
    {
        model: 'accord',
        year: 2000,
        power: 130,
        color: 'white',
        driver: {name: 'alla', age: 28, sex: 'female', experience: 3}
    },
    {
        model: 'cr-v',
        year: 2002,
        power: 150,
        color: 'green',
        driver: {name: 'ivan', age: 45, sex: 'male', experience: 20}
    },
    {
        model: 'sierra',
        year: 1989,
        power: 60,
        color: 'blue',
        driver: {name: 'mikola', age: 65, sex: 'male', experience: 35}
    },
    {
        model: 'fusion',
        year: 2004,
        power: 65,
        color: 'green',
        driver: {name: 'oksana', age: 40, sex: 'female', experience: 10}
    },
    {
        model: 'rav4',
        year: 2010,
        power: 130,
        color: 'silver',
        driver: {name: 'max', age: 33, sex: 'male', experience: 8}
    },
    {
        model: 'corolla',
        year: 1997,
        power: 65,
        color: 'black',
        driver: {name: 'kostya', age: 41, sex: 'male', experience: 15}
    },
];

// 8. проитерировать каждый массив из задания 5,6,7 при помощи while.
task = 8;
console.log('----' + task + '----');
let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}
let j = 0;
while (j < cities.length) {
    console.log(cities[j]);
    j++;
}
let k = 0;
while (k < cars7.length) {
    console.log(cars7[k]);
    k++;
}

// 9. проитерировать каждый массив из задания 5,6,7 при помощи for.
task = 9;
console.log('----' + task + '----');
for (let l = 0; l < cars.length; l++) {
    console.log(cars[l]);
}
for (let l = 0; l < cities.length; l++) {
    console.log(cities[l]);
}
for (let l = 0; l < cars7.length; l++) {
    console.log(cars[l]);
}

// 10. проитерировать каждый массив из задания 5,6,7 при помощи for of.
task = 10;
console.log('----' + task + '----');
for (const car of cars) {
    console.log(car);
}
for (const city of cities) {
    console.log(city);
}
for (const car of cars7) {
    console.log(car);
}

// 11. взять объекты из задания 1 и превратить каждый в json.
task = 11;
console.log('----' + task + '----');
// let car = {brand: 'honda', model: 'civic', maxSpeed: 270};
// let bear = {kingdom: 'Animalia', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'};
// let user = {name: 'Serhii', age: 43, status: true};
// let drink = {type: 'alcoholic beverage', place_of_origin: 'Russia', main_ingredients: 'Water_alcohol'};
// let cellphone = {manufacturer: 'Nokia', released: '1September2000', discontinued: 2005, sold: '126 million'};

let jsonCar = JSON.stringify(car);
console.log(jsonCar);
let jsonBear = JSON.stringify(bear);
console.log(jsonBear);
let jsonUser = JSON.stringify(user);
console.log(jsonUser);
let jsonDrink = JSON.stringify(drink);
console.log(jsonDrink);
let jsonCellphone = JSON.stringify(cellphone);
console.log(jsonCellphone);

// 12. взять json из задания 11 и превратить их обратно в объекты.
task = 12;
console.log('----' + task + '----');

let carNew = JSON.parse(jsonCar);
console.log(carNew);
let bearNew = JSON.parse(jsonBear);
console.log(bearNew);
let userNew = JSON.parse(jsonUser);
console.log(userNew);
let drinkNew = JSON.parse(jsonDrink);
console.log(drinkNew);
let cellphoneNew = JSON.parse(jsonCellphone);
console.log(cellphoneNew);

// 13. взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
task = 13;
console.log('----' + task + '----');
// let cars = [
//     {model: 'civic', year: 1988, power: 75, color: 'red'},
//     {model: 'accord', year: 2000, power: 130, color: 'white'},
//     {model: 'cr-v', year: 2002, power: 150, color: 'green'},
//     {model: 'sierra', year: 1989, power: 60, color: 'blue'},
//     {model: 'fusion', year: 2004, power: 65, color: 'green'},
//     {model: 'rav4', year: 2010, power: 130, color: 'silver'},
//     {model: 'corolla', year: 1997, power: 65, color: 'black'},
//     {model: 'camry', year: 2010, power: 150, color: 'white'},
//     {model: 'megane', year: 2015, power: 95, color: 'black'},
//     {model: 'clio', year: 2003, power: 55, color: 'silver'}
// ];
let jsonCars = [];
for (let l = 0; l < cars.length; l++) {
    jsonCars[l] = JSON.stringify(cars[l]);
}
console.log(jsonCars);

// 14. взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
task = 14;
console.log('----' + task + '----');
// let cities = [
//     {name: 'Kyiv', population: 3500000, country: 'Ukraine', region: 'Europe'},
//     {name: 'Kharkiv', population: 1500000, country: 'Ukraine', region: 'Europe'},
//     {name: 'London', population: 9000000, country: 'England', region: 'Europe'},
//     {name: 'Tokyo', population: 14000000, country: 'Japan', region: 'Kanto'}
// ];

for (let l = 0; l < cities.length; l++) {
    let jsonCity = JSON.stringify(cities[l]);
    console.log(jsonCity);
}

// 15. взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
task = 15;
console.log('----' + task + '----');
let cars15 = [];
for (let l = 0; l < cars7.length; l++) {
    cars15[l] = JSON.stringify(cars7[l]);
}
console.log(cars15);

// 16. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
task = 16;
console.log('----' + task + '----');

let users16 = [
    {name: 'vasya', age: 31, status: false, skils: ['java', 'js', 'python', 'html']},
    {name: 'petya', age: 30, status: true, skils: ['word', 'paint', 'access']},
    {name: 'kolya', age: 29, status: true, skils: ['css', 'js', 'notepad', 'html']},
    {name: 'olya', age: 28, status: false, skils: ['photoshop', 'adobe illustrator', 'html']},
    {name: 'max', age: 30, status: true, skils: ['corel', 'photoshop', 'adobe illustrator', 'html']},
    {name: 'anya', age: 31, status: false, skils: ['c++', 'c#', 'python']},
];
// варіант 1
// for (let i = 0; i < users16.length; i++) {
//     console.log(users16[i]);
//     let skils = users16[i].skils;
//     for (let l = 0; l < skils.length; l++) {
//         console.log(skils[l]);
//     }
// }

// варіант 2
for (let i = 0; i < users16.length; i++) {
    let user = users16[i];
    console.log(user);
    let objKey = Object.keys(user);
    for (let l = 0; l < objKey.length; l++) {
        let userProperty = user[objKey[l]];
        if (Array.isArray(userProperty)) {
            for (const userPropertyElement of userProperty) {
                console.log(userPropertyElement);
            }
        }
    }
}


// 17. Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
task = 17;
console.log('----' + task + '----');
let skils = [];
let z = 0;
for (let i = 0; i < users16.length; i++) {
    let user = users16[i];
    // console.log(user);
    let objKey = Object.keys(user);
    for (let l = 0; l < objKey.length; l++) {
        let userProperty = user[objKey[l]];
        if (Array.isArray(userProperty)) {
            for (const userPropertyElement of userProperty) {
                // console.log(userPropertyElement);
                skils[z] = userPropertyElement;
                z++;
            }
        }
    }
}
console.log(skils);

// 18. За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
task = 18;
console.log('----' + task + '----');
let users18 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];
for (let l = 0; l < users18.length; l++) {
    console.log(users18[l]);
    for (let m = 0; m < users18[l].skills.length; m++) {
        console.log(users18[l].skills[m]);
    }
}


// 19 20 21 22
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// 19. З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
task = 19;
console.log('----' + task + '----');
let addresses = [];
for (let i = 0; i < users.length; i++) {
    addresses[i] = users[i].address;
}
console.log(addresses);

let taskN;
// 20. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
task = 20;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);

for (const usersElem of users) {
    let item = document.createElement('div');
    // item.innerText = `${usersElem.title} ${usersElem.price}`;
    item.innerText = `${usersElem.name} ${usersElem.age} ${usersElem.status} ${JSON.stringify(usersElem.address)}`;
    document.body.appendChild(item);
}

// 21. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
task = 21;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);

for (const usersElem of users) {
    let user = document.createElement('div');
    user.classList.add('user');

    let name = document.createElement('div');
    name.innerText = `${usersElem.name}`;
    user.appendChild(name);

    let age = document.createElement('div');
    age.innerText = `${usersElem.age}`;
    user.appendChild(age);

    let status = document.createElement('div');
    status.innerText = `${usersElem.status}`;
    user.appendChild(status);

    let address = document.createElement('div');
    address.innerText = `${usersElem.address.city} ${usersElem.address.country} ${usersElem.address.street} ${usersElem.address.houseNumber}`;
    user.appendChild(address);

    document.body.appendChild(user);
}


// 22. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
task = 22;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);
for (const usersElem of users) {
    let user = document.createElement('div');
    user.classList.add('user');

    let name = document.createElement('div');
    name.innerText = `name ${usersElem.name}`;
    user.appendChild(name);

    let age = document.createElement('div');
    age.innerText = `age ${usersElem.age}`;
    user.appendChild(age);

    let status = document.createElement('div');
    status.innerText = `status ${usersElem.status}`;
    user.appendChild(status);

    let address = document.createElement('div');
    address.classList.add('address');
    address.innerText = `address:`;

    let city = document.createElement('div');
    city.innerText = `city ${usersElem.address.city}`;
    address.appendChild(city);
    let country = document.createElement('div');
    country.innerText = `country ${usersElem.address.country}`;
    address.appendChild(country);
    let street = document.createElement('div');
    street.innerText = `street ${usersElem.address.street}`;
    address.appendChild(street);
    let houseNumber = document.createElement('div');
    houseNumber.innerText = `houseNumber ${usersElem.address.houseNumber}`;
    address.appendChild(houseNumber);

    user.appendChild(address);
    document.body.appendChild(user);
}


// 23. - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
task = 23;
console.log('----' + task + '----');
let usersWithCities = [];
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},
];
for (let i = 0; i < usersWithId.length; i++) {
    let id = usersWithId[i].id;
    for (let citiesWithIdElement of citiesWithId) {
        if (id === citiesWithIdElement.user_id) {
            usersWithCities[i] = usersWithId[i];
            usersWithCities[i].address = citiesWithIdElement;
        }
    }
}
console.log(usersWithCities);


// 24. створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
task = 24;
console.log('----' + task + '----');
// <h1 id="tsk24" class="task24">створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу</h1>
console.log(document);
{
    let pById = document.getElementById('tsk24');
    console.log(pById);
    console.log(pById.innerText);
    let pListByClassName = document.getElementsByClassName('task24');
    console.log(pListByClassName);
    for (let pListByClassNameElement of pListByClassName) {
        console.log(pListByClassNameElement);
        console.log(pListByClassNameElement.innerText);
    }
    let pPointsByTagName = document.getElementsByTagName('h1');
    console.log(pPointsByTagName);
    for (let pPointsByTagNameElement of pPointsByTagName) {
        console.log(pPointsByTagNameElement);
        console.log(pPointsByTagNameElement.innerText);
    }
}
// 25. змінити цей текст використовуючи селектори id, class, tag
task = 25;
console.log('----' + task + '----');
// <h2 id="tsk25" class="task25">змінити цей текст використовуючи селектори id, class, tag</h2>
console.log(document);
{
    let pById = document.getElementById('tsk25');
    console.log(pById.innerText);
    pById.innerText = 'змінити цей текст використовуючи селектори id';
    console.log(pById.innerText);

    let pListByClassName = document.getElementsByClassName('task25');
    for (let pListByClassNameElement of pListByClassName) {
        console.log(pListByClassNameElement.innerText);
        pListByClassNameElement.innerText = 'змінити цей текст використовуючи селектори class';
        console.log(pListByClassNameElement.innerText);
    }
    let pPointsByTagName = document.getElementsByTagName('h2');
    for (let pPointsByTagNameElement of pPointsByTagName) {
        console.log(pPointsByTagNameElement.innerText);
        pPointsByTagNameElement.innerText = 'змінити цей текст використовуючи селектори tag';
        console.log(pPointsByTagNameElement.innerText);
    }
}


// 26. змінити висоту та ширину блоку використовуючи селектори id, class,  tag
task = 26;
console.log('----' + task + '----');

// <h3 id="tsk26" class="task26">змінити висоту та ширину блоку використовуючи селектори id, class,  tag</h3>
console.log(document);

let pById = document.getElementById('tsk26');
console.log(pById.innerText);
pById.innerText = 'змінити висоту та ширину блоку використовуючи селектори id';
pById.style.height = 'auto';
pById.style.width = '150px';
pById.style.background = 'silver';

console.log(pById.innerText);

let pListByClassName = document.getElementsByClassName('task26');
for (let pListByClassNameElement of pListByClassName) {
    pListByClassNameElement.innerText = 'змінити висоту та ширину блоку використовуючи селектори class';
    pListByClassNameElement.style.height = '500px';
    pListByClassNameElement.style.width = '250px';
    console.log(pListByClassNameElement.innerText);
}
let pPointsByTagName = document.getElementsByTagName('h3');
for (let pPointsByTagNameElement of pPointsByTagName) {
    pPointsByTagNameElement.innerText = 'змінити висоту та ширину блоку використовуючи селектори tag';
    pPointsByTagNameElement.style.height = '50px';
    pPointsByTagNameElement.style.width = '500px';
    console.log(pPointsByTagNameElement.innerText);
}

// 27. за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
task = 27;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);
{
    let tabConteiner = document.createElement('div');
    tabConteiner.innerText = 'TABLE';
    tabConteiner.style.background = 'green';
    let tab = document.createElement('table');
    tab.style.background = 'tomato';
    tab.setAttribute("border", "2");

    tabConteiner.appendChild(tab);

    let tabTr = document.createElement('tr');
    tab.appendChild(tabTr);

    // for (let i = 1; i <= 3; i++) {
    //     let tabTd = document.createElement('td');
    //     tabTd.innerText = '  ' + i + '  ';
    //     tabTr.appendChild(tabTd);
    // }

    let td1 = document.createElement('td');
    td1.innerText = '  1  ';
    tabTr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerText = '  2  ';
    tabTr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerText = '  3  ';
    tabTr.appendChild(td3);

    document.body.appendChild(tabConteiner);
}
console.log(document);


// 28. за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
task = 28;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);
{
    let tabConteiner = document.createElement('div');
    tabConteiner.innerText = 'TABLE';
    tabConteiner.style.background = '#006880';
    let tab = document.createElement('table');
    tab.style.background = '#ff9c47';
    tab.setAttribute("border", "2");

    tabConteiner.appendChild(tab);
    for (let l = 1; l <= 10; l++) {
        let tabTr = document.createElement('tr');
        tab.appendChild(tabTr);

        // for (let i = 1; i <= 3; i++) {
        //     let tabTd = document.createElement('td');
        //     tabTd.innerText = '  ' + l + '__' + i + '  ';
        //     tabTr.appendChild(tabTd);
        // }

        let td1 = document.createElement('td');
        td1.innerText = '  ' + l + '__1  ';
        tabTr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerText = '  ' + l + '__2  ';
        tabTr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerText = '  ' + l + '__3  ';
        tabTr.appendChild(td3);

    }
    document.body.appendChild(tabConteiner);
}
console.log(document);

// 29. за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
task = 29;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);
{
    let tabConteiner = document.createElement('div');
    tabConteiner.innerText = 'TABLE';
    tabConteiner.style.background = '#00803e';
    let tab = document.createElement('table');
    tab.style.background = '#ffcb47';
    tab.setAttribute("border", "2");

    tabConteiner.appendChild(tab);
    for (let l = 1; l <= 10; l++) {
        let tabTr = document.createElement('tr');
        tab.appendChild(tabTr);

        for (let i = 1; i <= 5; i++) {
            let tabTd = document.createElement('td');
            tabTd.innerText = '  ' + l + '__' + i + '  ';
            tabTr.appendChild(tabTd);
        }
    }
    document.body.appendChild(tabConteiner);
}
console.log(document);

// 30. за допомоги document.createElement, appendChild та 2х циклів створити
// таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
task = 30;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);
{
    let m = +prompt('rows?', 10);
    let n = +prompt('columns?', 10);

    let tabConteiner = document.createElement('div');
    tabConteiner.innerText = 'TABLE';
    tabConteiner.style.background = '#b3f1d0';
    let tab = document.createElement('table');
    tab.style.background = '#d09ad0';
    tab.setAttribute("border", "2");

    tabConteiner.appendChild(tab);
    for (let i = 1; i <= m; i++) {
        let tabTr = document.createElement('tr');
        tab.appendChild(tabTr);

        for (let j = 1; j <= n; j++) {
            let tabTd = document.createElement('td');
            tabTd.innerText = '  ' + i + '__' + j + '  ';
            tabTr.appendChild(tabTd);
        }
    }
    document.body.appendChild(tabConteiner);
}
console.log(document);

// 31. Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний
task = 31;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);




// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
// © 2021 GitHub, Inc.
