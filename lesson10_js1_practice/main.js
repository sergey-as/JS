// РОБОТА В АУДИТОРІЇ
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
console.log('----1----');
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log('typeof (str = \'Привіт\') : ' + (typeof (str)));
console.log('typeof (num = 123) : ' + (typeof (num)));
console.log('typeof (flag = true) : ' + (typeof (flag)));
console.log('typeof (txt = \'true\') : ' + (typeof (txt)));

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
console.log('----2----');
let a1 = (104 - 2) / 3;//34
let a2 = 24 * 2 / 4;//12
let a3 = 130 / 2 + 1;//66
let a4 = 180 - 100 + 10;//90
let a5 = 45 * 2 - 3;//87
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

// 3. Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
console.log('----3----');
let a6 = 2;//5 % 3
let a7 = 0;//3 % 5
let a8 = 53;//5 + '3'
let a9 = NaN;//'5' - 3
let a10 = '75кг';//75 + 'кг'
console.log(' 5 % 3 = 2 : ' + a6);
console.log(' 3 % 5 = 0 : ' + a7);
console.log(' 5 + \'3\' = 53 : ' + a8);
console.log(' \'5\' - 3 = NaN : ' + a9);
console.log(' 75 + \'кг\' = 75кг : ' + a10);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
console.log('----4----');
let height = 23;
let width = 10;
let s = height * width;
console.log('площа прямокутника висотою 23см та шириною 10см дорівнює ' + s + 'см');

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
console.log('----5----');
let heightC = 10;
let dC = 4;
let v = Math.PI * Math.pow(dC / 2, 2) * 10;
console.log('объем цилиндра высотой 10м и диаметром основания 4м равен ' + v + 'м');

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
//    или оператор возведения в степень ** ).
console.log('----6----');
let n = 3;
let m = 4;
let k = Math.sqrt(n ** 2 + m ** 2);
console.log('гипотенуза ' + k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str
// и выводить спомощью document.write, alert и console.log
console.log('----7----');
let strr = 'Hello world';
document.write(strr);
alert(strr);
console.log(strr);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
console.log('----8----');
let fio = 'Stepanov S A';
let age = 43;
let hobby = 'I read science fiction';
alert(fio + '\n' + age + '\n' + hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
console.log('----9----');
document.write('<br>----9----<br>');
let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2 + str3;
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");
console.log('----10----');
document.write('<br>----10----<br>');
let str10 = "20";
let a = 5;
document.write(str10 + a + "<br/>");//205
document.write(str10 - a + "<br/>");//15
document.write(str10 * "2" + "<br/>");//40
document.write(str10 / 2 + "<br/>");//10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
//     parseInt("435")
//     parseInt("Вася")
console.log('----11----');
console.log(parseInt("3.14"));//3
console.log(parseInt("-7.875"));//-7
console.log(parseInt("435"));//435
console.log(parseInt("Вася"));//NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);
console.log('----12----');
let str12 = prompt("Enter something", "ho-ho")
console.log(str12);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// а вывод результата при помощи метода alert
console.log('----13----');
let num1 = +prompt('num1');
let num2 = +prompt('num2');
alert(num1 + num2);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит
// имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
console.log('----13----');
let name14 = prompt('name');
let surname14 = prompt('surname');
let age14 = +prompt('age');
alert('Доброго вечера ' + name14 + ' ' + surname14 + ', мои поздравления что вам ' + age14);
