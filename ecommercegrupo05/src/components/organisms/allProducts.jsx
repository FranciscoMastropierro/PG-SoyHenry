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

export default function AllProducts() {
  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const products = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]) //eslint-disable-line react-hooks/exhaustive-deps  

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
