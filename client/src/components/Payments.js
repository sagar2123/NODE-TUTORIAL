import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render() {
        // this.props.handleToken(token)
        return (
            <StripeCheckout
            name = "Emaily"
            description = "Pay $5 to add 5 credits in your account"
            amount = {5*100}
            token = {token => this.props.handleToken(token)}
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);