// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement(`div`);
// document.body.appendChild(block);
// block.classList.add(`wrap`);
// block.classList.add(`collapse`);
// block.classList.add(`alpha`);
// block.classList.add(`beta`);
// block.style.backgroundColor = `red`;
// block.style.color = `blue`;
// block.style.fontSize = `40px`;
// document.body.appendChild(block.cloneNode(true));
// let secondBlock = block.cloneNode(true)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let createDiv = document.createElement(`div`);
//     let div = document.body.appendChild(createDiv) ;
//     div.innerText =` ${coursesAndDurationArrayElement.title} , ${coursesAndDurationArrayElement.monthDuration}`
//
// }
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//




//////////////////////////////////////////////////////////////////////////////////////////
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let CreateDiv = document.createElement(`div`);
//     let  div = document.body.appendChild(CreateDiv);
//     div.classList.add(`item`);
//     let CreateH1 = document.createElement(`h1`);
//     div.appendChild(CreateH1);
//     CreateH1.classList.add(`heading`);
//     CreateH1.innerText = `${item.title}`;
//     let  CreateP = document.createElement(`p`);
//     div.appendChild(CreateP);
//     CreateP.classList.add(`description`);
//     CreateP.innerText = `${item.monthDuration}`
//
// }



