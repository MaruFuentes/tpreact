import React from 'react'
import { useParams } from 'react-router-dom'

export const Productos = () => {
   const {categoria}  = useParams();
  return (
    <div>Productos: {categoria}</div>
  )
}
