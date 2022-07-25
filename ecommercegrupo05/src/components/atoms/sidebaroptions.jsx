import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function SidebarOptions () {
    let loc = useLocation().pathname

    return (
        <div className={style.options}>
            <Link to='/'>
                <span className={loc === '/'? style.onPath : null}>Inicio</span>
            </Link>
            <Link to='/allProducts'>
                <span className={loc === '/allProducts'? style.onPath : null}>Productos</span>
            </Link>

            <Link to="/favorites">
                <span className={loc === '/favorites'? style.onPath : null}>Favoritos</span>
            </Link>

            <Link to='/cart'>
                <span className={loc === '/cart'? style.onPath : null}>Carrito 🛒</span>
            </Link>

            <Link to='/login'>
                <span className={loc === '/login'? style.onPath : null}>Iniciar sesión</span>
            </Link>
        </div>
    )
}