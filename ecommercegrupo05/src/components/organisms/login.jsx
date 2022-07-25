import React from "react";
import { useState } from "react";
import style from '../../styles/login.module.css'
import logo from '../../assets/coder2.png'

export default function Login() {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    function handleSubmit (e) {
        e.preventDefault();
        setUser({ username: '', password: '' })
    }
    
    return (
        <div className={style.loginContainerGeneral}>
        <div className={style.loginContainer}>
            <img src={logo} alt='logo'/>
            <h1>INICIAR SESION</h1>
            <div className={style.divHr}></div>
            <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
                <input key='username' placeholder='usuario...' type='text' value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}/>
                <input key='password' placeholder='contraseña...' type='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                <button key='submit' type='submit'>Submit</button>
            </form>
            <h3>No tienes cuenta?</h3>
            <button>Regístrate aquí</button>
        </div>
        </div>
    )
}