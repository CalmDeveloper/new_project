// additional.txt////////////////////////////////

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }





// class Geo {
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class Adress {
//
//     constructor(street, suite, city, zipcode, lat,lng) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = new Geo(lat,lng)
//     }
//
// }
//
// class Company {
//     constructor(CompanyName, catchPhrase, bs) {
//         this.CompanyName = CompanyName;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
// class Object {
//
//     constructor(id, name, username, email, street, suite, city, zipcode, lat,lng, phone, website, CompanyName, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.adress = new Adress(street, suite, city, zipcode, lat,lng);
//         this.phone = phone;
//         this.website = website;
//         this.company = new Company(CompanyName, catchPhrase, bs)
//     }
// }
//
// let object = new Object(1, `Taras`, `Anonim`, `mak@mail.com`, `Doroshenka`, 'Apt. 556', `Lviv`,
//     '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', `www.aa.com`, `Okten`,
//     'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(object)

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// function Tag(titleOfTag,action,attrs) {
// 	this.titleoftag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// }
// let title = "<a>";
// let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let atribytes = [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
// 	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tag(title,action,atribytes);
// console.log(a);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Tag {
// 	constructor(titleOfTag,action,attrs){
// 	this.titleoftag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// 	}
// }
// class Atribyt {
//     constructor(titleOfAttr, actionOfAttr) {
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;
//     }
// }
//
// let title = "<a>";
// let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let atribytes = [
//     new Atribyt('accesskey','Переход к области с помощью комбинации клавиш'),
//     new Atribyt('coords','Устанавливает координаты активной области.'),
//     new Atribyt('download','Предлагает скачать указанный по ссылке файл.')
// ];
// let a = new Tag(title,action,atribytes);
// console.log(a);
//
//
//



// сlosures.pdf/           /////////////////////////////////////////

// let balance = 100;
// let transeactionLimite = 100;
// let historyLogs = [];
// let card1 = [];
// let card2 = [];
// let card3 = [];
// let key = number
// let userCard = (number)=>{
//     if (number===1){return card1}
//     if (number===2){return card2}
//     if (number===3){return card3}
//     if (number <=0 && number > 3 ){console.log(`enter one number from 1 to 3`)}
// }
//
// let putCredits = (...arg)=>{
//
//     return balance = balance + arg };
//
// let takeCredits = (...arg)=>{
//     if (arg<=transeactionLimite && arg > balance){return balance = balance - arg}else
//     {console.error(`You cant take more then ${transeactionLimite} or ${balance}`)}
//     }
//
// let setTranseactionLimite = (...arg)=>{return transeactionLimite = arg + transeactionLimite};
//
// let transferCredits = (credit,keyOfCard)=>{
//     if (credit<=transeactionLimite && credit < balance){return balance = balance-credit}
// }




let balance = 100;
let transeactionLimite = 100;
let historyLogs = [];
let card1 = [];
let card2 = [];
let card3 = [];
let key = `number`
let userCard = (number)=>{
    if (number===1){return card1}
    if (number===2){return card2}
    if (number===3){return card3}
    if (number <=0 && number > 3 ){console.log(`enter one number from 1 to 3`)}
}




class Card1 {
    constructor(balance, transeactionLimite, key) {
        this.balance = balance;
        this.transeactionLimite = transeactionLimite;
        // this.historyLogs = historyLogs;
        this.key = key;
    }
    putCredits = (...arg)=>{

        return balance = balance + arg };

    takeCredits = (...arg)=>{
        if (arg<=transeactionLimite && arg > balance){return balance = balance - arg}else
        {console.error(`You cant take more then ${transeactionLimite} or ${balance}`)}
    }

    setTranseactionLimite = (...arg)=>{return transeactionLimite = arg + transeactionLimite};

    transferCredits = (credit,keyOfCard)=>{
        if (credit<=transeactionLimite && credit < balance){return balance = balance-credit;
        }
    }

}

let a = new Card1(balance,transeactionLimite,key)
console.log(a)
