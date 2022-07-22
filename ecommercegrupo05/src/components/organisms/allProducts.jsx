import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
                products && products.map(({id, image, name, price}) => (
                    <div className={style.card_container} key={id}>
                        <Link to={`/details/${id}`}>
                            <div className={style.card}>
                                <Card 
                                image={image} 
                                name={name}
                                price={price}
                            />
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}