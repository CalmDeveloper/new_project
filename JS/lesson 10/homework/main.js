// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement(`div`);
// document.body.append(div)
// div.id = `text`
//
// let firstButton = document.createElement(`button`)
// firstButton.innerText = `first button`
// firstButton.classList.add(`btn`)
// let a =  document.body.appendChild(firstButton)
//
//
// firstButton.onclick = function () {
//     div.classList.add(`hide`)
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button  = document.createElement(`button`);
// document.body.append(button);
// button.classList.add(`second_button`);
// button.innerText = `hide button`
//
//
// button.onclick = function () {
//     button.classList.add(`hide`)
//
// }

////////////////////////////////////////////////////////////////////////////////////////////

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let button =  document.getElementById(`but`)


// button.onclick = function () {
//
//     let input = document.getElementById(`inp`).value;
//     if (+input<=18){console.log(`тобі менше 18 років`)}else
//     if (!+input){console.log(`Ви не ввели число`)}else
//         console.log(`Ви повнолітній`)
//         }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Создайте меню, которое раскрывается/сворачивается при клике

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
