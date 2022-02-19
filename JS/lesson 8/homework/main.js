// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentId = document.getElementById(`content`)
console.log(contentId)
// -- отримує текст з блоку з id "rules"
let rulesId = document.getElementById(`rules`)
console.log(rulesId)
// -- замініть текст параграфа з id 'content' на будь-який інший
contentId.innerHTML = "<p>Bla bla bla</p>";
console.log(contentId);
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesId.innerHTML = "<p>Some text</p>"
console.log(rulesId);
// -- змініть кожному елементу колір фону на червоний
rulesId.style.backgroundColor = `red`
contentId.style.backgroundColor = `red`
let fcrules = document.getElementsByClassName(`fc_rules`)
for (const fcrule of fcrules) {
    fcrule.style.backgroundColor = `red`
}

// -- змініть кожному елементу колір тексту на синій
for (const fcrule of fcrules) {
    fcrule.style.color = `blue`
}
contentId.style.color = `blue`
rulesId.style.color = `blue`
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let queryRules = document.querySelectorAll(`#rules`)
for (const queryRule of queryRules) {
    console.log(queryRule)
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const fcrule of fcrules) {
    fcrule.style.color = `red`
}
