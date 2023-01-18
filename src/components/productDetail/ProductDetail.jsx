
// import { LineAxisOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import PercentIcon from '@mui/icons-material/Percent';
import DiscountIcon from '@mui/icons-material/Discount';
import '../productDetail/ProductDetail.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useGlobalCart } from '../../context/cart-context';



export default function ProductDetail() {
    const [productDetail, setProductDetail] = useState();

    const { cartArray, addToCart } = useGlobalCart();

    const navigate = useNavigate();

    const { id } = useParams();


    const getProductDetail = async (id) => {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await res.json();
        setProductDetail(data);
        console.log(data);
    }

    useEffect(() => {

        getProductDetail(id);
    }, [])

    return (

        productDetail

        &&
        <>
            <div className="header">
                <div className="heading">
                </div>
            </div>

            <div className="main-dis">
                <div className="left-dis">
                    <div className="left">
                        {
                            productDetail.images.map((img) => {
                                return (
                                    <img src={img} alt="" />
                                )

                            })
                        }

                    </div>

                    <div className="main-img">
                        <img src={productDetail.thumbnail} alt="" />

                    </div>




                </div>

                <div className="right-dis">
                    <div className="dis">
                        <div className='title'>

                            <h1>{productDetail.title}</h1><br />
                            <p><Rating name="read-only" value={productDetail.rating} precision={0.2} readOnly /></p>
                            <h3>Brand  :  {productDetail.brand}</h3><br />
                            <h4> <h3>Description:</h3> {productDetail.description}</h4><br />
                            <h3 className='deal'>Deal of the day</h3>
                            <h3>&#x20B9;{productDetail.price}/-</h3><br />


                        </div>

                        <div className="offer">
                            <div>

                                <h2><DiscountIcon className='percent' />Offers</h2> <br />
                                <h4> <LocalOfferIcon className='off' />Bank Offer
                                    5% Cashback on Flipkart Axis Bank Card
                                    T&C</h4><br />
                                <h4><LocalOfferIcon className='off' />Buy this Product and Get Extra ₹500 Off on Two-Wheelers
                                    T&C</h4><br />
                                <h4><LocalOfferIcon className='off' />Partner Offer
                                    Purchase now & get a surprise cashback coupon for January / February 2023
                                    Know More</h4><br />
                                <h4 ><LocalOfferIcon className='off' />Partner Offer
                                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000*
                                    Know More</h4>
                            </div>

                        </div>
                        <div className="Buy-now">
                            {
                                cartArray.includes(productDetail.id) ?
                                    <Button variant="contained" onClick={() => navigate('/Cart')}><ShoppingCartIcon />go to cart</Button> :
                                    <Button variant="contained" onClick={() => addToCart(productDetail.id)}>add to cart</Button>
                            }

                        </div>


                    </div>

                </div>
            </div>
            <hr />

        </>
    )
}
