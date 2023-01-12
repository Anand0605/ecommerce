import React from 'react'
import './Wishlist.css'
import image from '../../img/wishlist.jpg';

function Wishlist() {
    return (
        <>
            <div className="wish-empty">
                <div className="im"> <img src={image} alt="" />
                    <p>Nothing in the Wishlist</p>
                </div>

            </div>
        </>
    )
}

export default Wishlist