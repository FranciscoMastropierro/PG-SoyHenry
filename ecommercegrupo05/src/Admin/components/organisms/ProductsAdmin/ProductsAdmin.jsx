import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert'

import {getProducts} from "../../../../redux/actions"

//deleteStock, discountProduct, discountOffer


import style from "./ProductsAdmin.module.css";

import { HiPencilAlt } from "react-icons/hi"

function ProductsAdmin(){

const dispatch = useDispatch()
const [estado, setEstado] = useState({  
  stock: "0",
});
const [price, setPrice] = useState({  
  price: "999",
});

useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);

const products = useSelector((state)=> state.data)

function handleChange(e) {
  e.preventDefault();
  setEstado({
    ...estado,
    [e.target.name]: e.target.value,
  });  
}

function handleChange2(e) {
  e.preventDefault();
  setPrice({
    ...price,
    [e.target.name]: e.target.value,
  });  
}


async function DiscountHandler(e){
  
  try{
    console.log("=> " ,price)
    const info = { productId:e.id, 
      discount: price.price,}
    const info2 = {discount: price.price,}   
    console.log( "ssss",info, info2) 



    if(price.price>0 && price.price<1000){
    //await dispatch(discountProduct(info))
    
    // dispatch(discountOffer())
    swal("price has been changed")  
    setTimeout(() => {
      window.location.reload()
      }, 1000);
  } else {
    swal("Invalid discount price!")
  }
  } catch {
    swal("An error has ocurred, contact the dev")}
}






async function StockHandler(e){
  
  try{
    if(estado.stock>0 && estado.stock<1000){
    //await dispatch(deleteStock(e.id, estado))
    swal("stock has been changed")  
    setTimeout(() => {
      window.location.reload()
      }, 1000);
  } else {
    swal("Invalid Stock Number!")
  }
  } catch {
    swal("An error has ocurred, contact the dev")}
}



function deleteHandler(e){
  console.log(e.id)
  swal({
    title: "Are you sure?",
    text: "Once hidden, you will not be able to recover this product!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
     // dispatch(deleteStock(e.id, estado))
      swal("the product has been deleted!", {
        icon: "success",
      });
      
      
      setTimeout(() => {
        window.location.reload()
        }, 1000);
      
    } else {
      swal("Your product is safe!");
    }
  });
}

  return (
          <div className={style.container}>
            

            <div className={style.secondaryBar}>
              
              <Link to="/admin/products/create"><button className={style.addbtn}><h3>Crear producto</h3></button></Link>
            

            </div>

           

            

            {products.map(e=> {
                return(
                        <div className={style.card} key={e.id}>
                          
                          


                            <button className={style.DelBtn} id={e.id} onClick={()=>deleteHandler(e)}>
                              Deshabilitar
                            </button>                            

                            <button className={style.ModBtn}>
                              <Link style={{ textDecoration: 'none'}} to={`/admin/products/modify/${e.id}`}>
                                Modificar
                              </Link>
                            </button>
                            <div className={style.stockdiv}>
                              <button className={style.stockBtn} id={e.id} onClick={()=>StockHandler(e)}>                              
                                 Restockear                              
                              </button>
                              <input className={style.stockinput} type="number" name='stock' onChange={(e) => handleChange(e)}/>
                            </div>

                            


                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.brand}</p>
                            <p className={style.element}><img className={style.img} src={e.image} alt={e.id} /></p>
                            <p className={style.element}>${e.price}</p>
                            
                            
                            <p className={style.element}> stock: {e.stock}</p>                       
                        </div>


                )
            } )}

          </div>
  );
};

export default ProductsAdmin;

//<p className={style.element}>{e.Categories[0].name}</p>
                          //  <div className={style.stockdiv}>
                          //    <button className={style.stockBtn} id={e.id} onClick={()=>DiscountHandler(e)}>                              
                          //       Discount                              
                          //  </button>
                          //  <input className={style.stockinput} type="number" name='price' onChange={(e) => handleChange2(e)}/>
                          //  </div>