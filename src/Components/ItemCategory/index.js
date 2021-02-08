import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

const ItemCategory = ( props ) => {

    return (
        <div className="item-category">
            <div className="item-category--left">
                <h2 className="item-category__name">
                    {props.title}
                </h2>
                <p className="item-category__description">
                    {props.description}
                </p>
                <Link to={`/categoria/${props.url}`}>
                    <Button type="primary" shape="round">
                        Ver categoría
                    </Button>
                </Link>
            </div>
            <div className="item-category--right">
                <img src={props.img} alt={props.title}/>
            </div>
        </div>
    );
}

export default ItemCategory;