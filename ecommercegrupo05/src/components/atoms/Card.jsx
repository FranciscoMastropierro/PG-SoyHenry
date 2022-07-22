import React from 'react'
import style from '../../styles/favcard.module.css';

function Card({image, name, price, brand}) {
  return (
    <div className={style.container}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
        <h4 className={style.name}>{name}</h4>
        <h5 className={style.price}>$ {price}</h5>
    </div>
  )
}

export default Card