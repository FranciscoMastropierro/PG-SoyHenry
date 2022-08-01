import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import {BsHeadset, BsFillMouseFill, BsKeyboardFill, BsLaptop } from "react-icons/bs"
import {GiReturnArrow} from "react-icons/gi"
import {FiMonitor} from "react-icons/fi"
import {BsList} from "react-icons/bs"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
>>>>>>> features
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import userPic from '../../assets/user.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
<<<<<<< HEAD
import { useCartContext } from '../../context/CartItem';
import { useAuth0 } from "@auth0/auth0-react";
import { setProfile } from '../../redux/actions'

export function SidebarOptions({ profile, setProfile }) {

    // const dispatch = useDispatch()
    const { loginWithRedirect, logout, user } = useAuth0();
=======
import { loginUser } from '../../redux/actions'
import { connect } from 'react-redux';
import { useCartContext } from '../../context/CartItem';
import { useEffect } from 'react';
>>>>>>> features

    let loc = useLocation().pathname

    // console.log(useAuth0().isAuthenticated)


    const { isOpen, onOpen, onClose } = useDisclosure()

    

    const superState = useCartContext()

    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

<<<<<<< HEAD
    const auth = useAuth0().user

    const handleSubmit = () => auth ? logout() : loginWithRedirect()

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

    const btnText = auth ? 'Cerrar sesión' : 'Iniciar sesión'

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
=======
    useEffect(() => {
        loginUser()
    },[])
    

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

            {/* <a className={style.link} href={auth0} alt='auth0'> 
            <Link to>
            <div className={style.link}>
                <img src={user} alt='user'/>
                <span className={loc === '/login'? style.onPath : null}>Iniciar sesión</span>
                </div>
                </Link>*/}
                
            

            <div className={style.link}>
                <img src={user} alt='user'/>
                      

            <Menu isLazy>
            <MenuButton as={Button} 
            bg="none" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem"_hover={{
                background: "none",
               color: "green",
              }} _active={{
                background: "none",
               color: "white",
              }} >
                 Mi Perfil
            </MenuButton>
            <MenuList bg="black">
                <MenuItem bg="black" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" _hover={{
                background: "green",
               color: "black",}} >
                <Link to="/cart">
                My Cart
                </Link>                    
                </MenuItem>
                <MenuItem bg="black" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" _hover={{
                background: "green",
               color: "black",}}>
                <Link to="/favorites">
                My Favorites
                </Link>
                </MenuItem>
                <MenuItem bg="black" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" _hover={{
                background: "green",
               color: "black",}}>
                <Link to="/OrdersMock">
                My Orders
                </Link>
                </MenuItem>
                <MenuItem bg="black" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" _hover={{
                background: "green",
               color: "black",}}>
                <Link to="/Settings">
                Settings
                </Link>
                </MenuItem>
            </MenuList>
            </Menu>
            </div>




            <Button bg="none" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" onClick={onOpen} _hover={{
                background: "none",
               color: "green",
              }} _focus={{
                background: "none",
               color: "white",
              }}
                >Categorias <BsList/> </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Categorias </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    
                    <div className={style.menudiv}>
                    <BsHeadset/>    
                        <h2>Headset</h2>
                    <GiReturnArrow/>
                    </div>
                    <div className={style.menudiv}>
                    <BsFillMouseFill/>    
                        <h2>Mouses</h2>
                    <GiReturnArrow/>
                    </div>
                    <div className={style.menudiv}>
                    <BsKeyboardFill/>    
                        <h2>Keyboards</h2>
                    <GiReturnArrow/>
                    </div>
                    <div className={style.menudiv}>
                    <BsLaptop/>    
                        <h2>Laptops</h2>
                    <GiReturnArrow/>
                    </div>
                    <div className={style.menudiv}>
                    <FiMonitor/>    
                        <h2>Monitors</h2>
                    <GiReturnArrow/>
                    </div>

                </ModalBody>

              
                </ModalContent>
            </Modal>



            
            <a
            href={logged === 'Logged out'? 'http://localhost:3001/login' : 'http://localhost:3001/logout'}
            className={style.link} target='_blank' rel='noopener'>
                <img src={user} alt='user'/>
                <span>Iniciar sesión</span>
            </a>
>>>>>>> features
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




            // <a
            //     href={logged === 'Logged out' ? 'http://localhost:3001/login' : 'http://localhost:3001/logout'}
            //     className={style.link} target='_blank' rel='noopener'>
            //     <img src={user} alt='user' />
            //     <span>Iniciar sesión</span>
            // </a>

            // href={logged === 'Logged out' ? 'http://localhost:3001/login' : 'http://localhost:3001/logout'}