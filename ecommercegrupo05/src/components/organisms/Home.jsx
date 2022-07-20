import React from 'react';
import { Carrousel } from '../molecules/carrousel';
import style from '../../styles/carrousel.module.css'

export default function Home () {
    return (
        <div className={style.carrousel}>
            <Carrousel />
        </div>
    )
}