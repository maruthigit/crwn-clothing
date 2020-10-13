import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    
    const publishableKey = 'pk_test_51HbqPxL1OJ9oFsrqLlC3Es1frlEQ0hAA4AN0W5lOF9MDneyMZkB3JCPsV420HCT5l3PMvmzDePKKQ7JD3cbqC05o00DoyL0N3V';

    const onToken = token => {
        console.log("token ", token);
        alert('Payment Success');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            nam='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLable="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;