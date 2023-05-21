import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { carritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';


export const CartWidget = () => {

  const {cantidad} = useContext(carritoContext)

  return (
    <div className='d-flex'>
      <Link to={'/carrito'}>
        <HiOutlineShoppingCart
          size={30}
        />
      </Link>
      <div className="conteineritems">
        <span>{cantidad}</span>
      </div>
    </div>
  )
}
