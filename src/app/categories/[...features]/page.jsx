import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    console.log(params) 
    if(params.features.length===2){
        return params.features[1]
    }
    if(params.features.length===3){
        return params.features[2]
    }
    return (
        <div>
            this is CategoriesDetailsPage
        </div>
    );
};

export default CategoriesDetailsPage;