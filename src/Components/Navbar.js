import React, { useState } from 'react'
// import Hero from './hero/hero';
import { Link } from 'react-router-dom'
import './navbar.css'
import { BsCart } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from '../Components/actions/userAction'


export default function Navbar() {

    const cartstate = useSelector(state => state.CartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const [Mobile, setMobile] = useState(false)
    const { currentUser } = userState
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-light bg-light">

                <h3 className='mb-4' style={{color:'red' }}>YUMMY PIZZA</h3>

                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onclick={() => setMobile(false)}>
                    {/* <Link to='/'><li>Home</li></Link> */}


                    {currentUser ? (
                        <>
                            <h5><a className='nav-link m-3 ' href='/menu'>Menu</a></h5>
                            <h5><a className='nav-link m-3' href='/orders'>My Orders</a></h5>
                            <h5><a className='nav-link m-3' href='/cart'><BsCart /> {cartstate.cartItems.length}</a></h5>
                            <h5><a className='nav-link m-3' href='/profile'>{currentUser.name}</a></h5>
                            <h5><a className='nav-link m-3' href='/' onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a></h5>
                        </>
                    ) : (
                        <li className='nav-link'>
                            <a className='nav-link' href='/login'>Login</a>
                        </li>)}



                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}

                </button>

            </nav>
        </div>


    )
}
