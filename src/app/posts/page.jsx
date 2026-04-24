import React from 'react'

// const getPosts = async ()=> {
//     const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }
// const getPosts = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return res.json();
//     }
//     catch (err) {
//         throw new Error("Failed to fetch post data!")
//     }
// }
const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Failed fetch post data!")
    }
    return res.json();
}

async function Posts() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json();

    const data = await getPosts();

    return (
        <div>
            <h1 className=' text-3xl text-center mt-10 font-bold'>Your post item is: {data.length}</h1>
        </div>
    )
}

export default Posts