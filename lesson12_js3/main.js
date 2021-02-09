// // i+=2 i=i+2
// let x = 0;
// x++;// x=1
// x = x + 1;// x=2
// x += 2; //x = x + 2
// let a = 0;
// let b = a++; // 1) b = a (a=0); 2) a++ -> a=1
// let b = ++a; // 1) a++ -> a=1; 2) b = a = 1 (a=1)

// revers loop  --- ritar
{
    let arr1 = [11, 22, 33, 44];
    for (let i = arr1.length - 1; i >= 0; i--) {
        // const arr1Element = arr1[i];
    }
}

// for of || for in:
// iter    for of     only for -> []
{
    let arr1 = [11, 22, 33, 44];
    for (let arrElem of arr1) {
        //
    }
}

// itin    for in
{
    let arr1 = [11, 22, 33, 44];
    for (const arr1Key in arr1) {
        console.log(arr1Key);
    }
}
{
    let user = {name: 'vasya', age: 123, status: false};
    for (const key in user) {
        console.log(key, user[key]);
    }
}

// if else in loop
{
    let arr1 = [11, 22, 33, 44];
    for (const number of arr1) {
        if (number > 20) {
            console.log(number);
            break;
        }
    }
}

// https://www.pinterest.com/

// loop in loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
        console.log(i, j);
    }
}

// sibling elements in array

let arr1 = [11, 22, 33, 44, 55, 66, 77, 231, 32854, 987, 989, 987, 8987, 654];
//
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]); // current element
//     console.log(arr1[i - 1]); // previous sibling element
//     console.log(arr1[i + 1]); // next sibling element
// }
//
// // swap every 3
// for (let i = 0; i < arr1.length; i++) {
//     if (i % 3 == 0 && i != 0) {
//         console.log(arr1[i]);
//     }
// }
//
// for (let i = 0; i < arr1.length; i += 3) {
//     console.log(arr1[i]);
// }

// splice || slice

let slicedElements = arr1.splice(0, 2, 'sdsd');//видалити починаючи з... кількість
console.log(arr1, slicedElements);

let segment = arr1.slice(3, 6);// взяти елементи з по
console.log(arr1, segment);

let sort = arr1.sort((a1, b1) => a1 - b1);
console.log(sort);
