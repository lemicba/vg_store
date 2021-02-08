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


    function onRemove(id){
        const actualId = id;
        //const find = data.items.find((prod) => prod.id == actualId);
        const filter = data.items.filter((prod) => prod.id !== id);
        console.log(data);
        
        setData({ 
            ...data, 
            items: filter,
            //cantidad: data.cantidad-cantidad,
            //precioTotal: data.precioTotal - (find.precio*find.quantity)
        });
    } 

  return (
    <>
        <div className="cartDetail-container">
            <h1>Carrito</h1>
            <div className="cartDetail-content">
                {   
                    items.map((items, index) => (
                        <div className="cartDetail">
                            <div className="cartDetail__row">
                                <img src={items.productImage} />
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
                            <button onClick={ () => onRemove(items.id)}>X</button>
                        </div>

                    ))
                }
                </div>
                <Button onClick={onAdd} type="primary">
                    Comprar
                </Button>
        </div>
    </>
  );
};

export default CartContainer;