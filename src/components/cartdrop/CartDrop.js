import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custombutton/CustomButton';
import CartItem from '../cart-item/CartItem';

import './cartdrop.scss';

const CartDrop = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDrop);