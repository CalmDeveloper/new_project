// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let masive = [2,17,13,6,22,31,45,66,100,-18];

//     2. перебрати його циклом for
// let masive = [2,17,13,6,22,31,45,66,100,-18];
// // for (i = 0; i < masive.length; i++){
// //
// //     console.log(masive[i])
// //
// // }

//9.3. reverse
// for (i = masive.length-1; i >=0; i--){console.log(masive[i])}



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while ( i < masive.length){
//    if  (masive[i] % 2 ===1){console.log(masive[i])}
//     i++;
// }

//9.3. reverse
// i = masive.length-1;
// while (i >=0){
//     if(masive[i] % 2 ===1){console.log(masive[i]);
//     }
//     i--;
// }




// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (i = 0; i < masive.length ; i++){
//     if ( masive[i] % 2 ===1){console.log(masive[i])}
// }

//9.4. reverse
// for (i = masive.length-1; i >=0; i--){
//     if(masive[i] % 2===1){console.log(masive[i])}
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while ( i < masive.length){
//     if  (masive[i] % 2 ===0){console.log(masive[i])}
//     i++;
// }

//9.5. reverse
// i = masive.length-1;
// while (i >=0){
//     if(masive[i] % 2===0){console.log(masive[i])}
//     i--;
// }




// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (i = 0; i < masive.length; i++) {
//     if(masive[i] % 2 ===0){console.log(masive[i])}
// }


//9.6. reverse
// for (i = masive.length-1; i>=0; i-- ){if(masive[i] % 2 ===0){
//     console.log(masive[i]);
// }
// }





// 7. замінити кожне число кратне 3 на слово "okten"
// for (i = 0; i < masive.length; i++){
//     if(masive[i] % 3 ===0){masive[i] = "okten";
//     console.log(masive[i])}
//     console.log(masive[i])
// }

//9.7. reverse
// for (i = masive.length-1; i >=0; i--){
//     if(masive[i] % 3 ===0){masive[i] = "okten";
//     console.log(masive[i])}
//     console.log(masive[i])
// }





// 8. вивести масив в зворотньому порядку.
// for (let i = masive.length - 1; i >= 0; i--) {
//
//     console.log(masive[i])
// }




// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)





// Part2 (cw1.html)


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template1.1


// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// <!--        template 1.1-->
// <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//     інші об'єкти масиву
//   ...
//   ...
//   ...
//     -->
// </ul>
//
// <!---------------------------------------------->
//

// document.write("<ul>")
// for (let i = 0; i < listOfItems.length; i++){
//     document.write(`<li>${listOfItems[i]} </li>`);
//
// }
// document.write("</ul>");




// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
//     Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// Шаблон застосувати до кожного об'єкта в масиві
// */
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

//
// <!--template 2.1-->
// <div>
//     NAME- SURNAME- AGE- INFO- <img src="PHOTO" alt="">
// </div>
//


// document.write(`<div class="A">`)
// for (let i = 0; i < simpsons.length; i++){
//     document.write(`<div>
//         <h1>${simpsons[i].name}
//         ${simpsons[i].surname}</h1>
//        <h2>Age: ${simpsons[i].age} years</h2>
//        <p> ${simpsons[i].info}</p>
//         <img src="${simpsons[i].photo}" alt="${simpsons[i].name}"
//
//     </div>`)
//
//
// }








// <!--template 2.2-->
// <div>
//     <h2>NAME SURNAME. age is - AGE</h2>
//     <p>INFO</p>
//     <img src="PHOTO" alt="">
// </div>
// <!--
// інші об'єкти з масиву
// ...
// ...
// ...
// -->
//
//
//
//
// <!---------------------------------------------->


// for (let i = 0; i < simpsons.length; i++) {
//     document.write(`<div>
// <h2>${simpsons[i].name} ${simpsons[i].surname} <span class="B">Age is: ${simpsons[i].age} years</span></h2>
// <p>${simpsons[i].info}</p>
// <img src="${simpsons[i].photo}" alt="${simpsons[i].name}"
// </div>`)
// }






// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// */
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


// <!--        template 3.1-->
// <div>
//     <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="" alt="" class="product-image">
//     </div>
//     <!--

//                 інші об'єкти з масиву
//                 ...
//                 ...
//                 ...
//     -->
//
// </div>


for( i = 0; i < products.length; i++){
    document.write(`<div><div class="product-cards">
 <h3 class="product-title"> <span class="product">PRODUCT :</span> ${products[i].title}    <span class="price">PRICE :</span> ${products[i].price} </h3>
 <img src="${products[i].image}" alt="${products[i].title}" class="product-image">
    </div>
    </div>`)


}
