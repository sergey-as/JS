function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}


//1
let div1 = task(1, 'створити функцію яка виводить масив');

function arrOutput(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}


//2
let div2 = task(2, 'створити функцію яка заповнює масив рандомними числами та виводить його.' +
    ' Для виведення використати попвередню функцію.');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function arrFill(arr, arrLenght) {
    for (let i = 0; i < arrLenght; i++) {
        arr[i] = getRandomIntInclusive(0, 300);
    }
    arrOutput(arr);
}

let arr = [];
arrFill(arr, 15);
console.log(arr);


//3
let div3 = task(3, 'створити функцію яка приймає три числа та виводить та повертає найменьше.');

function minOf3(a, b, c) {
    if (a <= b && a <= c) {
        console.log(a);
        return a;
    } else if (b <= a && b <= c) {
        console.log(b);
        return b;
    } else {
        console.log(c);
        return c;
    }
}

minOf3(4, 3, 2);


//4
let div4 = task(4, 'створити функцію яка приймає три числа та виводить та повертає найбільше.');

function maxOf3(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
        return a;
    } else if (b >= a && b >= c) {
        console.log(b);
        return b;
    } else {
        console.log(c);
        return c;
    }
}

maxOf3(4, 3, 2);


//5
let div5 = task(5, 'створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше');

function minmax(...a) {
    console.log('arguments: ', a);
    if (a.length == 0) return 'NaN';
    let min = a[0];
    let max = a[0];
    for (let aElement of a) {
        (min > aElement) && (min = aElement);
        (max < aElement) && (max = aElement);
    }
    console.log(max);
    return min;
}

console.log('return: ', minmax());
console.log('return: ', minmax(32, -5, -71, 99, 4, 3, 2));


//6
let div6 = task(6, 'створити функцію яка виводить масив');

function arrOutput6(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

arrOutput6([12, 3, 6, 1, 78, -5, -9, 56]);


//7
let div7 = task(7, 'створити функцію яка повертає найбільше число з масиву');

function arrMax(arr) {
    if (arr.length == 0) return 'NaN';
    let max = arr[0];
    for (let arrElement of arr) {
        (max < arrElement) && (max = arrElement);
    }
    return max;
}

console.log(arrMax([12, 3, 6, 1, 78, -5, -9, 56]));


//8
let div8 = task(8, 'створити функцію яка повертає найменьше число з масиву');

function arrMin(arr) {
    if (arr.length == 0) return 'NaN';
    let min = arr[0];
    for (let arrElement of arr) {
        (min > arrElement) && (min = arrElement);
    }
    return min;
}

console.log(arrMin([12, 3, 6, 1, 78, -5, -9, 56]));


//9
let div9 = task(9, 'створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.');

function arrSum(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(arrSum([12, 3, 6, 1, 78, -5, -9, 56]));


//10
let div10 = task(10, 'створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.');

function arrMean(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return arr.length > 0 ? sum / arr.length : 0;
}

console.log(arrMean([12, 3, 6, 1, 78, -5, -9, 56]));
console.log(arrMean([]));


//11
let div11 = task(11, 'Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об\'єктів в масиві');

function arrObj(arr) {
    let countOfObj = 0;
    for (let arrElement of arr) {
        (typeof arrElement === 'object') && countOfObj++;
    }
    return countOfObj;
}

console.log(arrObj([12, 3, 6, 1, 78, -5, -9, 56]));
console.log(arrObj([{a: 12}, {b: [3, 6]}, {a: 1, b: 78, c: -5}, -9, 56]));


//12
let div12 = task(12, 'Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них');

function arrObjProp(arr) {
    let countOfObjProp = 0;
    for (let arrElement of arr) {
        if (typeof arrElement === 'object') {
            for (let arrElementKey in arrElement) {
                countOfObjProp++;
            }
        }
    }
    return countOfObjProp;
}

console.log(arrObjProp([{a: 12}, {b: [3, 6]}, {a: 1, b: 78, c: -5}, -9, 56]));


//13
let div13 = task(13, 'створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.');
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function arrToArr(arr1, arr2) {
    let arrLenght = arr1.length;
    (arrLenght < arr2.length) && (arrLenght = arr2.length);
    let arr = [];

    for (let i = 0; i < arrLenght; i++) {
        let arr1i = 0;
        let arr2i = 0;

        (typeof arr1[i] === 'number') && (arr1i = arr1[i]);
        (typeof arr2[i] === 'number') && (arr2i = arr2[i]);
        arr[i] = arr1i + arr2i;
    }

    return arr;
}

let arr1 = [1, 2, 3, 4, 11];
let arr2 = [2, 3, 4, 5];

console.log(arrToArr(arr1, arr2));


//14
let div14 = task(14, '*** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"');

function arrChangeElem(arr, i) {
    if (arr.length >= 2) {
        let elemI = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = elemI;
    }
    return arr;
}

console.log([1, 2, 3, 4, 11]);
console.log(arrChangeElem([1, 2, 3, 4, 11], 3));


//15
let div15 = task(15, '*** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.' +
    'Двожина масиву від 2 до 100');
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function arrMove0ToEnd(arr) {
    let arrZerros = [];
    let arrNotZerros = [];

    for (let i = 0; i < arr.length; i++) {
        (arr[i] === 0) && (arrZerros.push(arr[i]));
        !(arr[i] === 0) && (arrNotZerros.push(arr[i]));
    }
    return arrNotZerros.concat(arrZerros);
}

console.log([1, 0, 6, 0, 3]);
console.log(arrMove0ToEnd([1, 0, 6, 0, 3]));

console.log([0, 1, 2, 3, 4]);
console.log(arrMove0ToEnd([0, 1, 2, 3, 4]));

console.log([0, 0, 1, 0]);
console.log(arrMove0ToEnd([0, 0, 1, 0]));


//16
let div16 = task(16, 'Створити функцію яка : Додає в боді блок з текстом "Hello owu"');

function addToBodyHelloOwu() {
    let helloOwu = document.createElement('div');
    helloOwu.innerText = 'Hello owu';
    document.body.appendChild(helloOwu);
}

addToBodyHelloOwu();


//17
let div17 = task(17, 'Створити функцію яка : Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи');

function addElemToBody(tagName, txt) {
    let elem = document.createElement(tagName);
    elem.innerText = txt;
    document.body.appendChild(elem);
}

addElemToBody('h2', '***Створити функцію яка : Додає в боді елемент з текстом***');
addElemToBody('h3', '///Тип елементу та текст отримати через аргументи///');
addToBodyHelloOwu();


//18
let div18 = task(18, 'Створити функцію яка : приймає масив автомобілів (можна взяти з попередніх дз ),' +
    'та  індентифікатор елемнту в який потрібно додати список цих автомобілів.');

function addCars(cars, id) {
    let elemById = document.getElementById(id);
    let ul = document.createElement('ul');
    elemById.appendChild(ul);

    for (let i = 0; i < cars.length; i++) {

        let li = document.createElement('li');
        li.innerText = JSON.stringify(cars[i]);
        ul.appendChild(li);
    }
}

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
addCars(cars, 'task18');


//19
let div19 = task(19, 'Для кожного автомобіля створити свій блок,' +
    ' та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці');

function addCarsToBlock(cars, id) {
    let elemById = document.getElementById(id);

    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        let div = document.createElement('div');
        let txt = '';
        for (let carKey in car) {
            txt += '\n' + carKey + ': ' + car[carKey];
        }
        // console.log(txt);
        div.innerText = txt;
        elemById.appendChild(div);
    }
}

addCarsToBlock(cars, 'task19');


//20
let div20 = task(20, 'приймає масив автомобілів (можна взяти з попередніх дз ),' +
    'та  індентифікатор елемнту в який потрібно додати список цих автомобілів.' +
    'Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.' +
    'Для кожної властивості створити всередені блока автомоблія свій блок');

function addCarsAndPropToBlock(cars, id) {
    let elemById = document.getElementById(id);

    for (let i = 0; i < cars.length; i++) {
        let divCar = document.createElement('div');
        elemById.appendChild(divCar);

        let car = cars[i];
        for (let carKey in car) {
            let divProp = document.createElement('div');
            divCar.appendChild(divProp);
            divProp.innerText = carKey + ': ' + car[carKey];
        }
    }
}

addCarsAndPropToBlock(cars, 'task20');


//21
let div21 = task(21, '(на основі минулого ДЗ)' +
    '\n **- функція приймає 2 масиви з рівною кількістю об\'єктів та з\'єднює в один об\'єкт користувача' +
    ' та місто з відповідними "id" та "user_id",' +
    '\n та повертає масив цих з\'єднаних об\'єктів.');
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

function arrUnite(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr1Element = arr1[i];
        let newObj = JSON.parse(JSON.stringify(arr1Element));

        for (let j = 0; j < arr2.length; j++) {
            let arr2Element = arr2[j];
            if (newObj.id === arr2Element.user_id) {
                newObj.city = JSON.parse(JSON.stringify(arr2Element));
                arr.push(newObj);
                break;
            }
        }
    }
    return arr;
}

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
console.log(usersWithId);
console.log(citiesWithId);
console.log(arrUnite(usersWithId, citiesWithId));


//22
let div22 = task(22, '***- беремо завдання з правилами з укроку №3 :' +
    '\n Та робимо це функцією.При цьому правила отримувати через аргумент.' +
    '\n "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.' +
    '\n При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.' +
    '\n Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html"' +
    '');
// <div id="content"></div>
// <h1>Правила бойцовского клуба</h1>
// <div id="wrap">
//     <div className="rules rule1">
//         <h2>Первое правило Бойцовского клуба.</h2>
//         <p>Никому не рассказывать о Бойцовском клубе.</p>
//     </div>
// ...

function createElem(tagName, parent, idName, className, innerTxt) {
    let elem = document.createElement(tagName);
    !(idName === '') && (elem.id = idName);
    !(className === '') && (elem.className = className);
    !(innerTxt === '') && (elem.innerText = innerTxt);
    parent.appendChild(elem);
    return elem;
}

function showRule(rule, i, parent) {
    let divRule = createElem('div', parent, '', 'rules rule' + (i + 1), '');
    let title = createElem('h2', divRule, '', '', rule.title);
    let body = createElem('p', divRule, '', '', rule.body);
}

let divContent = createElem('div', div22, 'content', '', '');
let h1 = createElem('h1', div22, '', '', 'Правила бойцовского клуба');
let divWrap = createElem('div', div22, 'wrap', '', '');

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

for (let i = 0; i < rules.length; i++) {
    showRule(rules[i], i, divWrap);
}


//23
let div23 = task(23, '===========додаткове від віктора========' +
    '\n' + '1) Точная степень двойки.' +
    '\n' + 'Дано натуральное число N.' +
    '\n' + 'Выведите слово YES, если число N является точной степенью двойки,' +
    '\n' + 'или слово NO в противном случае.' +
    '\n' + 'Операцией возведения в степень пользоваться нельзя!' +
    '');

function powerOfTwo(num) {
    let res = 'NO';
    for (let i = 2; i <= num;) {
        // console.log(i);
        (i === num) && (res = 'YES');
        i = i * 2;
    }
    return res;
}

console.log(1028, powerOfTwo(1028));
console.log(1024, powerOfTwo(1024));


//24
let div24 = task(24, '===========додаткове від віктора========' +
    '\n' + '2) Deep Copy' +
    '\n' + 'реалізувати глибоке копіювання обєкту за допомогою рекурсій' +
    '');

function copyObj(obj) {
    let copyOfObj = {};

    for (let objKey in obj) {
        let propertyByKey = obj[objKey];

        if (typeof propertyByKey === 'object') {
            copyOfObj[objKey] = copyObj(propertyByKey);
        } else {
            copyOfObj[objKey] = propertyByKey;
        }
    }

    return copyOfObj;
};

function copyArrObj(objs) {
    let objsCopy = [];
    for (let obj of objs) {
        objsCopy.push(copyObj(obj));
    }
    return objsCopy;
};

function func(baseURL, suffOfBaseURL) {
    fetch(baseURL + suffOfBaseURL)
        .then(resp => resp.json())
        .then(objsJsonplaceholder => {
                let jsonObjs = JSON.stringify(objsJsonplaceholder);
                let objs = JSON.parse(jsonObjs);
                let objsCopy = copyArrObj(objs);
                (JSON.stringify(objs) === JSON.stringify(objsCopy)) && (console.log('Ok!'));
                console.log(objs);
                console.log(objsCopy);
            }
        );
};
func("https://jsonplaceholder.typicode.com/", 'users');


//25
let div25 = task(25, '===========додаткове від віктора========' +
    '\n' + '3) Flat' +
    '\n' + 'Вирівняти багаторівневий масив в однорівневий' +
    '\n' + "[1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello', 'Wordd', 9, 6, 1, 'oops', 9]" +
    '');

let arr25 = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];

function func(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];

        if (Array.isArray(arrElement)) {
            arr2 = [...arr2, ...func(arrElement)];
        } else {
            arr2 = [...arr2, arrElement];
        }
    }
    return arr2
}

function funcFlat(arr) {
    return func(arr);
}

let arr25_2 = funcFlat(arr25);
console.log(arr25);
console.log(arr25_2);