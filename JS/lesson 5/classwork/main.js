// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minnum =(a,b,c)=> {
//     if (a<b && a<c){console.log(a)}
//     else if (b<a && b<c){console.log(b)}
//     else if (c<a && c<b ){console.log(c)}
// }
// minnum( 10,1000,100)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let maxnum =(a,b,c)=> {
//     if (a>b && a>c){console.log(a)}
//     else if (b>a && b>c){console.log(b)}
//     else if (c>a && c>b ){console.log(c)}
// }
// maxnum( 10,1000,100)


// - створити функцію яка повертає найбільше число з масиву
// let masiv = [0,5,7,9,6,5];
// let maxOfarr = (masiv)=>{
//     let max = masiv[0]
//     for (const masivElement of masiv) {
//         if(masivElement > max){max = masivElement}
//     }
//     return max
// }
//
// let a = maxOfarr(masiv)
// console.log(a)

// - створити функцію яка повертає найменьше число з масиву
//
//     let masivD = [-100,5,7,9,6,5];
// let minarr=(masivD)=>{
//     let min = masivD[0]
//     for (let masivDElement of masivD) {
//         if(min>masivDElement) {min=masivDElement}
//
//     }
//     return min
// }
// let b = minarr(masivD)
// console.log(b)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mas = [1,2,20,50]
// let res = 0;
// let sum = (mas)=>{
//     for (let ma of mas) {
//         res = ma+res
//     }
//     return res
// }
// let c = sum(mas)
// console.log(c)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mass = [1,2,20,50]
// let ress = 0;
// let sums = (mass)=>{
//     for (let ma of mass) {
//         ress = (ma+ress)/mass.length
//     }
//     return Math.floor(ress)
// }
// let f = sums(mass)
// console.log(f)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let doom = (...args)=> {
//     let min = args[0]
//     let max  = args[0]
//     for (let arg of args) {
//         if(max<arg){max = arg}
//         if(min>arg){min = arg}
// }
//
//
//     console.log(max)
//     return (min)
// }
// let d = doom(2,50,100,-5,0)
// console.log(d)

// - створити функцію яка заповнює масив рандомними числами
//     (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let rand = (length)=>{
//     let ranmas = [];
//     for (let i = 0; i<length;i++){
//         ranmas.push(Math.round(Math.random()*100))
//     }
//     return ranmas
// }
// let s = rand(length)
// console.log(rand(100))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//

// let rand2 = (limit, length)=>{
//     let ram =[];
//     for (let i=0; i<length;i++){
//         ram.push(Math.round(Math.random() * limit));
//     }
//     return ram
// }
//
// let g = rand2(10,50)
// console.log(g)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let fr = [1,2,3]
// let op = [];
// let oposite = (fr)=>{
//     for (let i = fr.length - 1; i >= 0; i--) {
//          op.push(fr[i]);
//
//     }
//     return op
// }
//
// let h = oposite(fr)
// console.log(h)
















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

