let task;

//   РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
task = 1;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr1 = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    arr1.push(i);
}
console.log(arr1);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
task = 2;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr2_1 = [1, 2, 3];
let arr2_2 = [];
for (let i = 0; i < arr2_1.length; i++) {
    // arr2_2.push(arr2_1[arr2_1.length - 1 - i]);
    //або так:
    arr2_2[i] = arr2_1[arr2_1.length - 1 - i];
}
console.log(arr2_1);
console.log(arr2_2);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
task = 3;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr3 = [1, 2, 3];
console.log(arr3);
// arr3.push(4, 5, 6);
//або так:
// for (let i = 1; i <= 3; i++) {
//     arr3.push(arr3.length + 1);
// }
//або так:
let l = arr3.length;
for (let i = l; i < l + 3; i++) {
    arr3[i] = i + 1;
}

console.log(arr3);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
task = 4;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr4 = [1, 2, 3];
console.log(arr4);
// arr4.unshift(4, 5, 6);
//або так:
let m = arr4.length;
for (let i = m + 3; i > m; i--) {
    arr4.unshift(i);
}
console.log(arr4);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
task = 5;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr5 = ['js', 'css', 'jq'];
// console.log(arr5);
console.log(arr5.shift());
// console.log(arr5);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
task = 6;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr6 = ['js', 'css', 'jq'];
// console.log(arr6);
console.log(arr6.pop());
// console.log(arr6);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
task = 7;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
arr7 = arr7.slice(3);
console.log(arr7);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
task = 8;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
arr8 = arr8.slice(0, 2);
console.log(arr8);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
task = 9;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr9 = [1, 2, 3, 4, 5];
console.log(arr9);
arr9.splice(1, 2);
console.log(arr9);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
task = 10;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10);
arr10.splice(3, 0, 'a', 'b', 'c');
console.log(arr10);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
task = 11;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr11 = [1, 2, 3, 4, 5];
console.log(arr11);
arr11.splice(5, 0, 'e');
arr11.splice(4, 0, 'c');
arr11.splice(1, 0, 'a', 'b');
console.log(arr11);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
task = 12;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr12 = [14, 15, 18, 27, 44, 1, 2, 3, 4, 5];
console.log(arr12);
for (let number of arr12) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
task = 13;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr13_1 = [14, 15, 18, 27, 44, 1, 2, 3, 4, 5];
let arr13_2 = [];
console.log(arr13_1);
for (let number of arr13_1) {
    arr13_2.push(number);
}
console.log(arr13_2);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
task = 14;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr14_1 = [14, 15, 18, 27, 44, 1, 2, 3, 4, 5];
let arr14_2 = [];
console.log(arr14_1);
for (let i = 0; i < arr14_1.length; i++) {
    arr14_2[i] = arr14_1[i];
}
console.log(arr14_2);


//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
task = 15;
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr15 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arr15);
// 1. перебрати його циклом while
task = '15_1';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
{
    let i = 0;
    while (i < arr15.length) {
        console.log(arr15[i]);
        i++;
    }
}

// 2. перебрати його циклом for
task = '15_2';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
for (let i = 0; i < arr15.length; i++) {
    console.log(arr15[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
task = '15_3';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
{
    let i = 0;
    while (i < arr15.length) {
        (i % 2) && console.log(arr15[i]);
        i++;
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
task = '15_4';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
for (let i = 0; i < arr15.length; i++) {
    (i % 2) && console.log(arr15[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
task = '15_5';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
{
    let i = 0;
    while (i < arr15.length) {
        !(arr15[i] % 2) && console.log(arr15[i]);
        i++;
    }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
task = '15_6';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
for (let i = 0; i < arr15.length; i++) {
    !(arr15[i] % 2) && console.log(arr15[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"
task = '15_7';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
console.log(arr15);
for (let i = 0; i < arr15.length; i++) {
    !(arr15[i] % 3) && (arr15[i] = 'okten');
}
console.log(arr15);

// 8. вивести масив в зворотньому порядку.
task = '15_8';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
console.log(arr15);
for (let i = arr15.length - 1; i >= 0; i--) {
    console.log(arr15[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
task = '15_9_1';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
arr15 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arr15);
{
    let i = arr15.length - 1;
    while (i >= 0) {
        console.log(arr15[i]);
        i--;
    }
}

// 2. перебрати його циклом for
task = '15_9_2';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
for (let i = arr15.length - 1; !(i < 0); i--) {
    console.log(arr15[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
task = '15_9_3';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
{
    console.log(arr15);
    let i = arr15.length - 1;
    while (!(i < 0)) {
        (i % 2) && console.log(arr15[i]);
        i--;
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
task = '15_9_4';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
for (let i = arr15.length - 1; i >= 0; i--) {
    (i % 2) && console.log(arr15[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
task = '15_9_5';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
{
    let i = arr15.length - 1;
    while (i >= 0) {
        !(arr15[i] % 2) && console.log(arr15[i]);
        i--;
    }
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
task = '15_9_6';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
for (let i = arr15.length - 1; i >= 0; i--) {
    !(arr15[i] % 2) && console.log(arr15[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"
task = '15_9_7';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
console.log(arr15);
for (let i = arr15.length - 1; i >= 0; i--) {
    !(arr15[i] % 3) && (arr15[i] = 'okten');
}
console.log(arr15);

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// - заповнити його 50 парними числами за допомоги циклу.
task = '15_10_1';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr15_10_1 = [];
{
    let i = 1;
    while (arr15_10_1.length < 50) {
        !(i % 2) && arr15_10_1.push(i);
        i++;
    }
}
console.log(arr15_10_1);

// - заповнити його 50 непарними числами за допомоги циклу.
task = '15_10_2';
console.log('----' + task + '----');
document.write('<br>----' + task + '----<br>');
let arr15_10_2 = [];
{
    let i = 1;
    while (arr15_10_2.length < 50) {
        (i % 2) && arr15_10_2.push(i);
        i++;
    }
}
console.log(arr15_10_2);