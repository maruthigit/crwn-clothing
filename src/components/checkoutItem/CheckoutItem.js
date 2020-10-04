import React from 'react';

import './checkout.scss';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={require(`../../assets/shoppage/${imageUrl}`)} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove">&#10005;</div>
        </div>
    )
}

export default CheckoutItem;