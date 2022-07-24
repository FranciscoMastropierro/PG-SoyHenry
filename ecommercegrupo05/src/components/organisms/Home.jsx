import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
import { Slider } from '../molecules/slider';
import BrandBar from '../molecules/brandbar'
import { SliderNews } from '../molecules/sliderNews';
import Footer from '../molecules/footer'

export default function Home () {
    const dispatch = useDispatch();
    const infoData = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(getProducts())
    },[]) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <SliderNews />
            <SlidePopularProducts infoData = {infoData}/>
            <SlideBestNotebooks />                      
            <BrandBar/>
            <Slider/>
            <Footer/>
        </div>
    )
    
}