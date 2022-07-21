import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { NavLink } from 'react-router-dom';

export default function SidebarOptions () {
    return (
        <div className={style.options}>
            <span>Categories</span>
            <NavLink to="/favorites"><span>Favorites</span></NavLink>
            <span>Cart</span>
            <span>Log in</span>
        </div>
    )
}