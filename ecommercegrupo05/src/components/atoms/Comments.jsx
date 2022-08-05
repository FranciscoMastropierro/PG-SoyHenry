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

  // -------- estado para enviar comentarios
  const [input, setInput] = useState({
    text: '',
    rating: 3,
    productId: idProductCurrent,
    userId: '9c286e46-ef82-4db9-a5a6-1feef70792e4'
  })

  // const [modificar, setModificar] = useState(true)

  // const [edit, setEdit] = useState({
  //   id: '',
  //   newComment: ''
  // })
  // console.log("🚀 ~ file: Comments.jsx ~ line 37 ~ Comments ~ edit", edit)

  useEffect(() => {
    dispatch(getComments(idProductCurrent))
  }, [idProductCurrent])

  // console.log('estado', commentProduct)

  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()


  function handleText(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      text: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(crateComment(input));
    dispatch(getComments(idProductCurrent))
    setInput({
      ...input,
      text: ''
    })
    swal({
      title: "Gracias por su comentario.",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      buttons: {
        cancel: 'ok'
      }
    })
  }

  function handleBtnDelete(e) {
    e.preventDefault(e);
    const idDel = e.target.value
    dispatch(deleteComment(idDel));
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
    dispatch(getComments(idProductCurrent))
  }

  return (
    <div className={style.div}>
      <div className={style.textarea} >
        <label>Dejar comentario del producto
          <Textarea placeholder='Escribe tu comentario aqui...' value={input.text} onChange={e => handleText(e)} />
        </label>
        <button className={style.btnSend} onClick={(e) => handleSubmit(e)}>Enviar</button>
      </div>
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
                  
                  <button className={style.btnTrash1} onClick={e => handleBtnDelete(e)}><img src={trash} className={style.trash1} /></button>
                </div>
              )
            })
            : <p>'Sin Comentarios'</p>
        }
      </div>

    </div>
  )
}

export default Comments