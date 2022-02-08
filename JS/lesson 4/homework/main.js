// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a,b) {
    let result = a*b
return result
}
let result = square(10, 15)
console.log(result)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareOfcircle(r) {
    let P = 3.14;
    let result2 = P*(r*r);
    return result2;
}
let result2 = squareOfcircle(5)
console.log(squareOfcircle(5))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareOfcylinder(r,h) {
    let P = 3.14;
let result3 = 2*P*r*h;
return  result3;
}
let result3 = squareOfcylinder(5,10)
console.log(result3)
// - створити функцію яка приймає масив та виводить кожен його елемент
let masive = [1,3,4,5,6,7,8]
function getmasive() {
    for (let argument of arguments) {
        console.log(argument)
    }
}
getmasive(masive)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pC() {
    for (let argument of arguments) {
        document.write(argument)
    }
}
 pC(`same_text`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCr() {

    for (let argument of arguments) {
        document.write(`<ul>
<li>${argument}</li>
<li>${argument}</li>
<li>${argument}</li>
</ul>`)

    }
}
ulCr(`taras`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCrLinum(n,x){
    document.write(`<ul>`)
    for (i=0; i<n; i++){
    document.write(`<li>${x}</li>`)
    }
    document.write(`</ul>`)
}

ulCrLinum(3,`blabla`)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let massive2 = [1,4,true,[],`irivhr`];

function primitive(masive2) {
    document.write(`<ol>`)
    for (i=0; i < masive2.length; i++){
        document.write(`<li>${masive2[i]}</li>`)
    }
    document.write(`</ol>`)
}
primitive(massive2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [{id : 76743,name : `Taras`,age : 28}, {id : 454,name : `Mikel`,age : 30}];
function funct(array) {
    for (const peaceOfarray of array) {
        document.write(`<div>${peaceOfarray.id}.${peaceOfarray.name} - ${peaceOfarray.age}</div>`);
    }

}
funct(array)