import React, { useContext } from 'react'
import { carritoContext } from '../../context/CarritoContext'
import { Item } from './Item'
import { Link } from 'react-router-dom';
import './Carrito.css'
 import   {doc,getDoc,getFirestore, collection,getDocs} from 'firebase/firestore'

export const Carrito = () => {

    const { items, deleteElemento, totalprecio } = useContext(carritoContext);
    

    return (
        <div className='container'>
            <h1>Carrito</h1>
            <div className=' row-detail'>
                <div>
                    <span>Imagen</span>
                </div>
                <div>
                    <span>Articulo</span>
                </div>
                <div>
                    <span>Cantidad</span>
                </div>
                <div>
                    <span>Sub Total</span>
                </div>
                <div>
                    <span >
                        Acciones
                    </span>
                </div>
            </div>
            {
               items.map(item => {
                return <Item item={item} accion={deleteElemento} />
            })
            }
            <footer className='footer-carrito'>
                <div>
                    <span>Total: ${totalprecio()}</span>
                </div>
                <div>
                    <Link className={items.length >0?'btn btn-primary':'btn btn-secondary disable' } to='/compra'  >Comprar</Link>
                </div>
            </footer>
        </div>
    )
}
