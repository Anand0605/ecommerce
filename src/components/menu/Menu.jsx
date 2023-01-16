import React from 'react';
import './menu.css';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ViewListIcon from '@mui/icons-material/ViewList';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useGlobalLogin } from '../../context/login-context';

const Menu = ({ menuFunction }) => {

    const { userDetail, loginToken, logOut } = useGlobalLogin();

    const navigate = useNavigate();

    return (
        <>
            <div className='main-menu'>
                <div className='left-menu'>
                    <div className="close-menu" onClick={menuFunction}>
                        <CancelIcon />
                    </div>
                    <h2><AccountCircleIcon />Welcome, {loginToken ? userDetail.firstName : "User"}</h2>
                    <div className="menu-div order">
                        <h2>Order</h2>
                        <ul>
                            <li onClick={menuFunction}><div><ViewListIcon />Order Summary</div></li>
                            <li onClick={menuFunction}><div><AssignmentReturnIcon />Return</div></li>
                            <li onClick={menuFunction}><div><ViewModuleIcon />My Order</div></li>
                            <li onClick={menuFunction}><div><FavoriteBorderIcon />My Wishlist</div></li>
                        </ul>
                    </div>
                    <div className="menu-div payment">
                        <h2>Payment</h2>
                        <ul>
                            <li onClick={menuFunction}><div><PaymentIcon />Payment History</div></li>
                            <li onClick={menuFunction}><div><AccountBalanceWalletIcon />Payment Refund</div></li>
                        </ul>
                    </div>
                    <div className="menu-div help-setting">
                        <h2>Help & Setting</h2>
                        <ul>
                            <li onClick={menuFunction}><div><AccountBoxIcon />My Account</div></li>
                            <li onClick={menuFunction}><div><SupportAgentIcon />Customer Suport</div></li>

                            {
                                loginToken ?
                                    <li onClick={() => {
                                        logOut();
                                        menuFunction();
                                    }}><div><ExitToAppIcon />sign Out</div></li> :
                                    <li onClick={() => {
                                        navigate('/login')
                                        menuFunction()
                                    }}><div><ExitToAppIcon />sign In</div></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;