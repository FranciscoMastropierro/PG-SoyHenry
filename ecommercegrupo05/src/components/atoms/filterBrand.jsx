import React, { useState } from "react";
import { getFilterBrand } from "../../redux/actions";
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";
import style from "../../styles/allProducts.module.css";

export default function FilterBrand() {
    const [brand, setBrand] = useState('')
    const dispatch = useDispatch();

    const marcas = [
        'Asus', 'Hp', 'Glorious',
        'Viewsonic', 'Lg', 'HyperX',
        'Redragon', 'Msi', 'Lenovo',
        'Banghó', 'Dell', 'IQual',
        'Samsung', 'Philips', 'Gadnic',
        'ViewSonic', 'Logitech', 'Yindiao',
        'Apple', 'Soundpeats', 'Sony',
        'JBL', 'Soul', 'Noga',
        'M40x', 'AKG', 'Senheiser',
        'Nisuta', 'Enova', 'Norwin',
        'Intel', 'Exo', 'Razer'
    ]

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
                        marcas && marcas.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
                    <button onClick={(e) => handleSubmit(e)} className={style.btn}>Filtrar by Brand</button>
            </label>
        </>
    )
}

