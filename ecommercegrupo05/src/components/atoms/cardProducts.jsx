import React from "react";
import { useSelector } from "react-redux";
import style from '../../styles/cardProducts.module.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartItem';

//favorites
import favorites from '../../assets/favourites.png'
import click from '../../assets/favourites-click.png'
import { useAuth0 } from "@auth0/auth0-react";


export default function CardProducts() {

    const superState = useCartContext()

    const {addItemToCart} = superState.effects

    const { products } = superState.state

    const productsToRender = useSelector((state) => state.productsToRender)
    
    let {loginWithRedirect, user, isAuthenticated } = useAuth0()
    // if (!productsToRender.length) return <div className={style.loader}></div>
    if (!productsToRender.length) return <h1>no hemos encontrado los productos que buscaste</h1>

    const handleItemToCart = (product) => () => addItemToCart(product)

    //favorites 
    
    
    function HandleFavorite(){
        user? console.log("will fav")
        : loginWithRedirect()
    }

    return (
        <div className={style.cardWrapper}>
            {
                productsToRender?.map((product, index) => {
                    const { id, image, name, price } = product
                    return (
                        <div className={style.card} key={index}>

                                <button className={style.favButton} onClick={(e)=>HandleFavorite(e)}>
                                    <img className={style.favEmpty} src={favorites} alt="favorites" />
                                </button>

                            <div className={style.imgDiv}>
                                <img className={style.img} src={image} alt="imagen de producto" />
                            </div>
                            <h2 className={style.h2}>{name}</h2>
                            <br/>
                            <div className={style.price}>$<h3>{price}</h3></div>
                            <button className={style.btn}>
                                <Link to={`/details/${id}`}>Detalles</Link>
                            </button>
                            <button className={style.btn}>
                                <Link to='#' onClick={handleItemToCart(product)}>Añadir al Carrito 🛒</Link>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}


{/* <Link to={`/cart`}>
    <button className={style.btn}>
        Añadir al Carrito 🛒
    </button>
</Link> */}
