import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div >
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={5000}
      showThumbs={false} showIndicators={false}
             >
        <div>
          <img src={img1} alt='image1'/>
          <p className='legend' > Full Stack</p>
        </div>
        <div>
          <img src={img2} alt='image2'/>
          <p className='legend'>  Peer to peer support</p>
        </div>
      </Carousel>
    </div>

  );
};

export default Services