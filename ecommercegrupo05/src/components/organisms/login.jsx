import React from "react";
import { useState } from "react";
import style from '../../styles/login.module.css'

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
        <div className={style.loginContainer}>
            <h1>LOG IN</h1>
            <div className={style.divHr}></div>
            <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
                <input key='username' placeholder='username' type='text' value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}/>
                <input key='password' placeholder='password' type='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                <button key='submit' type='submit'>Submit</button>
            </form>
            <h3>Don't you have an account?</h3>
            <button>Sing up here</button>
        </div>
    )
}