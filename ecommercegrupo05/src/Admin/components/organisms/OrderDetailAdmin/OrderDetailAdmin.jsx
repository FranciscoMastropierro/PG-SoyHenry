import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
// import { getOrderById, updateOrderState } from "../../redux/actions/index";
import {  useParams } from "react-router-dom";
import style from "./OrderDetailAdmin.module.css"
import { GoCheck } from "react-icons/go"
import swal from "sweetalert";


export default function OrderDetailAdmin (){
    const dispatch = useDispatch()
    const {id} = useParams()
    
   
   useEffect(() => {
 //      dispatch(getOrderById(id))
    }, [])
    
 //  const orderDt = useSelector((state)=> state.currentOrder)    
 
    const orderDt = [
        {
            user: {email: "juansalas@gmail.com"},
            createdAt: "30-07-2022",
            id: 1,
            state: "created", 
            address: "av falsa 123",
            products: [
                {quantity: 3,
                 product: {
                    image: "https://www.pngitem.com/so/black-square/",
                    name: "Laptop",
                    brand: "ASUS",
                    price: "12000",
                 }   
                },
                {quantity: 2,
                    product: {
                       image: "https://www.pngitem.com/so/black-square/",
                       name: "Mouse",
                       brand: "Logitech",
                       price: "1200",
                    }   
                   }
            ]

        }
    ]

   const [state, setState] = useState("")
    

    function handleSelect(e){
      e.preventDefault()
      setState(e.target.value) 

      console.log(state)   
    }
    function handleClick(e){
        e.preventDefault()  
//        dispatch(updateOrderState(id,state))
        swal("Order status has been changed")
        setTimeout(() => {
            window.location.reload()
            }, 1000);
    }


    return(
           <div className={style.container}>

                


                {orderDt && orderDt.length>0 ? orderDt.map((data)=>{return(
                    <div className={style.card}>
                        <h1 className={style.title}> Detalle Orden </h1>
                        <h4 className={style.littleinfo}>{data.createdAt.slice(0,10)} | #{data.id}</h4>  
                        <div className={style.infocontainer}> 
                            <div className={style.orderState}>
                                <h3 className={style.info}>Estado: {data.state}  </h3>    
                                   <select className={style.select} onChange={e=>handleSelect(e)} name="OrderState" id={data.id}  >
                                        <option className={style.option} value="none" selected disabled>Cambiar estado</option>     
                                        <option className={style.option} value="Created">Creado</option>     
                                        <option className={style.option} value="processing">En proceso</option>     
                                        <option className={style.option} value="completed">Completado</option>     
                                        <option className={style.option} value="Cancelled">Cancelado</option>   


                                   </select> 
                                   <button className={style.ModBtn} onClick={e=>handleClick(e)}><GoCheck/></button>      
                            </div>                                  
                            <h3 className={style.info}>Direccion de envio: {data.address}</h3>                
                            <h3 className={style.info}>Email del usuario: {data.user.email}</h3>                
                            <h3 className={style.info}>Productos totales: {data.products.map((e)=> {return e.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)}</h3>
                        </div>
                        {data.products.map((products)=>{
                            return(<div className={style.divListItem}>
                                        <div>
                                        <img className={style.image} src={products.product.image} alt="image not found" ></img>
                                        </div>
                                        <div className={style.itemcont}>
                                        <h1 className={style.itemText}>{products.product.name}</h1>
                                        <h1 className={style.itemText}>{products.product.brand}</h1>    
                                        </div>
                                        <div className={style.billingInfo}>
                                        <h1 className={style.billingText}> Precio unitario: ${products.product.price}</h1>
                                        <h1 className={style.billingText}> Productos Comprados: {products.quantity}</h1>
                                        <h1 className={style.billingText}> Subtotal: ${products.product.price * products.quantity}</h1>    
                                        </div>
                                        
                                        

                                   </div>
                            
                            )
                            
                        })}
                        <h2 className={style.totalPrice}>Precio Total: ${data.products.map((item)=> {return item.quantity * item.product.price}).reduce((previousValue, currentValue) => previousValue + currentValue)}</h2>
                    </div>



                )}) : (

                    <h3>this order is currently unavailable</h3>
                )}



           </div>
          )
}