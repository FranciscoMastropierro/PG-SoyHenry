import React, { useState } from 'react'
import { filterCategories, getCategories } from "../../redux/actions";
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";
import style from "../../styles/allProducts.module.css";


function FilterCategories() {

    const [category, setCategory] = useState('')
    const dispatch = useDispatch();

    function handleCategory(e) {
        e.preventDefault(e);
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(filterCategories(category));
        setCategory('')
    }

    return (
        <div>
            <label className={style.row}>
            <p className={style.title}>Categoria</p>
                <select onChange={(e) => handleCategory(e)} className={style.select}>
                    <option value="">---</option>
                    <option value="Headsets">Auriculares</option>
                    <option value="Monitors">Monitores</option>
                    <option value="Laptops">Portátiles</option>
                    <option value="Mouses">Mouses</option>
                    <option value="Keyboards">Teclados</option>
                </select>
            </label>
            <button onClick={(e) => handleSubmit(e)} className={style.btn}>Filtrar Categoria</button>

        </div>
    )
}

export default FilterCategories