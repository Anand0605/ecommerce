import React, { useState } from 'react';
import logo from '../../img/logo6.png';
import './Nav.css'
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther'
import ManIcon from '@mui/icons-material/Man';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Menu from '../menu/Menu';
import { NavLink } from 'react-router-dom';
import { useGlobalLogin } from '../../context/login-context';

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false);

    const { userDetail, loginToken, logOut } = useGlobalLogin();

    const menuFunction = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            {
                showMenu
                &&
                <Menu
                    menuFunction={menuFunction}
                />
            }

            <div className="all-nav">
                <nav>

                    <div className="left-nav">
                        <img src={logo} alt="" />

                    </div>

                    <div className="nav-mid">
                        <input type="search" placeholder='search here' />
                        <div className="search-icon-div">
                            <SearchIcon className='icons icon-search' />
                        </div>
                    </div>
                    <div className="nav-right">
                        {
                            loginToken ?
                                <NavLink>
                                    <div className="nav-profile">
                                        <Person2Icon className='icons' />
                                    </div>
                                </NavLink> :
                                <NavLink to='/login'>
                                    <div className="nav-profile">
                                        <Person2Icon className='icons' />
                                    </div>
                                </NavLink>
                        }
                        <NavLink to='/wishlist'>
                            <div className="Wishlist">
                                <FavoriteIcon className='icons' />
                            </div>
                        </NavLink>
                        <NavLink to='cart'>
                            <div className="nav-cart">
                                <ShoppingCartIcon className='icons' />
                            </div>
                        </NavLink>
                    </div>

                </nav>

                <div className="navigation">
                    <div className="item" onClick={menuFunction}><MenuIcon />menu</div>
                    <NavLink to='/'>
                        <div className="item"><HomeIcon />Home</div>
                    </NavLink>
                    <NavLink to='Electronics'>
                        <div className="item"><DevicesOtherIcon />Electronics</div>
                    </NavLink>
                    <NavLink to='/Men'><div className="item"><ManIcon />Men</div></NavLink>
                    <NavLink to='Women'><div className="item"><LibraryBooksIcon />Women</div></NavLink>
                </div>
            </div >
        </>
    )
}
