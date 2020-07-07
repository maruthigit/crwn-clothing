import React from 'react';

import './signinsignup.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

const SignInSignUp = () => (

    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;