import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../styles/cart.module.css'
import { useCartContext } from '../../context/CartItem';

export default function NotFound() {

    const superState = useCartContext()

    const navigate = useNavigate()

    const [precio, setPrecio] = useState(true)

    const { addItemToCart, deleteItemToCart } = superState.effects

    const { products } = superState.state

    const totalPricePerProducts = products.map(({ amount, price }) => amount * price)

    const totalPrice = totalPricePerProducts.reduce((accum, current) => accum = accum + current, 0)

    const handleItemToCart = (product) => () => addItemToCart(product)

    const handleItemToDelete = (product) => () => deleteItemToCart(product)

    useEffect(() => {
        if(totalPrice !== 0){
            setPrecio(totalPrice)
        }else {
            navigate('/allProducts')
        }
    }, [totalPrice])

    return (
        <div>
            <div>
                <div className={style.wrapperTotal}>
                    <div className={style.space}>
                        <p className={style.total}>Precio Total: ${precio}</p>
                    </div>
                    <div className={style.space}>
                        <button className={style.total}>COMPRAR</button>
                    </div>
                </div>
            </div>
            {
                products?.map(product => {
                    const { id, image, name, price, amount } = product
                    let amountOfProduct = price * amount
                    return (
                        <div className={style.card} key={id}>
                            <div className={style.imgDiv}>
                                <img className={style.img} src={image} alt="imagen de producto" />
                            </div>
                            <h2 className={style.h2}>{name}</h2>
                            <br />
                            <button className={style.btn} onClick={handleItemToCart(product)}> + </button>
                            <p>{amount}</p>
                            <button className={style.btn} onClick={handleItemToDelete(product)}> - </button>
                            <div className={style.price}>$<h3>{amountOfProduct}</h3></div>
                        </div>
                    )
                })
            }
        </div>
    )
}