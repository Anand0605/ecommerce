import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

const loginContext = createContext();


const LoginProvider = ({ children }) => {

    const [userDetail, setUserDetail] = useState({});
    const [loginToken, setLoginToken] = useState();
    const [loginInput, setLoginInput] = useState({
        id: '',
        password: ''
    });

    const tostifyObj = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    const notifySuccess = (content) => toast.success(content, tostifyObj);

    const getUserDetail = async (id) => {
        let res = await fetch(`https://dummyjson.com/users/${id}`);
        let userData = await res.json();
        setUserDetail(userData);
    }

    const dummyUserData = (event) => {
        event.preventDefault();
        setLoginInput({
            id: "kminchelle",
            password: "0lelplR"
        })
    }


    useEffect(() => {
        let token = localStorage.getItem("megaMartToken");
        if (token) {
            setLoginToken(token);
            let userId = localStorage.getItem("userId");
            getUserDetail(userId);
        }
    }, [])

    const loginObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: loginInput.id,
            password: loginInput.password,
            // username: 'kminchelle',
            // password: '0lelplR',
            // expiresInMins: 60, // optional
        })
    }

    const userLogin = async () => {
        let res = await fetch('https://dummyjson.com/auth/login', loginObj);
        let data = await res.json();
        setUserDetail(data);
        setLoginToken(data.token);
        localStorage.setItem("megaMartToken", JSON.stringify(data.token));
        localStorage.setItem("userId", JSON.stringify(data.id));
        notifySuccess("Login Successfull")
    }

    const loginAction = (event) => {
        event.preventDefault();
        userLogin();
    }

    const logOut = () => {
        localStorage.removeItem("megaMartToken");
        localStorage.removeItem("userId")
        setUserDetail({});
        setLoginToken('');
        notifySuccess("Logout Successfull")
    }

    return (
        <loginContext.Provider value={{ userDetail, userLogin, loginAction, loginToken, logOut, loginInput, setLoginInput, dummyUserData, notifySuccess }}>
            {children}
        </loginContext.Provider>
    )

}

const useGlobalLogin = () => useContext(loginContext)

export { LoginProvider, useGlobalLogin };