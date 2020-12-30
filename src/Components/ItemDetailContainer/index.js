import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { productList } from "../../assets/productos";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemid } = useParams();

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(()=> {
            const productoSeleccionado = productList.find( producto => producto.id == itemid )
            resolve(productoSeleccionado);
        },500)
    });

    const llamadoProducto = () => {
        getProduct.then((respuesta) => setProduct(respuesta));
    }
    useEffect(() => llamadoProducto(), []);

    return (
        <>
        {
            !!product ?
            <>
                <div className="itemlist-container">
                    <ItemDetail item={product}/>
                </div>
            </> :
            <p>Cargando producto</p>
        }
        </>
        
    );
}

export default ItemDetailContainer;
