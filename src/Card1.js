import React from 'react';
import ProductCard from './ProductCard';

const Card1=()=>{
    return(
        <div style={{padding:40}}>
            <ProductCard 
            image="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="cool headpones"
            price="$59.99"/>
        </div>
    );
};

export default Card1;