import { useContext } from 'react';
import { Button } from 'antd';
import { Store } from '../../store';
import { useHistory } from "react-router-dom";
import './styles.scss';

const CartContainer = () => {
    const [data, setData] = useContext(Store);
    const items = [...data.items];

    const history = useHistory();
    
    const onAdd = () => history.push("/checkout");

    function onRemove(items){
        const actualId = items.id;
        const filter = data.items.filter((prod) => prod.id !== actualId);

        const contador = items.quantity;

        setData({cantidad: data.cantidad - contador,
            items: filter });
    } 

  return (
    <>
        <div className="cartDetail-container">
            <h1>Carrito</h1>
            <div className="cartDetail-content">
            {data.items.length ?
                   items.map((items, index) => (
                        <div className="cartDetail">
                            <div className="cartDetail__row">
                                <img src={items.productImage} alt={items.titulo} />
                            </div>
                            <div className="cartDetail__row">
                                {items.titulo}
                            </div>
                            <div className="cartDetail__row">
                                ${items.precio}
                            </div>
                            <div className="cartDetail__row">
                                Cant {items.quantity}
                            </div>
                            <button onClick={ () => onRemove(items)}>X</button>
                        </div>

                    ))
                : <div>
                    <p className="cartDetail-container__msj">No hay productos agregados al carrito</p>
                </div>
                }
                </div>
                <Button onClick={onAdd} disabled={data.items.length ? null : 'disabled' } type="primary">
                    Comprar
                </Button>
        </div>
    </>
  );
};

export default CartContainer;