import React, { useState } from 'react'
import { getOrderByName } from '../../redux/actions';
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";
import style from "../../styles/allProducts.module.css";

export default function FilterByOrder() {

    const [order, setOrder] = useState('')
    const dispatch = useDispatch();

    function handleOrderByOrder(e) {
        e.preventDefault(e);
        setOrder(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(getOrderByName(order));
        setOrder('')
    }

    return (
        <div>
            <label className={style.row}> 
            <p className={style.title}>Alphabetically</p>
            <select onChange={e => handleOrderByOrder(e)} className={style.select}>
                <option value='All'>---</option>
                <option value='A-Z'> A a Z  </option>
                <option value=''> Z a A  </option>
            </select>
            </label>
            <button onClick={(e) => handleSubmit(e)} className={style.btn}>Filtrar by Order</button>
        </div>
    )
}
