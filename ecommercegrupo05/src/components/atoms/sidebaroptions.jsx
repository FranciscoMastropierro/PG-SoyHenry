import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
<<<<<<< HEAD
import { useCartContext } from '../../context/CartItem';
=======
import { useEffect } from 'react';
import {loginUser} from '../../redux/actions'
>>>>>>> 2f2a6563fb1ad5e965748e9771c274702ac3abf2

export default function SidebarOptions () {
    let loc = useLocation().pathname
    // let auth0 = 'https://dev-rc0v97zv.us.auth0.com/u/signup?state=hKFo2SBNMDlmdHIwbzVQRXZ2UklDUzVZUmFQSFJZX0sxeElnc6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHBlbGZQeE1qSVVhYmYxMW13eE1ZaTFYOTZudkxVMzBQo2NpZNkgaVdJZk9VclJ3TDg4ZjZnaHVsWkNlNmoxSDdJTXYyQzk'

<<<<<<< HEAD
    const superState = useCartContext()

    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

=======
    useEffect(() => {
        loginUser()
    },[])
    
>>>>>>> 2f2a6563fb1ad5e965748e9771c274702ac3abf2
    return (
        <div className={style.options}>
            <Link to='/' className={style.link}>
                <img src={home} alt='home'/>
                <span className={loc === '/'? style.onPath : null}>Inicio</span>
            </Link>
            
            <Link to='/allProducts' className={style.link}>
                <img src={keyboard} alt='keyboard'/>
                <span className={loc === '/allProducts'? style.onPath : null}>Productos</span>
            </Link>

            <Link to="/favorites" className={style.link}>
                <img src={loc === '/favorites'? click : fav} alt='favourites'/>
                <span className={loc === '/favorites'? favourites : click}>Favoritos</span>
            </Link>

            <Link to='/cart' className={style.link}>
                <div className={style.linkCart}>
                    <img src={cart} alt='cart'/>
                    <p className={style.cartItems}>{cachearNumber}</p>
                </div>
                <span className={loc === '/cart'? style.onPath : null}>Carrito</span>
            </Link>

            {/* <a className={style.link} href={auth0} alt='auth0'> */}
            <div className={style.link}>
                <img src={user} alt='user'/>
                <span className={loc === '/login'? style.onPath : null}>Iniciar sesión</span>
            </div>
            {/* </a> */}
        </div>
    )
}