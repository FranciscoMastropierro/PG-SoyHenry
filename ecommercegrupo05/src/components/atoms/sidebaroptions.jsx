import React, {useEffect} from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import userPic from '../../assets/user.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
import logoutt from '../../assets/logout.png';
import loginn from '../../assets/login.png';
import { useAuth0 } from "@auth0/auth0-react";
import { setProf, token } from '../../redux/actions.js'
import { useCartContext } from '../../context/CartItem';

export function SidebarOptions() {
    const dispatch = useDispatch()
    const auth = useAuth0()
    const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = auth;
    const handleSubmit = () => user ? logout() : loginWithRedirect()
    const log = isAuthenticated? 'Salir' : 'Iniciar sesion'
    const photo = isAuthenticated? logoutt : loginn


    useEffect(() => {
        if(isAuthenticated ){
            const getToken = async () => {
               const token = await getAccessTokenSilently()
               console.log("token ;)", token)
           }
           getToken()
           dispatch(token(getToken()))
        } 
        // console.log('no hay token :(')
    }, [isAuthenticated])


    let loc = useLocation().pathname


    const superState = useCartContext()
    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

    const links = [
        {
            to: '/',
            name: 'inicio',
            src: home,
            styleClass: loc === '/' ? style.onPath : ''
        },
        {
            to: '/allProducts',
            name: 'Productos',
            src: keyboard,
            styleClass: loc === '/allProducts' ? style.onPath : ''
        },
        {
            to: '/favorites',
            name: 'Favoritos',
            src: loc === '/favorites' ? click : fav,
            styleClass: loc === '/favorites' ? favourites : click
        },
        {
            to: '/cart',
            name: 'Carrito',
            src: cart,
            styleClass: style.cartItems,
            cartNumber: cachearNumber
        }
    ]

    return (
        <div className={style.options}>
            {isAuthenticated && (
                <span>Hola!, {user.name}</span>
            )}
            {links.map(({ to, name, src, styleClass, cartNumber }) => (
                <Link to={to} className={style.link} key={name}>
                    <div className={style.linkWrapper}>
                        <img src={src} alt={name} />
                        <span className={styleClass}>
                            {name === 'Carrito' ? cartNumber : name}
                        </span>
                    </div>
                    {name === 'Carrito' && (
                        <span className={loc === '/cart' ? style.onPath : ''}>Carrito</span>
                    )}
                </Link>
            ))}

            <button onClick={handleSubmit} className={style.link}>
                <img src={photo} />
                <span>{log}</span>
            </button>

            {isAuthenticated && (<Link to='/userprofile' className={style.link}>
                <img src={userPic} alt='user' />
                <span>Mi Perfil</span>
            </Link>
            )}
        </div>

    )
}





