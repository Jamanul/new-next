import React from 'react';

const posts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const page = async () => {
    const postsData = await posts()
    //console.log(postsData)
    return (
        <div className='grid grid-cols-3'>
            {
                postsData.map(post=><div className='border border-red-700 my-4 p-4' key={post.id}>
                    {
                        post.title
                    }
                    {
                        post.body
                    }
                </div>)
            }
        </div>
    );
};

export default page;