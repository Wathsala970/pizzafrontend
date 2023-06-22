import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Error from '../error';
import Loading from '../loading';
import Success from '../success'



export default function Registration() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [address, setaddress] = useState('')
    const [contactno, setcontactno] = useState('')
    const [passwordError, setPasswordError] = useState('');
    const registerState = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerState

    const dispatch = useDispatch()
    function register() {
        if (password != cpassword) {
            alert('Password not matched')
        }
        else {
            const user = {
                name,
                email,
                password,
                address,
                contactno
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
    const validatePassword = () => {
        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long');
        } else {
            setPasswordError('');
        }
    };

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-info  rounded'>

                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Email already registered' />)}


                    <h3 className='text-center'>Register</h3>
                    <div className='input'>
                        <input
                            type='text'
                            placeholder='name'
                            className='form-control'
                            value={name}
                            required
                            onChange={(e) => { setname(e.target.value) }}
                        />

                        <input
                            type='text'
                            placeholder='email'
                            className='form-control'
                            value={email}
                            required
                            onChange={(e) => { setemail(e.target.value) }}
                        />

                        <input
                            type='password'
                            placeholder='password'
                            className='form-control'
                            value={password}
                            required
                            onChange={(e) => { setpassword(e.target.value) }}
                            onBlur={validatePassword}
                        />
                        {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
                        <input
                            type='password'
                            placeholder='confirm password'
                            className='form-control'
                            value={cpassword}
                            required
                            onChange={(e) => { setcpassword(e.target.value) }}
                        />

                        <input
                            type='text'
                            placeholder='address'
                            className='form-control'
                            value={address}
                            required
                            onChange={(e) => { setaddress(e.target.value) }}
                        />

                        <input
                            type='text'
                            placeholder='contact number'
                            className='form-control'
                            value={contactno}
                            required
                            onChange={(e) => { setcontactno(e.target.value) }}
                        />

                        <button onClick={register} className='btn'>REGISTER</button>
                        <h6 className='text'><a style={{ color: 'black' }} href='/login'>Click Here To Login</a></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
