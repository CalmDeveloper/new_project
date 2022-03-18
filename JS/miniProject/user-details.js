let jsonObject = localStorage.getItem(`object`);
let father = document.createElement(`div`)
document.body.append(father)
father.classList.add(`father`)
let user = JSON.parse(jsonObject)
for (const usersListElement of user) {
    let userCard = document.createElement('div')
    userCard.classList.add(`userCard`)
    let id = document.createElement('div')
    let nameMain = document.createElement('div')
    let username = document.createElement('div')
    let email = document.createElement('div')
    let addres = document.createElement('div')
    let phone = document.createElement('div')
    let website = document.createElement('div')
    let company = document.createElement('div')

    id.innerText = 'Id -' + ' ' + usersListElement.id;
    nameMain.innerText = 'Name - ' + ' ' + usersListElement.name;
    username.innerText = 'Username  - ' + usersListElement.username;
    email.innerText = 'Email  - ' + usersListElement.email;
    addres.innerHTML = '<strong>Addres </strong> :'
    company.innerHTML = '<strong>Company</strong>  :'
    phone.innerText = 'Phone  - ' + usersListElement.phone;
    website.innerText = 'Website  - ' + usersListElement.website;

    let street = document.createElement('li');
    let suite = document.createElement('li');
    let city = document.createElement('li');
    let zipcode = document.createElement('li');
    let geo = document.createElement('div');
    let button = document.createElement(`button`);
    button.innerText = `post of current user`
    button.classList.add(`button`);
    button.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/` + usersListElement.id + `/posts`)
            .then((response) => response.json())
            .then((posts) => {
                for (const post of posts) {
                    if (usersListElement.id === post.userId) {
                        let postsCard = document.createElement(`div`);
                        postsCard.classList.add(`postsCard`)
                        father.appendChild(postsCard)
                        postsCard.innerHTML = `

<h4>title: ${post.title}</h4>`
                        let postDetailsButton = document.createElement(`button`)
                        postsCard.append(postDetailsButton)
                        postDetailsButton.innerText = `Get post-details`;
                        postDetailsButton.classList.add(`postDetailsButton`)

                        postDetailsButton.onclick = function () {
                            let postId = JSON.parse(localStorage.getItem('postIdValue')) || [];
                            localStorage.removeItem(`postIdValue`, postId)
                            postId = [];
                            let postIdValue = `${post.id}`
                            postId.push(postIdValue);
                            localStorage.setItem('postIdValue', JSON.stringify(postId));
                            location.href = `post-details.html`;
                        }
                    }
                }
    }
)
}

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
    addres.append(street, suite, city, zipcode, geo)


    for (const companyElement in usersListElement.company) {
        let nameC = document.createElement('li')
        nameC.innerText = usersListElement.company[companyElement]
        company.appendChild(nameC)
    }
    userCard.append(id, nameMain, username, email, addres, website, phone, company, button)
    father.appendChild(userCard)
    userCard.classList.add('usercard')
}
