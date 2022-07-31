import React from 'react';
import logo from '../../assets/coder2.png'
import SearchBar from '../atoms/seacrbar.jsx'
import {SidebarOptions} from '../atoms/sidebaroptions.jsx'
import style from '../../styles/navbar.module.css'
// import { Switch } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div className={style.navbarContainer}>
            <div className={style.switchSearch}>
            <Link to='/'>
                <img src={logo} alt='logo'className={style.logo}/>
            </Link>
                <SearchBar/>
                {/* <Switch colorScheme='blackAlpha' size='lg'/> */}
            </div>
            <SidebarOptions/>
        </div>
    )
}