import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/coder2.png'
import SearchBar from '../atoms/seacrbar.jsx'
import SidebarOptions from '../atoms/sidebaroptions.jsx'
import style from '../../styles/navbar.module.css'
import { Switch } from '@chakra-ui/react'

export default function Navbar () {
    return (
        <div className={style.navbarContainer}>
            <img src={logo} alt='logo'/>
            <div className={style.switchSearch}>
                <Switch colorScheme='blackAlpha' size='lg'/>
                <SearchBar/>
                <Link to='/allProducts'>All Products</Link>
            </div>
            <SidebarOptions/>
        </div>
    )
}