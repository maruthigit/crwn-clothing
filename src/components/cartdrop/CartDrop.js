import React from 'react';
import CustomButton from '../custombutton/CustomButton';
import './cartdrop.scss';

const CartDrop = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

export default CartDrop;