import ItemListContainer from '../../Components/ItemListContainer';
import Slider from '../../Components/Slider';
import ItemCategory from '../../Components/ItemCategory'
import ImageCategoryFirst from '../../images/category-indie.png'
import ImageCategorySecond from '../../images/category-rpg.png'

export default function Home() {
    return (
        <div>
            <Slider />
            <div className="container"> 
                <h3 className="global-title">Destacados</h3>
                <div className="item-category__container">
                    <ItemCategory 
                    title="Juegos Indies" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis justo id libero malesuada."
                    img={ImageCategoryFirst} />
                    <ItemCategory 
                    title="Juegos RPG" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis justo id libero malesuada."
                    img={ImageCategorySecond} />
                </div>
                <h3 className="global-title">Mas Vendidos</h3>
                <ItemListContainer />
            </div>
        </div>
    )
}
