// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let masive = [
//     [1, 2, 3, 4, 5],
//
// [`vnvjrn`, `jfnjefu`, `jbyuvufe`, `fbeubfu`, `knefjbjef`],
//
//     [`vnvjrn`, `565`, `htht`, true, false],
// ]
//
// console.log(masive)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let masiveEmpty = [];
// masiveEmpty [0]= 93949;
// masiveEmpty [1]= `nknfje`;
// masiveEmpty [2]= `nkfbfbfbf`;
// masiveEmpty [3]= `vrvrvr`;
// console.log(masiveEmpty)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} text</div>`)
//
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// document.write(`<div`)
//     let i = 0;
// while (i < 20; i++)
// {
//  let  = document.write(`<h1> text </h1>`)
// }
// document.write(`</div`)


// let j =0;
// while(j<20){
//     document.write(`<div> text </div>`);
//     j++; }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div>${i} text </div>`
//     );
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let masiveNum = [12,34,67,88,4,6,7,9,0,2];
// for (let i = 0; i < masiveNum.length; i++) {
//     console.log(masiveNum[i]);
//
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let masiveString = [`vdvd`,`bffb`,`bdbdbd`,`bgbgfbg`,`bgbgbg`,`bgbgb`,`gbgbg`,`bgb`,`vfbvf`,`vfdvfvbg`,]
// for (let i = 0; i < masiveString.length; i++) {
//  console.log(masiveString[i]) ;

// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let masiveDif = [12,`bfbf`,67,`cdc`,4,6,true,9,0,false];
// for (let i = 0; i < masiveDif.length; i++) {
//     console.log(masiveDif[i]);
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let masiveDif = [12,`bfbf`,67,`cdc`,4,6,true,9,0,false];
// for (let i = 0; i < masiveDif.length; i++) {
//     if (typeof masiveDif[i] === `boolean` )
//     {console.log(masiveDif[i]);
//     }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let masiveNum = [12,`bfbf`,67,`cdc`,4,6,true,9,0,false];
// for (let i = 0; i < masiveNum.length; i++) {
//    if (typeof masiveNum[i] === "number")
//     console.log(masiveNum[i]);
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let masiveNum = [12,`bfbf`,67,`cdc`,4,6,true,9,0,false];
// for (let i = 0; i < masiveNum.length; i++) {
//    if (typeof masiveNum[i] === "string")
//     console.log(masiveNum[i]);
//
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//     let  empty = [];
//     empty[0] = 10;
//  empty[1] = `grgr`;
//  empty[2] = true;
//  empty[3] = [];
//  empty[4] = false;
//  empty[5] = `fefe`;
// for (let i=0; i < empty.length; i++) {console.log(empty[i]);}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){console.log(`поточний номер кроку: ${i}`);
//     document.write(`<div> поточний номер кроку: ${i} </div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){console.log(`поточний номер кроку: ${i}`);
//     document.write(`<div> поточний номер кроку: ${i} </div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2){console.log(`поточний номер кроку: ${i}`);
//     document.write(`<div> поточний номер кроку: ${i} </div>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {if ( i % 2 ===0) {
    console.log(`поточний номер кроку: ${i}`);
    document.write(`<div> поточний номер кроку: ${i} </div>`)
}
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {if( i % 2 ===1) {
//     console.log(`поточний номер кроку: ${i}`);
//     document.write(`<div> поточний номер кроку: ${i} </div>`)
// }
// }