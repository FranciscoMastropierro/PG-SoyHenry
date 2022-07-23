import React from "react";
import { useSelector } from "react-redux";
import style from '../../styles/cardProducts.module.css'
import { Link } from 'react-router-dom';

export default function CardProducts() {

    const productsToRender = useSelector((state) => state.productsToRender)
    // console.log("🚀 ~ file: cardProducts.jsx ~ line 9 ~ CardProducts ~ productsToRender", productsToRender)

    if (!productsToRender.length) return <div className={style.loader}></div>

    return (
        <div className={style.cardWrapper}>
            {
                productsToRender?.map(({id, image, name, price }, index) => (
                    <div key={index} className={style.box}>
                        <div className={style.content}>
                            <h2 className={style.text}>{name}<br/><span className={style.span3}>{price} pesos</span></h2>
                            <span className={style.btn2}><Link to={`/details/${id}`} className={style.none}>View Product</Link></span>
                            <img src={image} alt="imagen de perrito" className={style.image} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}