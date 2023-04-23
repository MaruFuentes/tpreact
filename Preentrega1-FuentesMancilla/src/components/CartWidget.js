import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';


export const CartWidget = () => {
  return (
    <div className='d-flex'>
      <a href='#'>
        <HiOutlineShoppingCart
          size={30}
        />
      </a>
      <div className="conteineritems">
        <span>3</span>
      </div>
    </div>
  )
}
