// - Знайти та вивести довижину настипних стрінгових значень
// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)


// - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let up1 = str1.toUpperCase(); console.log(up1)
// let up2 = str2.toUpperCase(); console.log(up2)
// let up3 = str3.toUpperCase(); console.log(up3)
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let low1 = up1.toLowerCase(); console.log(low1)
// let low2 = up2.toLowerCase(); console.log(low2)
// let low3 = up3.toLowerCase(); console.log(low3)
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str)
// console.log(str.trim())
// //
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//     let strbig = 'Каждый охотник желает знать';
// let arr = (strbig)=>{return strbig.split(` `); }
// let s = arr(strbig)
//
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let  stringToarray = (str)=> str.split(` `)
// let a = stringToarray(str)
// document.write(a)

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length)=> str.indexOf(' ',length)
// document.write (delete_characters(str, 7)); // Каждый

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str= "HTML JavaScript PHP";
// let Ustr = str.toUpperCase()
//    let insert_dash = (Ustr) =>{ return Ustr.replaceAll(` `, `-`) }
// document.write(insert_dash(Ustr)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = `okten`
// let fun = (str)=>{ return str[0].toUpperCase() + str.substring(1) }
// let a = fun(str)
// console.log(a)

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'Каждый охотник желает знать';
// let capitalize = (str)=> str.toUpperCase()
// let a = capitalize(str)
// console.log(a)