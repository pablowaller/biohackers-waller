import React from 'react';
import { Item } from '../Item/Item'

export const ItemList = ({ productos }) => {

   return (
      productos.map((element, id) => {
         return <div key={id}>
            <Item producto={element} />
         </div>
      })
   );
}


