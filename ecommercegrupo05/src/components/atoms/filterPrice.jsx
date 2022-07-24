import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterPrice } from "../../redux/actions";

function FilterPrice() {
  const dispatch = useDispatch();
  // const [order, setName] = useState('')
  // const [min, setName] = useState('')
  // const [max, setName] = useState('')
  const [input, setInput] = useState({
    order: "",
    min: "",
    max: "",
  });

  function handleOrderPrice(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      order: e.target.value,
    });
  }

  function handleFilterMIn(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      min: e.target.value,
    });
  }
  function handleFilterMax(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      max: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(getFilterPrice(input.order, input.min, input.max));
  }

  return (
    <div>
      <label>
        Precio:
        <br />
        <label>
          Por Valor
          <select onChange={(e) => handleOrderPrice(e)}>
            <option value=""> --- </option>
            <option value="Asc">Menor a Mayor Precio</option>
            <option value="Desc">Mayor a Menor Precio</option>
          </select>
        </label>
        <br />
        <label>
          Minimo:
          <select onChange={(e) => handleFilterMIn(e)}>
            <option value=""> --- </option>
            <option value="500">$ 500</option>
            <option value="100000">$ 100.000</option>
            <option value="200000">$ 200.000</option>
          </select>
        </label>
        <br />
        <label>
          Maximo:
          <select onChange={(e) => handleFilterMax(e)}>
            <option value=""> --- </option>
            <option value="500">$ 500</option>
            <option value="100000">$ 100.000</option>
            <option value="200000">$ 200.000</option>
          </select>
        </label>
        <br />
        <button onClick={(e) => handleSubmit(e)}>Filtrar</button>
      </label>
    </div>
  );
}

export default FilterPrice;
