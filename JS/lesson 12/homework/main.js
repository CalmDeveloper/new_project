// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((response) => response.json())
//     .then((posts) => {
//             let father = document.createElement(`div`);
//             father.classList.add(`father`)
//             for (const post of posts) {
//                 let div = document.createElement(`div`);
//                 div.classList.add(`card`)
//                 div.innerHTML = `
// <h3>id: ${post.id}</h3>
// <h4>title: ${post.title}</h4>
// <h5>body: ${post.body}</h5>`;
//                 document.body.appendChild(father)
//                 father.appendChild(div)
//             }
//         }
//     );


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((comments) => {
            let main = document.createElement(`div`);
            document.body.append(main);
            main.classList.add(`main`)
            for (const comment of comments) {
                let div = document.createElement(`div`);
                div.classList.add(`div`);
                main.append(div)
                div.innerHTML = `
 <h2><span>ID:</span> ${comment.id} </h2>
<h3><span>Name:</span> ${comment.name} </h3>
<h4><span>Email:</span> ${comment.email}</h4>
<h5><span>Body:</span> ${comment.body}</h5>`
            }
        }
    );