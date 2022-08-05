import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile, token } from '../../redux/actions'
import { useAuth0 } from "@auth0/auth0-react";
import pencil from '../../assets/edit.png'
import style from '../../styles/userProfile.module.css'

export default function UserProfile () {
    
    const u = useAuth0().user
    const dispatch = useDispatch()
    const userLoged = useSelector((state) => state.userLoged)
    const [user, setUser] = useState(userLoged)
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    function handleChange (e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(changeProfile(userLoged.id, user))
        alert('tus cambios se han realizado con exito')
    }

    useEffect(() => {
        if(isAuthenticated ){
            // const tok =  getAccessTokenSilently()
            getAccessTokenSilently().then(tok =>{
                // console.log("usr ;)", user)
                dispatch(token(tok, u))
            })
        }
        // console.log('no hay token :(')
    }, [isAuthenticated])

    console.log(user)

    return (
        <div className={style.ProfileContainer}>
            <h1>Tu Perfil</h1>
            <img src={userLoged.profileImage} alt='profile-photo' className={style.profilePhoto} />
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.infoContainer}>
                <div className={style.info}>

                    <label>Nombre *</label>
                    <input key='firstname' placeholder='Nombre' value={user.firstname} type='text' name='firstname' onChange={(e) => handleChange(e)}/>

                    <label>Apellido *</label>
                    <input key='lastname' placeholder='Apellido' value={user.lastname} type='text' name='lastname' onChange={(e) => handleChange(e)}/>

                    <label>Nombre de usuario *</label>
                    <input key='username' placeholder='Nombre de usuario' value={user.username} type='text' name='username' onChange={(e) => handleChange(e)}/>

                    <label>Email</label>
                    <input key='email' placeholder='Email' value={user.email} type='text' name='email' onChange={(e) => handleChange(e)} disabled />
                    
                    <label>Direccion *</label>
                    <input key='address' placeholder='Direccion' value={user.address} type='text' name='address' onChange={(e) => handleChange(e)}/>
                    
                    <label>CP *</label>
                    <input key='postalCode' placeholder='Codigo postal' value={user.postalCode} type='number' name='postalCode' onChange={(e) => handleChange(e)}/>
                
                </div>
                </div>
            <button type='submit'>Aceptar cambios</button>
            </form>
        </div>
    )
}