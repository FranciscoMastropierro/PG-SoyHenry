import React, { useEffect, useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import { useAuth0 } from "@auth0/auth0-react";
import { favoritePost, deleteFavorite, getUsersFavorite } from '../../redux/actions'
import style from '../../styles/Fav.module.css'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert'; 
const Fav = (props) => {

 const Favorites = useSelector((state) => state.UserFavs)
 console.log(Favorites)
 const isFav = Favorites[0]?.Products.find((e)=> e.Favorites.ProductId === props.id)
 const userLoged = useSelector((state) => state.userLoged);

// //let [fav, setFav] = useState(false)


  // useEffect(() => {
  //     Favorites
  // }, [])
    
//    let [estado, setEstado] = useState({
//        idProducts:"",
//        idUser:userLoged
//    })
    let {user, loginWithRedirect,} = useAuth0()
    const dispatch = useDispatch()


    function handleClickPost (e) {
        e.preventDefault();
        dispatch(favoritePost(props.id, userLoged.id))   
    //    setFav(true)
        swal("producto añadido a favoritos")

        window.location.reload()

    }

    function handleClickDelete (e) {
        e.preventDefault();     
        dispatch(deleteFavorite(props.id, userLoged.id))   
    //    setFav(false)
        swal("producto removido de favoritos")
        window.location.reload()
    }
    


       //function HandleFavorite(e){
   //    console.log(e.target.id, user)
   //    dispatch(favoritePost(e.id, user.id))
   //}

  return (
    <div>
        
        {user? !isFav? <button className={style.favButton} id={props.id} onClick={(e)=>handleClickPost(e)}>
                     <AiOutlineHeart
                     className={style.favicon}/>
               </button> :
               <button className={style.favButton} id={props.id} onClick={(e)=>handleClickDelete(e)}>
                      <AiFillHeart
                      className={style.favicon}/>
         </button> :<></>}   
    </div>
  )
}

export default Fav