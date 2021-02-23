// functions in obj + this
// constructors
//class

/*funcs in object*/
/*1*/
// let person = {
//     name: 'kokos',
//     age: 32,
//     greeting: function () {
//         let msg = `hello my name is ${person.name}, and i ${person.age} years old`;
//         console.log(msg);
//     }
// };

/*2*/
// теперь при смене названия объекта мы получим ошибку в переменной msg
// let user = {
//     name: 'kokos',
//     age: 32,
//     greeting: function () {
//         let msg = `hello my name is ${person.name}, and i ${person.age} years old`;
//         console.log(msg);
//     }
// };

/*3*/
//что б избежать этого будем использовать this
// let user = {
//     name: 'kokos',
//     age: 32,
//     greeting: function () {
//         let msg = `hello my name is ${this.name}, and i ${this.age} years old`;
//         console.log(msg);
//     }
// };

/*4*/
// lost of context with arrow function
// let user = {
//     name: 'kokos',
//     age: 32,
//     greeting: () => {
//         let msg = `hello my name is ${this.name}, and i ${this.age} years old`;
//         console.log(msg);
//     }
// };
//
// user.greeting();

// how to create an object quickly?
// create function constructor

function User(name, age, status) {
    this.imya = name;
    this.vik = age;
    this.status = status;

}

function User(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;

    this.greeting = function (msg = 'hello') {
        console.log(`${msg} my name is - ${this.name}`);

    };

}

let user1 = new User('vasya', 31, false);
let user2 = new User('petya', 20, true);


// 2 way to create
// {name: 'olya', age: 31, status: false, wife : {name :'anya',age:21}},
//composition
function UserWithWife1(name = 'john', age = 24, status = true, wife = {name: 'kate', age: 23}) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = wife;

    this.greeting = function (msg = 'hello') {
        console.log(`${msg} my name is - ${this.name}`);

    };

}

let userWithWife1 = new UserWithWife1('vasya', 21, true, {name: 'olya', age: 56});

// agregation
function UserWithWife2(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    this.greeting = function (msg = 'hello') {
        console.log(`${msg} my name is - ${this.name}`);

    };
    this.wife.greeting = function (msg = 'hello') {
        console.log(`${msg} my name is - ${this.name}`);

    };

    this.increaseAge = function (increaseValue) {
        this.age += increaseValue;
    };


}

let userWithWife2 = new UserWithWife2('vasya', 21, true, 'olya', 56);


class UserX {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }


    greeting(msg) {
        console.log(`${msg} my name is - ${this.name}`);
    }
}

let userX = new UserX('kokos', 13, false);
userX.greeting('hi');

//like a copy class into another class ...
class UserXSon extends UserX {
}

let userXSon = new UserXSon('abrikos', 14, true);
userXSon.greeting('hello');

//....but this not all


// we can etend it
class ClassUserXSonB extends UserX {


    constructor(name, age, status, wife) {
        super(name, age, status);
        this.wife = wife;
    }

    meetMyWife() {
        console.log(`this is my wife ${this.wife.name}`);
    }
}

let classUserXSonB = new ClassUserXSonB('abrikos', 14, true, {name: 'anita'});
classUserXSonB.greeting('hello');
classUserXSonB.meetMyWife();