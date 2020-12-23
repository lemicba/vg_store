import React, { useState } from 'react';

const ItemDetail = ( {item} ) => {
   console.log(item)
    return (
        <article>
          <h1>{item.titulo}</h1>
          <img src={item.imagen} alt={item.titulo} />
          <p>{item.descripcion}</p>
          <p>{item.price}</p>
        </article>
    );
}

export default ItemDetail;