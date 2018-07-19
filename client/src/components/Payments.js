import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component{
    render() {
        return (
            <StripeCheckout
            name = "Emaily"
            description = "Pay $5 to add 5 credits in your account"
            amount = {5*100}
            token = {token => console.log(token)}
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}

export default Payments;