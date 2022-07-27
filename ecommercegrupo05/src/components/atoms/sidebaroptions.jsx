import React from 'react';
import style from '../../styles/sidebaroptions.module.css'
import { Link, useLocation } from 'react-router-dom';
import {BsHeadset, BsFillMouseFill, BsKeyboardFill, BsLaptop } from "react-icons/bs"
import {GiReturnArrow} from "react-icons/gi"
import {FiMonitor} from "react-icons/fi"



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

export default function SidebarOptions () {
    let loc = useLocation().pathname

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className={style.options}>
            <Link to='/'>
                <span className={loc === '/'? style.onPath : null}>Inicio</span>
            </Link>

            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} bg='tomato'>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Productos</ModalHeader>
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