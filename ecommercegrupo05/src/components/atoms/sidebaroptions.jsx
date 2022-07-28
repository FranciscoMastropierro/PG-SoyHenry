import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import {BsHeadset, BsFillMouseFill, BsKeyboardFill, BsLaptop } from "react-icons/bs"
import {GiReturnArrow} from "react-icons/gi"
import {FiMonitor} from "react-icons/fi"
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

export default function SidebarOptions () {
    let loc = useLocation().pathname

    const { isOpen, onOpen, onClose } = useDisclosure()

    

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
                <img src={cart} alt='cart'/>
                <span className={loc === '/cart'? style.onPath : null}>Carrito</span>
            </Link>

            <Link to='/login' className={style.link}>
                <img src={user} alt='user'/>
                <span className={loc === '/login'? style.onPath : null}>Iniciar sesión</span>
            </Link>

            <div className={style.link}>
                <img src={user} alt='user'/>
                <span className={loc === '/profile'? style.onPath : null}>Mi Perfil</span>
            </div>

            <Button bg="none" color="white" fontFamily="Share Tech, sans-serif" fontSize="1.2rem" onClick={onOpen} _hover={{
                background: "none",
               color: "green",
              }} _focus={{
                background: "none",
               color: "white",
              }}
                >Categorias</Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Categorias</ModalHeader>
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



        </div>
    )
}