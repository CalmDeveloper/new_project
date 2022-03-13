// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((posts) => {
            let father = document.createElement(`div`);
            father.classList.add(`father`)
            for (const post of posts) {
                let CardPost = document.createElement(`div`);
                CardPost.classList.add(`card`)
                CardPost.innerHTML = `
<h3>id: ${post.id}</h3>
<h4>title: ${post.title}</h4>
<h5>body: ${post.body}</h5>`;
                document.body.appendChild(father)
                father.appendChild(CardPost)
                let button = document.createElement(`button`);
                CardPost.appendChild(button)
                button.innerHTML = `<strong>Show comments</strong>`;
                button.classList.add(`btn`)
                button.onclick = function () {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                        .then((response) => response.json())
                        .then((comments) => {

                            for (const comment of comments) {
                                if (post.id === comment.postId) {
                                    let CommentCard = document.createElement(`div`);
                                    CommentCard.classList.add(`div`);
                                    CardPost.append(CommentCard)
                                    CommentCard.innerHTML = `
 <h2><span>ID:</span> ${comment.id} </h2>
<h3><span>Name:</span> ${comment.name} </h3>
<h4><span>Email:</span> ${comment.email}</h4>
<h5><span>Body:</span> ${comment.body}</h5>`
                                }


                            }
                        });
                }
            }
        }
    );
