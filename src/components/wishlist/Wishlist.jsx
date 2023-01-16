import React from 'react'
import './Wishlist.css'
import image from '../../img/wishlist.jpg';
import Button from '@mui/material/Button'

function Wishlist() {
    return (
        <>
            <div className="wish-empty">
                <div className="im"> <img src={image} alt="" />
                    <div className="im-child"><h3>Nothing in the Wishlisht</h3></div>
                    <Button variant="contained">Continue</Button>
                </div>

            </div>
        </>
    )
}

export default Wishlist