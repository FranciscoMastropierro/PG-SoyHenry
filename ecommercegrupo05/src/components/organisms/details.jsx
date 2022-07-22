import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail, cleaner } from '../../redux/actions'

export default function Details() {
    const product = useSelector(state => state.detail)
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        dispatch(getDetail(id))
        // return dispatch(cleaner())
    }, [dispatch, id]) 
    //eslint-disable-line react-hooks/exhaustive-deps
    
    
    return (
        <div>      
            <div >               
                    <Link to='/'>
                        <button >Volver al inicio</button>
                    </Link>
                <div>
                    {product ?                            
                                <div>
                                    <img src={product.image} alt='Imag no Found' width='250' height='250' />
                                    <h1> {product.name}</h1>
                                    <h2 >$ {product.price}.</h2>
                                    <p >{product.description}</p>
                                    <h3 >Brand: {product.brand}.</h3>
                                    <h4 >Category: {product.categories}.</h4>
                                    <h5 >Stock:   {product.quantity} products</h5>
                                    <button >Añadir a Carrito </button>                            
                                </div>                                                  
                        : <p>No se encuentra detalles del Producto.</p>
                    }
                </div>
            </div>       
        </div>
    )
}