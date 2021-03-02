// https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson7/tasks/task

function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}

//1
let div1 = task(1, 'Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".' +
    '\n');
{
    function createButton() {
        let button = document.createElement('button');
        button.id = 'target1';
        button.innerText = 'Создать/удалить елемент с id = text';
        div1.appendChild(button);
    };

    function createElementDiv() {
        let div = document.createElement('div');
        div.id = 'text';
        div.innerText = 'Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".';
        div1.appendChild(div);
    };

    function deleteElementDiv() {
        let div = document.getElementById('text');
        div.parentNode.removeChild(div);
    };

    createButton();

    let target = document.getElementById('target1');
    target.onclick = function () {
        let txt = document.getElementById('text');
        if (txt === null) {
            createElementDiv();
        } else deleteElementDiv();
        // console.log(txt);
    };
}


//2
let div2 = task(2, 'Создайте кнопку, при клике на которую, она будет скрывать сама себя.' +
    '\n');
{
    function createButton() {
        let button = document.createElement('button');
        button.id = 'target2';
        button.innerText = 'Создайте кнопку, при клике на которую, она будет скрывать сама себя';
        div2.appendChild(button);
    };

    createButton();

    let target = document.getElementById('target2');
    target.onclick = function () {
        target.hidden = true;
    };
}


//3
let div3 = task(3, 'створити інпут який приймає вік людини та кнопку яка підтверджує дію.' +
    'При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,' +
    ' та повідомити про це користувача' +
    '\n');
{
    let inp = document.createElement('input');
    inp.type = 'number';
    inp.name = 'age';
    inp.value = 31;
    inp.placeholder = 'enter your age';
    div3.appendChild(inp);

    let target3 = document.createElement('button');
    target3.id = 'target3';
    target3.innerText = 'Send';
    div3.appendChild(target3);

    target3.onclick = function () {
        let inputs = document.getElementsByTagName('input');
        for (const input of inputs) {
            if (input.name === 'age') {
                if (input.value < 18) {
                    console.log('under 18 years old');
                } else console.log('over 18 years old');
            }
        }
    };
}


//4
let div4 = task(4, 'Создать список комментариев , пример объекта коментария' +
    '{title : \'lorem\', body:\'lorem ipsum dolo sit ameti\'}.' +
    'Вывести список комментариев в документ, каждый в своем блоке.' +
    'Добавьте каждому комментарию по кнопке для сворачивания его body.' +
    '\n');
{
    let comments = [
        {
            title: 'lorem',
            body: 'lorem ipsum dolo sit ameti'
        },
        {
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            title: "qui est esse",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        },
        {
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        },
        {
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
        },
        {
            title: "dolorem eum magni eos aperiam quia",
            body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
        },
        {
            title: "magnam facilis autem",
            body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
        },
        {
            title: "dolorem dolore est ipsam",
            body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
        },
        {
            title: "nesciunt iure omnis dolorem tempora et accusantium",
            body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
        },
        {
            title: "optio molestias id quia eum",
            body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
        },
    ]
    for (let comment of comments) {
        let div = document.createElement('div');
        div4.appendChild(div);
        let title = document.createElement('h3');
        title.innerText = comment.title;
        div.appendChild(title);
        let body = document.createElement('p');
        body.innerText = comment.body;
        div.appendChild(body);
        let butt = document.createElement('button');
        butt.innerText = 'roll up';
        div.appendChild(butt);

        butt.onclick = function (e) {
            console.log(e);
            if (body.hidden) {
                body.hidden = false;
            } else body.hidden = true;
        };
    }
}


//5
let div5 = task(5, '***- Сворити масив не цензцрних слів.' +
    'Сворити інпут текстового типу.' +
    'Якщо людина вводить слово і воно міститься в масиві не цензурних слів' +
    'кинути алерт з попередженням.' +
    'Перевірку робити при натисканні на кнопку' +
    '\n');
{
    let obsceneWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

    let inp = document.createElement('input');
    inp.type = 'text';
    inp.name = 'word';
    inp.placeholder = 'enter word';
    div5.appendChild(inp);

    let checkWord = document.createElement('button');
    checkWord.innerText = 'check Word';
    div5.appendChild(checkWord);

    checkWord.onclick = function () {
        (obsceneWords.includes(inp.value)) && (alert('Ah ah ah!'));
    }
}


//6
let div6 = task(6, '- Создайте меню, которое раскрывается/сворачивается при клике' +
    '\n' +
    '\n');
let menu = [
    'Верховна Рада України',
    'Президент України',
    'Верховний Суд',
    'Кабінет Міністрів України',
    'Нацбанк'
];

let span = document.createElement('span');
span.innerText = '▶ menu';
div6.appendChild(span);

let ul = document.createElement('ul');
ul.hidden = true;
div6.appendChild(ul);

for (let elem of menu) {
    let li = document.createElement('li');
    li.innerText = elem;
    ul.appendChild(li);
}

span.onclick = function () {
    if (span.innerText === '▼ menu') {
        span.innerText = '▶ menu';
        ul.hidden = true;
    } else {
        span.innerText = '▼ menu';
        ul.hidden = false;
    }
};


//7
let div7 = task(7, '- створити 2 форми  по 2 інпути в кожній.' +
    ' ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.' +
    '\n' + 'Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)' +
    '\n' + 'Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.' +
    '\n');

function createElem(tagName, parent, id, innerText, action, type, name, value) {
    let elem = document.createElement(tagName);
    !(id === '') && (elem.id = id);
    !(innerText === '') && (elem.innerText = innerText);
    !(action === '') && (elem.action = action);
    !(type === '') && (elem.type = type);
    !(name === '') && (elem.name = name);
    !(value === '') && (elem.value = value);
    parent.appendChild(elem);
};

let form1 = createElem('form', div7, '', 'Form1 Как по вашему мнению расшифровывается аббревиатура &quot;ОС&quot;?', 'xxx1', '', '', '');
let input11 = createElem('input', form1, '', 'input11', '', 'text', 'imya', 'petro');
let input12 = createElem('input', form1, '', 'input12', '', 'text', 'vik', '22');

let form2 = createElem('form', div7, '', 'Form2', 'xxx2', '', '', '');
let input21 = createElem('input', form2, '', 'input21', '', 'text', 'imya', 'mykola');
let input22 = createElem('input', form2, '', 'input22', '', 'text', 'vik', '33');

let p = createElem('p', div7, '', '', '', '', '', '');
let submit = createElem('input', p, '', '', '', 'submit', '', '');


//8
// let div8 = task(8, '- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.' +
//     '\n' + 'При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.' +
//     '\n' + '(Додатковачастина для завдання)' +
//     '\n');

