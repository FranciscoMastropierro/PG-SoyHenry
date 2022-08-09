import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { paginacion } from "../../redux/actions";
import style from "../../styles/allProducts.module.css";
import Pagination from "../atoms/paginacion";
import CardProducts from "../atoms/cardProducts";
import Filters from "../atoms/Filters";

export default function AllProducts() {

  const dispatch = useDispatch()
  const pages = useSelector((state) => state.pages)
  const products = useSelector((state) => state.data)
  const productsPerPage = useSelector((state) => state.productsPerPage)

  const indexLastProduct = pages * productsPerPage
  const indexFirstProduct = indexLastProduct - productsPerPage

  const productsToRender = products.slice(indexFirstProduct, indexLastProduct)

  useEffect(() => {
    dispatch(paginacion(productsToRender));
  }, [dispatch, products, pages]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Pagination />
      <div className={style.container}>
        <div className={style.filters}>
          <div className={style.div}><Filters /></div>
          <div className={style.cardContainer}><CardProducts /></div>
        </div>
      </div>
    </>
  );
}
