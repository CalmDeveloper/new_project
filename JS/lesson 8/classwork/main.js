// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let addClass = document.getElementById(`main_header`);
//
// console.log(addClass.className = `december2021`)
// b) робить шириниу елементу ul 400px
//     let widthOfElement = document.getElementsByTagName(`ul`)
// for (const widthOfElementElement of widthOfElement) {
//     widthOfElementElement.style.width = `400px`
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let widthOfElementOfLinkList = document.getElementsByClassName(`linkList`)
// for (const widthOfElementOfLinkListElement of widthOfElementOfLinkList) {
//     widthOfElementOfLinkListElement.style.width = `50%`
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let getText = document.getElementsByClassName(`listElement2`)
// let arr =  [];
// for (const textElement of getText) {
//     console.log(arr.push(textElement))
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let getLi = document.getElementsByTagName(`li`)
// for (const liElement of getLi) {
//     liElement.style.backgroundColor = `grey`
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let getA = document.getElementsByTagName(`a`)
// for (const aElement of getA) {
//     aElement.className = `anchor`
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (const aElement of getA) {
//     if (aElement.text ===`link3`){aElement.style.fontSize = `40px`}
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const aElement of getA) {
//     aElement.className = `element_XXX`;
//     aElement.innerHTML = `XXX`
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let enterColor = prompt(`Введіть колір фону`,`grey`);
// let getSub  = document.getElementsByClassName(`sub-header`);
// for (const subElement of getSub) {
//     subElement.style.backgroundColor = enterColor
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let enterColor1 = prompt(`Введіть колір фону`,`grey`);
// let getSub  = document.getElementsByClassName(`sub-header`);
// for (const subElement of getSub) {
// if (subElement.textContent===`content 2 segment`){subElement.style.backgroundColor = enterColor1}
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let enterColor2 = prompt(`Введіть колір фону`,`grey`);
// let getElement = document.getElementsByClassName(`content_1`);
// for (const elementElement of getElement) {
//     console.log(elementElement.innerHTML = enterColor2)
// }

// l) отримати елементи p та змінити їм padding на 20px
// let getP = document.getElementsByTagName(`p`)
// for (const pElement of getP) {
//     pElement.style.padding = `20px`
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let getText2 = document.getElementsByClassName(`text2`)
// for (const text2Element of getText2) {
//     text2Element.innerHTML = `mon-year`
// }