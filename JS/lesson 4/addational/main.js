// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// let func = (...arg)=> {
// let result = 0;
// // if (arg.length===1){return arg}else
//         for (let argElement of arg) {
//                 result += argElement
//             }
//     return result
//         }
// let h = func(1,`dt`)
// console.log(h)



// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

//     let arr1 = [1,2,3,4];
//     let arr2 = [2,3,4,5];
// let result = [];
// let func = (arr1,arr2)=> {
//     if (arr1.length===arr2.length){
//
//     result.push(arr1[0]+arr2[0])
//     result.push(arr1[1]+arr2[1])
//     result.push(arr1[2]+arr2[2])
//     result.push(arr1[3]+arr2[3])
// }
// return result
// }
// let a = func(arr1,arr2)
// console.log(a)

//abo
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];

// let func = (arr1,arr2)=> {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(i===j) {
//                 result.push(arr1[i] + arr2[j])
//             }
//         }
//     }
//     return result
// }
// let a = func(arr1,arr2)
// console.log(a)




// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr1 = {name: 'Dima', age: 13};
// let arr2 = {model: 'Camry'};
// let funKey = (arr1,arr2)=>{
//     let result = [];
//     for (let arr1Key in arr1) {
//         result.push(arr1Key)
//     }
//     for (let arr2Key in arr2) {
//         result.push(arr2Key)
//
//
//     }
//     return result
// }
// let c = funKey(arr1,arr2)
// console.log(c)


//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arr1 = {name: 'Dima', age: 13};
// let arr2 = {model: 'Camry'};
// let funKey = (arr1,arr2)=>{
//     let result = [];
//     for (let arr1Key in arr1) {
//         result.push(arr1[arr1Key])
//     }
//     for (let arr2Key in arr2) {
//         result.push(arr2[arr2Key])
//
//
//     }
//     return result
// }
// let c = funKey(arr1,arr2)
// console.log(c)