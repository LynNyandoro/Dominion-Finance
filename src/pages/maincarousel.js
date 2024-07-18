import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import s1 from '../assets/Main Carousel/Slide1.png'
import s2 from '../assets/Main Carousel/Slide2.png'
import s3 from '../assets/Main Carousel/Slide3.png'
import s4 from '../assets/Main Carousel/Slide4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Main() {
  const carouselStyle = {
    maxWidth: '6xl',
    margin: 'auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
   };

  return (
      <Carousel style={carouselStyle}>
      <Carousel.Item>
      <CImage className="d-block img-fluid w-100" src={s1} alt="slide 1" />
      </Carousel.Item>
      <Carousel.Item>
      <CImage className="d-block img-fluid w-100" src={s2} alt="slide 2" />
      </Carousel.Item>
      <Carousel.Item>
      <CImage className="d-block img-fluid w-100" src={s3} alt="slide 3" />
      </Carousel.Item>
      <Carousel.Item>
      <CImage className="d-block img-fluid w-100" src={s4} alt="slide 4" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;

