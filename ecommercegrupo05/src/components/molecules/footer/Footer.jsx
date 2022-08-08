import React from "react";
import style from '../../../styles/footerOne.module.css';
import whatsapp from '../../../assets/whatsapp.png';
import { Link, NavLink } from "react-router-dom";
import swal from 'sweetalert';
import { FaInstagram, FaPinterestP, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer () {

   
    
    return(
        <div className={style.bgfooter} >
        <div >
            <div className={style.textTitleFooter}>
                Company
            </div>
            <div>
                <NavLink to ='/faq'  className={`${style.textTitleFooter2}`}>
                FAQ
                </NavLink>
            </div>
            <div>
                <NavLink to ='/returns' className={`${style.textTitleFooter2}`}>
                Returns
                </NavLink>
            </div>
            <div className={style.textTitleFooter}>
                Legal
            </div>
            <div>
                <NavLink to ='/termsandconditions' className={`${style.textTitleFooter2}`}>
                Terms and conditions
                </NavLink>
            </div>
            <div>
                <NavLink to ='/privacypolicy' className={`${style.textTitleFooter2}`}>
                Privacy Policy
                </NavLink>
            </div>
            <div>
                <NavLink  to ='/termsofuse' className={`${style.textTitleFooter2}`}>
                Terms of use
                </NavLink>
            </div>
        </div>

        <div className={style.divAlign}>
            <div className={style.textTitleFooter}>
                Contact Us
            </div>
            <div className={style.texttitle2}>
                info@hardwere.com
            </div>
            <div className={style.texttitle2} >
                1 -234-56780
            </div>

            <div className={style.textTitleFooter}>
                    <Link to='/aboutus' className={`${style.textTitleFooter2}`}>
                    About Us   
                    </Link>
            </div>
            <div className={style.iconsSize}>
                <FaInstagram/> <FaPinterestP/> <FaTiktok/> <FaFacebookF/>
            </div>

        </div>
        <div >
            <label className={style.textTitleFooter} >Stay in touch</label>
            <form
            >
                
            <input
             className={style.inputBox}
             placeholder='Enter Email' 
             type = 'email'
             required
             > 
             </input>
             
            <input 
            type="submit" 
            value= '✔'
            className={style.inputbtn}
            />
            </form>
            <p className={style.textTitleFooterinfoSize}>
                By subscribing to "hard", you consent to <br></br>
                receive recurring automated promotional <br></br>
                and personalized marketing messages<br></br>
                via automated technology</p>
        </div>
        </div>
    )
}