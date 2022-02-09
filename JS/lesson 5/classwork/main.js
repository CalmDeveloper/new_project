// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a,b,c) {
//     if(a < b && a < c ){console.log(a)}
// else if (b < a && b < c ){console.log(b)}
// else if(c < a && c < b ) {console.log(c)}
// }
// minNum(50, 20, 30)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNum(a,b,c) {
//     if(a > b && a > c ){console.log(a)}
//     else if (b > a && b > c ){console.log(b)}
//     else if(c > a && c > b ) {console.log(c)}
// }
// maxNum(50, 20, 30)
// - створити функцію яка повертає найбільше число з масиву
// let masiv = [0,5,7,9,6,5];
//
// function masivMax(array) {
// let max = array[0]
// for (const number of array) {
//     if (number> max){max = number};
// }
// return max;
// }
// let a = masivMax(masiv);
// console.log(a)






// - створити функцію яка повертає найменьше число з масиву
// let ppp = [10,30,50,-200,1000,-5];
// function ddd(array) {
// let min = array[0]
// for (const number of array) {
//     if (number < min){min = number}
// }
//     return min;
// }
// let b = ddd(ppp)
// console.log(b)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let ppp = [10,30,50,-200,1000,-5];
// function masSum(arr) {
//     let res =0;
//     for (const arrElement of arr) {
//         res += arrElement; // res = res + arrElement
//     }
// return res;
//
// }
//
// console.log(masSum(ppp));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let ggg = [10,5,6,20,5,7,3];
// function sameNum(array) {
//     let res = 0
//     for (const arrayElement of array) {
//         res = (res + arrayElement)
//         result = res/array.length
//     }
//     return result;
// }
// let a = sameNum(ggg);
// console.log(a)



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let kkk = [1,2,3,4,5657,68,79,79];
// function minandmax(array) {
//     let min = array[0];
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (max < arrayElement){max = arrayElement}
//         if (min > arrayElement){min = arrayElement}
//
//     }
//     console.log(max);
//     return (min)
//
//
//
// }
// let a = minandmax(kkk)


// - створити функцію яка заповнює масив рандомними числами
//     (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function pushRandomNum(length) {
//     let num = [];
// for (let i= 0; i < length; i++) {
//     num.push(Math.floor(Math.random()*100))
// }
// return num;
// }
// let a = pushRandomNum(length)
// document.write(pushRandomNum(100))



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// function rand(length, limit ) {
//
//     let num = [];
//     for (let i = 0; i < length; i++){
//         num.push(Math.round(Math.random() * limit ));
//     }
//     return num;
// }

// document.write(rand(10, 20))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3]
// function oposite(arr) {
//
//     let two = [];
//     for (let elementarr of arr) {
//         for (let i = arr.length - 1; i >= 0;i--) {
//             two.push(arr[i]);
//
//         }
//         return two
//     }
//
//     }
// let a = oposite(arr)
// console.log(a)

