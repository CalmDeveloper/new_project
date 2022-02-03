// // 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let masive = [1,4,5,6,7,9,0,10,4,3];
let result = masive[0]+masive[1]+masive[2]+masive[3]+masive[4]+masive[5]+masive[6]+masive[7]+masive[8]+masive[9];
console.log(result);
//
// // 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//
{
let book = {name: "War",
    number_of_pages: 200,
    genre: "detective",
    }
console.log(book);
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: "Marder",
    number_of_pages: 276,
    genre: "criminall",
    authors: {
        authorMain: "Voitovuch Andriy",
        authorSecond: "Polomanuy Ostap",
        authorThird: "Makoveckuy Bogdan"
    }
}
console.log(book2)

//
// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.' +
// ' Вивести кожну книгу як окремий об'єкт
{

    let book = [
        {
            name: "War",
            numberOfPages: 200,
            genre: "detective",
            authors: {
                authorMain: "Muranec Andriy",
                authorSecond: "Dolunskuy Ostap",
                authorThird: "Makoveckuy Bogdan"
            }
        },
        {
            name: "Lucky",
            numberOfPages: 235,
            genre: "drama",
            authors: {
                authorMain: "Voitovuch Andriy",
                authorSecond: "Polomanuy Ostap",
                authorThird: "Makoveckuy Bogdan"
            }
        }
    ]
    console.log(book[0])
    console.log(book[1])

}

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
{
    let heightC = 23
    let width = 10
    let s = width * heightC
    console.log(s + 'cm')
}

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
{
    heightC = 10
    let dC = 4
    let v = 3.14 * dC * heightC
    console.log(v + 'm2')
}

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2))
console.log(k)


