import React, { useState, useEffect } from 'react'
import Item from '../Item'
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
                arr.push(doc.data())
            }) 
            if(categname) {
            const productosCategoria = arr.filter(producto => producto.categoria === categname);
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
                    items.map((item, index) => (
                            <Item
                                intex={index}
                                item={item}
                            />
                    ))
                }
        </div>
    );
}

export default ItemListContainer;
