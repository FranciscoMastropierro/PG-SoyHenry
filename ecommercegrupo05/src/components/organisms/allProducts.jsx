import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, paginacion } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";
import Pagination from "../atoms/paginacion";
import CardProducts from "../atoms/cardProducts";
import { useLocation } from "react-router-dom";
import Filters from "../atoms/Filters";
import { useCartContext } from '../../context/CartItem';

export default function AllProducts() {

  const superState = useCartContext()
  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const products = useSelector((state) => state.data)

  const loc = useLocation()
  let loc2 = loc.search.slice(6)

  useEffect(() => {
    dispatch(getProducts(loc2))
  }, [loc]) //eslint-disable-line react-hooks/exhaustive-deps  

  useEffect(() => {
    dispatch(paginacion(pages));
  }, [dispatch, products, pages]);

  return (
    <>
      <div className={style.filters}>
        <div className={style.div}><Filters /></div>
      </div>
      <Pagination />
      <CardProducts />
    </>
  );
}
