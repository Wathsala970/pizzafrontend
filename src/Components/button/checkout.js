import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from "../actions/orderActions";
import Error from '../error';
import Success from '../success';
import Loading from '../loading';

export default function Checkout({subtotal}){

    const orderstate = useSelector((state)=> state.placeOrderReducer)
    const {loading, error, success} = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }

    return(
        <div>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}

            <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51NKDMoKFdiBCuGhv4U0k4a29r3NYL0k7Acb5rGjxT2waYCxSS2apjOAYBGpTQrwFtrBcdkth723YQrvId51xNfyL00v0nqPuBz'
            currency="LKR"
            
            >
                <button className="btn">Pay Now</button>
            </StripeCheckout>
        </div>
    )
}