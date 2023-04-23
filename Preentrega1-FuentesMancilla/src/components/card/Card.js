import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

export const Card = ({props}) => {

    return (
        <div className="card" style={{width:'18rem'}}>
            <img src={props.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">${props.precio}</p>
                    <Link className="btn btn-primary" to={'/item/'+props.id}>Ver Producto</Link>
                </div>
        </div>
    )
}
