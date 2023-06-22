import axios from 'axios';


export const registerUser = (user)=> async dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
        const response = await axios.post('https://online-pizza-order.onrender.com/api/users/register', user)
        console.log(response);
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED' , payload: error.message})
        
    }
}

export const loginUser = (user)=> async dispatch=>{
    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
        const response = await axios.post('https://online-pizza-order.onrender.com/api/users/login', user)
        console.log(response);
        dispatch({type: 'USER_LOGIN_SUCCES', payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        // alert('succes')
        window.location.href='/menu'
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED' , payload: error})
        // alert('Email or Password Invalid')
        
    }
}
export const logoutUser = () =>dispatch=>{

    localStorage.removeItem('currentUser')
    window.location.href('/')
}
