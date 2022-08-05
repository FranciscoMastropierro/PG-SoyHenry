import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAllByidUser, getProducts } from "../../redux/actions";

import style from "../../styles/UserOrders.module.css";

const UserOrders = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    dispatch(getAllByidUser(id))
    
  }, [])
  
  const allOrders = useSelector((state) => state.UserOrders)

 


  return (
    <div className={style.container}>
      <h2 className={style.Title}> My Orders</h2>

      {allOrders && allOrders.length ? (
        <>
          

          {allOrders.map((order) => {
            return (
              <div className={style.Card} key={order.id}>
                <div>
                <h4 className={style.firstInfo}> {order.date.slice(0,10)} </h4>
                </div>

                {order.Products.map((item)=>{
                  return (
                    <div className={style.productDiv}>
                      <div>
                        <img src={item.image} alt="item" />
                      </div>
                      <div className={style.productDivinfo}>
                        <div >
                          <h3>{item.name}</h3>
                         <h3>{item.brand}</h3>
                        </div>
                        <div>
                           <h3>$ {item.price}</h3>
                        </div>
                         

                      </div>
                      <div className={style.productDivinfo}>
                         <button className={style.btn}> Ver detalle</button>
                         <button className={style.btn}> Dejar Reseña</button>
                      </div>
                    
                    </div>
                    )

                  




                })}


                
              </div>
            );
          })}
        </>
      ) : (
        <div>
          No encontramos Ordenes asignadas a tu usuario :C
        </div>
      )}
    </div>
  );
};

export default UserOrders;
//<h3 className={style.info}>{e.paymentMethod}</h3>
//                <h3 className={style.info}>{e.state}</h3>
//                <h3 className={style.info}>{e.shipmentAddress}</h3>
//                <h3 className={style.info}>{e.postalCode}</h3>
//                <NavLink to={`/orderdetail/${e.id}`}>
//                  <button className={style.cardbtn}>Detalle</button>
//                </NavLink>