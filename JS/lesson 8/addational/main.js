
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let box = [];
let getChildren = document.body.children
for (let child of getChildren) {
   if (child.children){
       for (const childOfChild of child.children) {

          if (childOfChild.children){box.push(childOfChild)}
       }
   }
}
console.log(box)






