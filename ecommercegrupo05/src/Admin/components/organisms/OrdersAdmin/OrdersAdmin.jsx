import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getAllOrders } from  "../../redux/actions/index"
import { NavLink } from "react-router-dom";
import style from "./OrdersAdmin.module.css";
import { ImCross } from "react-icons/im"

function OrdersAdmin(){

  const dispatch = useDispatch()
  
  useEffect(() => {
//    dispatch(getAllOrders());
  }, []);
  
//  const allOrders = useSelector((state)=> state.allOrders)
const allOrders = [{
    id: 1,
    state: "created",
    address:"Av falsa 123",
    email: "juansalas@gmail.com"
    },
    {
        id: 2,
        state: "created",
        address:"Av verdadera 123",
        email: "martina99@gmail.com"
    }
]

 


  return (
            <div className={style.container}>


              {allOrders && allOrders.length ? (

                <>
                  
                  <div className={style.CardTop}>
                    <h2> id</h2>
                    <h2> Estado</h2>
                    <h2>Direccion</h2>
                    <h2>Email</h2>
                    
                  </div>
                  
                  
                  {allOrders.map((e)=>{return(
                    <div className={style.Card} key={e.id}  >
                    
                        <h3 className={style.info}>{e.id}</h3>                
                        <h3 className={style.info}>{e.state}</h3>                
                        <h3 className={style.info}>{e.address}</h3>                
                        <h3 className={style.info}>{e.email}</h3>                
                        <NavLink to={`/admin/orderdetail/${e.id}`}><button className={style.cardbtn}>Detalle</button></NavLink>            
                    </div>
                  )})}
                
                </>

              ):(
                <div>There was an error loading the Orders, please contact the developer</div>
              )}    

          </div>
  )
  }


export default OrdersAdmin;
//<h3 className={style.info}>{e.products?.map((e)=> {return e.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)} products</h3> 