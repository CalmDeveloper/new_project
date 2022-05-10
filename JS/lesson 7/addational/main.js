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


//
// function userCard(number) {
//     const getKey = () => {
//         if (number < 1 && number > 3 && number === undefined) {
//             console.error('Помилка! Введіть номер з діапазоном [1,3]')
//         } else if (number => 1 && number <= 3) {
//             return number
//         }
//     };
//     const getDate = () => {
//         return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
//     }
//
//
//     let objCard1 = {
//         balance: 100,
//         transactionLimit: 100,
//         historyLogs: [],
//         key: getKey()
//
//     }
//     let objCard2 = {
//         balance: 100,
//         transactionLimit: 100,
//         historyLogs: [],
//         key: getKey()
//
//     }
//     let objCard3 = {
//         balance: 100,
//         transactionLimit: 100,
//         historyLogs: [],
//         key: getKey()
//     }
//     const transferMoney =  (money, cardKey) => {
//         if (cardKey === 1) {
//             card1.putCredits(money)
//         } else if (cardKey === 2) {
//             card2.putCredits(money)
//         } else if (cardKey === 3) {
//             card3.putCredits(money)
//         }
//     }
//
//     return {
//         getCardOptions() {
//             if (getKey() === 1) {
//                 {
//                     return objCard1
//                 }
//             } else if (getKey() === 2) {
//                 {
//                     return objCard2
//                 }
//             } else if (getKey() === 3) {
//                 {
//                     return objCard3
//                 }
//             }
//         },
//         putCredits(money) {
//             if (getKey() === 1) {
//                 const history = {operationType: 'Received credits', credits: money, operationTime: getDate()}
//                 objCard1.historyLogs.push(history)
//                 return objCard1.balance += money
//
//             } else if (getKey() === 2) {
//                 const history = {operationType: 'Received credits', credits: money, operationTime: getDate()}
//                 objCard2.historyLogs.push(history)
//                 return objCard2.balance += money
//             } else if (getKey() === 3) {
//                 const history = {operationType: 'Received credits', credits: money, operationTime: getDate()}
//                 objCard3.historyLogs.push(history)
//                 return objCard3.balance += money
//             }
//         },
//         takeCredits(money) {
//             if (getKey() === 1) {
//                 if (objCard1.transactionLimit < money) {
//                     console.error('Transaction limit exceeded!!!')
//                 } else if (objCard1.balance < money) {
//                     console.error('Not enough funds in the account!!!')
//                 } else {
//                     const history = {operationType: 'Withdrawal of credits', credits: money, operationTime: getDate()}
//                     objCard1.historyLogs.push(history)
//                     return objCard1.balance -= money
//                 }
//             }
//             if (getKey() === 2) {
//                 if (objCard2.transactionLimit < money) {
//                     console.error('Transaction limit exceeded!!!')
//                 } else if (objCard2.balance < money) {
//                     console.error('Not enough funds in the account!!!')
//                 } else {
//                     const history = {operationType: 'Withdrawal of credits', credits: money, operationTime: getDate()}
//                     objCard2.historyLogs.push(history)
//                     return objCard2.balance -= money
//                 }
//             }
//             if (getKey() === 3) {
//                 if (objCard3.transactionLimit < money) {
//                     console.error('Transaction limit exceeded!!!')
//                 } else if (objCard3.balance < money) {
//                     console.error('Not enough funds in the account!!!')
//                 } else {
//                     const history = {operationType: 'Withdrawal of credits', credits: money, operationTime: getDate()}
//                     objCard3.historyLogs.push(history)
//                     return objCard3.balance -= money
//                 }
//             }
//         },
//         setTransactionLimit(money) {
//             if (getKey() === 1) {
//                 const history = {operationType: 'Transaction limit change', credits: money, operationTime: getDate()}
//                 objCard1.historyLogs.push(history)
//                 return objCard1.transactionLimit = money
//
//             } else if (getKey() === 2) {
//                 const history = {operationType: 'Transaction limit change', credits: money, operationTime: getDate()}
//                 objCard2.historyLogs.push(history)
//                 return objCard2.transactionLimit = money
//             } else if (getKey() === 3) {
//                 const history = {operationType: 'Transaction limit change', credits: money, operationTime: getDate()}
//                 objCard3.historyLogs.push(history)
//                 return objCard3.transactionLimit = money
//             }
//         },
//         transferCredits(money, cardKey) {
//
//
//             if (getKey() === 1) {
//                 if (objCard1.transactionLimit < money) {
//                     console.error('Transaction limit exceeded!!!')
//                 } else if (objCard1.balance < money) {
//                     console.error('Not enough funds in the account!!!')
//                 } else {
//                     const history = {operationType: 'Transfer money', credits: money, operationTime: getDate()}
//                     objCard1.historyLogs.push(history)
//                     transferMoney(money, cardKey)
//                     return objCard1.balance -= money+(money * 0.005);
//                 }
//             }
//
//             if (getKey() === 2) {
//                 if (objCard2.transactionLimit < money) {
//                     console.error('Transaction limit exceeded!!!')
//                 } else if (objCard2.balance < money) {
//                     console.error('Not enough funds in the account!!!')
//                 } else {
//                     const history = {operationType: 'Transfer money', credits: money, operationTime: getDate()}
//                     objCard2.historyLogs.push(history)
//                     transferMoney(money, cardKey)
//                     return objCard2.balance -= money+(money * 0.005);
//                 }
//             }
//             if (getKey() === 3) {
//                 if (objCard3.transactionLimit < money) {
//                     console.error('Transaction limit exceeded!!!')
//                 } else if (objCard3.balance < money) {
//                     console.error('Not enough funds in the account!!!')
//                 } else {
//                     const history = {operationType: 'Transfer money', credits: money, operationTime: getDate()}
//                     objCard3.historyLogs.push(history)
//                     transferMoney(money, cardKey)
//                     return objCard3.balance -= money+(money * 0.005);
//                 }
//             }
//
//         }
//     }
// }
//
// let card1 = userCard(1)
// let card2 = userCard(2)
// console.log(card1.getCardOptions())
// console.log(card2.getCardOptions())
//
//
// card1.transferCredits(20, 2)
//
// console.log(card1.getCardOptions())
// console.log(card2.getCardOptions())
//
//
//
//







//////////////////////////////////////////////////////////////////////////////////////////////////






//
// function UserCard(card)
// {
//     let balance;
//     let i;
//     let j;
//     let k;
//     let cards = [];
//     class UserAccount
//     {
//         constructor(name)
//         {
//             this.name = name;
//         }
//         userCards(count_cards)
//         {
//             let n = 0;
//             for (let i = 0; i < count_cards; i++) {
//                 cards.push({
//                     key: n = n + 1, balance: 100, transactionLimit: 100, historyLogs:
//                         [{operationType: "Receivedcredits", credits: 0, operationTime: 0},
//                             {operationType: 'Withdrawalofcredits', credits: 0, operationTime: 0},
//                             {operationType: 'Transactionlimitchange', credits: 0, operationTime: 0}]
//                 })
//             }
//             console.log(cards)
//         }
//     }
//     function putCredits(putCash)
//     {
//         for (let i = 0; i < cards.length; i++) {
//             if (card === cards[i].key) {
//                 cards[i].balance = cards[i].balance + putCash;
//                 for (let k = 0; k < cards[i].historyLogs.length; k++) {
//                     if (cards[i].historyLogs[k].operationType === "Receivedcredits")
//                         cards[i].historyLogs[k].credits = putCash;
//                     cards[i].historyLogs[k].operationTime = (`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:`)
//                 }
//             }
//         }
//     }
//
//     function takeCredits(takeCash)
//     {
//         for (let i = 0; i < cards.length; i++) {
//             if (card === cards[i].key) {
//                 if (cards[i].balance >= takeCash) {
//                     cards[i].balance = cards[i].balance - takeCash;
//                     for (let k = 0; k < cards[i].historyLogs.length; k++) {
//                         if (cards[i].historyLogs[k].operationType === "Withdrawalofcredits")
//                             cards[i].historyLogs[k].credits = takeCash;
//                         cards[i].historyLogs[k].operationTime = (`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:`)
//                     }
//                 } else {
//                     console.error('Недостатньо коштів для переказу')
//                 }
//             }
//         }
//     }
//     function setTransactionLimit(transLimit)
//     {
//         for (let i = 0; i < cards.length; i++) {
//             if (card === cards[i].key) {
//                 cards[i].transactionLimit = transLimit;
//                 for (let k = 0; k < cards[i].historyLogs.length; k++) {
//                     if (cards[i].historyLogs[k].operationType === "Transactionlimitchange")
//                         cards[i].historyLogs[k].credits = transLimit;
//                     cards[i].historyLogs[k].operationTime = (`${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:`)
//                 }
//             }
//         }
//     }
//
//
//     function transferCredits(credits, cardRec)
//     {
//         for (let i = 0; i < cards.length; i++) {
//             if (card === cards[i].key) {
//                 if (credits * 1.05 > cards[i].balance || cards[i].transactionLimit < credits * 1.05) {
//                     console.error('Недостатньо коштів')
//                 } else {
//                     cards[i].balance = cards[i].balance - credits * 1.05
//                     for (let j = 0; j < cards.length; j++) {
//                         if (cardRec === cards[j].key) {
//                             cards[j].balance = cards[j].balance + credits
//                         }
//                     }
//                 }
//             }
//         }
//
//
//     }
//
//     function getCardOptions()
//     {
//         let userNew = new UserAccount('Svitlana')
//         userNew.userCards(3)
//         putCredits(5000)
//         takeCredits(200)
//         setTransactionLimit(10000)
//         transferCredits(200, 1)
//     }
//     getCardOptions()
//
// }
// UserCard(3)







