// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let  numberOne = +prompt('Введіть перше число.')
// let  numberTwo = +prompt('Введіть друге число.')
//
//
// if (numberOne > numberTwo && numberOne !== numberTwo){alert("Максимальне число:"+" "+numberOne)
// } else if (numberOne === numberTwo) {alert('Два числа є однакові.')
// } else if  (numberOne < numberTwo) {
//     alert("Максимальне число:" + " " + numberTwo)
// }
// else  {alert(`Спробуйте  ввести кожне число ще раз`)}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let numberOfapartment = +prompt('Вкажіть номер квартири')
if (numberOfapartment >= 1 && numberOfapartment <= 20) {
    alert("Ваша квартира знаходиться в першому під'їзді.");
} else if (numberOfapartment >= 21 && numberOfapartment <= 48) {
    alert("Ваша квартира знаходиться в другому під'їзді.")
} else if (numberOfapartment >= 49 && numberOfapartment <= 90) {
    alert("Ваша квартира знаходиться в третьому під'їзді.")
} else {
    alert("Перевірте правильність введення номеру квартири.")
}
