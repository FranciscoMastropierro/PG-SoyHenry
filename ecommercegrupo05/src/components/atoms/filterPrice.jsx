import React, { useState } from "react";
import ButtonFilter from "./buttonFilter";
import { useDispatch } from "react-redux";
import { getFilterPrice } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";

function FilterPrice() {
  const dispatch = useDispatch();

  const [price, setPrice] = useState({
    order: "",
    min: "",
    max: "",
  });

  function handleOrderPrice(e) {
    e.preventDefault(e);
    setPrice({
      ...price,
      order: e.target.value,
    });
  }

  function handleFilterMIn(e) {
    e.preventDefault(e);
    setPrice({
      ...price,
      min: e.target.value,
    });
  }
  function handleFilterMax(e) {
    e.preventDefault(e);
    setPrice({
      ...price,
      max: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(getFilterPrice(price.order, price.min, price.max));
    setPrice({
      order: "",
      min: "",
      max: "",
    })
}

  return (
    <div>
      <label className={style.titleColor}>
        Precio:
        <br />
        <label className={style.row}>
          Por Valor
          <select onChange={(e) => handleOrderPrice(e)} className={style.select}>
            <option value=""> --- </option>
            <option value="Asc">Menor a Mayor Precio</option>
            <option value="Desc">Mayor a Menor Precio</option>
          </select>
        </label>
        <br />
        <label className={style.row}>
          Minimo:
          <select onChange={(e) => handleFilterMIn(e)} className={style.select}>
            <option value=""> --- </option>
            <option value="500">$ 500</option>
            <option value="100000">$ 100.000</option>
            <option value="196900">$ 200.000</option>
          </select>
        </label>
        <br />
        <label className={style.row}>
          Maximo:
          <select onChange={(e) => handleFilterMax(e)} className={style.select}>
            <option value=""> --- </option>
            <option value="500">$ 500</option>
            <option value="100000">$ 100.000</option>
            <option value="196900">$ 200.000</option>
          </select>
        </label>
        <br />
        <button onClick={(e) => handleSubmit(e)} className={style.btn}>Filtrar By Price</button>
      </label>
    </div>
  );
}

export default FilterPrice;