function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}

let div1 = task(1, 'є сторінка rules.html...');
let div2 = task(2, 'Є масив котрий характеризує правила. Створити скрипт...');
let div1d = task('1d', 'за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users...');
let div2d = task('2d', 'за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts...');
let div3d = task('3d', 'за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments...');
let div4d = task('4d', 'при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. ...');


// 1. є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//// let div1 = task(1, 'є сторінка rules.html...');
{
    let arr = [];
    let i = 0;
    let elements = document.getElementsByTagName('h2');
    for (let element of elements) {
        arr[i] = element.innerText;
        i++;
    }
    console.log(arr);
    let content = document.getElementById('content');
    let ul = document.createElement('ul');
    content.appendChild(ul);

    for (let arrElement of arr) {
        let li = document.createElement('li');
        li.innerText = arrElement;
        ul.appendChild(li);
    }
}


// 2. Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//// let div2 = task(2, 'Є масив котрий характеризує правила. Створити скрипт...');
{
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
    let wrap = document.createElement('div');
    wrap.id = 'wrap';

    for (let i = 0; i < rules.length; i++) {
        let div = document.createElement('div');
        div.classList.add('rules');
        div.classList.add('rule' + (i + 1));
        wrap.appendChild(div);

        let h2 = document.createElement('h2');
        h2.innerText = rules[i].title;
        div.appendChild(h2);

        let p = document.createElement('p');
        p.innerText = rules[i].body;
        div.appendChild(p);
    }
    div2.appendChild(wrap);
    // document.body.appendChild(div2);
}


// Додатково:


// Додатково 1. за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//// let div1d = task('Додатково 1', 'за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users...');
// {
func("https://jsonplaceholder.typicode.com/", 'users', div1d);
// }

// {
//     let baseURL = "https://jsonplaceholder.typicode.com/users";
//     fetch(baseURL)
//         .then(resp => resp.json())
//         .then(usersJsonplaceholder => {
//                 let jsonUsers = JSON.stringify(usersJsonplaceholder);
//                 // console.log(jsonUsers);
//                 let objUsers = JSON.parse(jsonUsers);
//
//                 // console.log(objUsers);
//
//                 function createElem(tagName, childOf, innerText) {
//                     let elem = document.createElement(tagName);
//                     elem.innerText = innerText;
//                     childOf.appendChild(elem);
//                     return elem;
//                 }
//
//                 function createObj(obj, childOf, tagName, tagIndex = 0) {
//                     let tag = '';
//                     if (tagIndex > 5) {
//                         tag = 'p';
//                     } else {
//                         tag = tagName + (tagIndex == 0 ? '' : tagIndex)
//                     }
//
//                     for (let objKey in obj) {
//                         let propertyByKey = obj[objKey];
//
//                         if (objKey === 'name') {
//                             continue;
//
//                         } else if (typeof propertyByKey === 'object') {
//
//                             objDiv = createElem(tag, childOf, objKey + ':');
//                             // console.log('objDiv', propertyByKey)
//
//                             createObj(propertyByKey, objDiv, tagName, (tagIndex == 0 ? '' : (tagIndex + 1)));
//                         } else {
//                             let property = createElem(tag, childOf, objKey + ': ' + propertyByKey);
//                         }
//                     }
//                 }
//
//                 let users = createElem('div', div1d, '');
//                 users.id = 'users';
//                 createElem('h1', users, 'users:'.toUpperCase());
//
//                 for (let objUser of objUsers) {
//                     let userDiv = createElem('div', users, '');
//                     let userName = createElem('h2', userDiv, objUser.name.toUpperCase());
//
//                     createObj(objUser, userDiv, 'h', 3);
//                 }
//             }
//         );
// }

// Додатково 2. за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//// let div2d = task('Додатково 2', 'за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts...');
func("https://jsonplaceholder.typicode.com/", 'posts', div2d);

function createElem(childOf, tagName, innerText) {
    let elem = document.createElement(tagName);
    elem.innerText = innerText;
    childOf.appendChild(elem);
    return elem;
};

function createObj(obj, childOf, tagName, tagIndex = 0) {
    let tag = '';
    if (tagIndex > 5) {
        tag = 'p';
    } else {
        tag = tagName + (tagIndex == 0 ? '' : tagIndex)
    }

    for (let objKey in obj) {
        let propertyByKey = obj[objKey];

        if (typeof propertyByKey === 'object') {
            let objDiv = createElem(childOf, tag, objKey + ':');
            createObj(propertyByKey, objDiv, tagName, (tagIndex == 0 ? '' : (tagIndex + 1)));
        } else {
            let property = createElem(childOf, tag, objKey + ': ' + propertyByKey);
        }
    }
};


function outputData(objs, parentId, childOf) {
    let parentBlock = createElem(childOf, 'div', '');
    parentBlock.id = parentId;
    createElem(parentBlock, 'h2', (parentId + ':').toUpperCase());

    for (let obj of objs) {
        let objDiv = createElem(parentBlock, 'div', '');
        createObj(obj, objDiv, 'h', 3);
    }
};

function func(baseURL, suffOfBaseURL, childOf) {
    fetch(baseURL + suffOfBaseURL)
        .then(resp => resp.json())
        .then(objsJsonplaceholder => {
                let jsonObjs = JSON.stringify(objsJsonplaceholder);
                let objs = JSON.parse(jsonObjs);
                outputData(objs, suffOfBaseURL, childOf);
            }
        );
};


// Додатково 3. за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//// let div3d = task('Додатково 3', 'за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments...');
func("https://jsonplaceholder.typicode.com/", 'comments', div3d);


// ******
// Додатково! 4. при помощи fetch (как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
//// let div4d = task('Додатково! 4', 'при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. ...');
func4("https://jsonplaceholder.typicode.com/", 'posts', 'comments');

function func4(baseURL, suffOfBaseURL1, suffOfBaseURL2) {
    fetch(baseURL + suffOfBaseURL1)
        .then(resp1 => resp1.json())
        .then(objsJsonplaceholder1 => {
            let jsonObjs1 = JSON.stringify(objsJsonplaceholder1);
            let objs1 = JSON.parse(jsonObjs1);
            return objs1; //posts
        }).then(function (objs1) {
        fetch(baseURL + suffOfBaseURL2)
            .then(resp2 => resp2.json())
            .then(objsJsonplaceholder2 => {
                    let jsonObjs2 = JSON.stringify(objsJsonplaceholder2);
                    let objs2 = JSON.parse(jsonObjs2); //comments

                    for (let objs1Element of objs1) {
                        objs1Element.comments = [];
                        for (let objs2Element of objs2) {
                            if (objs1Element.id === objs2Element.postId) {
                                objs1Element.comments.push(objs2Element);
                            };
                        };
                    };

                    outputData(objs1, suffOfBaseURL1 + '_' + suffOfBaseURL2, div4d);
                }
            );
    });
};
