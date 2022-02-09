// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let square = (a,b)=> a+b;
// console.log(square(10,15));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r

// let squareOfcircle = (p,r)=> p*r*r;
// console.log(squareOfcircle(3.14,5));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let squareOfcylinder = (p,r,h)=> 2*p*r*h;
// console.log(squareOfcylinder(3.14,5,10))

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let masive = [1, 3, 4, 5, 6, 7, 8];
// let getmasive = (masive) => {
//     for (let masiveElement of masive) {
//         console.log(masiveElement)
//     }
// }
// let a = getmasive(masive)


// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let ptext = (t)=>{document.write(`<p>${t}</p>`)}
// ptext(`blabla`)

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul = (t) => {
//     document.write(`<ul>
// <li>${t}</li>
// <li>${t}</li>
// <li>${t}</li>
// </ul>`)
// }
// ul(`bla bla`)
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulcr = (n,t)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i<n; i++){document.write(`<li>${t}</li>`)}
//     document.write(`</ul>`)
// }
// ulcr(5,`bla bla`)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let masiv = [1,4,true,[],`irivhr`];
// let get = (masiv)=>{
//     document.write(`<ol>`)
//     for (let masivElement of masiv) {
//         document.write(`<li>${masivElement}</li>`)
//     }
//     document.write(`</ol>`)
// }
// get(masiv)
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//
// let array = [{id : 76743,name : `Taras`,age : 28}, {id : 454,name : `Mikel`,age : 30}];
//
// let fun = ()=>{
//     for (const ar of array) {
//           document.write(`
//             <div>ID: ${ar.id} name: ${ar.name} age: ${ar.age}</div>
//         `)
//
//     }
//
// }
// fun(array)