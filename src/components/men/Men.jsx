import React from 'react'
import ItemCategory from '../main/ItemCategory'

function Men() {
    return (
        <>
            <ItemCategory
                title={'Mens Shirts'}
                category={'mens-shirts'}
            />
            <ItemCategory
                title={'mens shoes'}
                category={'mens-shoes'}
            />

            <ItemCategory
                title={'mens watches'}
                category={'mens-watches'}
            />
        </>
    )
}

export default Men