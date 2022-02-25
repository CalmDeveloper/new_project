// 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
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


// 2.    - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
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

//3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button =  document.getElementById(`but`)


// button.onclick = function () {
//
//     let input = document.getElementById(`inp`).value;
//     if (+input<=18){console.log(`тобі менше 18 років`)}else
//     if (!+input){console.log(`Ви не ввели число`)}else
//         console.log(`Ви повнолітній`)
//         }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.- Создайте меню, которое раскрывается/сворачивается при клике
// let button = document.querySelector(`h1`)
// let list = document.getElementsByClassName(`hiden`)[0]
// button.onclick = function () {
//     list.classList.toggle(`hiden`)
// }

// 5. - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
];

let  mainDiv = document.createElement(`div`)
for (const comment of comments) {
    let  div = document.createElement(`div`);
    let  button = document.createElement(`button`);
    let  br = document.createElement(`br`);
    let  ul = document.createElement(`ul`);
    let  liTitle = document.createElement(`li`);
    let  liBody = document.createElement(`li`);

    liTitle.innerText = comment.title;
    liBody.innerText = comment.body;

    button.innerText = `закрий мене`;
    document.body.append(mainDiv)
    mainDiv.append(div)
    div.append(button,br,ul);
    ul.append(liTitle,liBody)

    button.onclick = function () {
        ul.classList.toggle(`hiden`)
    }

}






