// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let one = "first part of houre"
// let two = "second part of houre"
// let thee = "third part of houre"
// let fore = "forth part of houre"
// let diferent = "you didn't enter correct number"
// let time = prompt("Введіть число  від 0 - 59")
//
// if (time >= 0 && time <= 15) {
//     console.log(one)
// } else if (time >= 16 && time <= 30) {
//     console.log(two)
// } else if (time >= 31 && time <= 45) {
//     console.log(thee)
// } else if (time >= 46 && time <= 59) {
//     console.log(fore)
// }  else {console.log(diferent)}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// {
//     let one = "first decad"
//     let two = "second decad"
//     let thee = "third decad"
//     let wrong = "you didn't enter correct number"
//     let day = +prompt("enter number of the month")
//
//     if (day >= 1 && day <= 10) {
//         console.log(one)
//     } else if (day >= 11 && day <= 20) {
//         console.log(two)
//     } else if (day >= 21 && day <= 31) {
//         console.log(thee)
//     } else {
//         console.log(wrong)
//     }
//
// }


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)



// let test = 'csknvk';
//
//     (test === true) ? console.log("true") : console.log("false");
//
//
// let test1 = 'text2';
// if (test1 === true) {
//     console.log("true")
// } else {
//     console.log("false")
// }

//
// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// {
// let a = +prompt( "Введіть число")
// if (a !==0) {console.log('Вірно')
// } else {console.log('Невірно')}
// }
//
// {
// let a = +prompt( "Введіть число")
// let b = 'Вірно'
// let c = `Невірно`
// (a !== 0) ? console.log(b) : console.log(c);
//
// }

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let numberOfday = +prompt("Введіть порядковий номер дня тижня від 1 до 7")
// switch (numberOfday){
//     case 1: console.log("Понеділок - вчити англійську");
//     break;
//     case 2: console.log("Вівторок - забрати посилку");
//         break;
//     case 3: console.log("Середа - купити продукти");
//         break;
//     case 4: console.log("Четвер - гра в футбол");
//         break;
//     case 5: console.log("П'ятниця - Зустріч з друзями");
//         break;
//     case 6: console.log("Субота - піти до лікаря");
//         break;
//     case 7: console.log("Неділя- готувати їсти");
//         break;
//     default: console.log('Перевірьте правильність введених даних');
//         break;
// }



// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let days = +prompt('Введіть в цифрах кількість днів в році.')
// if (days % 4===0){console.log('Високосний рік')
// } else {
//     console.log('Звичайний рік')
// }

// (days % 4===0) ? console.log('Високосний рік') : console.log('Звичайний рік')


    // - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
let ofName =`ECMAScript`
 let name = prompt(`Яка офіційна назва JavaScript?`)
if (name === ofName) {alert('Правильно')
} else {alert('Не правильно. Відповідь - ECMAScript')}
