import { Layout, Table, Space } from 'antd';
import './styles.scss';

const CartContainer = () => {
    const { Column } = Table;

    const data = [
    {
        key: '1',
        productName: 'Producto 1',
        price: 60,
        quantity: 1,
    },
    {
        key: '2',
        productName: 'Producto 2',
        price: 30,
        quantity: 2,
    },
    {
        key: '3',
        productName: 'Producto 3',
        price: 40,
        quantity: 1,
    },
    ];

  return (
    <Layout>
        <div className="site-layout-content">
            <h1>Carrito</h1>
            <Table dataSource={data}>
                    <Column title="Producto" dataIndex="productName" key="productName" />
                    <Column title="Precio" dataIndex="price" key="price" />
                    <Column title="Cantidad" dataIndex="quantity" key="quantity" />
                    <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Eliminar</a>
                        </Space>
                    )}
                    />
            </Table>
        </div>
    </Layout>
  );
};

export default CartContainer;