import { Carousel } from 'antd';
import sliderImage1 from '../../images/slider1.jpg';
import sliderImage2 from '../../images/slider2.jpg';
import './styles.scss';


const Slider = () => {
    
    function onChange(a, b, c) {
        console.log(a, b, c);
      }

    return (
        <div>
            <Carousel afterChange={onChange}>
                <div className="slider">
                    <img alt="primer slider" src={sliderImage1} />
                </div>
                <div className="slider">
                    <img alt="segundo slider" src={sliderImage2} />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider