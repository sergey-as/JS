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
let div14 = task(14, 'с');


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========