6

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => {
//         return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//             .then(value => value.json())
//             .then(value => {
//                 console.log(value);
//                 return value;
//             });
//     })
//     .then(posts => {
//         fetch('https://jsonplaceholder.typicode.com/comments?postId=' + posts[0].id)
//             .then(value => value.json())
//             .then(comments => {
//                 console.log(comments);
//                 return comments;
//             });
//     });

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(responce => responce.json())
//     .then(user => fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
//     .then(responce => responce.json())
//     .then(posts => fetch('https://jsonplaceholder.typicode.com/comments?postId=' + posts[0].id))
//     .then(responce => responce.json())
//     .then(comments => console.log(comments));

// setTimeout(() => {
//     console.log('h');
//     setTimeout(() => {
//         console.log('e');
//         setTimeout(() => {
//             console.log('l');
//             setTimeout(() => {
//                 console.log('l');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('h');
//     }, 1000);
// });
// promise.then(value => console.log(value));

// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('h');
//     }, 1000);
// })
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('e');
//             }, 1000);
//         });
//     })
//     .then(value => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('l');
//             }, 1000);
//         });
//     })

// ///20:35 ???
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('h');
//     }, 1000);
// })
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('e');
//             }, 1000);
//         });
//     })
//     .then(value => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('l');
//             }, 1000);
//         });
//     })


// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(responce => responce.json())
//     .then(user => fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
//     .then(responce => responce.json())
//     .then(posts => fetch('https://jsonplaceholder.typicode.com/comments?postId=' + posts[0].id))
//     .then(responce => responce.json())
//     .then(comments => console.log(comments));


// async function foobar() {
//     let user = await fetch('https://jsonplaceholder.typicode.com/users/1').then(value => value.json());
//     let posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id).then(value => value.json());
//     let comments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + posts[0].id).then(value => value.json());
//     // console.log(comments);
//     return[user,posts,comments];
// }
// // foobar();
// foobar().then(value => console.log(value));

// new Promise((resolve, reject) =>{
//     if(true){
//         resolve('???');
//     }else {
//         reject('!!!');
//     }
// })
// .then()
// .catch(reason => )


function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            return value;
        });
}
function fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
            return value;
        });
}
function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            return value;
        });
}
// let promise = Promise.all([fetchUser(), fetchPosts(), fetchComments()]);
//
// promise.then(value => {
//     console.log(value[0]);
//     console.log(value[1]);
//     console.log(value[2]);
// });

Promise.race([fetchUser(), fetchPosts(), fetchComments()]).then(value => console.log(value));