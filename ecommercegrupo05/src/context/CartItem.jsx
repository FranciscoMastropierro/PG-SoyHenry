import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const initialState = {
        total: 0,
        products: []
    }

    const [state, setState] = useState(() => {
        try {
            const productInLocalStorage = localStorage.getItem('cartState');
            return productInLocalStorage
                ? JSON.parse(productInLocalStorage)
                : initialState;
        } catch (error) {
            return initialState
        }
    });

    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(state))
    }, [state]);
    // console.log("🚀 ~ file: CartItem.jsx ~ line 27 ~ CartProvider ~ state", state.products)

    const cachearNumber = state.products.reduce((accum, current) => accum = accum + current?.amount, 0)
    // const totalAmount = state.products.reduce((accum, current) => accum = accum + current?.price, 0)
    // console.log("🚀 ~ file: CartItem.jsx ~ line 30 ~ CartProvider ~ cachearNumber", cachearNumber)

    const updateState = (props) => {
        setState({
            ...state,
            ...props
        })
    }

    const addItemToCart = itemToAdd => {
        const cartItems = state.products
        const inCart = cartItems.find(({ id }) => id === itemToAdd.id);
        // console.log("🚀 ~ file: CartItem.jsx ~ line 43 ~ CartProvider ~ inCart", inCart.amount)

        let newItems
        
        if (inCart) {
            newItems = cartItems.map((productInCart) => {
                if (productInCart.id === itemToAdd.id) {
                    return { ...inCart, amount: inCart.amount + 1 };
                } else return productInCart;
            })
        } else {
            newItems = [...cartItems, { ...itemToAdd, amount: 1 }]
        }
        updateState({ products: newItems });
        // console.log("🚀 ~ file: CartItem.jsx ~ line 57 ~ CartProvider ~ newItems", newItems)
    };

    const deleteItemToCart = itemToDelete => {
        const cartItems = state.products
        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        // let itemDelete

        if (inCart.amount === 1) {
            setState(
                cartItems.filter(({ id }) => id !== itemToDelete.id)
            );
        } else {
            setState(
                cartItems.map((productInCart) => {
                    if (productInCart.id === itemToDelete.id) {
                        return { ...inCart, amount: inCart.amount - 1 };
                    } else return productInCart;
                }));
        }
    };

    const storage = {
        state,
        effects: {
            addItemToCart,
            deleteItemToCart
        }
    }

    return (
        <CartContext.Provider
            value={storage}
        >
            {children}
        </CartContext.Provider>
    )
};