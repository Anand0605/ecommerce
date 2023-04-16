import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../img/slider-img.jpg';
import img1 from '../../img/kh-1.jpg';
import img2 from '../../img/store-of-the-future.jpg';
import img3 from '../../img/slider.jpg';
import img4 from '../../img/men.jpg';
import img5 from '../../img/slider3.jpg';
import img6 from '../../img/run.jpg';



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
                        <img src={img3} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img4} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img5} alt='image' />
                    </div>
                    <div className='slider-div'>
                        <img src={img6} alt='image' />
                    </div>
                    {/* <div className='slider-div'>
                        <img src={img7} alt='image' />
                    </div> */}
                </Carousel>
            </div>
        </>
    )
}

export default Slider