import { useState, useContext } from 'react';
import { Drawer, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Store } from '../../store'
import './styles.scss';

const CarWidget = () => {
  const [data, setData] = useContext(Store);
  const items = [...data.items];

  const [visible, setVisible] = useState(false);

  const history = useHistory();

  const goToCard = () => {
    history.push("/cart");
    onClose();
  }

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Badge count={data.cantidad}>
        <Button type="dashed" size="medium" onClick={showDrawer}>
          <ShoppingCartOutlined />
        </Button>
      </Badge>
      <Drawer
        width="350"
        title="Carrito"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {
          data.items.length ?
            items.map((items, index) => (
                <div className="car-widget">
                  <div>
                    <img className="car-widget__image" src={`/${items.productImage}`} alt={items.titulo} />
                  </div>
                    <div className="">
                        {items.titulo}
                    </div>
                    <div className="">
                        ${items.precio}
                    </div>
                    <div className="">
                        cantidad - {items.quantity}
                    </div>
                </div>
            ))
            : <h4>Tu carrito esta vacio</h4>
        }
          <button 
          disabled={data.items.length ? null : 'disabled' }
          onClick={goToCard}>
            Ver carrito
          </button>
      </Drawer>
    </>
  );
};

export default CarWidget;