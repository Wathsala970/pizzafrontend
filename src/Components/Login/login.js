import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser } from '../actions/userAction';
import Loading from '../loading'
import Error from '../error'


export default function Login(){

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginuserstate = useSelector(state=> state.loginUserReducer)
    const {loading, error} = loginuserstate
    const dispatch = useDispatch()

    

    function login(){
        const user = {email, password}
        dispatch(loginUser(user))
    }
    useEffect(()=>{
        if (localStorage.getItem('currentUser'))
        {
            window.location.href='/menu'
        }
    },[])


    return(
        <div classname="container  "  >
            <div className='row justify-content-center mt-5 ' >
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-info rounded'>
                    <h3 className='text-center'>Login</h3>

                    {loading && (<Loading/>)}
                    {error && (<Error error='Invalid credentials'/>)}

                    <div className='input'>

                        <input 
                        type='text' 
                        placeholder='email' 
                        className='form-control' 
                        value={email}
                        required
                        onChange={(e)=>{setemail(e.target.value)}}
                        />

                        <input 
                        type='password' 
                        placeholder='password' 
                        className='form-control' 
                        value={password}
                        required
                        onChange={(e)=>{setpassword(e.target.value)}}
                        />

                        
                        <button onClick={login} className='btn'>Login</button>
                        <h6 className='text'><a style={{color: 'black'}} href='/register'>Click Here To Register</a></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
  