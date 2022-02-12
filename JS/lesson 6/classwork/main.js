// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let norm = (n, sv,rv)=>{
//     let a = n.replaceAll(`${sv}`,`${rv}`)
// console.log(a)
//     return a
// }
// let a = norm(n1, `.`,` `)
// let b = norm(n2, `-`,` `)
// let c = norm(n3, `_`,` `)

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = [];
let func = (name, a,b,d)=> {
    for (let a = 0; a<b; a++){
        name.push(Math.round(Math.random()*d))
    }
    return name
}
// let s = func(arr,0,50,50)
// console.log(s)
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let arrrandom = [];
// func(arrrandom, 0, 30,100)
// console.log(arrrandom)
// console.log(arrrandom.sort(function (curent, next){return curent - next}))
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filterArray = arrrandom.filter((item) => {
//     return item % 2 === 0
// });
// console.log(filterArray);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let sameArr = [];
// func(sameArr, 0, 30,40)
// let recr = (arr)=> {
//     return sameArr.map(value => `${value}`)
//
// }
// let q = recr(sameArr)
// console.log(q)
// console.log(typeof q[0])

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

//     let nums = [11,21,3];
// let sortNums = (direction)=>{
//     if (direction ===`ascending`){console.log(nums.sort(function (curent, next){return curent - next}))}else
//     if (direction ===`descending`){console.log(nums.sort(function (curent, next){return next - curent}))}
// }
// let  m = sortNums(`descending`)


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort(function (a, b)
    {return b.monthDuration - a.monthDuration})
)
let dvd = coursesAndDurationArray.filter((value) => {return value.monthDuration>5})
console.log(dvd)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
