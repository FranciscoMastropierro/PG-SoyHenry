import React from 'react'

function Card(props) {
  return (
    <div>
        <img src={props.image} alt="Flag" width='130' height='100' />
        <h4>{props.name}</h4>
        <h5>{props.price}</h5>
    </div>
  )
}

export default Card