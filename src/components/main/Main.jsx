import React, { useState, useEffect } from 'react';
import './main.css';
import ItemCategory from './ItemCategory';
import Slider from './Slider';


const Main = () => {

    return (
        <div className='main-component'>
            <Slider />
            <ItemCategory
                title={'Tops'}
                category={'tops'}
            />
            <ItemCategory
                title={'Smartphones'}
                category={'smartphones'}
            />
            <ItemCategory
                title={'Mens Shirts'}
                category={'mens-shirts'}
            />
            <ItemCategory
                title={'Womens Watches'}
                category={'womens-watches'}
            />
            <ItemCategory
                title={'Sunglasses'}
                category={'sunglasses'}
            />
            <ItemCategory
                title={'Furniture'}
                category={'furniture'}
            />
            <ItemCategory
                title={'Womens Dresses'}
                category={'womens-dresses'}
            />
            <ItemCategory
                title={'Womens jewellery'}
                category={'womens-jewellery'}
            />
        </div>
    )
}

export default Main;