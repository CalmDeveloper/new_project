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


function usersDataBase() {
    let users = [
        {name: `Bogdan`},
        {name: `Taras`},
        {name: `Oleg`},
    ];

    return  {
        addUser: function (user) {
            if (user.name){users.push(user);
                console.log(`user was added`)}else
            {console.log(`error`)}
        },
        getUsers: function () {
            console.log(users);

        }
    }
}
let m = usersDataBase()
console.log(m)
m.addUser({name: 'Bogdan',})
m.getUsers()