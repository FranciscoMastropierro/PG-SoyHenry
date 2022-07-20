import React from 'react';
import style from '../../styles/sidebaroptions.module.css'

export default function SidebarOptions () {
    return (
        <div className={style.options}>
            <span>Categories</span>
            <span>Favourites</span>
            <span>Cart</span>
            <span>Log in</span>
        </div>
    )
}