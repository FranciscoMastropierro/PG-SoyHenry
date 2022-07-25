import React from 'react'
import style from '../../styles/favcard.module.css';
import { AiFillStar } from 'react-icons/ai'

const Favcard = (props) => {
  return (
    <div className={style.Cardcontainer}>        
        <AiFillStar className={style.star} />
        <img className={style.img} src={props.img} alt={props.name}/>
        <p className={style.name}>{props.name}</p>
        <p className={style.price}>${props.price}</p>
    </div>
  )
}

export default Favcard