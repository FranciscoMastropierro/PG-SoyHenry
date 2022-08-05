import React, { useEffect, useState } from "react";
import trash from "../../assets/trash2.png";
import style from "../../styles/cart.module.css";
import { useCartContext } from "../../context/CartItem";
import { getProductCart, getTotalPrice } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export default function NotFound() {
  const superState = useCartContext();

  const dispatch = useDispatch()

  const [precio, setPrecio] = useState(true);

  const { addItemToCart, deleteItemToCart, deleteAll } = superState.effects;

  const { products } = superState.state;

  useEffect(() => {
    dispatch(getProductCart(products))
  }, [dispatch])

  const totalPricePerProducts = products.map(
    ({ amount, price }) => amount * price
  );

  const totalPrice = totalPricePerProducts.reduce(
    (accum, current) => (accum = accum + current),
    0
  );

  useEffect(() => {
    dispatch(getTotalPrice(totalPrice))
  }, [dispatch])

  const handleItemToCart = (product) => () => addItemToCart(product);

  const handleItemToDelete = (product) => () => deleteItemToCart(product);

  const handleItemToDeleteAll = (product) => () => deleteAll(product);

  useEffect(() => {
    if (totalPrice !== 0) {
      setPrecio(totalPrice);
    } else {
      setPrecio(false);
    }
  }, [totalPrice]);

  return (
    <div>
      {totalPrice === 0 ? (
        <div className={style.container}>
          <h2 className={style.h9}>
            <span className={style.span}>CARRITO </span>
            <span className={style.span}>VACIO</span>
          </h2>
        </div>
      ) : (
        <div className={style.wrapper}>
          {products?.map((product) => {
            const { id, image, name, price, amount } = product;
            let amountOfProduct = price * amount;
            return (
              <div className={style.card} key={id}>
                <div className={style.imgDiv}>
                  <img
                    className={style.img}
                    src={image}
                    alt="imagen de producto"
                  />
                </div>

                <div>
                  <h2 className={style.h2}>{name}</h2>
                  <div className={style.addinfo}>
                    <button
                      className={style.btn}
                      onClick={handleItemToDelete(product)}
                      >
                      {" "}
                      -{" "}
                    </button>
                        <p>{amount}</p>
                    <button
                      className={style.btn}
                      onClick={handleItemToCart(product)}
                    >
                      {" "}
                      +{" "}
                    </button>
                    <div className={style.price}>
                      <h3>$ {amountOfProduct}</h3>
                    </div>
                    <div className={style.btnTrash}>
                      <button onClick={handleItemToDeleteAll(product)}>
                        <img src={trash} className={style.trash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={style.wrapperTotal}>
            <div className={style.space}>
              <p >Precio Total: ${precio}</p>
            </div>
            <div className={style.space}>
              <Link to='/TestAddresForm'>
                <button className={style.total}>COMPRAR</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
