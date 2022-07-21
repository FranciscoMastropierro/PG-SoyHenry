import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import { Slider } from '../molecules/slider';
import style from '../../styles/carrousel.module.css'
import NavBar from '../molecules/navbar'
import { SliderNews } from '../molecules/sliderNews';

export default function Home () {
    const dispatch = useDispatch();
    const infoData = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <div>            
            <NavBar/>
            <SliderNews />       
            <SlidePopularProducts infoData = {infoData}/>                      
            <Slider/>                    
        </div>
    )
    
}