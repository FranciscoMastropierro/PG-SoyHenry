import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
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
<<<<<<< HEAD
            <NavBar/>
            <SliderNews />       
            <SlidePopularProducts infoData = {infoData}/>                      
=======
            <NavBar/>            
            <SlidePopularProducts infoData = {infoData}/>
            <SlideBestNotebooks infoData = {infoData}/>                      
>>>>>>> 76100463b6308523963e984491be3d1658a41e84
            <Slider/>                    
        </div>
    )
    
}