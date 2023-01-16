import React, { useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useGlobalLogin } from '../../context/login-context';


function Login() {

    const { loginAction, loginToken, loginInput, setLoginInput, dummyUserData } = useGlobalLogin();

    const navigate = useNavigate();

    useEffect(() => {
        if (loginToken) {
            navigate(-1)
        }
    }, [loginToken])

    const setInputId = (event) => {
        setLoginInput({
            id: event.target.value
        });
    }

    const setInputpassword = (event) => {
        setLoginInput({
            password: event.target.value
        });
    }

    return (
        <>
            <div className="main-login">
                <div className="login-card">
                    <form action="">
                        <div className="profile">
                            <AccountCircleIcon />
                        </div>
                        <div className="input-username">
                            <input type="text" placeholder='Enter Your Username' value={loginInput.id} onChange={setInputId} />
                        </div>
                        <div className="input-password">
                            <input type="password" placeholder='Enter Your Password' value={loginInput.password} onChange={setInputpassword} />
                        </div>
                        <div className="login-btn">
                            <button type="submit" onClick={loginAction}>Login</button>
                        </div>
                        <div className="login-btn">
                            <button onClick={dummyUserData}>Dummy User</button>
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