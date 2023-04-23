import React from 'react';

import { Card } from './card/Card';
import { CardBody } from './card/CardBody';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
const {id} = useParams()
 
  return (
  <>
     <h1>Todos nuestros productos</h1>
     {
      id?  <CardBody categoria={id}/>:<CardBody />
     }
    
  </>
  )
}
