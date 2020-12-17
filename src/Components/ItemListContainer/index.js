import React, { useState, useEffect } from 'react'
import Item from '../Item'
import productImage from '../../images/cyberpunk.jpg'; 
import productImageSecond from '../../images/rdr2.jpg';
import './styles.scss';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const products = [
        {
            id: 1,
            titulo: 'Cyberpunk 2077',
            stock: 5,
            productImage: productImage,
        },
        {
            id: 2,
            titulo: 'Red Dead Redemption 2',
            stock: 8,
            productImage: productImageSecond,
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
    }, []);

    return (
        <div className="itemlist-container">
                {
                    items.map((product, index) => (
                            <Item
                                titleProduct={product.titulo} 
                                stock={product.stock}
                                productImage={product.productImage}
                            />
                    ))
                }
        </div>
    );
}

export default ItemListContainer;
