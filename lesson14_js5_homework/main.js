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


// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];