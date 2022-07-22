import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from "../../redux/actions";
import Card from "../atoms/Card";
import style from '../../styles/allProducts.module.css'

export default function AllProducts() {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    return (
        <div className={style.container}>
            {
                products && products.map(({thumbnail, title, price}) => (
                    <div className={style.card_container}>
                        <div className={style.card}>
                            <Card 
                            image={thumbnail} 
                            name={title}
                            price={price}
                        />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}