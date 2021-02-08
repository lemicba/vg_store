import { useState, useContext } from 'react';
import { Drawer, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Store } from '../../store'

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
        <h4>Your cart is empty</h4>
        {
                    items.map((items, index) => (
                        <div className="">
                            <div className="">
                                <h3>
                                    Titulo
                                </h3>
                                {items.titulo}
                            </div>
                            <div className="">
                                <h3>
                                    Precio
                                </h3>
                                {items.precio}
                            </div>
                            <div className="">
                                <h3>
                                    Cantidad
                                </h3>
                                {items.quantity}
                            </div>
                        </div>

                    ))
                }
                    <button onClick={goToCard}>
                      Activate Lasers
                    </button>
      </Drawer>
    </>
  );
};

export default CarWidget;