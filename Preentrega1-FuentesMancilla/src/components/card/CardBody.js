import React, {useState} from 'react'
import ProductosData from '../../mock/productos.json'
import { Card } from './Card';
import  './cardBody.css'
import { getAllProducts } from '../../utils/servicios';
import { Spinner } from '../spinner/Spinner';
export const CardBody = ({categoria }) => {

    const [items, setItems] = useState([]);
    const [isloading, setIsloading] = useState(true)
    React.useEffect(() => {
    
        getAllProducts().then(res =>{
            setItems(res)
            }).finally(()=>setIsloading(false))


    }, [])
    
    return (
        <div
            className='row cardBody'
        >
           {
            isloading?<Spinner/>
            :
            
              items.map(item => {
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
