import React from "react";
import style from '../../../styles/testAddresform.module.css'
import card from '../../../assets/card_img.png'
import { Link } from "react-router-dom";


const TestAddresForm = () => {
    

    return(
        <div className={style.container}>

    <form action="" className={style.form}>

        <div className={style.row}>

            <div className={style.col}>

                <h3 className={style.title}>Dirección de Envío</h3>

                <div className={style.inputBox}>
                    <span className={style.span}>Tarjetas aceptadas :</span>
                    <img src={card} alt="" className={style.img}/>
                </div>

                <div className={style.inputBox}>
                    <span className={style.span}>Nombre :</span>
                    <input type="text" placeholder="Nombre" className={style.input}/>
                </div>
                <div className={style.inputBox}>
                    <span className={style.span}>email :</span>
                    <input type="email" placeholder="example@example.com" className={style.input}/>
                </div>
                <div className={style.inputBox}>
                    <span className={style.span}>Direccion :</span>
                    <input type="text" placeholder="calle#" className={style.input}/>
                </div>
                <div className={style.inputBox}>
                    <span className={style.span}>ciudad :</span>
                    <input type="text" placeholder="Buenos Aires" className={style.input}/>
                </div>

                <div className={style.flex}>
                    <div className={style.inputBox}>
                        <span className={style.span}>Pais :</span>
                        <input type="text" placeholder="Argentina" className={style.input}/>
                    </div>
                    <div className={style.inputBox}>
                        <span className={style.span}>Codigo postal :</span>
                        <input type="text" placeholder="123 456" className={style.input}/>
                    </div>
                </div>
            </div>
        </div>
        <Link to='/TestCheckout'>
            <button className={style.submitBtn}>
                Continuar
            </button>
        </Link> 
    </form>
</div>
    )
}

export default TestAddresForm;