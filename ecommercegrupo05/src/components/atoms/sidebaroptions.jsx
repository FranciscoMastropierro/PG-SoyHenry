import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import userPic from '../../assets/user.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
import { useAuth0 } from "@auth0/auth0-react";
import { setProfile } from '../../redux/actions'
import { useCartContext } from '../../context/CartItem';

export function SidebarOptions({ profile, setProfile }) {

    const auth = useAuth0()

    const { loginWithRedirect, logout, user, isAuthenticated } = auth;

    let loc = useLocation().pathname

    const superState = useCartContext()

    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

    // const handleSubmit = () => user ? logout() : loginWithRedirect()

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

            <button onClick={loginWithRedirect} className={style.link}>
                <img src={userPic} alt='user' />
                <span>Login</span>
            </button>

            <button onClick={logout} className={style.link}>
                <img src={userPic} alt='user' />
                <span>Logout</span>
            </button>

            {auth.isAuthenticated && (<Link to='/userprofile' className={style.link}>
                <img src={userPic} alt='user'/>
                <span>Mi Perfil</span>
            </Link>
            )}
        </div>
            
    )
}

export const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (u) => dispatch(setProfile(u))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarOptions)




           
