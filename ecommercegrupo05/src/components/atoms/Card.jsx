import React from 'react'
import style from '../../styles/slide.module.css';


function Card({ image, name, price, rating }) {

  function handleClick (e) {
    e.preventDefault();
    !fav? setFav(true):
    setFav(false)
    console.log(fav)
  }
  

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
      </div>
      <div className={style.textContainer}>
        <h4 className={style.name}>{name}</h4>
        <h5 className={style.price}>${price}</h5>
        <button onClick={() => navigate(`/details/${id}`)}>Ver producto</button>
        <button onClick={(e)=>handleClick(e)}> { !fav ? "Agregar a favoritos" : "Favorito"}</button>
      </div>
    </div>
  )
}

export default Card