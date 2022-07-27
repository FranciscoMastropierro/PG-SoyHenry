import React, { useEffect, useState } from "react";
import { getCate, getFilters, getProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/allProducts.module.css";


export default function Filters() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        "brand": "",
        "categorie": "",
        "order": "minor",
        "praice": {
            "min": "0",
            "max": ""
        }
    })

    const data = useSelector((state) => state.copyData)
    const cate = useSelector((state) => state.cate)
    const brandRepeat = data.map(e => e.brand).sort()
    const brands = [...new Set(brandRepeat)]
    const allCategories = cate.map(e => e.name).sort()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCate())
    }, [dispatch])

    function handleCLickRecharge(e) {
        e.preventDefault()
        dispatch(getProducts())
        dispatch(getCate())
        setInput({
            "brand": "",
            "categorie": "",
            "order": "minor",
            "praice": {
                "min": "0",
                "max": ""
            }
        })
    }

    // function handleOrderByOrder(e) {
    //     e.preventDefault(e);
    //     setInput({
    //         ...input,
    //         order: e.target.value
    //     });
    // }

    function handleCategory(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            categorie: e.target.value
        });
    }

    function handleOrderBrand(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            brand: e.target.value
        });
    }

    function handleFilterMin(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            praice: {
                min: e.target.value,
                max: input.praice.max
            }
        });
    }

    function handleFilterMax(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            praice: {
                min: input.praice.min,
                max: e.target.value
            }
        });
    }


    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(getFilters(input));
        // setInput({
        //     "brand": "",
        //     "categorie": "",
        //     "order": "",
        //     "praice": {
        //         "min": "0",
        //         "max": ""
        //     }
        // })
    }

    return (
        <div>

            {/* ----------- filtro de alfabetico ---------- */}
            {/* <label className={style.row}>
                <p className={style.title}>Orden Alfabetico</p>
                <select className={style.select} onChange={e => handleOrderByOrder(e)}>       
                    <option value=''  >---</option>
                    <option value='Asc'> A a Z  </option>
                    <option value='Desc'> Z a A  </option>
                </select>
            </label>
            <br /> */}

            {/* ----------- filtro de categorias---------- */}
            <label className={style.row}>
                <p className={style.title}>Categoria</p>
                <select className={style.select} onChange={(e) => handleCategory(e)}>   
                    <option value="" >---</option>
                    {
                        allCategories && allCategories.map((item, index) => (
                            <option key={index} value={item} >
                                {item}
                            </option>
                        ))
                    }
                </select>
            </label>
            <br />

            {/* ----------- filtro de marcas ---------- */}

            <label className={style.row}>
                <p className={style.title}>Marca</p>
                <select className={style.select} onChange={(e) => handleOrderBrand(e)}>    
                    <option value="">---</option>
                    {
                        brands && brands.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </label>
            <br />

            {/* ----------- filtro de precio ---------- */}
            <label className={style.titleColor}>
                Precio:
                <br />
                {/* <label className={style.row}>
                    Por Orden
                    <select className={style.select} onChange={e => handleOrderByOrder(e)}>
                        <option value=""> --- </option>
                        <option value="minor">Menor a Mayor Precio</option>
                        <option value="higher">Mayor a Menor Precio</option>
                    </select>
                </label> */}
                <label for="min" className={style.row}>
                    Min $
                </label>
                <input
                    type="number"
                    name="min"
                    min="0"
                    value= {input.praice.min}
                    placeholder='0'
                    onChange={(e) => handleFilterMin(e)}
                />

                <label for="max" className={style.row}>
                    Max $
                </label>
                <input
                    type="number"
                    name="max"
                    max="200000"
                    value={input.praice.max}
                    placeholder='200000'
                    onChange={(e) => handleFilterMax(e)}
                />

                <br />
                <button className={style.btn} onClick={(e) => handleSubmit(e)}>Filtrar </button>   
                <button className={style.btn} onClick={(e) => { handleCLickRecharge(e) }}>Recargar productos</button>
            </label>

        </div>
    )
}

