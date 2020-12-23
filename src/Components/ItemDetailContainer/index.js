import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({
                id: 1,
                titulo: "Red Dead Redemption 2",
                imagen: "http://placehold.it/400x400",
                descripcion: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
                precio: 2499
            })
        },2000)
    });

    useEffect(() => {
        getProduct.then(response => setProduct(response)).catch(error => console.log(error));
    }, []);

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
