import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, postProfile } from '../../redux/actions'
import style from '../../styles/userProfile.module.css'
import avatar from '../../assets/avatar.png'
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfile () {
    const dispatch = useDispatch()
    const prof = useSelector((state) => state.profile)
    const {user} = useAuth0()
    const [error, setError] = useState({})
    const [profile, setprofile] = useState({
        picture: user.picture,
        name: user.given_name,
        nickname: user.nickname,
        email: user.email,
        telephone: prof.telephone|| 0,
        id: prof.id || 0,
        state: prof.state|| '',
        direction: prof.direction || '',
        floor: prof.floor || 0,
        department: prof.department || 0,
        cp: prof.cp || 0,
        location: prof.location || '',
        isAdmin: false
    })

    function handleChange (e) {
        setprofile({...profile, [e.target.name]: e.target.value})

        if (e.target.type === 'text') {

            if (/\d/.test(profile[e.target.name])) {
                setError({...error,[ `${[e.target.name]}Error`]: 'Solo puedes introducir letras'})
            } else  {
                setError({...error, [ `${[e.target.name]}Error`]: ''})
            }
        }

        else if (e.target.type === 'number') {

            if(!/^[0-9]$/.test(profile[e.target.name])) {
                setError({...error, [`${e.target.name}Error`]: 'Solo puedes introducir numeros'})
            } else {
                setError({...error,  [`${e.target.name}Error`]: ''})
            }
        }

        else if (e.target.type === 'email') {

            if(!/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/) {
                setError({...error, [`${e.target.name}Error`]: 'Introduce un email valido'})
            } else {
                setError({...error,  [`${e.target.name}Error`]: ''})
            }
        }
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log('submiteadoooo')
    }

    return (
        <div className={style.ProfileContainer}>
            <h1>Tu Perfil</h1>
            <img src={profile.picture} alt='profile-photo' className={style.profilePhoto} />
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.infoContainer}>
                <div className={style.info}>
                    <h2>Informacion personal</h2>
                    <label>Nombre *</label>
                    <input key='name' placeholder='Nombre' value={user.given_name} type='text' name='name' onChange={(e) => handleChange(e)}/>
                    {error.nameError && <h3>{error.nameError}</h3>}

                    <label>Apellido *</label>
                    <input key='lastname' placeholder='Apellido' value={user.family_name} type='text' name='lastname' onChange={(e) => handleChange(e)}/>
                    {error.lastnameError && <h3>{error.lastnameError}</h3>}

                    <label>Nombre de usuario *</label>
                    <input key='profilename' placeholder='Nombre de usuario' value={user.nickname} type='text' name='profilename' onChange={(e) => handleChange(e)}/>
                    {error.profilenameError && <h3>{error.nicknameError}</h3>}

                    <label>Email</label>
                    <input key='email' placeholder='Email' value={user.email} type='text' name='email' onChange={(e) => handleChange(e)} />
                    {error.emailError && <h3>{error.emailError}</h3>}

                    <label>Telefono</label>
                    <input key='telephone' placeholder='Telefono' value={profile.telephone} type='number' name='telephone' onChange={(e) => handleChange(e)}/>
                    {error.telephoneError && <h3>{error.telephoneError}</h3>}
                    
                    <label>Documento</label>
                    <input key='id' placeholder='Documento' value={profile.id} type='number' name='document' onChange={(e) => handleChange(e)}/>
                    {error.documentError && <h3>{error.documentError}</h3>}
                
                </div>
                <div className={style.info}>
                    <h2>Informacion de facturacion</h2>
                    <label>Provincia</label>
                    <input key='state' placeholder='Provincia' value={profile.state} type='text' name='state' onChange={(e) => handleChange(e)}/>
                    {error.stateError && <h3>{error.stateError}</h3>}
                    
                    <label>Localidad</label>
                    <input key='location' placeholder='Localidad' value={profile.location} type='text' name='location' onChange={(e) => handleChange(e)}/>
                    {error.locationError && <h3>{error.locationError}</h3>}
                    
                    <label>Direccion *</label>
                    <input key='direction' placeholder='Direccion' value={profile.direction} type='text' name='direction' onChange={(e) => handleChange(e)}/>
                    {error.directionError && <h3>{error.directionError}</h3>}
                    
                    <label>Piso</label>
                    <input key='floor' placeholder='Nº de Piso' value={profile.floor} type='number' name='floor' onChange={(e) => handleChange(e)}/>
                    {error.floorError && <h3>{error.floorError}</h3>}
                    
                    <label>Depto</label>
                    <input key='department' placeholder='Departamento' value={profile.department} type='number' name='department' onChange={(e) => handleChange(e)}/>
                    {error.departmentError && <h3>{error.departmentError}</h3>}
                    
                    <label>CP *</label>
                    <input key='cp' placeholder='Codigo postal' value={profile.cp} type='number' name='cp' onChange={(e) => handleChange(e)}/>
                    {error.cpError && <h3>{error.cpError}</h3>}
                </div>
                </div>
            <button type='submit'>Aceptar cambios</button>
            </form>
        </div>
    )
}