// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let first = document.getElementById(`first`);
// let second = document.getElementById(`second`);
// let btn = document.getElementById(`btn`);
//
// btn.onclick = function () {
//     console.log(`first`)
//     console.log(`second`)
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Створи таблицю';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
//
// button.addEventListener(`click`,function (){
//     let tr =  inputOne.value;
//     let td =  inputTwo.value;
//     let item =  inputThree.value;
//
//
//     function tableGenerator(tr,td,content) {
// let div = document.createElement(`div`);
//        div.style.border = `red solid 1px`;
//         let table = document.createElement(`table`);
//
//         for(let i = 0; i<tr; i++){
//            let tr = document.createElement(`tr`);
//            tr.style.border = `green solid 1px`;
//            for (let j = 0; j<td; j++){
//                let td = document.createElement(`td`);
//                td.innerText = `${content}`;
//                td.style.border = `green solid 1px`;
//                table.appendChild(tr)
//                tr.appendChild(td);
//
//            }
//
//         }
//         div.appendChild(table);
//         document.body.appendChild(div);
//
//     }
//     tableGenerator(tr,td,item)
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.

let arr = [`рагуль`,`дурак`,`тупий`];
let input = document.createElement(`input`);
document.body.append(input);


let  button = document.createElement(`button`);
document.body.append(button);
button.innerText = `Click`;

button.addEventListener(`click`,function () {
    let text = input.value.toLowerCase();
    for (const mate of arr) {
      if (text.includes(`${mate}`)){alert(`Це матюк`)
      text===``;
      return}
    }
    if (text){alert(`Це не матюк`);
        text===``;}

})



