import React, { useState, useEffect } from 'react'
import Item from '../Item'
import { useParams } from 'react-router-dom';
import { productList } from "../../assets/productos";
import './styles.scss';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { categname } = useParams();

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 500)
    });

    const productosSeleccionado = () => {
        getProducts.then(
            (respuesta) => {
                if(categname) {
                const productosCategoria = respuesta.filter(producto => producto.categoria === categname);
            setItems(productosCategoria)}
            else {
                setItems(respuesta);
            }
            }
        )
    }

    useEffect(() => productosSeleccionado(), [categname]);

    return (
        <div className="itemlist-container">
                {
                    items.map((product, index) => (
                            <Item
                                titleProduct={product.titulo} 
                                stock={product.stock}
                                productImage={product.productImage}
                                id={product.id}
                                key={product.id}
                            />
                    ))
                }
        </div>
    );
}

export default ItemListContainer;
