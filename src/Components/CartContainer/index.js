import { useContext } from 'react';
import { Layout, Button } from 'antd';
import { Store } from '../../store';
import { useHistory } from "react-router-dom";
import './styles.scss';

const CartContainer = () => {
    const [data, setData] = useContext(Store);
    const items = [...data.items];

    const history = useHistory();
    
    const onAdd = () => history.push("/checkout");

  return (
    <Layout>
        <div className="site-layout-content">
            <h1>Carrito</h1>
                {
                    items.map((items, index) => (
                        <div className="cartDetail">
                            <div className="cartDetail__row">
                                <h3>
                                    Titulo
                                </h3>
                                {items.titulo}
                            </div>
                            <div className="cartDetail__row">
                                <h3>
                                    Precio
                                </h3>
                                {items.precio}
                            </div>
                            <div className="cartDetail__row">
                                <h3>
                                    Cantidad
                                </h3>
                                {items.quantity}
                            </div>
                        </div>

                    ))
                }
                <Button onClick={onAdd} type="primary">
                    Agregar al carrito
                </Button>
        </div>
    </Layout>
  );
};

export default CartContainer;