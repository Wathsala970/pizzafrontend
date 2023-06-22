import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../button/checkout';

export default function CartScreen() {
  const cartstate = useSelector(state => state.CartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='row '>
        <div className='col m-4 '>
          <h3>My Cart</h3><hr/>
          {cartItems.map(item => {

            return <div className='flex-container '>
              <div className=' m-4 w-100'>
                <h5>{item.name} [{item.varient}]</h5>
                <h5>Price : {item.quantity} * {item.prices[0][item.varient]}.00 = {item.price}.00</h5>
                {/* <h5 style={{ display: 'inline' }}>Quantity : </h5>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <h5 style={{ display: 'inline' }}>{item.quantity}</h5>
                <i className="fa fa-minus" aria-hidden="true"></i> */}
                <hr />
              </div>

              <div className='m-1  '>
                <img src={item.image} style={{ height: '100px', width: '100px' }} />
              </div>

              <div className='m-1 '>
              <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
              </div>

            </div>
          })}

        </div>
        <div className=' col m-1' >
          <hr/>
          <h3>Sub Total : {subtotal}.00 /=</h3>
          <Checkout subtotal = {subtotal}/>
          <hr/>
        </div>
      </div>
    </div>
  )
}