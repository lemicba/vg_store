import { useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { ShoppingCartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './styles.scss';


const ItemListContainer = ( props ) => {
    const { Title } = Typography;
    const [contador, setContador] = useState(1);

    const incrementar = () => setContador(contador + 1 );
    const decrementar = () => setContador(contador - 1 );
    
    const comprar = () => alert(`Has agregado ${contador} productos a tu carrito `);

    return (
    <div className="itemlist-container">
        <Card
            style={{ width: 600 }}
            cover={
            <img
                alt={props.titleProduct}
                src={props.productImage}
            />
            }
            actions={[
            <ShoppingCartOutlined onClick={comprar} key="ellipsis" />,
            ]}
        >
            <Title level={4}>{props.titleProduct}</Title>
            <div className="counter-container">
                <Button shape="circle" onClick={decrementar} disabled={contador <= 1 ? true : null }  icon={<MinusOutlined />} />
                <p className="counter-container_count">{contador}</p>
                <Button shape="circle" onClick={incrementar}  disabled= {contador == props.stock ? true : null } icon={<PlusOutlined />} />
            </div>
        </Card>
    </div>
    );
}

export default ItemListContainer;
