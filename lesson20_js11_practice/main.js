// https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson8/tasks/task.txt

function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}


function createElem(tagName, parent, id, innerText, action, type, name, value, labelFor) {
    let elem = document.createElement(tagName);
    !(id === '') && (elem.id = id);
    !(innerText === '') && (elem.innerText = innerText);
    !(action === '') && (elem.action = action);
    !(type === '') && (elem.type = type);
    !(name === '') && (elem.name = name);
    !(value === '') && (elem.value = value);
    !(labelFor === '') && (elem.for = labelFor);
    parent.appendChild(elem);
    return elem;
}


//1
let div1 = task(1, '- Дана textarea.' +
    '\n В неё вводится текст.' +
    '\n Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.' +
    '\n' +
    '');
{
    let txtArea = document.createElement('textarea');
    div1.appendChild(txtArea);
    txtArea.name = 'txtArea';
    txtArea.id = 'txtArea';

    let keys = Object.keys(localStorage);
    for (let key of keys) {
        (key === 'txtArea1') && (txtArea.value = localStorage.getItem(key));
    }

    txtArea.onkeyup = function () {
        localStorage.setItem('txtArea1', txtArea.value);
    };

    txtArea.onmousemove = function () {
        localStorage.setItem('txtArea1', txtArea.value);
    };
}


//2
let div2 = task(2, '- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.' +
    '\n Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).' +
    '\n Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.' +
    '\n Сделайте ваш скрипт как можно более универсальным.' +
    '\n' +
    '');

{
    let form = createElem('form', div2, 'myForm', '', '', '', 'form', '');
    let input1 = createElem('input', form, 'input1', '', '', 'text', 'imya', '');
    let input2 = createElem('input', form, 'input2', '', '', 'number', 'vik', '');

    let pCheckbox = createElem('p', form, 'checkbox', '', '', '', '', '');
    let input31 = createElem('input', pCheckbox, 'input31', 'Еда', '', 'checkbox', 'select', 'Еда');
    let label31 = createElem('label', pCheckbox, '', 'Еда', '', '', '', '', 'input31');
    let input32 = createElem('input', pCheckbox, 'input32', 'Напитки', '', 'checkbox', 'select', 'Напитки');
    let label32 = createElem('label', pCheckbox, '', 'Напитки', '', '', '', '', 'input32');

    let pRadio = createElem('p', form, 'radio', '', '', '', '', '');
    let input41 = createElem('input', pRadio, 'input41', 'Пиво', '', 'radio', 'drink', 'rad1');
    let label41 = createElem('label', pRadio, '', 'Пиво', '', '', '', '', 'input41');
    let input42 = createElem('input', pRadio, 'input42', 'Чай', '', 'radio', 'drink', 'rad2');
    let label42 = createElem('label', pRadio, '', 'Чай', '', '', '', '', 'input42');
    let input43 = createElem('input', pRadio, 'input43', 'Кофе', '', 'radio', 'drink', 'rad3');
    let label43 = createElem('label', pRadio, '', 'Кофе', '', '', '', '', 'input43');

    let txtArea = createElem('textarea', form, 'txtArea', '', '', 'textarea', '', '');

    let btn = createElem('button', div2, 'btn', 'DELETE localStorage', '', '', '', '');

    let keys = Object.keys(localStorage);

    btn.onclick = function () {
        for (let i = 0; i < form.length; i++) {
            let formElement = form[i];
            localStorage.removeItem(formElement.id);
        }
    }

    for (let key of keys) {
        for (let i = 0; i < form.length; i++) {
            let formElement = form[i];
            if (key === formElement.id) {
                if ((formElement.type === 'checkbox') || (formElement.type === 'radio')) {
                    formElement.checked = localStorage.getItem(key);
                } else (formElement.value = localStorage.getItem(key));
            }
        }
    }

    function addToLocalStorage(formElement) {
        if (formElement.type === 'checkbox') {
            localStorage.setItem(formElement.id, formElement.checked);
        } else if (formElement.type === 'radio') {
            let radios = document.getElementsByName(formElement.name);
            // console.log(radios);
            for (let i = 0; i < radios.length; i++) {
                let radio = radios[i];
                localStorage.setItem(radio.id, radio.checked);
            }
        } else (localStorage.setItem(formElement.id, formElement.value));
    }

    for (let i = 0; i < form.length; i++) {
        let formElement = form[i];

        formElement.onkeyup = () => addToLocalStorage(formElement);
        formElement.onclick = () => addToLocalStorage(formElement);

        txtArea.onmousemove = function () {
            (formElement.type === 'textarea') && (addToLocalStorage(formElement));
        };
    }
}


//3
let div3 = task(3, '-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить"' +
    ' и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....' +
    '\n Требование : хранить историю своих изменений (даже после перезагрузки страницы).' +
    '\n Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться' +
    ' по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).' +
    '\n' + '');
{
    let txtArea = createElem('textarea', form, 'txtArea', '', '', 'textarea', '', '');

    let btn = createElem('button', div2, 'btn', 'DELETE localStorage', '', '', '', '');
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта