import React from 'react';
import './Product.css';
import mobile from './mobile.jpeg';
function Product() {
    return(
        <div className="container">
            <h1>css positioning task</h1>
            <div className="card">
                <img src={mobile} alt="Product"/>
                <h3>product name</h3>
                <p className="price">$99.99</p>
            </div>
        </div>
    );
}
export default Product;