import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";
import Intel from '../../assets/intel.png'
import Asus from '../../assets/asus.png'
import style from '../../styles/brandbar.module.css'

const brandbar = () => {
    return (

    <div>
        <h1 className={style.title}>Best Brands</h1>
        <div className={style.main}>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Asus} alt="Asus" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
            <Link as={ReactLink} to='/'>
                <div className={style.item}>
                    <img src={Intel} alt="Intel" className={style.img} />
                </div>
            </Link>
        </div>
        </div>
    )
}

export default brandbar