import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
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
import keyboard from '../../assets/keyboard.png';
import favourites from '../../assets/favourites.png';
import cart from '../../assets/cart.png';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import fav from '../../assets/favourites.png';
import click from '../../assets/favourites-click.png'
import { loginUser } from '../../redux/actions'
import { connect } from 'react-redux';
import { useCartContext } from '../../context/CartItem';
import { useEffect } from 'react';

export function SidebarOptions ({logged, loginUser}) {
    let loc = useLocation().pathname

    useEffect(() => {
        loginUser()
    },[])


    const { isOpen, onOpen, onClose } = useDisclosure()

    

    const superState = useCartContext()

    const { products } = superState.state
    const cachearNumber = products.reduce((accum, current) => accum = accum + current?.amount, 0)

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

export default connect (mapStateToProps, mapDispatchToProps)(SidebarOptions)