
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

//
// let box = [];
// let getChildren = document.body.children
// for (let child of getChildren) {
//    if (child.children){
//        for (const childOfChild of child.children) {
//
//           if (childOfChild.children){box.push(childOfChild)}
//        }
//    }
// }
// console.log(box)



let box = [];
function rec(element) {
    box.push(element);
    let children = element.children;
    for (const child of children) {
        for (const resOfChild of child.children) {
            rec(resOfChild)
        }
    }
}
rec(document.body)
console.log(box)


for (const box1 of box) {
    console.log(box1)
}