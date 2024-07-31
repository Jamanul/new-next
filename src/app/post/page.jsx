import React from 'react';
import { posts } from '../services/postApi';
import Link from 'next/link';



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
                  <Link href={`post/${post.id}`}>  <button className="btn bg-red-600">see more</button></Link>
                </div>)
            }
        </div>
    );
};

export default page;