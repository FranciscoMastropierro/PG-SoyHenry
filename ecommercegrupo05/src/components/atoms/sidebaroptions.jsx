import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link } from 'react-router-dom';

export default function SidebarOptions () {
    return (
        <div className={style.options}>
            <Link to='/allProducts'>
                <span>All products</span>
            </Link>

            <Link to='/categories'>
                <span>Categories</span>
            </Link>

            <Link to="/favorites">
                <span>Favorites</span>
            </Link>

            <Link to='/cart'>
                <span>Cart</span>
            </Link>

            <Link to='/login'>
                <span>Log in</span>
            </Link>
        </div>
    )
}