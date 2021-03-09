function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}


//1
let div1 = task(1, '- Реалізувати друкарську машинку.' +
    '\n У вас є текст "Hello World".' +
    '\n Ваша функція має друкувати цей текст по 1 симоволу в браузері.' +
    '\n КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.' +
    '\n Цим самим ви маєте симулювати написання даного тексту юзером.' +
    '\n Приклад: "Hello"' +
    '\n Затримки:' +
    '\n H (затримка 0.6)' +
    '\n e (затримка 0.1)' +
    '\n l (затримка 0.3)' +
    '\n l (затримка 0.7)' +
    '\n о (затримка 1)' +
    '');
{

    let p = document.createElement('p');
    div1.appendChild(p);
    let input = document.createElement('input');
    input.type = 'text';
    p.appendChild(input);

    function getTimeout(min = 1, max = 10) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let timeout = (Math.floor(Math.random() * (max - min + 1)) + min) * 100; //Максимум и минимум включаются
        console.log(timeout);
        return timeout;
    }

    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve('H');
        }, getTimeout());
    })
        .then(value => {
            console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('e');
                }, getTimeout());
            });
        })
        .then(value => {
            console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('l');
                }, getTimeout());
            });
        })
        .then(value => {
            console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('l');
                }, getTimeout());
            });
        })
        .then(value => {
            console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('o');
                }, getTimeout());
            });
        })
        .then(value => {
            console.log(value)
            input.value += value;
        });
}


//2
let div2 = task(2, '-за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.' +
    '\n За допомогою document.createElement вивести їх в браузер.' +
    '\n Помістити кожен окремий об\'єкт в блок, при цьому кожен внутрішній об\'єкт в свій блок (блок в блоці).' +
    '');


//3
let div3 = task(3, '- за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.' +
    '\n За допомогою document.createElement вивести їх в браузер.' +
    '\n Помістити кожен окремий об\'єкт в блок, при цьому кожен внутрішній об\'єкт(якщо він існує) в свій блок (блок в блоці).' +
    '');


//4
let div4 = task(4, '- за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.' +
    '\n За допомогою document.createElement вивести їх в браузер.' +
    '\n Помістити кожен окремий об\'єкт в блок, при цьому кожен внутрішній об\'єкт(якщо він існує) в свій блок (блок в блоці).' +
    '');


//5
let div5 = task(5, '-при помощи fetch (как в примере) получить от jsonplaceholder все posts.' +
    '\n Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.' +
    '\n Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.' +
    '\n Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту' +
    '\n часть из них уже кто-то делал , так вот, пофиг , что авы их уже делали, делаем еще раз, не копипастим!!!!!!!!!!! >:-()' +
    '');