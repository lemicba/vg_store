import { useContext } from 'react';
import { Layout, Table, Space } from 'antd';
import { Store } from '../../store';
import './styles.scss';

const CartContainer = () => {
    const { Column } = Table;
    const [data, setData] = useContext(Store);
    const items = [...data.items];
    console.log(items)

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
                                {data.cantidad}
                            </div>
                        </div>

                    ))
                }
        </div>
    </Layout>
  );
};

export default CartContainer;