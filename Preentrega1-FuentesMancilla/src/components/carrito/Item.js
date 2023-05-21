import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs'
import './Item.css'

export const Item = ({item, accion}) => {

  return (
    <>
        

    <div className=' row-detail'>
        <div>
            <img className='imagen-item' src={item.producto.imagen}/>
        </div>
        <div>
            <span>{item.producto.name}</span>
        </div>
        <div>
            <span>{item.pedido}</span>
        </div>
        <div>
            <span>${(parseInt(item.producto.precio)*item.pedido)}</span>
        </div>
        <div>
            <span 
                className='borrar-item' 
                onClick={()=>{accion(item)}} 
                
                >
                <BsFillTrashFill />
            </span>
        </div>
    </div>
    </>
  )
}

