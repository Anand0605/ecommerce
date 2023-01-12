import React from 'react';
import './Login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login() {
    return (
        <>
            <div className="main-login">
                <div className="login-card">
                    <form action="">
                        <div className="profile">
                            <AccountCircleIcon />
                        </div>
                        <div className="input-username">
                            <input type="text" placeholder='Enter Your Username' />
                        </div>
                        <div className="input-password">
                            <input type="password" placeholder='Enter Your Password' />
                        </div>
                        <div className="login-btn">
                            <button type="submit">Login</button>
                        </div>
                        <div className="forget-signup">
                            <a href="">Forget Password ?</a>
                            <p>Not Register ? <a href="">Sign Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;