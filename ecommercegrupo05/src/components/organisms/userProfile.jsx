import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../redux/actions'
import style from '../../styles/userProfile.module.css'

export default function UserProfile () {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile)
    const [user, setUser] = useState({
        name: profile.name,
        email: profile.email,
        picture: profile.picture || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/240px-Avatar_icon_green.svg.png',
        telephone: profile.telephone|| 0,
        id: profile.id || 0,
        state: profile.state|| '',
        direction: profile.direction || '',
        floor: profile.floor || 0,
        department: profile.department || 0,
        cp: profile.cp || 0,
        location: profile.location || ''
    })
    function handleChange (e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(setProfile(user))
    }

    return (
        <div className={style.userProfileContainer}>
            <h1>Tu Perfil</h1>
            <img src={profile.picture} alt='profile-photo' className={style.profilePhoto} />
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.infoContainer}>
                <div className={style.info}>
                    <h2>Informacion personal</h2>
                    <label>Nombre</label>
                    <input key='name' placeholder='Nombre y apellido' value={user.name} type='text' name='name' onChange={(e) => handleChange(e)}/>
                    <label>Email</label>
                    <input key='email' placeholder='Email' value={user.email} type='text' name='email' onChange={(e) => handleChange(e)} />
                    <label>Telefono</label>
                    <input key='telephone' placeholder='Telefono' value={user.telephone} type='number' name='telephone' onChange={(e) => handleChange(e)}/>
                    <label>Documento</label>
                    <input key='id' placeholder='Documento' value={user.id} type='number' name='document' onChange={(e) => handleChange(e)}/>
                </div>
                <div className={style.info}>
                    <h2>Informacion de facturacion</h2>
                    <label>Provincia</label>
                    <input key='state' placeholder='Provincia' value={user.state} type='text' name='state' onChange={(e) => handleChange(e)}/>
                    <label>Localidad</label>
                    <input key='location' placeholder='Localidad' value={user.location} type='text' name='location' onChange={(e) => handleChange(e)}/>
                    <label>Direccion</label>
                    <input key='direction' placeholder='Direccion' value={user.direction} type='text' name='direction' onChange={(e) => handleChange(e)}/>
                    <label>Piso</label>
                    <input key='floor' placeholder='Nº de Piso' value={user.floor} type='number' name='floor' onChange={(e) => handleChange(e)}/>
                    <label>Depto</label>
                    <input key='department' placeholder='Departamento' value={user.department} type='number' name='department' onChange={(e) => handleChange(e)}/>
                    <label>CP</label>
                    <input key='cp' placeholder='Codigo postal' value={user.cp} type='number' name='cp' onChange={(e) => handleChange(e)}/>
                </div>
                </div>
            <button type='submit'>Aceptar cambios</button>
            </form>
        </div>
    )
}