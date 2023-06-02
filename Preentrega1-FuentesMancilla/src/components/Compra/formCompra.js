
import React, { useContext, useState, useEffect } from 'react'
import { saveVenta } from '../../utils/servicios'
import { carritoContext } from '../../context/CarritoContext'
import { Spinner } from '../spinner/Spinner';
import { Modal } from '../modal/Modal';
import {Link} from 'react-router-dom'
import './formCompra.css'
export const FormCompra = () => {

    const { totalprecio, vaciarCarrito } = useContext(carritoContext);
    const [isload, setIsload] = useState(false)
    const [finishSale, setFinishSale] = useState(false)
    const [mailA, setMailA] = useState("");
    const [mailB, setMailB] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const [idOperacion, setidOperacion] = useState('')
    const numOrden = Math.floor(Math.random() * (99999 - 1111)) + 1111
    useEffect(() => {
        mailA === mailB && mailA !== "" && mailB !== "" ? setIsDisable(false) : setIsDisable(true);
    }, [mailA, mailB])

    const sendVenta = (e) => {
        e.preventDefault();
        setIsload(true)
        const venta = {
            numeroOrden: numOrden,
            email: e.target[1].value,
            fullname: e.target[0].value,
            number: e.target[3].value,
            total: totalprecio()
        }

        saveVenta(venta).then(res => {
            setidOperacion(res)
        }).finally(() => {

            setIsload(false)
            setFinishSale(true);
            vaciarCarrito()
        })
    }
    return (
        isload ? <Spinner />
            :
            <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <h3>Formulario de pedido</h3>
                </div>
                {
                    finishSale && <div className='containerAviso'>
                        <div className='avisoFinal'>
                        <h3>La factura de su venta esta bajo el codigo: {idOperacion}</h3>
                    </div>
                    <div><Link className='btn btn-primary' to='/'>Volver al inicio</Link></div>
                    </div>
                }
                <div style={{
                    width: '400px'
                }}>
                    <form onSubmit={sendVenta}>
                        <div class="mb-3">
                            <label for="nombrecomprador" class="form-label">Nombre y apellido</label>
                            <input type="text" class="form-control" id="nombrecomprador" aria-describedby="nameHelp" />
                            <div id="nameHelp" class="form-text">Ingresa tu nombre completo</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={e => setMailA(e.target.value)} />
                            <div id="emailHelp" class="form-text">Nunca compartiremos tu email con nadie.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Vuelva a ingresar su Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelpb" required onChange={e => setMailB(e.target.value)} />
                            <div id="emailHelpb" class="form-text">Nunca compartiremos tu email con nadie.</div>
                        </div>
                        <div class="mb-3">
                            <label for="phonenumber" class="form-label">Número telefonico</label>
                            <input type="number" class="form-control" id="phonenumber" minLength={8} maxLength={10} min={0} />
                        </div>
                        <div class="mb-3 form-check">
                            <label class="form-check-label" for="textfooter">Total a pagar </label>
                            <label class="form-check-label" for="moneyfooter">   ${totalprecio()}</label>
                        </div>
                        <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalitem" disabled={isDisable}>Comprar</button>
                    </form>
                    <Modal
                        title={"Compra realizada!"}
                        mensaje={"Genial!! pronto recibiras un Email informandote como retirar tu producto. Tu numero de orden es: " + numOrden }
                    />

                </div>
            </div>
    )
}
