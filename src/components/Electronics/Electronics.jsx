import React from 'react'
import ItemCategory from '../main/ItemCategory'

function Electronics() {
    return (
        <>
            <ItemCategory
                title={'lighting'}
                category={'lighting'}
            />
            <ItemCategory
                title={'laptops'}
                category={'laptops'}
            />

            <ItemCategory
                title={'automotive'}
                category={'automotive'}
            />
        </>
    )
}

export default Electronics