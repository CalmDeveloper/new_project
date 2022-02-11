// Дано натуральное число n. Выведите все числа от 1 до n.
//   let n = 10
// for (let i=0; i<n; i++){
//     document.write(`${i} `)
// }

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let calc = (a,b,)=>{
//     if (a<b){
//
//     for (let i = a ;i<=b; i++){
//         document.write(`${i} `)}
//     } else
//         if (a>b){
//         for ( let i = a ; i >= b;i--){
//             document.write(`${i} `)}
//         }
//
// }
//
// calc(5, 15)





// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [9,8,0,4];
// let app = [];
// let foo = (arr, tipe)=>{
//     for (let arrElement of arr) {
//         if (tipe ===0){ app.push(arr[1], arr[0],arr[2],arr[3])}else
//
//             if (tipe ===1){app.push(arr[0], arr[2],arr[1],arr[3])} else
//
//                 if (tipe ===2){app.push(arr[0], arr[1],arr[3],arr[2])}
//
//         return app
//     }
//
//
// }
//
// let v = foo(arr, 0);
// console.log(v)


// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3];
// let arr = [0,1,2,3,4];
// let arr = [0,0,1,0];

// let nonzero = [];
// let zero = [];
// let good = [];
// let fun = (arr)=>{
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !==0){nonzero.push(arr[i])}else
//         if (arr[i] ===0){zero.push(arr[i]);
//         }
//
// }
// return good.concat(nonzero,zero)
// }
// let a = fun(arr)
// console.log(a)


