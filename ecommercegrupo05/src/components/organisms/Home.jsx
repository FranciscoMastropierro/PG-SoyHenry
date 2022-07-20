import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions';
import Cards from '../atoms/Cards';
import { Slider } from '../molecules/slider';
import style from '../../styles/carrousel.module.css'
import NavBar from '../molecules/navbar'

export default function Home () {
    const dispatch = useDispatch();
    const infoData = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <div>            
            <NavBar/>
            <h1>Hello Word!</h1>            
            <div>
                <Cards infoData = {infoData}/>                
            </div>        
        </div>
    )
    
}