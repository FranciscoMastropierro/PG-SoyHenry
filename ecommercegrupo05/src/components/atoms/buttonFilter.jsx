import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilterPrice, getFilterBrand, getOrderByName } from "../../redux/actions";

const ButtonFilter = ({price, brand, order}) => {

const dispatch = useDispatch();


function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(getFilterPrice(price.order, price.min, price.max), getFilterBrand(brand), getOrderByName(order) );
    dispatch(getFilterBrand(brand));
    dispatch(getOrderByName(order));
}


return(
    <div>
        <button onClick={(e) => handleSubmit(e)}>Filtrar</button>
    </div>
)

}

export default ButtonFilter