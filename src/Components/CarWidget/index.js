import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CarWidget = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="dashed" size="large" onClick={showDrawer}>
        <ShoppingCartOutlined />
      </Button>
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