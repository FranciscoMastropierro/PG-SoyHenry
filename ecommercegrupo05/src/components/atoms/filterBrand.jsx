import React, { useEffect, useState } from "react";
import { getFilterBrand, getProductAllBrands } from "../../redux/actions";
import ButtonFilter from "./buttonFilter";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/allProducts.module.css";

export default function FilterBrand() {
    const [brand, setBrand] = useState('')
    const dispatch = useDispatch();

    const brands = useSelector((state) => state.allBrands)

    useEffect(() => {
        dispatch(getProductAllBrands())
    }, [dispatch])

    function handleOrderBrand(e) {
        e.preventDefault(e);
        setBrand(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(getFilterBrand(brand));
        setBrand('')
    }

    return (
        <>
            <label className={style.row}>
                <p className={style.title}>Marca</p>
                <select onChange={(e) => handleOrderBrand(e)} className={style.select}>
                    <option value="">---</option>
                    {
                        brands && brands.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
                    <button onClick={(e) => handleSubmit(e)} className={style.btn}>Filtrar Marca</button>
            </label>
        </>
    )
}

