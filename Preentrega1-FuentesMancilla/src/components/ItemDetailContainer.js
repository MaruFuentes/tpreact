import React, { useState, useEffect, useContext } from 'react';
import { getById } from '../utils/mFecth';
import { useParams } from 'react-router-dom';
import { Spinner } from './spinner/Spinner';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { carritoContext } from '../context/CarritoContext';
import { getProductById } from '../utils/servicios';
import { Modal } from './modal/Modal';




export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({});
    const [isloading, setLoading] = useState(true)
    const [seleccion, setseleccion] = useState(1);
    const { addElementos } = useContext(carritoContext)

    useEffect(() => {
        getProductById(id).then(res => {
            setProducto(res)
        }).finally(() => setLoading(false))

    }, [])





    return (
        <>
            {
                isloading ?

                    <Spinner />

                    :
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <div className="card" style={{ width: '20rem', height: '500px', padding: '8px', marginTop: '45px' }}>
                            <img src={producto.imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">${producto.precio}</p>
                                <p className="card-text">{producto.descripcion}</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '5px',
                                        padding: '5px'
                                    }}
                                >

                                    <span
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => { seleccion > 0 && setseleccion(seleccion - 1) }}
                                    ><AiFillMinusCircle
                                            size={22}
                                            coler

                                        />
                                    </span>
                                    <span style={{ margin: '0,5px,0,5px' }}>{seleccion}</span>
                                    <span
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => { setseleccion(seleccion + 1) }}
                                    >
                                        <AiFillPlusCircle
                                            size={22}
                                        />
                                    </span>
                                </div>
                                <button 
                                    onClick={() => { addElementos(seleccion, producto,id) }} 
                                    className="btn btn-primary" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modalitem"
                                    disabled={seleccion===0}
                                    >Agregar Al carrito
                                    </button>
                            </div>
                        </div>
                    </div>
            }
            <Modal title={"Ya esta en tu carrito"} mensaje={"El articulo seleccionado ya esta en el carrito accede para finalizar tu compra"}/>
         

        </>


    )
}
