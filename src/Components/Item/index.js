import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';


const Item = ( {item} ) => {
    return (
       <div className="card">
            <div className="card__image">
                <img
                    alt={item.data.titulo}
                    src={`/${item.data.productImage}`}  
                />
            </div>
            <div className="card__content">
                <h2 level={4}>{item.data.titulo}</h2>
                <p level={4}>${item.data.precio}</p>
                <Link to={`/item/${item.id}`} >
                    <Button type="primary" shape="round">
                        Ver más
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default Item;