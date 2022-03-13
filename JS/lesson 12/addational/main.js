
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
                fetch(`https://jsonplaceholder.typicode.com/users/` + usersListElement.id + `/comments`)
                    .then((response) => response.json())
                    .then((comments) => {

                        for (const comment of comments) {
                            if (usersListElement.id === comment.postId) {
                                let CommentsCard = document.createElement(`div`);
                                CommentsCard.classList.add(`CommentsCard`);
                                UserCard.append(CommentsCard)
                                CommentsCard.innerHTML = `
 <h2><span>ID:</span> ${comment.id} </h2>
<h3><span>Name:</span> ${comment.name} </h3>
<h4><span>Email:</span> ${comment.email}</h4>
<h5><span>Body:</span> ${comment.body}</h5>`
                            }
                        }
                        }
                    );
            } 
            postButton.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/` + usersListElement.id + `/posts`)
                    .then((response) => response.json())
                    .then((posts) => {
                        for (const post of posts) {
                            if (usersListElement.id===post.userId){
                                let PostsCard = document.createElement(`div`);
                                PostsCard.classList.add(`PostsCard`)
                                UserCard.appendChild(PostsCard)
                                PostsCard.innerHTML = `
<h3>id: ${post.id}</h3>
<h4>title: ${post.title}</h4>
<h5>body: ${post.body}</h5>`;
                            }
                        }
                    });
            }
        }
    });


