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
    let txtArea1 = document.createElement('textarea');
    div1.appendChild(txtArea1);
    txtArea1.name = 'txtArea1';
    txtArea1.id = 'txtArea1';

    let keys = Object.keys(localStorage);
    for (let key of keys) {
        (key === txtArea1.id) && (txtArea1.value = localStorage.getItem(key));
    }

    txtArea1.onkeyup = function () {
        localStorage.setItem('txtArea1', txtArea1.value);
    };

    txtArea1.onmousemove = function () {
        localStorage.setItem('txtArea1', txtArea1.value);
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

    let txtArea2 = createElem('textarea', form, 'txtArea2', '', '', 'textarea', '', '');

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

        txtArea2.onmousemove = function () {
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
    let p = createElem('p', div3, '', '', '', '', '', '');
    let btnLeft = createElem('input', p, 'btnLeft', '', '', 'button', '', '<==');
    let spanCountOfRead = createElem('span', p, 'countOfRead', '', '', '', '', '');
    let btnRight = createElem('input', p, 'btnRight', '', '', 'button', '', '==>');
    let txtArea3 = createElem('textarea', div3, 'txtArea3', '', '', 'textarea', '', '');
    txtArea3.style = 'width: 200px; height: 100px';
    let btnSave = createElem('input', div3, 'btnSave', '', '', 'button', '', 'Save');
    let btnRemoveItem = createElem('input', div3, 'btnRemoveItem', '', '', 'button', '', 'Remove Items');


    function setCountOfRead() {
        spanCountOfRead.innerText = countOfRead;
        localStorage.setItem('countOfRead', countOfRead);
    };

    let countOfSave = +localStorage.getItem('countOfSave');
    let countOfRead = countOfSave;
    setCountOfRead();
    txtArea3.value = localStorage.getItem(txtArea3.id + countOfRead);

    btnSave.onclick = () => {
        countOfSave++;
        countOfRead = countOfSave;
        setCountOfRead();
        localStorage.setItem('countOfSave', countOfSave);
        localStorage.setItem(txtArea3.id + countOfSave, txtArea3.value);
    };

    btnLeft.onclick = () => {
        console.log(countOfRead);
        countOfRead--;
        console.log(countOfRead);
        if (countOfRead < 1) {
            countOfRead = countOfSave;
            console.log(countOfRead);
        } else (countOfSave === 0) && (countOfRead = 0);
        setCountOfRead();
        txtArea3.value = localStorage.getItem(txtArea3.id + countOfRead);
    };

    btnRight.onclick = () => {
        countOfRead++;
        if (countOfRead > countOfSave > 0) {
            countOfRead = 1;
        } else (countOfSave === 0) && (countOfRead = 0);
        setCountOfRead();
        txtArea3.value = localStorage.getItem(txtArea3.id + countOfRead);
    };

    btnRemoveItem.onclick = () => {
        for (let i = 1; i <= countOfSave; i++) {
            localStorage.removeItem(txtArea3.id + i);
        }
        countOfSave = 0;
        setCountOfRead();
        localStorage.removeItem('countOfSave');
        localStorage.removeItem('countOfRead');
    }
}


//4
let div4 = task(4, '' +
    '\n' + '- Реализуйте записную книгу, хранящую данные в локальном хранилище.' +
    '\n' + 'Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения' +
    '\n' + 'Данные вводить через соответсвующую форму.' +
    '\n' + '--Каждому контакту добавить кнопку для удаления контакта.' +
    '\n' + '--Каждому контакту добавить кнопку редактироваиня.' +
    ' При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,' +
    ' которые уже заполнены данными объекта' +
    '');
{
    let phoneBook = [];
    let usersForInitiate = [
        {
            name: "Leanne Graham",
            phone: "1-770-736-8031 x56442",
            email: "Sincere@april.biz",
            companyName: "Romaguera-Crona",
            companyDepartment: "Multi-layered client-server neural-net",
            dateOfBirth: "01.02.1991"
        },
        {
            name: "Ervin Howell",
            phone: "010-692-6593 x09125",
            email: "Shanna@melissa.tv",
            companyName: "Deckow-Crist",
            companyDepartment: "Proactive didactic contingency",
            dateOfBirth: "18.05.1997"
        },
        {
            name: "Clementine Bauch",
            phone: "1-463-123-4447",
            email: "Nathan@yesenia.net",
            companyName: "Romaguera-Jacobson",
            companyDepartment: "Face to face bifurcated interface",
            dateOfBirth: "28.11.1990"
        },
        {
            name: "Patricia Lebsack",
            phone: "493-170-9623 x156",
            email: "Julianne.OConner@kory.org",
            companyName: "Robel-Corkery",
            companyDepartment: "Multi-tiered zero tolerance productivity",
            dateOfBirth: "08.10.1989"
        },
        {
            name: "Chelsey Dietrich",
            phone: "(254)954-1289",
            email: "Lucio_Hettinger@annie.ca",
            companyName: "Keebler LLC",
            companyDepartment: "User-centric fault-tolerant solution",
            dateOfBirth: "05.04.1980"
        },
        {
            name: "Mrs. Dennis Schulist",
            phone: "1-477-935-8478 x6430",
            email: "Karley_Dach@jasper.info",
            companyName: "Considine-Lockman",
            companyDepartment: "Synchronised bottom-line interface",
            dateOfBirth: "05.04.1980"
        },
        {
            name: "Kurtis Weissnat",
            phone: "210.067.6132",
            email: "Telly.Hoeger@billy.biz",
            companyName: "Johns Group",
            companyDepartment: "Configurable multimedia task-force",
            dateOfBirth: "03.07.1981"
        },
        {
            name: "Nicholas Runolfsdottir V",
            phone: "586.493.6943 x140",
            email: "Sherwood@rosamond.me",
            companyName: "Abernathy Group",
            companyDepartment: "Implemented secondary concept",
            dateOfBirth: "03.09.1983"
        },
        {
            name: "Glenna Reichert",
            phone: "(775)976-6794 x41206",
            email: "Chaim_McDermott@dana.io",
            companyName: "Yost and Sons",
            companyDepartment: "Switchable contextually-based project",
            dateOfBirth: "12.29.1973"
        },
        {
            name: "Clementina DuBuque",
            phone: "024-648-3804",
            email: "Rey.Padberg@karina.biz",
            companyName: "Hoeger LLC",
            companyDepartment: "Centralized empowering task-force",
            dateOfBirth: "11.09.1977"
        },
    ];

    function initiate(users) {
        phoneBook.splice(0, phoneBook.length);
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            phoneBook.push(`${user.name} ${user.phone}`);
            localStorage.setItem('phoneBook' + i, JSON.stringify(user));
        }
        showPhoneBook();
    };

    function removeItem() {
        for (let i = 0; i < phoneBook.length; i++) {
            localStorage.removeItem('phoneBook' + i);
        }
        initiate([]);
    };

    let p0 = createElem('p', div4, '', '', '', '', '', '');
    let btnInitiate = createElem('input', p0, 'btnInitiate', '', '', 'button', '', 'Initiate');
    let btnRemoveItem = createElem('input', p0, 'btnRemoveItem', '', '', 'button', '', 'Remove Items');
    btnInitiate.onclick = () => initiate(usersForInitiate);
    btnRemoveItem.onclick = () => removeItem();


    let ul = createElem('ul', div4, 'phoneBook', 'phoneBook', '', '', '', '');

    function fillArrObjPhoneBook() {
        let objPhoneBook = [];
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let partOfKey = key.slice(0, 'phoneBook'.length);
            if (partOfKey === 'phoneBook') {
                let id = +key.slice('phoneBook'.length);
                objPhoneBook[id] = JSON.parse(localStorage.getItem(key));
            }
        }
        return objPhoneBook;
    }

    function clearUl(id) {
        let ulPhoneBook = document.getElementById(id);
        while (ulPhoneBook.firstChild) {
            ulPhoneBook.removeChild(ulPhoneBook.firstChild);
        }
        return ulPhoneBook;
    }

    function showPhoneBook() {
        let objPhoneBook = fillArrObjPhoneBook();
        let ulPhoneBook = clearUl('phoneBook');

        for (let i = 0; i < objPhoneBook.length; i++) {
            let user = objPhoneBook[i];
            phoneBook[i] = `${user.name} ${user.phone}`;
        }


        for (let i = 0; i < phoneBook.length; i++) {
            let phoneBookElement = phoneBook[i];
            let p = createElem('p', ulPhoneBook, '', '', '', '', '', '');
            let li = createElem('li', p, '', phoneBookElement, '', '', '', '');
            let btnDel = createElem('input', p, '', '', '', 'button', '', 'Delete');
            btnDel.onclick = () => deleteElem(i);
            let btnEdit = createElem('input', p, '', '', '', 'button', '', 'Edit');
            btnEdit.onclick = () => editElem(i);
        }
    }

    showPhoneBook();

    function deleteElem(ind) {
        let objPhoneBook = fillArrObjPhoneBook();
        objPhoneBook.splice(ind, 1);
        removeItem();
        initiate(objPhoneBook);
        showPhoneBook();
    }

    function editElem(ind) {
        let objPhoneBook = fillArrObjPhoneBook();

        let edEl = objPhoneBook[ind];
        for (let edElKey in edEl) {
            let el = document.getElementById(edElKey);
            el.value = edEl[edElKey];
        }
        localStorage.setItem('currentEditingElement', ind);
    }

    function saveElem() {
        let objPhoneBook = fillArrObjPhoneBook();
        let ind = localStorage.getItem('currentEditingElement');
        (ind === null) && (ind = objPhoneBook.length);
        // console.log(ind);

        let saveEl = {};
        saveEl.name = document.getElementById('name').value;
        saveEl.phone = document.getElementById('phone').value;
        saveEl.email = document.getElementById('email').value;
        saveEl.companyName = document.getElementById('companyName').value;
        saveEl.companyDepartment = document.getElementById('companyDepartment').value;
        saveEl.dateOfBirth = document.getElementById('dateOfBirth').value;
        objPhoneBook[+ind] = saveEl;
        removeItem();
        initiate(objPhoneBook);
        showPhoneBook();
    }

    function newElem() {
        localStorage.removeItem('currentEditingElement');
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('companyName').value = '';
        document.getElementById('companyDepartment').value = '';
        document.getElementById('dateOfBirth').value = '';
    }


    let form = createElem('form', div4, 'myForm4', '', '', '', 'form', '');
    let p1 = createElem('p', form, '', 'name:', '', '', '', '');
    let name = createElem('input', p1, 'name', '', '', 'text', 'name', '');
    let p2 = createElem('p', form, '', 'phone:', '', '', '', '');
    let phone = createElem('input', p2, 'phone', '', '', 'text', 'phone', '');
    let p3 = createElem('p', form, '', 'email:', '', '', '', '');
    let email = createElem('input', p3, 'email', '', '', 'text', 'email', '');
    let p4 = createElem('p', form, '', 'companyName:', '', '', '', '');
    let companyName = createElem('input', p4, 'companyName', '', '', 'text', 'companyName', '');
    let p5 = createElem('p', form, '', 'companyDepartment:', '', '', '', '');
    let companyDepartment = createElem('input', p5, 'companyDepartment', '', '', 'text', 'companyDepartment', '');
    let p6 = createElem('p', form, '', 'dateOfBirth:', '', '', '', '');
    let dateOfBirth = createElem('input', p6, 'dateOfBirth', '', '', 'text', 'dateOfBirth', '');

    let btnSave = createElem('input', div4, 'btnSave', '', '', 'button', '', 'Save');
    btnSave.onclick = () => saveElem();
    let btnNew = createElem('input', div4, 'btnNew', '', '', 'button', '', 'New');
    btnNew.onclick = () => newElem();
}