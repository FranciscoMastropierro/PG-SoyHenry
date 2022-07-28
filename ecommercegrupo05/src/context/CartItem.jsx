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

    const usoSetState = (props) => {
        setState({
            ...state,
            ...props
        })
    }

    const sumar = () => {
        usoSetState({
            total: state.total + 1
        })
    }

    const addItemToCart = itemToAdd => {
        const cartItems = state.products
        const inCart = cartItems.find(({id}) => id === itemToAdd.id);

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
        usoSetState({products: newItems});
    };

    const deleteItemToCart = itemToDelete => {
        const cartItems = state.products
        const inCart = cartItems.find((productInCart) => productInCart.id === itemToDelete.id);

        if (inCart.amount === 1) {
            setState(
                cartItems.filter(({id}) => id !== itemToDelete.id)
            );
        } else {
            setState(
                cartItems.map((productInCart) => {
                if ( productInCart.id === itemToDelete.id ) {
                    return { ...inCart, amount: inCart.amount - 1 };
                } else return productInCart;
            }));
        }
    };

    const storage = {
        state,
        effects: {
            // addItemToCart,
            sumar
            // deleteItemToCart
        }
    }

    return (
        <CartContext.Provider
            value={ storage }
        >
            {children}
        </CartContext.Provider>
    )
};