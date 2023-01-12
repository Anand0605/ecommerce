import React from "react";
import './footer.css'


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="about">

                        <ul>
                            <li><h2>About</h2></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Careers Us</a></li>
                            <li><a href="">Contact Us</a></li>


                        </ul>
                    </div>
                    <div className="help">
                        <ul>
                            <li><h2>Help</h2></li>
                            <li><a href="">Payment</a></li>
                            <li><a href="">Shipping</a></li>
                            <li><a href="">Cancellation & Return</a></li>
                            <li><a href="">Return</a></li>
                        </ul>
                    </div>
                    <div className="policy">
                        <ul>
                            <li><h2>Policy</h2></li>
                            <li><a href="">Return Policy</a></li>
                            <li><a href="">Terms & Use</a></li>
                            <li><a href="">Privecy</a></li>
                            <li><a href="">Security</a></li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><h2>Social</h2></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Github</a></li>
                        </ul>
                    </div>


                </div>
                <div className="copy">
                    <h4> &#169;Copyright 2023 Megamart</h4>
                </div>
            </footer>
        </>
    )
}