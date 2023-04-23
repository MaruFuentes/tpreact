import React from 'react'
import ProductosData from '../../mock/productos.json'
import { Card } from './Card';
import  './cardBody.css'
export const CardBody = ({categoria }) => {
    return (
        <div
            className='row cardBody'
        >
            {
                ProductosData.map(item => {
                   if (!categoria) {
                   return <Card props={item} /> 
                   }else{
                    if (item.categoria == categoria) {
                       return <Card props={item} /> 
                    }
                   }
                })
            }
        </div>
    )
}
