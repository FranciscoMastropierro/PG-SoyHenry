import React from 'react'

function BtnFinal() {


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }


    return (
        <div>
            <button onClick={handleSubmit}>Realizar Pedido</button>
        </div>
    )
}

export default BtnFinal