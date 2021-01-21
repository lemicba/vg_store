import { useState, useContext } from 'react';
import { Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import './styles.scss';


const Item = ( {item} ) => {

    const { Title } = Typography;

    return (
        /*
            <Card
                style={{ width: 500 }}
                className="item-card"
                cover={
                <img
                    alt={item.titulo}
                    src={`/${item.productImage}`}  
                />
                }
            >
                <Title level={4}>{item.titulo}</Title>
                <Link to={`/item/${item.id}`} >
                    <Button type="primary">
                        Detalle
                    </Button>
                </Link>
            </Card>
        */
       <div className="card">
            <div className="card__image">
                <img
                    alt={item.titulo}
                    src={`/${item.productImage}`}  
                />
            </div>
            <div className="card__content">
                <h2 level={4}>{item.titulo}</h2>
                <p level={4}>${item.precio}</p>
                <Link to={`/item/${item.id}`} >
                    <Button type="primary">
                        Ver más
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default Item;