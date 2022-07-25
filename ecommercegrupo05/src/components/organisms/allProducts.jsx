import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, paginacion } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";
import Pagination from "../atoms/paginacion";
import CardProducts from "../atoms/cardProducts";
import FilterPrice from "../atoms/filterPrice";
import FilterBrand from "../atoms/filterBrand";
import FilterByOrder from "../atoms/filterByOrder";
import FilterCategories from "../atoms/filterCategories";
import { useLocation } from "react-router-dom";

export default function AllProducts() {
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
        <div className={style.div}><FilterPrice /></div>
        <div className={style.div}><FilterBrand /></div>
        <div className={style.div}><FilterCategories /></div>
        <div className={style.div}><FilterByOrder /></div>
      </div>
      <Pagination />
      <CardProducts />
    </>
  );
}
