import React from 'react';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
import { Slider } from '../molecules/slider';
import BrandBar from '../molecules/brandbar'
import { SliderNews } from '../molecules/sliderNews';
import Footer from '../molecules/footer'
import { useContext } from 'react';
import { useCartContext } from '../../context/CartItem';

export default function Home () {

    const superState = useCartContext()
    console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ superState", superState)

    return (
        <div>
            <SliderNews />
            {/* <h1>{superState.state.total}</h1>
            <button onClick={superState.effects.sumar}>sumar</button> */}
            <SlidePopularProducts />
            <SlideBestNotebooks />                      
            <BrandBar/>
            <Slider/>
            <Footer/>
        </div>
    )
    
}