import React from 'react';
import { Slider } from '../molecules/slider';
import style from '../../styles/carrousel.module.css'
import NavBar from '../molecules/navbar'

export default function Home () {
    return (
        <div>
            <NavBar/>
            <Slider />
        </div>
    )
}