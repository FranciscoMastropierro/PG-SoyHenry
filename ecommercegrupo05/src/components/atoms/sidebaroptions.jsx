import React from 'react';
import axios from 'axios';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
import { loginUser } from '../../redux/actions'
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCartContext } from '../../context/CartItem';
import { useAuth0 } from "@auth0/auth0-react";

export function SidebarOptions({ logged, loginUser }) {

    // const dispatch = useDispatch()
    const { loginWithRedirect} = useAuth0();

    let loc = useLocation().pathname

    // useEffect(() => {
    //     loginUser()
    // }, [])

    const superState = useCartContext()

    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

    return (
        <div className={style.options}>
            <Link to='/' className={style.link}>
                <img src={home} alt='home' />
                <span className={loc === '/' ? style.onPath : null}>Inicio</span>
            </Link>

            <Link to='/allProducts' className={style.link}>
                <img src={keyboard} alt='keyboard' />
                <span className={loc === '/allProducts' ? style.onPath : null}>Productos</span>
            </Link>

            <Link to="/favorites" className={style.link}>
                <img src={loc === '/favorites' ? click : fav} alt='favourites' />
                <span className={loc === '/favorites' ? favourites : click}>Favoritos</span>
            </Link>

            <Link to='/cart' className={style.link}>
                <div className={style.linkCart}>
                    <img src={cart} alt='cart' />
                    <p className={style.cartItems}>{cachearNumber}</p>
                </div>
                <span className={loc === '/cart' ? style.onPath : null}>Carrito</span>
            </Link>

            <button onClick={() => loginWithRedirect()}>
                <img src={user} alt='user' />
                <span>Iniciar sesión</span>
            </button>
            <a
                href={'http://localhost:3001/logout'}
                className={style.link} rel='noopener'>
                <img src={user} alt='user' />
                <span>Cerrar sesión</span>
            </a>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        logged: state.logged
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => dispatch(loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarOptions)






            // <a
            //     href={logged === 'Logged out' ? 'http://localhost:3001/login' : 'http://localhost:3001/logout'}
            //     className={style.link} target='_blank' rel='noopener'>
            //     <img src={user} alt='user' />
            //     <span>Iniciar sesión</span>
            // </a>

            // href={logged === 'Logged out' ? 'http://localhost:3001/login' : 'http://localhost:3001/logout'}