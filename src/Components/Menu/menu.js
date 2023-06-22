import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions'
import Pizza from '../Menu/pizza';
import './menu.css';
import Loading from '../loading';
import Error from '../error';

export default function Menu() {
  const dispatch = useDispatch()

  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])


  return (
    <div>
      <div className='row justify-content-center'>

        {loading ? (
        <Loading />
        ) : error ? (
        <Error error= 'Something went wrong'/>
        ) : (
        pizzas.map(pizza => {
          return (
          <div className='col-md-3 m-3' key={pizza._id}>
            <div >
              <Pizza pizza={pizza} />
            </div>
          </div>
          );
          })
        )}
      </div>
    </div>
  )
}