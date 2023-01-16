import React from 'react'
import './cart.css';
import CartItem from './CartItem';
import { useGlobalCart } from '../../context/cart-context';


function Cart() {
    const { cartArray, addToCart } = useGlobalCart();
    return (
        <>
            <div className="main-cart">
                <div className="cart-heading"><h2>Shopping Cart</h2>
                </div>
                <div className="cart-items">

                    {
                        cartArray.map((cartId) => {
                            return <CartItem cartId={cartId} />
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Cart;