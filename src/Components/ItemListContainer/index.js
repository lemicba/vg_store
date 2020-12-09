import { Card, Typography  } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './styles.scss';
import productImage from '../../images/cyberpunk.jpg';
import productImageSecond from '../../images/rdr2.jpg';


const ItemListContainer = () => {
    const { Title } = Typography;
    return (
    <div className="itemlist-container">
        <Card
            style={{ width: 600 }}
            cover={
            <img
                alt="example"
                src={productImage}
            />
            }
            actions={[
            <ShoppingCartOutlined key="ellipsis" />,
            ]}
        >
            <Title level={4}>Cyberpunk 2077</Title>
        </Card>
        <Card
            style={{ width: 600 }}
            cover={
            <img
                alt="example"
                src={productImageSecond}
            />
            }
            actions={[
            <ShoppingCartOutlined key="ellipsis" />,
            ]}
        >
            <Title level={4}>Red Dead Redemption 2</Title>
        </Card>
    </div>
    );
}

export default ItemListContainer;
