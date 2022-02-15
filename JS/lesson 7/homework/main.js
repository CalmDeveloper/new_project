// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id,name,surname,email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.info= function () {return  this.id + this.name + this.surname + this.email +  this.phone}
//
// }
// let user1 = new User(1, `petro`, `popel`, `bwxa@hhh.com`,`0675280570`)
//
// let user2 = new User(2, `папм`, `ики`, `wxwa@hhh.com`,`0675675770`)
//
// let user3 = new User(3, `pпапа`, `popel`, `bfbf@крhh.com`,`067575750570`)
//
// let user4 = new User(4, `pапаo`, `poип`, `bcscs@hhth.com`,`067527675570`)
//
// let user5 = new User(5, `petro`, `pипl`, `bsccsax@hhh.com`,`06752464570`)
//
// let user6 = new User(6, `апапа`, `pпиипl`, `wxwa@bgbghh.com`,`06755380570`)
//
// let user7 = new User(7, `папа`, `poипel`, `bla@gbgh.com`,`067564640570`)
//
// let user8 = new User(8, `peаиаo`, `pипpel`, `bla@fbh.com`,`0675280570`)
//
// let user9 = new User(9, `peаиат`, `poсвpel`, `fbbfla@hhh.com`,`06758770570`)
// let user10 = new User(10, `pиаик`, `pиипel`, `bla@hhh.com`,`06767680570`)
// let user = [];
// user.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(user)

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let fUser = user.filter((a)=> {if (a.id % 2===0){return a}})
// console.log(fUser)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sUser = fUser.sort((a,b)=>{a.id-b.id})
// console.log(sUser)




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id,name,surname, email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }


}
let  clear1 = [
new Client(1,`taras`,`godmilk`,`ddd@gmail.com`, 30679558757,`book`),
new Client(1,`dima`,`gooilk`,`ddd@gmail.com`, 30679558757, `milk`),
new Client(1,`olga`,`grvvdmilk`,`ddd@gmail.com`, 30679558757, `water`),
new Client(1,`petro`,`ggmilk`,`ddd@gmail.com`, 30679558757, `pizza`),
new Client(1,`ostap`,`gcmilk`,`ddd@gmail.com`, 30679558757,`table`),
new Client(1,`ivan`,`gonilk`,`ddd@gmail.com`, 30679558757,`towels`),
new Client(1,`nazar`,`godmilk`,`ddd@gmail.com`, 30679558757,`knife`),
new Client(1,`olesya`,`godmilk`,`ddd@gmail.com`, 30679558757,`icecream`),
new Client(1,`njd`,`gofilk`,`ddd@gmail.com`, 30679558757,`headphons`),
new Client(1,`dvd`,`golk`,`ddd@gmail.com`, 30679558757,`hat`),
]
console.log(clear1)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort = clear1.sort((a,b)=>{a.order-b.order})
console.log(sort)