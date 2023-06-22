import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../actions/orderActions';
import Loading from '../loading';
import Error from '../error';
import Succes from '../success';

export default function Order() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate
    useEffect(() => {
        dispatch(getUsersOrders())
    }, [])
    return (
        <div className="justify-content-center text-center m-4">
            <h4>My Orders</h4>
            <hr/>
            <div className="row">
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {orders && orders.map(order => {

                    return <div className="col-md-8 m-2" style={{backgroundColor:'#FA2A55', color:'white'}}>

                        <div className="flex-container">
                            <div className="text-left w-100 m-1">
                                <h4>Items</h4>
                                <hr style={{color:'black'}}/>
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                    </div>
                                })}
                            </div>
                            <div className="text-left w-100 m-1">
                                <h4>Address</h4>
                                <hr style={{color:'black'}}/>
                                <p>Street : {order.shippingAddress.street}<br/>
                                City : {order.shippingAddress.city}<br/>
                                country : {order.shippingAddress.country}<br/>
                                Pincode : {order.shippingAddress.pincode}</p>

                            </div>
                            <div className="text-left w-100 m-1">
                                <h4>Order Info</h4>
                                <hr style={{color:'black'}}/>
                                <p>Order Amount : {order.orderAmount}<br/>
                                Date : {order.createdAt.substring(0, 10)}<br/>
                                Transaction ID : {order.transactionId}<br/>
                                Order ID : {order._id}</p>
                            </div>
                        </div>
                    </div>

                })}

            </div>
        </div>
    )
}