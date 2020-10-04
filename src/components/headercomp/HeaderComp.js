import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils';

import './headercomp.scss';
import { FaCrown } from "react-icons/fa";
import CartIcon from '../carticon/CartIcon';
import CartDrop from '../cartdrop/CartDrop';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectcurrentUser} from '../../redux/user/user.selectors';

const HeaderComp = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <FaCrown className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                    <div
                        className='option'
                        onClick={() => auth.signOut()}
                    > SIGN OUT </div>
                    : <Link
                        className="option" to="/signin"
                    > SIGN IN </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDrop />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    hidden: selectCartHidden
});

/*const mapStateToProps = (state) => ({
    currentUser: selectcurrentUser(state),
    hidden: selectCartHidden(state)
});*/

/*const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
});*/

export default connect(mapStateToProps)(HeaderComp);