import React, { useState } from 'react';
import './main.css'
import Button from '@mui/material/Button';

const ItemCard = ({ curObj }) => {

    return (
        <>

            <div className="item">
                <div className="img">
                    <img src={curObj.thumbnail} alt="" />
                </div>
                <div className="details">
                    <h3>{curObj.title.slice(0, 10)}...</h3>
                    <p>Rs. {curObj.price * 50}/-</p>
                    <p>Desc</p>
                    <Button variant="contained" href="#contained-buttons">
                        GO TO CART
                    </Button>
                </div>
            </div>

        </>
    )
}

export default ItemCard;