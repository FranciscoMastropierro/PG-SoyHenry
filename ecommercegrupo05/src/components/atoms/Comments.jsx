import React, { useEffect, useState } from 'react'
import { Textarea, useDisclosure } from '@chakra-ui/react'
import style from '../../styles/comments.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { crateComment, deleteComment, editComment, getComments } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import trash from "../../assets/trash2.png";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from '@chakra-ui/react'

function Comments() {
  const dispatch = useDispatch();
  let commentProduct = useSelector(state => state.commentsUserXProduct)
  const idProductCurrent = useParams().id;

  //  console.log('idProduct', id)

  useEffect(() => {
    dispatch(getComments(idProductCurrent))
  }, [idProductCurrent])


  function handleBtnDelete(e) {
    e.preventDefault(e);
    const idDel = e.target.value
    // console.log('id delete',idDel)
    dispatch(deleteComment(idDel));
    dispatch(getComments(idProductCurrent))
    swal({
      title: "Comentario eliminado.",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      buttons: {
        cancel: 'ok'
      }
    })
  }

  // console.log('estado',commentProduct)

  return (
    <div className={style.div}>
      <div>
        {Array.isArray(commentProduct) ? (commentProduct.length === 1
          ? <h2> {commentProduct.length} Comentario</h2>
          : <h2> {commentProduct.length} Comentarios</h2>)
          : ''
        }
        {
          Array.isArray(commentProduct) ?
            commentProduct.map(({ id, userInfo, text }) => {              
              return (
                <div key={id} className={style.allComments}>
                  <div>
                    <h3 className={style.titleUser} >{userInfo['firstname']} {userInfo['lastname']}</h3> 
                    <p className={style.text}>{text}</p>
                  </div>
                  
                  <button  value={id} onClick={e => handleBtnDelete(e)}>{id}<img src={trash} className={style.trash1} /></button>
                </div>
              )
            })
            : <p>'Sin Comentarios'</p>
        }
      </div>

    </div>
  )
  // className={style.btnTrash1}
}

export default Comments