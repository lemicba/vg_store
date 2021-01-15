import { useContext } from 'react';
import { Layout } from 'antd';
import { Store } from '../../store';
import './styles.scss';

const CartContainer = () => {
    const [data, setData] = useContext(Store);
    const items = [...data.items];
    

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
        </div>
    </Layout>
  );
};

export default CartContainer;