import {useState} from 'react';
import { carritoContext } from "./CarritoContext"


export const CarritoProvider = ({children}) => {
    const [cantidad, setcantidad] = useState(0)
    const [items, setItems] = useState([]);
   
    const addElementos=(number, item,id)=>{
        setcantidad(cantidad+number);
        item.id = id;
        const elemento ={
            producto:item,
            pedido:number
        } 
        setItems([...items,elemento])
    }

    const deleteElemento =(item)=>{
        
        setItems(items.filter(x=>x.producto.id != item.producto.id))
        setcantidad(cantidad-item.pedido)
    }

    const totalprecio =()=>{
        let total =0;
        items.forEach(element => {
            total += (element.pedido * parseInt(element.producto.precio))
        });
        return total;
    }

    const vaciarCarrito = ()=>{
        setItems([])
        setcantidad(0)
    }
  return (
   <carritoContext.Provider value={
    {
        cantidad,
        addElementos,
        items,
        deleteElemento,
        totalprecio,
        vaciarCarrito
    }
   }>
    {children}
   </carritoContext.Provider>
  )
}
