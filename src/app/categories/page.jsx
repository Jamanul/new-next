import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const CategoriesPage = async() => {
    const session = await getServerSession(authOptions)
    console.log({session})
    return (
        <div>
            this is categories Page.
        </div>
    );
};

export default CategoriesPage