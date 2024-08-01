import React from 'react';

const getSingleData =async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export const generateMetadata = async({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
        title: `${data.title}`,
        keywords: data.body.split(' ')
}
}

const page =async ({params}) => {
    console.log(params.id)
    const singleData =await getSingleData(params.id)
    return (
        <div>
          <h2>{
                singleData.title
            }</h2>  
           <h2>
           {
                singleData.body
            }
           </h2>
        </div>
    );
};

export default page;