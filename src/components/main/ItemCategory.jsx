import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
            <div className="tit">
                <h2>{title}</h2>
            </div>
            <div className="products">
                {
                    productDetails
                    &&
                    productDetails.map((curObj) => {
                        return (
                            <NavLink to={`/product-detail/${curObj.id}`}>
                                <ItemCard
                                    key={curObj.id}
                                    curObj={curObj}
                                />
                            </NavLink>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemCategory