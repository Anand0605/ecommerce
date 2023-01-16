import React, { useState, useEffect } from 'react';
import './main.css';
import ItemCategory from './ItemCategory';
import Slider from './Slider';


const Main = () => {

    return (
        <div className='main-component'>
            <Slider />
            <ItemCategory
                key={123}
                title={'Tops'}
                category={'tops'}
            />
            <ItemCategory
                key={124}
                title={'Smartphones'}
                category={'smartphones'}
            />
            <ItemCategory
                key={125}
                title={'Mens Shirts'}
                category={'mens-shirts'}
            />
            <ItemCategory
                key={126}
                title={'Womens Watches'}
                category={'womens-watches'}
            />
            <ItemCategory
                key={127}
                title={'Sunglasses'}
                category={'sunglasses'}
            />
            <ItemCategory
                key={128}
                title={'Furniture'}
                category={'furniture'}
            />
            <ItemCategory
                key={129}
                title={'Womens Dresses'}
                category={'womens-dresses'}
            />
            <ItemCategory
                key={130}
                title={'Womens jewellery'}
                category={'womens-jewellery'}
            />
        </div>
    )
}

export default Main;