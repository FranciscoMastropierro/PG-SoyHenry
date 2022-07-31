import React, { useEffect } from 'react';
import SlidePopularProducts from '../molecules/SlidePopularProducts';
import SlideBestNotebooks from '../molecules/SlideBestNotebooks';
import { Slider } from '../molecules/slider';
import BrandBar from '../molecules/brandbar'
import { SliderNews } from '../molecules/sliderNews';
import Footer from '../molecules/footer'
import { useContext } from 'react';
import { useCartContext } from '../../context/CartItem';
import { useAuth0 } from '@auth0/auth0-react';

export default function Home () {

    const superState = useCartContext()

    const { getAccessTokenSilently } = useAuth0()
    
    // useEffect(() => {
        // const getToken = async () => {
        //     const token = await getAccessTokenSilently()
        //     // console.log("🚀 ~ file: Auth0provider.jsx ~ line 13 ~ getToken ~ token", token)
        // }
        // getToken()
    // },[])

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