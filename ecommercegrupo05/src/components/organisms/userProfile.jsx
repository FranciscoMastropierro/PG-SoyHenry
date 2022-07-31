import React from 'react';
import { useState } from 'react';
import style from '../../styles/userProfile.module.css'

export default function UserProfile () {
    // let [user, setUser] = useState({
    //     name: '',
    //     lastname: '',
    //     email: '',
    //     telephone: 0,
    //     direction: '',
    //     postalCode: 0,
    //     identification: 0,
    // })

    // function handleChange (e) {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    // }

    // function handleSubmit () {
    //     console.log(user)
    // }

    return (
        <div>
            <h1>Tu Perfil</h1>
            {/* <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input key='name' value={user.name} type='text' name='name' onChange={(e) => handleChange(e)} />
                <label>Apellido</label>
                <input key='lastname' value={user.lastname} type='text' name='lastname' onChange={(e) => handleChange(e)} />
                <label>Correo electronico</label>
                <input key='e-mail' value={user.email} type='text' name='email' onChange={(e) => handleChange(e)} />
                <label>Telefono</label>
                <input key='telephone' value={user.telephone} type='number' name='telephone' onChange={(e) => handleChange(e)} />
                <label>Direccion</label>
                <input key='direction' value={user.direction} type='text' name='direction' onChange={(e) => handleChange(e)} />
                <label>Codigo postal</label>
                <input key='postal-code' value={user.postalCode} type='text' name='postalCode' onChange={(e) => handleChange(e)} />
                <label>DNI</label>
                <input key='identification' value={user.identification} type='number' name='identification' onChange={(e) => handleChange(e)} />
                <button type='submit'>Aceptar</button>
            </form> */}

        </div>
    )
}