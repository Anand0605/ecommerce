import { React, useState, useEffect } from 'react';
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useGlobalCart } from '../../context/cart-context';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const CartItem = ({ cartId }) => {

    const [cartProduct, setCartProduct] = useState();

    const { cartArray, deleteCart } = useGlobalCart();


    const getProductDetail = async (id) => {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await res.json();
        setCartProduct(data);
        console.log(data);
    }

    useEffect(() => {
        getProductDetail(cartId);
    }, [cartArray])
    return (
        cartProduct
        &&
        <>
            <div className="cart-item">
                <div className="cart-img">
                    <img src={cartProduct.thumbnail} alt="image" />
                </div>
                <div className="product-title">
                    <h3>{cartProduct.title}</h3>
                </div>
                <div className="qnt"><RemoveIcon />
                    2<AddIcon />
                </div>
                <div className="price">
                    &#8377;<s>{cartProduct.price}</s>
                </div>

                <div className="delete" onClick={() => deleteCart(cartProduct.id)}><DeleteIcon />

                </div>
            </div>
        </>
    )
}

export default CartItem;