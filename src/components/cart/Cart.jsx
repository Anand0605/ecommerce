import React from 'react'
import './cart.css';
import CartItem from './CartItem';


function Cart() {
    return (
        <>
            <div className="main-cart">
                <div className="cart-heading">Shopping Cart
                    <p>You Have a 2 Iteam in Cart
                    </p>
                </div>
                <div className="cart-items">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>

        </>
    )
}

export default Cart;