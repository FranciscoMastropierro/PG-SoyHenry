import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, changeProfile } from '../../redux/actions'
import style from '../../styles/userProfile.module.css'

export default function UserProfile () {

    const dispatch = useDispatch()
    const prof = useSelector((state) => state.profile)
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        firstname: prof.firstname,
        lastname: prof.lastname,
        username: prof.username,
        email: prof.email,
        address: prof.address,
        postalCode: prof.postalCode,
        profileImage: prof.profileImage,
    })

    function handleChange (e) {
        setUser ({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        const combined = Object.assign(prof, user)
        dispatch(changeProfile(combined.id, combined))
        alert('tus cambios se han realizado con exito')
    }

    return (
        <div className={style.ProfileContainer}>
            <h1>Tu Perfil</h1>
            <img src={prof.profileImage} alt='profile-photo' className={style.profilePhoto} />
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.infoContainer}>
                <div className={style.info}>
                    {/* <h2>Informacion personal</h2> */}

                    <label>Nombre *</label>
                    <input key='firstname' placeholder='Nombre' value={user.firstname} type='text' name='firstname' onChange={(e) => handleChange(e)}/>
                    {error.firstnameError && <h3>{error.firstnameError}</h3>}

                    <label>Apellido *</label>
                    <input key='lastname' placeholder='Apellido' value={user.lastname} type='text' name='lastname' onChange={(e) => handleChange(e)}/>
                    {error.lastnameError && <h3>{error.lastnameError}</h3>}

                    <label>Nombre de usuario *</label>
                    <input key='username' placeholder='Nombre de usuario' value={user.username} type='text' name='username' onChange={(e) => handleChange(e)}/>
                    {error.usernameError && <h3>{error.usernameError}</h3>}

                    <label>Email</label>
                    <input key='email' placeholder='Email' value={user.email} type='text' name='email' onChange={(e) => handleChange(e)} disabled />
                    {error.emailError && <h3>{error.emailError}</h3>}

                    <label>Direccion *</label>
                    <input key='address' placeholder='Direccion' value={user.address} type='text' name='address' onChange={(e) => handleChange(e)}/>
                    {error.addressError && <h3>{error.addressError}</h3>}

                    <label>CP *</label>
                    <input key='postalCode' placeholder='Codigo postal' value={user.postalCode} type='number' name='postalCode' onChange={(e) => handleChange(e)}/>
                    {error.postalCodeError && <h3>{error.postalCodeError}</h3>}


                    {/* <label>Telefono</label>
                    <input key='telephone' placeholder='Telefono' value={profile.telephone} type='number' name='telephone' onChange={(e) => handleChange(e)}/>
                    {error.telephoneError && <h3>{error.telephoneError}</h3>} */}
                    
                    {/* <label>Documento</label>
                    <input key='id' placeholder='Documento' value={profile.id} type='number' name='document' onChange={(e) => handleChange(e)}/>
                    {error.documentError && <h3>{error.documentError}</h3>} */}
                
                </div>
                    {/* <input key='state' placeholder='Provincia' value={profile.state} type='text' name='state' onChange={(e) => handleChange(e)}/>
                    {error.stateError && <h3>{error.stateError}</h3>} */}
                    
                    {/* <label>Localidad</label>
                    <input key='location' placeholder='Localidad' value={profile.location} type='text' name='location' onChange={(e) => handleChange(e)}/>
                    {error.locationError && <h3>{error.locationError}</h3>} */}
                    
                    
                    {/* <label>Piso</label>
                    <input key='floor' placeholder='Nº de Piso' value={profile.floor} type='number' name='floor' onChange={(e) => handleChange(e)}/>
                    {error.floorError && <h3>{error.floorError}</h3>} */}
                    
                    {/* <label>Depto</label>
                    <input key='department' placeholder='Departamento' value={profile.department} type='number' name='department' onChange={(e) => handleChange(e)}/>
                    {error.departmentError && <h3>{error.departmentError}</h3>} */}
                </div>
            <button type='submit'>Aceptar cambios</button>
            </form>
        </div>
    )
}