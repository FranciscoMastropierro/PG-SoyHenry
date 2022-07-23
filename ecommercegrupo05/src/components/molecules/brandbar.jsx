import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";
import Intel from '../../assets/intel.png'
import style from '../../styles/brandbar.module.css'

const brandbar = () => {
    return (
        <div className={style.main}>
            <Link as={ReactLink} to='/'>
                <div>
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
    )
}

export default brandbar