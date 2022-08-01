import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";
import Apple from '../../assets/apple.png'
import Asus from '../../assets/asus2.png'
import Dell from '../../assets/dell.png'
import Hp from '../../assets/hp.png'
import Jbl from '../../assets/jbl.png'
import Lenovo from '../../assets/lenovo.png'
import Lg from '../../assets/lg.png'
import Samsung from '../../assets/samsung.png'
import style from '../../styles/brandbar.module.css'

const brandbar = () => {
    // const [value, setValue] = useState({
    //     "brand": [],
    //     "categorie": "",
    //     "order": "minor",
    //     "praice": {
    //         "min": "",
    //         "max": ""
    //     }
    // })

    // let navigate = useNavigate()

    // useEffect(() => {
    //     getProductByName(value)
    //     setProducts(searchedProducts)
    // }, [value]) //eslint-disable-line react-hooks/exhaustive-deps

    // function handleClick(e) {
    //     e.preventDefault()
    //     setValue('')
    //     navigate(`/allProducts?name=${value}`)
    // }

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
            {links.map(({ to, src }) => (
                <div className={style.main}>
                    <Link as={ReactLink} to={to}>
                        <div className={style.item}>
                            <img src={src}
                                alt="Intel"
                                className={style.img}
                                // value={value}
                                width='141'
                                height='106' />
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default brandbar