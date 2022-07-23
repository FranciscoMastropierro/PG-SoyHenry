import React from 'react'
import style from '../../styles/favcard.module.css';

function Card({image, name, price}) {
  return (
    <div className={style.container}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
        <div className={style.textContainer}>
          <h4 className={style.name}>{name}</h4>
          <h5 className={style.price}>$ {price}</h5>
        </div>
    </div>
  )
}

export default Card