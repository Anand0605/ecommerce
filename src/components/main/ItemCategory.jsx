import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import './main.css'

const ItemCategory = ({ title, category }) => {

    const [productDetails, setProductDetails] = useState();

    const getData = async () => {
        let res = await fetch(`https://dummyjson.com/products/category/${category}?limit=9`);
        let data = await res.json();
        setProductDetails(data.products);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="products">
                {
                    productDetails
                    &&
                    productDetails.map((curObj) => {
                        return (
                            <ItemCard
                                key={curObj.id}
                                curObj={curObj}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemCategory