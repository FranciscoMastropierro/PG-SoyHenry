import React, { useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink, useNavigate } from "react-router-dom";
import Apple from '../../assets/apple.png'
import Asus from '../../assets/asus2.png'
import Dell from '../../assets/dell.png'
import Hp from '../../assets/hp.png'
import Jbl from '../../assets/jbl.png'
import Lenovo from '../../assets/lenovo.png'
import Lg from '../../assets/lg.png'
import Samsung from '../../assets/samsung.png'
import style from '../../styles/brandbar.module.css'
import { getFilters, getProductByBrand } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Brandbar = () => {

    const data = useSelector((state) => state.brand)

    const [marca, setMarca] = useState('')

    let navigate = useNavigate()

    const dispatch = useDispatch()
    
    function handleClick(e) {
        e.preventDefault()
        setMarca(e.target.value)
        navigate(`/products/brand?name=${marca}`)
    }

    useEffect((e) => {
        // getProductByName(value)
        // setProducts(searchedProducts)
        dispatch(getProductByBrand(marca))
        // setMarca({
        //     ...marca,
        //     brand: [e.target.value]
        // })
        // dispatch(getFilters(marca))
    }, [marca]) //eslint-disable-line react-hooks/exhaustive-deps


    const links = [
        {
            to: 'allProducts',
            src: Apple,
            value: 'Apple'
        },
        {
            to: '',
            src: Asus,
            value: 'Asus'
        },
        {
            to: '',
            src: Dell,
            value: 'Dell'
        },
        {
            to: '',
            src: Hp,
            value: 'Hp'
        },
        {
            to: '',
            src: Jbl,
            value: 'Jbl'
        },
        {
            to: '',
            src: Lenovo,
            value: 'Lenovo'
        },
        {
            to: '',
            src: Lg,
            value: 'Lg'
        },
        {
            to: '',
            src: Samsung,
            value: 'Samsung'
        }
    ]

    return (

        <div>
            <h1 className={style.title}>Best Brands</h1>
            <div className={style.main}>
            {links.map(({ to, src, value }) => (
                <button key={src} onClick={handleClick}>
                    <Link as={ReactLink} to={to}>
                        <div className={style.item}>
                            <img src={src}
                                alt="Intel"
                                className={style.img}
                                value={value}
                                width='141'
                                height='106' />
                        </div>
                    </Link>
                </button>
            ))}
            </div>

        </div>
    )
}

export default Brandbar