import { useState, useContext } from 'react';
import { Card, Typography, Button } from 'antd';
import { ShoppingCartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import './styles.scss';


const Item = ( {items} ) => {
    const [data, setData] = useContext(Store);

    const { Title } = Typography;
    const [contador, setContador] = useState(1);

    const incrementar = () => setContador(contador + 1 );
    const decrementar = () => setContador(contador - 1 );
    
    const onAdd = () => {
        setData({...data, cantidad: data.cantidad + contador,
            items:[...data.items, items]});
    }
    return (
            <Card
                style={{ width: 500 }}
                className="item-card"
                cover={
                <img
                    alt={items.titulo}
                    src={`/${items.productImage}`}  
                />
                }
                actions={[
                <ShoppingCartOutlined onClick={onAdd} key="ellipsis" />,
                ]}
            >
                <Title level={4}>{items.titulo}</Title>
                <div className="counter-container">
                    <Button shape="circle" onClick={decrementar} disabled={contador <= 1 ? true : null }  icon={<MinusOutlined />} />
                    <p className="counter-container_count">{contador}</p>
                    <Button shape="circle" onClick={incrementar}  disabled= {contador === items.stock ? true : null } icon={<PlusOutlined />} />
                </div>
                <Link to={`/item/${items.id}`} >
                    <Button type="primary">
                        Ver más
                    </Button>
                </Link>
            </Card>
    );
}

export default Item;