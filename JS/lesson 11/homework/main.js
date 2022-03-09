// 1.-створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let name = document.forms.myform.name;
// let age = document.forms.myform.age;
// let button = document.getElementById(`btn`);
// let key = `key`;
//
// let  save=(UserName,UserAge)=>{
//     let user = {
//         name: UserName,
//         age : UserAge
//     }
//     localStorage.setItem(key,JSON.stringify(user));
// }
// button.onclick = () => {
//     save(name.value, age.value);}


// 2.-створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let model = document.forms.myform.model;
let type = document.forms.myform.type;
let volume = document.forms.myform.volume;
let button = document.getElementById(`btn`);
let key = `CarsKey`;



    let saveCar = (modelCar, typeCar, volumeCar) => {
        let newArr = JSON.parse(localStorage.getItem(key)) || [];

        newArr.push({modelCar, typeCar, volumeCar})
        localStorage.setItem(key, JSON.stringify(newArr));
    };

    button.onclick = () => {
        saveCar(model.value, type.value, volume.value);
    }



