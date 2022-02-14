// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]



// let cutString= (str, n)=> {
//     let arr =[];
//     for (let i = 0; i < str.length; i=i+n) {
//         arr.push(str.substr(i, n))
//     }
//     return arr
// }
// console.log(cutString('наслаждение', 3));



///////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.



// let a =  `@` ;
// let b = `.`;
//
// let validator = (arr)=>{
//     let low = arr.toLowerCase()
//     if (!arr.includes(a,b)){console.log(`${low} В поштовій адресі відсутня крапка  або равлик`)}else
//     if (arr.startsWith(a)){console.log(`${low} Поштова адреса не може починатись з равлика`)}else
//
//     for (i = 0; i<arr.length; i++){
//       if (arr[i]===a && arr[i+1]===b) {
//           console.log(`${low} : крапка знаходиться не меньше ніж на 1 символи далі після равлика`)
//           return
//       }else
//         if (arr[i]===a && arr[i+2]===b) {
//             console.log(`${low} : крапка знаходиться не меньше ніж на 2 символи далі після равлика`)
//             return
//         }
//
//     }
//
//
//     console.log(`${low} : Валідна поштова адресса`  )
//
//
// }
// // let v = validator(`some.email@gmail.com`);
//
// validator('d@fd.ua')
// validator('someemail@gmail.com')
// validator('someeMAIL@gmail.com')
// validator('someeMAIL@i.ua')
// validator('some.email@gmail.com')




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let a = coursesArray.sort( function (a,b) {return b.modules.length-a.modules.length})
// console.log(a)


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let count= (str, stringsearch)=>{
//     let masss = [];
//     for (let i=0; i <str.length; i++){
//
//         if (str[i]===stringsearch){
//             masss.push(str[i])
//         }
//
//     }
//     return masss.length
// }
// let m = count('Астрономия это наука о небесных объектах','о')
// console.log(m)

//////////////////////////
// let a = (str.indexOf(`о`))+1
// console.log(a)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// //     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString=(str, n)=>{
//     res = str.split(` `);
//     let box = [];
//     for (let i = 0; i<n; i++){
//     box.push(res[i])
//     }
//     return box.join(` `)
// }
//
// console.log(cutString("Сила тяжести приложена к центру масс тела",5))