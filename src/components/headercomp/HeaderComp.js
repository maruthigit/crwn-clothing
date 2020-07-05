import React from 'react';
import { Link } from 'react-router-dom';

import './headercomp.scss';
import { FaCrown } from "react-icons/fa";

const HeaderComp = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <FaCrown className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
        </div>
    </div>
);

export default HeaderComp;