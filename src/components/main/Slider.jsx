import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../img/slider-img.jpg';
import img1 from '../../img/slider-img1.jpg';
import img2 from '../../img/slider-img4.jpg';

const Slider = () => {
    return (
        <>
            <div className="slider">
                <Carousel autoPlay={true} interval={2000}>
                    <div className='slider-div'>
                        <img src={img} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img1} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img2} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img} alt='image' />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Slider