let jsonObject = localStorage.getItem(`object`);
let user = JSON.parse(jsonObject)
let father = document.createElement(`div`)
document.body.append(father)
father.classList.add(`father`)


for (const usersListElement of user) {
    fetch(`https://jsonplaceholder.typicode.com/users/` + usersListElement.id + `/posts`)
        .then((response) => response.json())
        .then((posts) => {
            let postId = JSON.parse(localStorage.getItem('postIdValue'))
             let value = +postId[0]

            for (const post of posts) {

                if (usersListElement.id === post.userId && post.id === value) {
                    let postCard = document.createElement(`div`);
                    postCard.classList.add(`postCard`)
                    father.appendChild(postCard)
                    postCard.innerHTML = `

                    <h3>id: ${post.id}</h3>
                    <h4>title: ${post.title}</h4>
                    <h5>body: ${post.body}</h5>`;
                }
            }

            fetch(`https://jsonplaceholder.typicode.com/users/` + usersListElement.id + `/comments`)
                .then((response) => response.json())
                .then((comments) => {
                    for (const comment of comments) {
                        if (usersListElement.id === comment.postId
                            // && comment.id === value
                        ) {
                            let commentsCard = document.createElement(`div`);
                            commentsCard.classList.add(`commentsCard`);
                            father.append(commentsCard)
                            commentsCard.innerHTML = `
 <h2><span>ID:</span> ${comment.id} </h2>
<h3><span>Name:</span> ${comment.name} </h3>
<h4><span>Email:</span> ${comment.email}</h4>
<h5><span>Body:</span> ${comment.body}</h5>`
                        }
                    }
                })

        })
}

