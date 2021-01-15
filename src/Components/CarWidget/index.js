import { useState, useContext } from 'react';
import { Drawer, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Store } from '../../store'

const CarWidget = () => {
  const [data, setData] = useContext(Store);
  //console.log(data.cantidad);

  const [visible, setVisible] = useState(false);
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
        title="Carrito"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <h4>Your cart is empty</h4>
      </Drawer>
    </>
  );
};

export default CarWidget;