
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((usersList) => {
let father = document.createElement(`div`);
document.body.appendChild(father)
        father.classList.add(`father`)
        for (const usersListElement of usersList) {
            let UserCard = document.createElement('div')
            let id = document.createElement('div')
            let nameMain = document.createElement('div')
            let username = document.createElement('div')
            let email = document.createElement('div')
            let addres = document.createElement('div')
            let phone = document.createElement('div')
            let website = document.createElement('div')
            let company = document.createElement('div')

            let commentButton = document.createElement(`button`);
            let postButton = document.createElement(`button`);
            commentButton.innerText = `Get all comments`;
            postButton.innerText = `Get all posts`;
            postButton.classList.add(`postButton`);
            commentButton.classList.add(`commentButton`)



            id.innerText = 'Id -'+' '+ usersListElement.id;
            nameMain.innerText = 'Name -'+' '+ usersListElement.name;
            username.innerText = 'Username  -' + usersListElement.username;
            email.innerText = 'Email  -'+ usersListElement.email;
            addres.innerHTML = '<strong>Addres </strong> :'
            company.innerHTML = '<strong>Company</strong>  :'
            phone.innerText = 'Phone  -' + usersListElement.phone;
            website.innerText = 'Website  -' +usersListElement.website;

            let street = document.createElement('li')
            let suite = document.createElement('li')
            let city = document.createElement('li')
            let zipcode = document.createElement('li')
            let geo = document.createElement('div')
            street.innerText = usersListElement.address.street
            suite.innerText = usersListElement.address.suite
            city.innerText = usersListElement.address.city
            zipcode.innerText = usersListElement.address.zipcode
            geo.innerHTML = '<strong>Geo<strong>  : '
            for (const streetElement in usersListElement.address.geo) {
                let geleos = document.createElement("li")
                geleos.innerText = usersListElement.address.geo[streetElement]
                geo.append(geleos)
                console.log(geleos)
            }
            addres.append(street,suite,city,zipcode,geo)


            for (const companyElement in usersListElement.company) {
                let nameC = document.createElement('li')
                nameC.innerText = usersListElement.company[companyElement]
                company.appendChild(nameC)
            }
            UserCard.append(id,nameMain,username,email,addres,website,phone,company,commentButton,postButton)
            father.appendChild(UserCard)
            UserCard.classList.add('usercard')


            commentButton.onclick = function () {
                
            } 
            postButton.onclick = function () {
                
            }
        }
    });


