// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, made, age, maxSpeed, volumeOfEngine) {
//         this.model = model;
//         this.made = made;
//         this.age = age;
//         this.maxSpeed = maxSpeed;
//         this.volumeOfEngine = volumeOfEngine;
//         this.drive = function (){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
//         this.info = function() {
//                     for (const key in this) {
//                         if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//                     }
//                 }
//
//         this.increaseMaxSpeed = function (newSpeed) { this.maxSpeed = newSpeed+this.maxSpeed};
//         this.changeYear = function(newValue){ this.age = newValue };
//         this.addDriver = function(driver){ this.addDriver = driver}
// }
// let giveCar = new Car(`Volkswagen Golf`,`Germany`,2015, 190,1600);
// console.log(giveCar)
// giveCar.drive();
// giveCar.info();
// giveCar.increaseMaxSpeed(20);
// giveCar.changeYear(2016)
// giveCar.addDriver(`Taras`)
// console.log(giveCar)










// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, made, age, maxSpeed, volumeOfEngine) {
//         this.model = model;
//         this.made = made;
//         this.age = age;
//         this.maxSpeed = maxSpeed;
//         this.volumeOfEngine = volumeOfEngine;
//
//     }
//     drive (){console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`)};
//
//
//
//     info() {
//                 for (const key in this) {
//                     console.log(`${key} - ${this[key]}`)
//                 }
//             }
//     increaseMaxSpeed (newSpeed){return this.maxSpeed = (newSpeed+this.maxSpeed)};
//     changeYear (newValue){return this.age = newValue };
//     addDriver (driver){return this.addDriver = driver}
//
//
// }
// let giveCar = new Car(`Volkswagen Golf`,`Germany`,2015, 190,1600);
// console.log(giveCar)
// giveCar.drive();
// giveCar.info();
// giveCar.increaseMaxSpeed(20);
// giveCar.changeYear(2016)
// giveCar.addDriver(`Taras`)
// console.log(giveCar)
// giveCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//
//     constructor(name, age, sizeOfLeg) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfLeg = sizeOfLeg;
//
//     }
//
// }
// let mass = [
//     new Cinderella(`Barby`,7,10),
//     new Cinderella(`papy`,6,10),
//     new Cinderella(`Barby`,5,12),
//     new Cinderella(`lola`,5,10),
//     new Cinderella(`Barbara`,10,16),
//     new Cinderella(`dury`,4,12),
//     new Cinderella(`dora`,5,10),
//     new Cinderella(`lesly`,8,11),
//     new Cinderella(`Barby`,7,13),
//     new Cinderella(`sxs`,6,10),
//
//
// ]
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, findshoe) {
//         this.name = name;
//         this.age = age;
//         this.findshoe = findshoe;
//     }
// }
// let arrPrince = new  Prince(`Vova`, 10, 16);
//
//
//
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let find = (mass,arrPrince)=>{
//     for (const mass1 of mass) {
//         if (mass1.sizeOfLeg ===arrPrince.findshoe){
//            return  `Your Cinderella is: ${mass1.name}`;
//         }
//
//     }
// }
//
// console.log(find(mass,arrPrince))
//
//
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let find2 = mass.find(value =>value.sizeOfLeg===arrPrince.findshoe )
// console.log(find2)