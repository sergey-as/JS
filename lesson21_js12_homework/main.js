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
        // console.log(timeout);
        return timeout;
    }

    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve('H');
        }, getTimeout());
    })
        .then(value => {
            // console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('e');
                }, getTimeout());
            });
        })
        .then(value => {
            // console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('l');
                }, getTimeout());
            });
        })
        .then(value => {
            // console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('l');
                }, getTimeout());
            });
        })
        .then(value => {
            // console.log(value);
            input.value += value;
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('o');
                }, getTimeout());
            });
        })
        .then(value => {
            // console.log(value)
            input.value += value;
        });
}


//2-5
function createElem(type, id = '', innerText = '', parent, background = '') {
    let elem = document.createElement(type);
    !(id === '') && (elem.id = id);
    !(innerText === '') && (elem.innerText = innerText);
    !(background === '') && (elem.style.background = background);
    parent.appendChild(elem);
    return elem;
}

function processObject(obj, parent) {
    for (let objKey in obj) {
        let objElement = obj[objKey];
        if (typeof objElement === 'object') {
            background = '';
            (parent.style.background === '#8abdd5') && (background = 'red');
            (parent.style.background === 'silver') && (background = '#8abdd5');
            (parent.style.background === '') && (background = 'silver');

            let objBlock = createElem('div', '', objKey + ':', parent, background);
            processObject(objElement, objBlock);
        } else {
            createElem('p', '', objKey + ': ' + objElement, parent);
        }
    }
}


//2
let div2 = task(2, '-за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.' +
    '\n За допомогою document.createElement вивести їх в браузер.' +
    '\n Помістити кожен окремий об\'єкт в блок, при цьому кожен внутрішній об\'єкт в свій блок (блок в блоці).' +
    '');

{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let jsonElement of json) {
                processObject(jsonElement, createElem('div', '', '', div2));
            }
        });
}


//3
let div3 = task(3, '- за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.' +
    '\n За допомогою document.createElement вивести їх в браузер.' +
    '\n Помістити кожен окремий об\'єкт в блок, при цьому кожен внутрішній об\'єкт(якщо він існує) в свій блок (блок в блоці).' +
    '');
{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let jsonElement of json) {
                processObject(jsonElement, createElem('div', '', '', div3));
            }
        });
}

//4
let div4 = task(4, '- за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.' +
    '\n За допомогою document.createElement вивести їх в браузер.' +
    '\n Помістити кожен окремий об\'єкт в блок, при цьому кожен внутрішній об\'єкт(якщо він існує) в свій блок (блок в блоці).' +
    '');
{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (let jsonElement of json) {
                processObject(jsonElement, createElem('div', '', '', div4));
            }
        });
}


//5
let div5 = task(5, '-при помощи fetch (как в примере) получить от jsonplaceholder все posts.' +
    '\n Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.' +
    '\n Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.' +
    '\n Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту' +
    '\n часть из них уже кто-то делал , так вот, пофиг , что авы их уже делали, делаем еще раз, не копипастим!!!!!!!!!!! >:-()' +
    '');
{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            // console.log('posts', posts);
            return posts;
        })
        .then(function (posts) {
                for (let post of posts) {
                    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
                        .then(response => response.json())
                        .then(comments => {
                            post.comments = comments;
                            console.log('post', post);
                            processObject(post, createElem('div', '', '', div5));
                        });
                    // break;
                }
            }
        )
}
