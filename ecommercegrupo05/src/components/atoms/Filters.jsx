import React, { useEffect, useState } from "react";
import { getProducts, getCate } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/allProducts.module.css";

export default function Filters() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        "brand": "",
        "categorie": "",
        "order": "",
        "praice": {
            "min": "",
            "max": ""
        }
    })

    const data = useSelector((state) => state.data)
    const cate = useSelector((state) => state.cate)
    const brandRepeat = data.map(e => e.brand).sort()
    const brands = [...new Set(brandRepeat)]
    const allCategories = cate.map(e => e.name).sort()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCate())
    }, [dispatch])

    function handleOrderByOrder(e) {
        e.preventDefault(e);
        setInput({
            ...input,
            order: e.target.value
        });
    }

    function handleOrderBrand(e) {
        e.preventDefault(e);
        setInput(e.target.value);
    }

    // function handleSubmit(e) {
    //     e.preventDefault(e);
    //     dispatch(getFilterBrand(brand));
    //     setBrand('')
    // }

    return (
        <div>

            {/* ----------- filtro de alfabetico ---------- */}
            <label className={style.row}>
                <p className={style.title}>Orden Alfabetico</p>
                <select className={style.select}  onChange={e => handleOrderByOrder(e)}>       {/* onChange={e => handleOrderByOrder(e)} */}
                    <option value='All'>---</option>
                    <option value='Asc'> A a Z  </option>
                    <option value='Desc'> Z a A  </option>
                </select>
            </label>
            <br />

            {/* ----------- filtro de categorias---------- */}
            <label className={style.row}>
                <p className={style.title}>Categoria</p>
                <select className={style.select}>       {/* onChange={(e) => handleCategory(e)} */}
                    <option value="">---</option>
                    {
                        allCategories && allCategories.map((item, index) => (
                            <option key={index} value={item}>
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
                <select className={style.select}>    {/* onChange={(e) => handleOrderBrand(e)} */}
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

            {/* ----------- filtro de marcas ---------- */}
            <label className={style.titleColor}>
                Precio:
                <br />
                <label className={style.row}>
                    Por Orden
                    <select className={style.select}>
                        <option value=""> --- </option>
                        <option value="minor">Menor a Mayor Precio</option>
                        <option value="higher">Mayor a Menor Precio</option>
                    </select>
                </label>
                <label className={style.row}>
                    Min $
                    <input
                        type="number"
                        name="min"
                        min="0"
                        // value={price.max}
                        placeholder='0'
                    // onChange={(e) => handleFilterMax(e)} 
                    />
                </label>
                <label for="max" className={style.row}>
                    Max $
                    <input
                        type="number"
                        name="max"
                        max="200000"
                        // value={price.max}
                        placeholder='200000'
                    // onChange={(e) => handleFilterMax(e)} 
                    />
                </label>

                <br />

                <button className={style.btn}>Filtrar </button>    {/* onClick={(e) => handleSubmit(e)} */}
            </label>

        </div>
    )
}

