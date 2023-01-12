import React from 'react';
import './menu.css';
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

const Menu = ({ menuFunction }) => {
    return (
        <>
            <div className='main-menu'>
                <div className='left-menu'>
                    <div className="close-menu" onClick={menuFunction}>
                        <CancelIcon />
                    </div>
                    <h2><AccountCircleIcon />Welcome, User</h2>
                    <div className="menu-div order">
                        <h2>Order</h2>
                        <ul>
                            <li><div><ViewListIcon />Order Summary</div></li>
                            <li><div><AssignmentReturnIcon />Return</div></li>
                            <li><div><ViewModuleIcon />My Order</div></li>
                            <li><div><FavoriteBorderIcon />My Wishlist</div></li>
                        </ul>
                    </div>
                    <div className="menu-div payment">
                        <h2>Payment</h2>
                        <ul>
                            <li><div><PaymentIcon />Payment History</div></li>
                            <li><div><AccountBalanceWalletIcon />Payment Refund</div></li>
                        </ul>
                    </div>
                    <div className="menu-div help-setting">
                        <h2>Help & Setting</h2>
                        <ul>
                            <li><div><AccountBoxIcon />My Account</div></li>
                            <li><div><SupportAgentIcon />Customer Suport</div></li>
                            <li><div><ExitToAppIcon />sign Out</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;