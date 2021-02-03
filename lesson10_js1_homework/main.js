// // 1. Створити змінні. Присвоїти кожному з них значення:
// //     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //         Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a, b, c, d, e, f, g, h, i, j, k, l;
// // let b = 'owu';
// // let c = 'com';
// // let d = 1;
// // let e = 10;
// // let f = -999;
// // let g = 123;
// // let h = 3.14;
// // let i = 2.7;
// // let j = 16;
// // let k = true;
// // let l = false;
//
// a = 'hello';
// b = 'owu';
// c = 'com';
// d = 1;
// e = 10;
// f = -999;
// g = 123;
// h = 3.14;
// i = 2.7;
// j = 16;
// k = true;
// l = false;
//
// console.log('----1----');
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
//
// alert('a: '+ a);
// alert('b: '+ b);
// alert('c: '+ c);
// alert('d: '+ d);
// alert('e: '+ e);
// alert('f: '+ f);
// alert('g: '+ g);
// alert('h: '+ h);
// alert('i: '+ i);
// alert('j: '+ j);
// alert('k: '+ k);
// alert('l: '+ l);
//
// document.write('<br>----1----<br>');
// document.write('a: '+ a+'<br>');
// document.write('b: '+ b+'<br>');
// document.write('c: '+ c+'<br>');
// document.write('d: '+ d+'<br>');
// document.write('e: '+ e+'<br>');
// document.write('f: '+ f+'<br>');
// document.write('g: '+ g+'<br>');
// document.write('h: '+ h+'<br>');
// document.write('i: '+ i+'<br>');
// document.write('j: '+ j+'<br>');
// document.write('k: '+ k+'<br>');
// document.write('l: '+ l+'<br>');
//
// // 2. Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// //  Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// a = 1;
// b = 2;
// c = 3;
// d = 'd';
// e = 'e';
// f = false;
// g = 'g';
// h = 'pi';
// i = 'i';
// j = true;
// k = 15;
// l = 'lll';
//
// console.log('----2----');
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
//
// alert('a: '+ a);
// alert('b: '+ b);
// alert('c: '+ c);
// alert('d: '+ d);
// alert('e: '+ e);
// alert('f: '+ f);
// alert('g: '+ g);
// alert('h: '+ h);
// alert('i: '+ i);
// alert('j: '+ j);
// alert('k: '+ k);
// alert('l: '+ l);
//
// document.write('<br>----2----<br>');
// document.write('a: '+ a+'<br>');
// document.write('b: '+ b+'<br>');
// document.write('c: '+ c+'<br>');
// document.write('d: '+ d+'<br>');
// document.write('e: '+ e+'<br>');
// document.write('f: '+ f+'<br>');
// document.write('g: '+ g+'<br>');
// document.write('h: '+ h+'<br>');
// document.write('i: '+ i+'<br>');
// document.write('j: '+ j+'<br>');
// document.write('k: '+ k+'<br>');
// document.write('l: '+ l+'<br>');
//
// // 3. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('name?');
// let middle_name = prompt('middle_name?');
// let age = +prompt('age?');
// // let name = 'Serhii';
// // let middle_name = 'Oleksiivych';
// // let age = 43;
// alert('Вітаю '+name+' '+middle_name+'. Тобі '+age+' років');
//
// console.log('----3----');
// console.log('Вітаю '+name+' '+middle_name+'. Тобі '+age+' років');
// document.write('<br>----3----<br>');
// document.write('Вітаю '+name+' '+middle_name+'. Тобі '+age+' років');
//
// // 4. Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація)
// let abc = ''+a+b+c+d+e+f+g+h+i+j+k+l+name+middle_name+age;
// console.log('----4----');
// console.log(abc);
// document.write('<br>----4----<br>');
// document.write(abc);
//
// // 5. За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// console.log('----5----');
// let number1, number2, number3;
// number1 = parseFloat(prompt('number1 ?'));
// number2 = parseInt(prompt('number2 ?'));
// number3 = Number(prompt('number3 ?'));
// console.log(number1);
// console.log(number2);
// console.log(number3);
//
// // 6. За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt.
// // Додати їх всі мож собою і результат вивести в консоль.
// console.log('----6----');
// let number1, number2, number3, number4;
// number1 = parseInt(prompt('number1 ?'));
// number2 = parseInt(prompt('number2 ?'));
// number3 = parseInt(prompt('number3 ?'));
// number4 = parseInt(prompt('number4 ?'));
// console.log(number1+number2+number3+number4);
//
// // 7. За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// // Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// console.log('----7----');
// let number1, number2, number3;
// number1 = parseFloat(prompt('number1 ?'));
// number2 = parseFloat(prompt('number2 ?'));
// number3 = parseFloat(prompt('number3 ?'));
// let result = number1+number2+number3;
// console.log(result);
//
//
// // 8. За допомогою prompt() отримати 3 числа з плаваючою точкою.
// // Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// console.log('----8----');
// let number1, number2, number3;
// number1 = Math.round(parseFloat(prompt('number1 ?')));
// number2 = Math.round(parseFloat(prompt('number2 ?')));
// number3 = Math.round(parseFloat(prompt('number3 ?')));
// let result = number1+number2+number3;
// console.log(number1);
// console.log(number2);
// console.log(number3);
// console.log(result);
//
// // 9. За допомогою prompt() отримати 2 цілих числа.
// //   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// //   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// //   Example. Число 1 = 5. Число 2 = 2. Результат = 25
// console.log('----9----');
// let number1, number2;
// number1 = parseInt(prompt('number1 ?'));
// number2 = parseInt(prompt('number2 ?'));
// let result = Math.pow(number1,number2);
// console.log(number1);
// console.log(number2);
// console.log(result);
//
// // 10. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //  let a = 100; let b = '100'; let c = true;
// console.log('----10----');
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
//
//
// // 11. Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// //     В однакових виразаї не використовувати однакові оператори!!!
// // 5 ? 6 -> true
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 10 ? 10 -> true
// // 10 ? 10 -> true
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 123 ? '123' -> false
// // 123 ? '123' -> true
// console.log('----11----');
// console.log('must be true: '+ (5<6));// 5 ? 6 -> true
// console.log('must be false: '+ (5>6));// 5 ? 6 -> false
// console.log('must be false: '+ (5==6));// 5 ? 6 -> false
// console.log('must be false: '+ (5>=6));// 5 ? 6 -> false
// console.log('must be true: '+ (10 === 10));// 10 ? 10 -> true
// console.log('must be true: '+ (10 <= 10));// 10 ? 10 -> true
// console.log('must be false: '+ (10 != 10));// 10 ? 10 -> false
// console.log('must be false: '+ (10 > 10));// 10 ? 10 -> false
// console.log('must be false: '+ (10 < 10));// 10 ? 10 -> false
// console.log('must be false: '+ (123 === '123'));// 123 ? '123' -> false
// console.log('must be true: '+ (123 == '123'));// 123 ? '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
console.log('----Додатково----');
console.log('false: (132 > 100 && 45 < 12 ) '+ (132 > 100 && 45 < 12 ));
console.log('true: (34 > 33 && 23 < 90 ) '+ (34 > 33 && 23 < 90 ));
console.log('false: (99 > 100 && 45 > 12 ) '+ (99 > 100 && 45 > 12 ));
console.log('true: (132 > 100 || 45 < 12 ) '+ (132 > 100 || 45 < 12 ));
console.log('true: (111 > 11 || 45 < 111 ) '+ (111 > 11 || 45 < 111 ));
console.log('true: ((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ) '+ ((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ));
console.log('true: ((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ) '+ ((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ));
console.log('false: ((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ) '+ ((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ));
console.log('true: ((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )) '+ ((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )));
console.log('true: '+ (!!'-1'));
console.log('true: '+ (!!-1));
console.log('true: '+ (!!'0'));
console.log('true: '+ (!!'null'));
console.log('true: '+ (!!'undefined'));
console.log('false: '+ (!!(3/'owu')));
console.log('true: '+ ((111 > 11 || 45 < 111) ||  !!'0'));
console.log('false: '+ ((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )));
