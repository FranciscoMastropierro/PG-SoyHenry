import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, cleaner } from "../../redux/actions";
import style from "../../styles/details.module.css";

export default function Details() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {id} = useParams();
    const product = useSelector((state) => state.detail);
    
    useEffect(() => {
        dispatch(getDetail(id));
        return () => dispatch(cleaner())
        }, [ id ]) //eslint-disable-line react-hooks/exhaustive-deps
        

  return (
    <div>
      <div>
        <button className={style.btnBack} onClick={() => navigate(-1)}>atras</button>
        <div>
          {product.length === 0 ? (<div className={style.loader}></div>) 
          : (
            <div className={style.containerG}>
              <div  className={style.containerDet}>
                <h1 className={style.title}> {product.name}</h1>
                <h3 className={style.brand}> {product.brand}</h3>
                <h2 className={style.title}> ${product.price}</h2>
                <button className={style.btn}>Añadir al Carrito 🛒</button>
                <p className={style.description}>{product.description}</p>
                <h5 className={style.stock}> {product.stock} unidades disponibles</h5>
              </div>
              <div className={style.containerImg}>
                <img
                className={style.img}
                  src={product.image}
                  alt="Imag no Found"
                  width="250"
                  height="250"
                />
              </div>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
