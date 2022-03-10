// let mass = [1,2,3,4,5];
// let map = mass.map(value => {return {id: value}})
// console.log(map)

// let mas = [1,4,6,8,100,10,5,3,7]
// let reduce = mas.reduce((box, number) =>{
// if (number % 2===0){box.even.push(number)}else
//     if (number%2 ===1){box.od.push(number)}
// return box
// }, {od:[], even: []})
// console.log(reduce)



// // Замикання
// function usersDataBase() {
//     let users = [
//         {name: `Bogdan`},
//         {name: `Taras`},
//         {name: `Oleg`},
//     ];
//
//     return  {
//         addUser: function (user) {
//             if (user.name){users.push(user);
//                 console.log(`user was added`)}else
//             {console.log(`error`)}
//         },
//         getUsers: function () {
//             console.log(users);
//         }
//
//     }
// }
// let m = usersDataBase()
// console.log(m)
// m.addUser({name: 'Bogdan',})
// m.getUsers()




// function zam() {
//     let users = [
//         {name: `Bogdan`, age: 20, status: true },
//         {name: `Taras`, age: 30, status: true},
//         {name: `Oleg`, age: 40, status: false },
//     ];
//
//     return{
//         addUser: function (user){if (user.name&&user.age){users.push(user)}},
//         getUsers: () => console.log(users),
//         GetUsersAge:(age)=> users.filter(value => value.age>age),
//         GetUsersStatus:()=>users.filter(value => value.status),
//         GetUseersStatusDiferent:(enterStatus)=>users.filter(value => {
//             if(value.status===enterStatus){return value.status===enterStatus}else
//         if(value.status===enterStatus){return value.status===enterStatus}})
//
//
//     }
// }
//
// let m = zam()
// // m.getUsers()
// //
// // m.addUser({name: `Petro`, age: 40});
// // console.log(m.GetUsersAge(30));
// // console.log(m.GetUsersStatus())
// console.log(m.GetUseersStatusDiferent(true))



// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
// let name = document.forms.myform.username;
// let age = document.forms.myform.age;
// let button = document.getElementById(`btn`);
// let save = (UserName,Age)=>{
//     let arr = {
//         name: UserName,
//         age: Age
//     }
//     let result = JSON.stringify(arr)
//     localStorage.setItem(`User`,result)
// }
// button.onclick = function () {
//     save(name.value,age.value)
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form = document.forms.fcar
form.onsubmit = function (e){
    e.preventDefault()
}
let model = document.forms.fcar.model;
let type = document.forms.fcar.type
let volume = document.forms.fcar.volume;
let button = document.getElementById(`btn`);

let save = (Model,Type,Volume)=>{
    let carList = JSON.parse(localStorage.getItem(`car`)) || [];

   carList.push({Model,Type,Volume})
    localStorage.setItem(`car`,JSON.stringify(carList))
}
button.addEventListener(`click`,function () {
    save(model.value,type.value,volume.value)
})

