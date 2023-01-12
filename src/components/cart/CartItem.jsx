import React from 'react';
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import logo from '../../img/girl.jpg';


const CartItem = () => {
    return (
        <>
            <div className="cart-item">
                <div className="cart-img">
                    <img src={logo} alt="image" />
                </div>
                <div className="product-title">
                    This is Product Title
                </div>
                <div className="qnt"><RemoveIcon />
                    2<AddIcon />
                </div>
                <div className="price">
                    &#8377;437/-
                </div>
                <div className="delete"><DeleteIcon />

                </div>
            </div>
        </>
    )
}

export default CartItem