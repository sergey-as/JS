function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}


//1
let div1 = task(1, '- создать массив с 20 числами.' +
    '\n' + '-- при помощи метода sort и колбека  отсортировать массив.' +
    '\n' + '-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.' +
    '\n' + '-- при помощи filter получить числа кратные 3' +
    '\n' + '-- при помощи filter получить числа кратные 10' +
    '\n' + '-- перебрать (проитерировать) массив при помощи foreach()' +
    '\n' + '-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше' +
    '');

let arr = [564, 74, -850, 33, -87, 9684, 2220, 87, 516, 85, 20, 9, 83, -74, 36, 23, 78, 123, -5];
console.log(arr);

{
    console.log('при помощи метода sort и колбека  отсортировать массив.');
    let sortArr = arr.sort(function (a, b) {
        return (a - b);
    });
    console.log('arr', arr);
    console.log('sortArr', sortArr);
}

{
    console.log('при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.');
    let sortArr = arr.sort((a, b) => (b - a));
    console.log('arr', arr);
    console.log('sortArr', sortArr);
}

{
    console.log('при помощи filter получить числа кратные 3');

    let filterArr1 = arr.filter(function (a) {
        return (a % 3 === 0)
    });
    console.log('filterArr1', filterArr1);

    let filterArr2 = arr.filter((a) => (a % 3 === 0));
    console.log('filterArr2', filterArr2);

}

{
    console.log('при помощи filter получить числа кратные 10');

    let filterArr = arr.filter((a) => (a % 10 === 0));
    console.log('filterArr', filterArr);

}

{
    console.log('перебрать (проитерировать) массив при помощи foreach()');

    arr.forEach(value => console.log(value));
}

{
    console.log('перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше');

    let map1 = arr.map(function (value) {
        return value * 3;
    });
    console.log(map1);

    let map2 = arr.map(num => num * 3);
    console.log(map2);
}


//2
let div2 = task(2, '- создать массив со словами на 15-20 элементов.' +
    '\n' + '-- отсортировать его по алфавиту в восходящем порядке.' +
    '\n' + '-- отсортировать его по алфавиту  в нисходящем порядке.' +
    '\n' + '-- отфильтровать слова длиной менее 4х символов' +
    '\n' + '-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце' +
    '');

let words = ['создать', 'массив', 'со', 'словами', 'на',
    '15-20', 'элементов', 'отсортировать', 'его', 'по',
    'алфавиту', 'в', 'восходящем', 'порядке', 'нисходящем',
    'отфильтровать', 'слова'];
console.log(words);
{
    console.log('отсортировать его по алфавиту в восходящем порядке.');
    console.log(words.sort((a, b) => (a > b)));/
    console.log(words.sort());
}
{
    console.log('отсортировать его по алфавиту  в нисходящем порядке.');
    console.log(words.sort(function (a, b) {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else return 0;
    }));
}
{
    console.log('отфильтровать слова длиной менее 4х символов');
}
{
    console.log('перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце');
}


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком