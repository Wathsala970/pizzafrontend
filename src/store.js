import {combineReducers} from 'redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzasReducer} from '../src/Components/reducers/pizzaReducers';
import { CartReducer } from './Components/reducers/cartReducers';
import {loginUserReducer, registerUserReducer} from '../src/Components/reducers/userReducer';
import {placeOrderReducer, getUserOrdersReducer} from '../src/Components/reducers/orderReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    CartReducer : CartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    CartReducer :{
        cartItems : cartItems
    },
    loginUserReducer:{
        currentUser : currentUser
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store