import React, { useState } from "react";
import { getFilterBrand } from "../../redux/actions";
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";

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
            <label>
                Marca
                <select onChange={(e) => handleOrderBrand(e)}>
                    <option value="">---</option>
                    {
                        marcas && marcas.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </label>
            <button onClick={(e) => handleSubmit(e)}>Filtrar by Brand</button>
        </>
    )
}

