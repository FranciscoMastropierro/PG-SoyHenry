import React from "react";
import style from '../../styles/cardProducts.module.css'
import { useCartContext } from '../../context/CartItem';

export default function NotFound () {

    const superState = useCartContext()

    const {addItemToCart, deleteItemToCart} = superState.effects

    const {total, products} = superState.state

    const handleItemToCart = (product) => () => addItemToCart(product)

    const handleItemToDelete = (product) => () => deleteItemToCart(product)

    return (
        <div>
            {
                products?.map( product => {
                    const { id, image, name, price, amount } = product
                    let amountOfProduct = price * amount
                    return (
                        <div className={style.card} key={id}>
                            <div className={style.imgDiv}>
                                <img className={style.img} src={image} alt="imagen de producto" />
                            </div>
                            <h2 className={style.h2}>{name}</h2>
                            <br/>
                            <button className={style.btn} onClick={handleItemToCart(product)}> + </button>
                            <p>{amount}</p>
                            <button className={style.btn} onClick={handleItemToDelete(product)}> - </button>
                            <div className={style.price}>$<h3>{amountOfProduct}</h3></div>
                        </div>
                    )
                })
            }
            <div>
                <h1>
                    {
                        <p>total</p>
                    }
                </h1>
            </div>
        </div>
    )
}

// onClick={handleItemToDelete(product)}