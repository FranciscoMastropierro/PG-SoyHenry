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
import { useEffect } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

export function SidebarOptions({ profile, setProfile }) {

    // const dispatch = useDispatch()
    const { loginWithRedirect, logout, user } = useAuth0();

    let loc = useLocation().pathname

    const superState = useCartContext()

    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

    const auth = useAuth0()

    // if (auth.isAuthenticated) setProfile(auth.user)

    const handleSubmit = () => auth.user ? logout() : loginWithRedirect()

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

    const btnText = auth.isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'

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
            <button onClick={handleSubmit} className={style.link}>
                <img src={userPic} alt='user' />
                <span>{btnText}</span>
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




           