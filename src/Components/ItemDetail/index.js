import { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import './styles.scss';

const ItemDetail = ( {item} ) => {

    const [contador, setContador] = useState(1);

    const incrementar = () => setContador(contador + 1 );
    const decrementar = () => setContador(contador - 1 );

    const history = useHistory();

    const handleClick = () => history.push("/cart");

    return (
        <article className="itemDetail">
          <Row justify="space-around" align="middle">
            <Col span={12}>
              <img className="itemDetail-image" src={`/${item.productImage}`} alt={item.titulo} />
            </Col>
            <Col span={12} className="itemDetail-detail">
              <h1>{item.titulo}</h1>
              <p>{item.descripcion}</p>
              <h3>Precio: {item.precio}</h3>
              <div className="counter-container">
                <Button shape="circle" onClick={decrementar} disabled={contador <= 1 ? true : null }  icon={<MinusOutlined />} />
                <p className="counter-container_count">{contador}</p>
                <Button shape="circle" onClick={incrementar}  disabled= {contador === item.stock ? true : null } icon={<PlusOutlined />} />
              </div>
              <Button onClick={handleClick} type="primary">
                    Agregar al carrito
              </Button>
            </Col>
          </Row>
        </article>
    );
}

export default ItemDetail;