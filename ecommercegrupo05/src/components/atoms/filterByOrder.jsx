import React, { useState } from 'react'
import { getOrderByName } from '../../redux/actions';
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";

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
            <label>
            <select onChange={e => handleOrderByOrder(e)}>
                <option value='All'>Alphabetically</option>
                <option value='A-Z'> A a Z  </option>
                <option value=''> Z a A  </option>
            </select>
            </label>
            <button onClick={(e) => handleSubmit(e)}>Filtrar by Order</button>
        </div>
    )
}
