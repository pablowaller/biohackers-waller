import React from 'react';
import { Item } from '../Item/Item'

export const ItemList = ({ productos }) => {

   return (
      productos.map((element, i) => {
         return <div key={i}>
            <Item producto={element} />
         </div>
      })
   );
}


