import React from "react";
import { useSelector } from "react-redux";
import style from '../../styles/cardProducts.module.css'
import { Link } from 'react-router-dom';

export default function CardProducts() {

    const productsToRender = useSelector((state) => state.productsToRender)

    if (!productsToRender.length) return <div className={style.loader}></div>

    return (
        <div className={style.cardWrapper}>
            {
                productsToRender?.map(({id, image, name, price }, index) => (
                    <div className={style.card} key={index}>
                            <img className={style.img} src={image} alt="imagen de producto"/>
                            <h2 className={style.h2}>{name}</h2>
                            <div className={style.price}>${price}</div>
                            <button className={style.btn}>
                                <Link to={`/details/${id}`}>View Product</Link>
                            </button>
                    </div>
                ))
            }
        </div>
    )
}
