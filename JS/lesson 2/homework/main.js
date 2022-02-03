// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let one = "first part of houre"
let two = "second part of houre"
let thee = "third part of houre"
let fore = "forth part of houre"
let diferent = "you didn't enter the number"
let time = prompt("Введіть число  від 0 - 59")

if (time >= 0 && time <= 15) {
    console.log(one)
} else if (time >= 16 && time <= 30) {
    console.log(two)
} else if (time >= 31 && time <= 45) {
    console.log(thee)
} else if (time >= 46 && time <= 59) {
    console.log(fore)
}  else {console.log(diferent)}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

