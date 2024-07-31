import React from 'react';

const getSingleData =async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const page =async ({params}) => {
    console.log(params.id)
    const singleData =await getSingleData(params.id)
    return (
        <div>
            {
                singleData.title
            }
            {
                singleData.body
            }
        </div>
    );
};

export default page;