import React, { useState, useEffect } from 'react';
import { getById } from '../utils/mFecth';
import { useParams } from 'react-router-dom';
import { Spinner } from './spinner/Spinner';
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'



export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({});
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        getById(id).then(res => {
            setProducto(res)
        })
            .finally(() => setLoading(false))
    }, [])



    return (
        <>
            {
                isloading ?

                    <Spinner />

                    :
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center'
                        }}
                    >
                        <div className="card" style={{ width: '20rem',height:'500px', padding:'8px',marginTop:'45px' }}>
                        <img src={producto.imagen} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.name}</h5>
                            <p className="card-text">${producto.precio}</p>
                            <p className="card-text">{producto.descripcion}</p>
                            <div
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    gap:'5px',
                                    padding:'5px'
                                }}
                            >
                            
                                <span
                                    style={{
                                        cursor:'pointer'
                                    }}
                                ><AiFillMinusCircle
                                    size={22}
                                    coler
                                />
                                </span>
                                <span>0</span>
                                <span
                                    style={{
                                        cursor:'pointer'
                                    }}
                                >
                                    <AiFillPlusCircle
                                        size={22}
                                    />
                                </span>
                            </div>
                            <a href="#" className="btn btn-primary">Agregar Al carrito</a>
                        </div>
                    </div>
                    </div>
            }
        </>


    )
}
