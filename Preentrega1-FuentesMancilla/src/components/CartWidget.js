import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const CartWidget = () => {
  return (
    <div class='d-flex'>
    <HiOutlineShoppingCart
        size={30}
    />
    <div className="conteineritems">
        <span>3</span>
    </div>
</div>
  )
}
