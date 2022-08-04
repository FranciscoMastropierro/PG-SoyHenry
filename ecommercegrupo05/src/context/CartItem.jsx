import React, { createContext, useState, useEffect, useContext } from "react";
import swal from 'sweetalert';
import { useSelector } from 'react-redux'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const initialState = {
        total: 0,
        products: []
    }

    const mensaje = useSelector((state) => state.msgCart)
    // console.log("🚀 ~ file: CartItem.jsx ~ line 16 ~ CartProvider ~ msg rogelioooo", msg)

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

    const cachearNumber = state.products.reduce((accum, current) => accum = accum + current?.amount, 0)

    // const totalAmount = state.products.reduce((accum, current) => accum = Number(accum) + Number(current?.price), 0)

    // const totalPricePerProducts = state.products.map(({amount, price}) => amount * price)

    // const totalPrice = totalPricePerProducts.reduce((accum, current) => accum = accum + current, 0)


    const updateState = (props) => {
        setState({
            ...state,
            ...props
        })
    }

    const addItemToCart = itemToAdd => {
        const cartItems = state.products
        const inCart = cartItems.find(({ id }) => id === itemToAdd.id);

        let newItems

        if (inCart) {
            newItems = cartItems.map((productInCart) => {
                if (productInCart.id === itemToAdd.id) {
                    if(inCart.amount === inCart.stock){
                        swal({
                            title: "No hay suficientes productos en el stock",
                            input: "text",
                            showCancelButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            buttons: {
                                cancel: 'ok'
                            }
                        })
                        return productInCart;
                    }else {
                        return { ...inCart, amount: inCart.amount + 1};
                    }
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

    const deleteAll = itemToDelete => {
        const cartItems = state.products

        const inCart = cartItems.find(({ id }) => id === itemToDelete.id);

        let itemDelete

        if(inCart){
            itemDelete = cartItems.filter(({ id }) => id !== itemToDelete.id)
        }

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
    }

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

    const deleteAllCart = msg => {
        
        
        console.log("🚀 ~ file: CartItem.jsx ~ line 157 ~ CartProvider ~ adentro de la funcion", mensaje)
        const cartItems = msg
        let result = []
        if(mensaje === 'Successful payment'){
            result = cartItems.splice(0,0)
            console.log('aqui entre en borrar todo')
        }else {
            return cartItems
        }
        updateState({ products: result });
    }

    const storage = {
        state,
        effects: {
            addItemToCart,
            deleteItemToCart,
            deleteAll,
            deleteAllCart
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













































        // if (inCart) {
        //     newItems = cartItems.map((productInCart) => {
        //         if (productInCart.id === itemToAdd.id) {
        //             return { ...inCart, amount: inCart.amount + 1};
        //         } else return productInCart;
        //     })

        // } else {
        //     newItems = [...cartItems, { ...itemToAdd, amount: 1 }]
        //     swal({
        //         title: "Producto añadido al carrito",
        //         input: "text",
        //         showCancelButton: true,
        //         confirmButtonText: "Guardar",
        //         cancelButtonText: "Cancelar",
        //         buttons: {
        //             cancel: 'ok'
        //         }
        //     })
        // }