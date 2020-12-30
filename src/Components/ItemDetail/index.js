import { Row, Col, Button } from 'antd';
import './styles.scss';

const ItemDetail = ( {item} ) => {
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
              <Button type="primary">
                    Agregar al carrito
              </Button>
            </Col>
          </Row>
        </article>
    );
}

export default ItemDetail;