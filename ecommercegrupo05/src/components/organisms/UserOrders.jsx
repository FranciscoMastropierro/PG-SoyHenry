import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getUserOrders } from "../../redux/actions";

import style from "../../styles/UserOrders.module.css";

const UserOrders = () => {
  //  const dispatch = useDispatch
  // const {id} = useParams()
  //
  // useEffect(() => {
  // dispatch(getUserOrders(id))
  //
  // }, [])
  //
  // const UserOrders = useSelector((state) => state.UserOrders)

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
      <h2 className={style.Title}> My Orders</h2>

      {allOrders && allOrders.length ? (
        <>
          <div className={style.CardTop}>
            <h2> id</h2>
            <h2> Estado</h2>
            <h2>Direccion</h2>
            <h2>Email</h2>
          </div>

          {allOrders.map((e) => {
            return (
              <div className={style.Card} key={e.id}>
                <h3 className={style.info}>{e.id}</h3>
                <h3 className={style.info}>{e.state}</h3>
                <h3 className={style.info}>{e.address}</h3>
                <h3 className={style.info}>{e.email}</h3>
                <NavLink to={`/orderdetail/${e.id}`}>
                  <button className={style.cardbtn}>Detalle</button>
                </NavLink>
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
