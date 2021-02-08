import { useState, useEffect, useContext } from 'react';
import { Store } from '../../store';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';


const ItemDetailContainer = ( {item} ) => {
    const { itemid } = useParams();

    const db = getFirestore();

    const [data, setData] = useContext(Store);

    const [product, setProduct] = useState(null);


    useEffect(() => {
        db.collection('productos').doc(itemid).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(e => console.doc(e))
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
