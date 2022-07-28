import React, { createContext, useState, useEffect, useContext } from "react";
import swal from 'sweetalert';

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
    console.log("🚀 ~ file: CartItem.jsx ~ line 24 ~ const[state,setState]=useState ~ state", state.products)

    
    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(state))
    }, [state]);

    const cachearNumber = state.products.reduce((accum, current) => accum = accum + current?.amount, 0)

    const totalAmount = state.products.reduce((accum, current) => accum = Number(accum) + Number(current?.price), 0)
    // console.log("🚀 ~ file: CartItem.jsx ~ line 34 ~ CartProvider ~ totalAmount", totalAmount)

    const updateState = (props) => {
        setState({
            ...state,
            ...props
        })
    }
    
    // const cantidadTotal = () => {

    //     updateState({
    //         total: state.total + 1
    //     })
    // }

    const addItemToCart = itemToAdd => {
        const cartItems = state.products
        const inCart = cartItems.find(({ id }) => id === itemToAdd.id);

        let newItems

        if (inCart) {
            newItems = cartItems.map((productInCart) => {
                if (productInCart.id === itemToAdd.id) {
                    return { ...inCart, amount: inCart.amount + 1, nombre: 'perro'};
                } else return productInCart;
            })

        } else {
            newItems = [...cartItems, { ...itemToAdd, amount: 1 }]
            swal({
                title: "Producto añadido al carrito",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
        }


        updateState({ products: newItems });
    };

    const deleteItemToCart = itemToDelete => {
        const cartItems = state.products

        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        let itemDelete

        if (inCart.amount === 1) {

            itemDelete = cartItems.filter(({ id }) => id !== itemToDelete.id)
            
            swal({
                title: "Producto eliminado del carrito",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })

            updateState({ products: itemDelete });
        } else {
            itemDelete = cartItems.map((productInCart) => {
                if (productInCart.id === itemToDelete.id) {
                    return { ...inCart, amount: inCart.amount - 1 };
                } else {
                    return productInCart
                }
            });

            updateState({ products: itemDelete });
        }
    }



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