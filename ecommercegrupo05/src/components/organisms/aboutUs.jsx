import React from "react";
import unknow from '../../assets/unknow.jpg';
import style from '../../styles/aboutUs.module.css'

export default function AboutUs() {
    
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.imgBx}>
                    <img className={style.img} src={unknow}/>
                </div>
                <div className={style.content}>
                    <h3 className={style.h3}>Rogelio Ramirez<br/><span className={style.span}>FrontEnd Developer</span></h3>
                    <ul className={style.sci}>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}