import { useState, useContext } from 'react';
import { Row, Col, Button, notification  } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Store } from '../../store'
import './styles.scss';

const ItemDetail = ( {item} ) => {
    const [data, setData] = useContext(Store);
    const [contador, setContador] = useState(1);

    const incrementar = () => setContador(contador + 1 );
    const decrementar = () => setContador(contador - 1 );


    const openNotification = () => {
      notification.open({
        message: 'Producto Agregado',
        description:
          'Producto agregado con exito',
        className: 'custom-class',
        style: {
          width: 600,
        },
      });
    };

    const onAdd = () => {
      const actualId = item.id;
      const exist = data.items.some(items => items.id === actualId);
      if(exist) {
        const productosCarrito = data.items.map ( producto => {
          if( producto.id === actualId) {
            producto.quantity += contador;
            return producto;
          } else {
            return producto;
          }
        });
        data.items = [...productosCarrito]

        setData({...data, cantidad: data.cantidad + contador,
          items:[...data.items],
          precioTotal: data.precioTotal + (item.precio * contador)
        });
      } else {
        item.quantity = contador;
        setData({...data, cantidad: data.cantidad + contador,
          items:[...data.items, item],
          precioTotal: data.precioTotal + (item.precio * contador)
        });
      }
      openNotification();
    }

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
              <Button onClick={onAdd} type="primary">
                    Agregar al carrito
              </Button>
            </Col>
          </Row>
        </article>
    );
}

export default ItemDetail;