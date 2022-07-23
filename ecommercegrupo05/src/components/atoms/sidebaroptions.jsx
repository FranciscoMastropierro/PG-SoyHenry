import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function SidebarOptions () {
    let loc = useLocation().pathname

    return (
        <div className={style.options}>
            <Link to='/'>
                <span className={loc === '/'? style.onPath : null}>Home</span>
            </Link>
            <Link to='/allProducts'>
                <span className={loc === '/allProducts'? style.onPath : null}>All products</span>
            </Link>

            <Link to='/categories'>
                <span className={loc === '/categories'? style.onPath : null}>Categories</span>
            </Link>

            <Link to="/favorites">
                <span className={loc === '/favorites'? style.onPath : null}>Favorites</span>
            </Link>

            <Link to='/cart'>
                <span className={loc === '/cart'? style.onPath : null}>Cart</span>
            </Link>

            <Link to='/login'>
                <span className={loc === '/login'? style.onPath : null}>Log in</span>
            </Link>
        </div>
    )
}