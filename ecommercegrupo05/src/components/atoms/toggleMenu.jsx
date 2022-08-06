import React from 'react';
import menu from '../../assets/menu.png'
import style from '../../styles/toggleMenu.module.css'
import { useDisclosure } from '@chakra-ui/react'; 
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input
  } from '@chakra-ui/react'

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
          
    return (
        <div className={style.toggleMenu}>
            <div className={style.menuButton}>
                <span>Menu</span>
                <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}>
                    <img src={menu} alt='menu'/>
                </Button>
            </div>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerHeader>
                            Menu
                        </DrawerHeader>
            
                        <DrawerBody>
                        </DrawerBody>
            
                        <DrawerFooter>
                        </DrawerFooter>

                    </DrawerContent>
                </Drawer>
              </div>
            )
          }