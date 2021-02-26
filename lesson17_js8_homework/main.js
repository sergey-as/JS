// https://github.com/GrayHead/js_demos/blob/master/this_one_folder_that_you_need/lesson5/tasks/task.txt

function task(taskNumber, taskTxt = '') {
    console.log('----' + taskNumber + '. ' + taskTxt);
    taskN = document.createElement('div');
    taskN.id = 'task' + taskNumber;
    taskN.innerText = `----${taskNumber}. ${taskTxt}`;
    document.body.appendChild(taskN);
    return taskN;
}

//1
let div1 = task(1, '-  Створити функцію конструктор для об\'єкту який описує теги' +
    '\n' + 'Властивості...' +
    '');
// -  Створити функцію конструктор для об'єкту який описує теги
//  Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }

{
    function AttrProperties(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }

    function TagProperties(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }


    let a = new TagProperties(
        'a',
        'Тег <\a> является одним из важных элементов HTML и предназначен для создания ссылок.',
        [
            new AttrProperties(
                'accesskey',
                'Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки буквой или цифрой.'),
            new AttrProperties(
                'charset',
                'Используется для указания кодировки текста, на который ведет ссылка.')
        ]
    );
    console.log('a', a);

    let div = new TagProperties(
        'div',
        'Элемент <\div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
        [
            new AttrProperties(
                'align',
                'Выравнивание содержимого контейнера <\div> по краю.'),
            new AttrProperties(
                'title',
                'Добавляет поясняющий текст к контейнеру <\div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом.')
        ]
    );
    console.log('div', div);

    let h1 = new TagProperties(
        'h1',
        'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
        [
            new AttrProperties('align', 'Определяет выравнивание заголовка.'),
            new AttrProperties('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.')
        ]
        )
    ;
    console.log('h1', h1);

    let span = new TagProperties(
        'span',
        'Тег <\span> предназначен для определения строчных элементов документа.' +
        ' В отличие от блочных элементов, таких как <\table>, <\p> или <\div>, с помощью тега' +
        ' <\span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',
        [
            new AttrProperties('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'),
            new AttrProperties('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),
            new AttrProperties('contenteditable', 'Сообщает, что элемент доступен для редактирования пользователем.'),
        ]
    );
    console.log('span', span);

    let input = new TagProperties(
        'input',
        'Тег <\input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить' +
        ' взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.' +
        ' Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны' +
        ' быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно.' +
        ' То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',
        [
            new AttrProperties('type', 'Сообщает браузеру, к какому типу относится элемент формы.'),
            new AttrProperties('value', 'Значение элемента.'),
        ]
    );
    console.log('input', input);

    let form = new TagProperties(
        'form',
        'Тег <\form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм' +
        ' не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы,' +
        ' изменять его и применять по своему усмотрению.',
        [
            new AttrProperties('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.'),
            new AttrProperties('action', 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер. В качестве' +
                ' обработчика может выступать CGI-программа или HTML-документ, который включает в себя серверные сценарии (например, Parser).' +
                ' После выполнения обработчиком действий по работе с данными формы он возвращает новый HTML-документ.'),
            new AttrProperties('name', 'Определяет уникальное имя формы. Как правило, имя формы используется для доступа к ее элементам через скрипты.'),
        ]
    );
    console.log('form', form);

    let option = new TagProperties(
        'option',
        'Тег <\option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом,' +
        ' указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер,' +
        ' то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
        [
            new AttrProperties('disabled', 'Блокирует элемент списка для его выбора.'),
            new AttrProperties('label', 'Атрибут предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <\option>.' +
                ' Если атрибут label присутствует, то текст внутри тега <option> игнорируется и в списке выводится значение label.'),
            new AttrProperties('selected', 'Делает текущий пункт списка выделенным. Если у тега <\select> добавлен атрибут multiple,' +
                ' то можно выделять более одного пункта.'),
        ]
    );
    console.log('option', option);

    let select = new TagProperties(
        'select',
        'Тег <\select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
        [
            new AttrProperties('name', 'Определяет уникальное имя элемента <\select>. Как правило, это имя используется для доступа' +
                ' к данным через скрипты или для получения выбранного значения списка на сервере.'),
            new AttrProperties('multiple', 'Наличие атрибута multiple сообщает браузеру отображать содержимое элемента <\select> как' +
                ' список множественного выбора. '),
        ]
    );
    console.log('select', select);
}


//2
let div2 = task(2, '-  Створити класс  для об\'єкту який описує теги' +
    '\n' + 'Властивості...' +
    '');
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }

{
    class AttrProperties {
        constructor(titleOfAttr, actionOfAttr) {
            this.titleOfAttr = titleOfAttr;
            this.actionOfAttr = actionOfAttr;
        }
    }

    class TagProperties {
        constructor(titleOfTag, action, attrs) {
            this.titleOfTag = titleOfTag;
            this.action = action;
            this.attrs = attrs;
        }
    }

    let a = new TagProperties(
        'a',
        'Тег <\a> является одним из важных элементов HTML и предназначен для создания ссылок.',
        [
            new AttrProperties(
                'accesskey',
                'Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки буквой или цифрой.'),
            new AttrProperties(
                'charset',
                'Используется для указания кодировки текста, на который ведет ссылка.')
        ]
    );
    console.log('a', a);

    let div = new TagProperties(
        'div',
        'Элемент <\div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
        [
            new AttrProperties(
                'align',
                'Выравнивание содержимого контейнера <\div> по краю.'),
            new AttrProperties(
                'title',
                'Добавляет поясняющий текст к контейнеру <\div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом.')
        ]
    );
    console.log('div', div);

    let h1 = new TagProperties(
        'h1',
        'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
        [
            new AttrProperties('align', 'Определяет выравнивание заголовка.'),
            new AttrProperties('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.')
        ]
        )
    ;
    console.log('h1', h1);

    let span = new TagProperties(
        'span',
        'Тег <\span> предназначен для определения строчных элементов документа.' +
        ' В отличие от блочных элементов, таких как <\table>, <\p> или <\div>, с помощью тега' +
        ' <\span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',
        [
            new AttrProperties('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'),
            new AttrProperties('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),
            new AttrProperties('contenteditable', 'Сообщает, что элемент доступен для редактирования пользователем.'),
        ]
    );
    console.log('span', span);

    let input = new TagProperties(
        'input',
        'Тег <\input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить' +
        ' взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.' +
        ' Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны' +
        ' быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно.' +
        ' То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',
        [
            new AttrProperties('type', 'Сообщает браузеру, к какому типу относится элемент формы.'),
            new AttrProperties('value', 'Значение элемента.'),
        ]
    );
    console.log('input', input);

    let form = new TagProperties(
        'form',
        'Тег <\form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм' +
        ' не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы,' +
        ' изменять его и применять по своему усмотрению.',
        [
            new AttrProperties('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные формы.'),
            new AttrProperties('action', 'Указывает обработчик, к которому обращаются данные формы при их отправке на сервер. В качестве' +
                ' обработчика может выступать CGI-программа или HTML-документ, который включает в себя серверные сценарии (например, Parser).' +
                ' После выполнения обработчиком действий по работе с данными формы он возвращает новый HTML-документ.'),
            new AttrProperties('name', 'Определяет уникальное имя формы. Как правило, имя формы используется для доступа к ее элементам через скрипты.'),
        ]
    );
    console.log('form', form);

    let option = new TagProperties(
        'option',
        'Тег <\option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом,' +
        ' указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер,' +
        ' то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
        [
            new AttrProperties('disabled', 'Блокирует элемент списка для его выбора.'),
            new AttrProperties('label', 'Атрибут предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <\option>.' +
                ' Если атрибут label присутствует, то текст внутри тега <option> игнорируется и в списке выводится значение label.'),
            new AttrProperties('selected', 'Делает текущий пункт списка выделенным. Если у тега <\select> добавлен атрибут multiple,' +
                ' то можно выделять более одного пункта.'),
        ]
    );
    console.log('option', option);

    let select = new TagProperties(
        'select',
        'Тег <\select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
        [
            new AttrProperties('name', 'Определяет уникальное имя элемента <\select>. Как правило, это имя используется для доступа' +
                ' к данным через скрипты или для получения выбранного значения списка на сервере.'),
            new AttrProperties('multiple', 'Наличие атрибута multiple сообщает браузеру отображать содержимое элемента <\select> как' +
                ' список множественного выбора. '),
        ]
    );
    console.log('select', select);
}


//3
let div3 = task(3, 'Створити об\'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:' +
    '\n' + '-- drive () - яка виводить...' +
    '');
// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
    manufacturer: 'Ford',
    model: 'Focus',
    year: 2015,
    maxspeed: 185,
    enginevolume: 1.8,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    },
    info: function () {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.year);
        console.log(this.maxspeed);
        console.log(this.enginevolume);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxspeed += newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        this.driver = driver;
    },
};

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(25);
car.changeYear(2020);
car.addDriver({name: 'petro', age: 45});
console.log(car);


//4
let div4 = task(4, 'Створити функцію конструктор яка дозволяє створювати об\'єкти car,' +
    ' з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:' +
    '\n' + '-- drive () - яка виводить...' +
    '');
// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Cars(manufacturer, model, year, maxspeed, enginevolume) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginevolume = enginevolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };

    this.info = function () {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.year);
        console.log(this.maxspeed);
        console.log(this.enginevolume);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
};

let car2 = new Cars('honda', 'civic', 2005, 190, 1.6);
console.log('car2', car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(25);
car2.changeYear(2020);
car2.addDriver({name: 'vasyl', age: 55});
console.log('car2', car2);


//5
let div5 = task(5, '- Створити клас який дозволяє створювати об\'єкти car,' +
    ' з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:' +
    '\n' + '-- drive () - яка виводить...' +
    '');
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class CarsClass {
    constructor(manufacturer, model, year, maxspeed, enginevolume) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.maxspeed = maxspeed;
        this.enginevolume = enginevolume;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };

    info() {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.year);
        console.log(this.maxspeed);
        console.log(this.enginevolume);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxspeed += newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
};

let car3 = new CarsClass('audi', 'A100', 2001, 220, 2.0);
console.log('car3', car3);
car3.drive();
car3.info();
car3.increaseMaxSpeed(25);
car3.changeYear(2020);
car3.addDriver({name: 'mykola', age: 35});
console.log('car3', car3);


//6
let div6 = task(6, '-створити класс попелюшка з полями ім\'я, вік, розмір ноги' +
    '\n' + '--Створити 10 попелюшок , покласти їх в масив' +
    '\n' + '--Сторити об\'єкт класу "принц" за допомоги класу який має поля ім\'я, вік, туфелька яку він знайшов.' +
    '\n' + '-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом' +
    '');
{
    let Cinderella = class {
        constructor(name, age, footsize) {
            this.name = name;
            this.age = age;
            this.footsize = footsize;
        };
    };

    class Prince {
        constructor(name, age, shoesize) {
            this.name = name;
            this.age = age;
            this.shoesize = shoesize;
        };
    };

    let cinderellas = [
        new Cinderella('olya', 17, 37),
        new Cinderella('katya', 18, 37),
        new Cinderella('anya', 19, 38),
        new Cinderella('oksana', 19, 36),
        new Cinderella('masha', 19, 39),
        new Cinderella('lesya', 20, 37),
        new Cinderella('ira', 20, 39),
        new Cinderella('marina', 21, 40),
        new Cinderella('kristina', 21, 38),
        new Cinderella('svitlana', 22, 39),
    ];
    console.log(cinderellas);
    let prince = new Prince('ivan', 23, 36);
    console.log(prince);

    for (let i = 0; i < cinderellas.length; i++) {
        let cinderella = cinderellas[i];
        (prince.shoesize === cinderella.footsize) && (console.log(`cinderella fo prince: ${cinderella.name} ${cinderella.age} ${cinderella.footsize}`, cinderella));
    }
}

//7
let div7 = task(7, '-створити функцію конструктор попелюшка з полями ім\'я, вік, розмір ноги' +
    '\n' + '--Створити 10 попелюшок , покласти їх в масив' +
    '\n' + '--Сторити об\'єкт типу "принц" за допомоги функції конструктора з полями ім\'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"' +
    '\n' + '-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить' +
    '');
{
    class Cinderella {
        constructor(name, age, footsize) {
            this.name = name;
            this.age = age;
            this.footsize = footsize;
        };
    };

    class Prince {
        constructor(name, age, shoesize) {
            this.name = name;
            this.age = age;
            this.shoesize = shoesize;
            this.findCinderella = function (cinderellas) {
                for (let i = 0; i < cinderellas.length; i++) {
                    if (this.shoesize === cinderellas[i].footsize) return cinderellas[i];
                }
            };
        };
    };

    let cinderellas = [
        new Cinderella('olya', 17, 37),
        new Cinderella('katya', 18, 37),
        new Cinderella('anya', 19, 38),
        new Cinderella('oksana', 19, 36),
        new Cinderella('masha', 19, 39),
        new Cinderella('lesya', 20, 37),
        new Cinderella('ira', 20, 39),
        new Cinderella('marina', 21, 40),
        new Cinderella('kristina', 21, 38),
        new Cinderella('svitlana', 22, 39),
    ];
    console.log(cinderellas);
    let prince = new Prince('ivan', 23, 36);
    console.log(prince);
    console.log(prince.findCinderella(cinderellas));
}
