import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);

    const addToCart = (id) => {
        if (cartArray.includes(id)) {
            alert("already exist")
        } else {
            setCartArray((oldData) => {
                return [id, ...oldData]
            })
        }
    }


    const deleteCart = (id) => {
        setCartArray((oldData) => {
            return oldData.filter((cartId) => cartId != id)
        })
    }


    return (
        <cartContext.Provider value={{ cartArray, addToCart, deleteCart }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };