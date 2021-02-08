import React, { useState, useEffect } from 'react'
import Item from '../Item'
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import './styles.scss';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const { categname } = useParams();

    const getProducts = () => {
        db.collection('productos').get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            }) 
            if(categname) {
                const productosCategoria = arr.filter(productos => productos.data.categoria === categname);
                setItems(productosCategoria)
            }
            else {
                setItems(arr);
            }
        })
        .catch(e => console.log(e));
    };


    useEffect(() => getProducts(), [categname]);
    return (
        
        <div className="itemlist-container">
                {
                    items.length !== 0 ?
                    items.map((item) => (
                            <Item
                                id={item.id}
                                item={item}
                            />
                    ))
                    :
                    <div className="spinner__container">
                        <Spin size="large" />
                        <p>Cargando productos...</p>
                    </div>
                }
        </div>
    );
}

export default ItemListContainer;
