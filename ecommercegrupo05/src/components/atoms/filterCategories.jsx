import React, { useState } from 'react'
import { getCategories } from "../../redux/actions";
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";


function FilterCategories() {

    const [category, setCategory] = useState('')
    const dispatch = useDispatch();

    function handleCategory(e) {
        e.preventDefault(e);
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(getCategories(category));
        setCategory('')
    }

    return (
        <div>
            <label>
                Categoria
                <select onChange={(e) => handleCategory(e)}>
                    <option value="">---</option>
                    <option value="Headsets">Auriculares</option>
                    <option value="Monitors">Monitores</option>
                    <option value="Laptops">Portátiles</option>
                    <option value="Mouses">Mouses</option>
                    <option value="Keyboards">Teclados</option>
                </select>
            </label>
            <button onClick={(e) => handleSubmit(e)}>Filtrar por Categoria</button>

        </div>
    )
}

export default FilterCategories