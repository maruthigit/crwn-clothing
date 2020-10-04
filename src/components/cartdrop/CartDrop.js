import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custombutton/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cartdrop.scss';

const CartDrop = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? 
                (cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                : <span className='empty-message'>Your Cart Is Empty! </span>
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

/*const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});*/



export default withRouter(connect(mapStateToProps)(CartDrop));