import React from 'react';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
import { Slider } from '../molecules/slider';
import BrandBar from '../molecules/brandbar'
import { SliderNews } from '../molecules/sliderNews';
import Footer from '../molecules/footer'

export default function Home () {

    return (
        <div>
            <SliderNews />
            <SlidePopularProducts />
            <SlideBestNotebooks />                      
            <BrandBar/>
            <Slider/>
            <Footer/>
        </div>
    )
    
}