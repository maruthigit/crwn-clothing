import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import './headercomp.scss';
import { FaCrown } from "react-icons/fa";
import CartIcon from '../carticon/CartIcon';
import CartDrop from '../cartdrop/CartDrop';

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

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(HeaderComp);