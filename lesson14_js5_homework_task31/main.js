let task;

// 31. Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний
task = 31;
console.log('----' + task + '----');
taskN = document.createElement('div');
taskN.innerText = `----${task}----`;
document.body.appendChild(taskN);

console.log(document);

// // - знайти всі елементі, які мають class
// let elements = document.querySelectorAll('[class]');
// for (let elem of elements) {
//     console.log(elem);
// }

// - знайти всі параграфи ,та змінити текст на hello oktenweb!
let pPointsByTagName = document.getElementsByTagName('p');
console.log(pPointsByTagName);
for (let pPointsByTagNameElement of pPointsByTagName) {
    console.log(pPointsByTagNameElement.innerText);
    pPointsByTagNameElement.innerText = 'hello oktenweb!';
    console.log(pPointsByTagNameElement.innerText);
    }

// - знайти всі div та змінити ім колір на червоний
let divPointsByTagName = document.getElementsByTagName('div');
// console.log(divPointsByTagName);
for (let divPointsByTagNameElement of divPointsByTagName) {
    divPointsByTagNameElement.style.background = '#ff9c47';
    // divPointsByTagNameElement.style.background = 'red';
    // console.log(divPointsByTagNameElement);
}
