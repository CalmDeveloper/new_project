//1. - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
//
// let div = document.createElement(`div`)
// div.style.width = `400px`;
// div.style.height = `400px`;
// div.style.background = `grey`
// document.body.append(div);
// div.classList.add(`class`)
// let h1 = document.createElement(`h1`);
// document.body.append(h1)
// h1.innerText = `text`
//
//
// window.onclick = function (e) {
//     let mass = [];
//     mass.push(e.target)
//     for (const element of mass) {
//         console.log(element)
//     }
// }
//  // or
// window.onclick = function (e) {
//     console.log(`Tag name -  ${e.target.tagName}; Class -  ${e.target.classList.value}; Id -  ${e.target.id}; Heigth - ${e.target.clientHeight}; Width - ${e.target.clientWidth}`)
//
// }

//2. - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// window.addEventListener("click", function (e){
//     let popup = document.createElement("span")
//     popup.classList.add(`pop`)
//     e.target.append(popup)
//     popup.innerText = `Tag name -  ${e.target.tagName}; Class -  ${e.target.classList.value}; Id -  ${e.target.id}; Heigth - ${e.target.clientHeight}; Width - ${e.target.clientWidth}`;
// })




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// let one = document.getElementById(`one`);
// let two = document.getElementById(`two`);
// let three = document.getElementById(`three`);
//
// one.onclick = function () {
//     let arr = [];
//     if (one.checked) {
//         arr = usersWithAddress.filter(value => !value.status)
//     }
// let fatherDiv = document.createElement("div");
//     document.body.append(fatherDiv)
//     for (const arrElement of arr) {
//             let id = document.createElement(`div`);
//             let name = document.createElement(`div`);
//             let age = document.createElement(`div`);
//             let status = document.createElement(`div`);
//             let address = document.createElement(`div`);
//             address.innerText = `address:`;
//             id.innerText = `id: ${arrElement.id}`;
//             name.innerText = `name: ${arrElement.name}`;
//             age.innerText = `age: ${arrElement.age}`;
//             status.innerText = `status: ${arrElement.status}`;
//             fatherDiv.append(id,name,age,status,address);
//
//         for (const Key in arrElement.address) {
//             let li = document.createElement(`li`)
//             address.append(li)
//             li.innerText = arrElement.address[Key]
//         }
//         }
// }
//
// two.onclick = function () {
//     let arr = [];
//     if (two.checked) {
//         arr = usersWithAddress.filter(value => {if(value.age>=29){return value}})
//     }
//     let fatherDiv = document.createElement("div");
//     document.body.append(fatherDiv)
//     for (const arrElement of arr) {
//         let id = document.createElement(`div`);
//         let name = document.createElement(`div`);
//         let age = document.createElement(`div`);
//         let status = document.createElement(`div`);
//         let address = document.createElement(`div`);
//         address.innerText = `address:`;
//         id.innerText = `id: ${arrElement.id}`;
//         name.innerText = `name: ${arrElement.name}`;
//         age.innerText = `age: ${arrElement.age}`;
//         status.innerText = `status: ${arrElement.status}`;
//         fatherDiv.append(id,name,age,status,address);
//
//         for (const Key in arrElement.address) {
//             let li = document.createElement(`li`)
//             address.append(li)
//             li.innerText = arrElement.address[Key]
//         }
//     }
// }
//
// three.onclick = function () {
//     let arr = [];
//     if (three.checked) {
//         arr = usersWithAddress.filter(value => value.address.city===`Kyiv`)
//     }
//     let fatherDiv = document.createElement("div");
//     document.body.append(fatherDiv)
//     for (const arrElement of arr) {
//         let id = document.createElement(`div`);
//         let name = document.createElement(`div`);
//         let age = document.createElement(`div`);
//         let status = document.createElement(`div`);
//         let address = document.createElement(`div`);
//         address.innerText = `address:`;
//         id.innerText = `id: ${arrElement.id}`;
//         name.innerText = `name: ${arrElement.name}`;
//         age.innerText = `age: ${arrElement.age}`;
//         status.innerText = `status: ${arrElement.status}`;
//         fatherDiv.append(id,name,age,status,address);
//
//         for (const Key in arrElement.address) {
//             let li = document.createElement(`li`)
//             address.append(li)
//             li.innerText = arrElement.address[Key]
//         }
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
function rec() {
  let   forward = document.createElement(`button`);
    let   back = document.createElement(`button`);
    document.body.append(forward,back);
    forward.innerText = `forward`;
    back.innerText = `back`;


}
rec();
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
