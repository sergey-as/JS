// callbacks
// arr functions
// prototype

let numbers = [11, -1, 12, 45, 0];
let sortNumbers = numbers.sort();
console.log(numbers);
console.log(sortNumbers);

numbers.sort(function (a, b) {
    // return a - b;
    return b - a;
});
console.log(numbers);

let filter = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }

});
console.log(filter);

let arr = [];
numbers.forEach(function (value) {
    arr.push(value * 2);
    //console.log(value)
});
console.log(arr);

let map = numbers.map(function (value) {
    return value * 3;
});
console.log(map);

let numbersWithSurprise = [1, 2, 3, 'surprise', 4, 5, 6];
let find = numbersWithSurprise.find(function (value) {
    return typeof value == 'string';
});
console.log(find);

let words = ['a', 'c', 'b', 'd', 'f', 'e',];
words.sort();
console.log(words);
let wordsWithCapital = ['a', 'С', 'b', 'd', 'f', 'e',];
let sortCapital = wordsWithCapital.sort();
console.log(sortCapital);

let descSort = wordsWithCapital.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(descSort);

/*sort of objects*/

let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'Shevchenko', number: 16}
},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }
];

usersWithAddress.sort((userEntity1, userEntity2) => userEntity1.address.number - userEntity2.address.number);
console.log(usersWithAddress);

/**/
//1
// function calculate(a, b) {
//     function action(x, y) {
//         return x + y;
//     }
//
//     let result = action(a, b);
//     return result;
// }
// calculate(10,20)


// 2
// в таком случае мы всегда должны предварительно описать функцию действия
// function action(x, y) {
//     return x + y;
// }
//
// function calculate(a, b) {
//
//     let result = action(a, b);
//     return result;
// }
// calculate(10,20)
//3
//вынести функцию в качестве аргумента
// сравнить с вариантом 1

// function calculate(a, b, action) {
//     let result = action(a, b);
// }
//
// calculate(10, 20, function (a, b) {
//     return a + b;
// })

function printArray(array, callback) {
    callback(array);
}

printArray([1, 2, 3, 4], function (array) {
    console.log(array);
});
printArray([1, 2, 3, 4], function (array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
});
printArray([1, 2, 3, 4], function (array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(`[${i}] - ${arrayElement}`);
    }
});


// how to add you own custom function to library class like Array?
