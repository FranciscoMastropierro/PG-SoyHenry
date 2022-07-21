import React from 'react'

function Card({image, name, price}) {
  return (
    <div>
        <img src={image} alt="Flag" width='130' height='100' />
        <h4>{name}</h4>
        <h5>$ {price}</h5>
    </div>
  )
}

export default Card