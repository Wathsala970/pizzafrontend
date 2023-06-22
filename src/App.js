import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import 'bootstrap';
import Navbar from './Components/Navbar';
import Home from './Components/home/home';
import Menu from './Components/Menu/menu';
import Login from './Components/Login/login';
import CartScreen from './Components/Cart/cart';
import Registration from './Components/Login/register';
import Order from './Components/Order/order';
import Profile from './Components/Profile/profile';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<CartScreen/>} />
          <Route path='/register' element={<Registration/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
