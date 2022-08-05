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
    productId: idProductCurrent,
    userId: 'b8d60582-edbb-4eb8-a9be-72b5f44c6560'
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
    setInput({
      ...input,
      text: ''
    })
    dispatch(getComments(idProductCurrent))
  }

  // function handleEditComment(e) {
  //   e.preventDefault(e)
  //   // const {id, text} = e.target.value
  //   setEdit({
  //     ...edit,
  //     newComment: e.target.value
  //   })

  //   console.log('aqui estoy', edit)
  // }

  // function handleBtnEditId(e){
  //   e.preventDefault(e)
  //   setEdit({
  //     ...edit,
  //     id: e.target.value
  //   })
  //   setModificar(false)
  // }

  // function handleBtnEdit(e) {
  //   e.preventDefault(e);
  //   setEdit({
  //     ...edit,
  //     id: e.target.value
  //   })
  //   dispatch(editComment(edit))
  //   alert('comentario modificado.')
  //   setEdit({
  //     id: '',
  //     newComment: ''
  //   })
  //   setModificar(true)
  //   onClose()
  // }

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
                    <h3>{userInfo['firstname']} {userInfo['lastname']}</h3>
                    <p>{text}</p>
                  </div>
                  {/* <button onClick={onOpen} ref={btnRef}>
                      Editar
                    </button>
                  <Drawer
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Escribe tu nuevo comentario</DrawerHeader>

                      <DrawerBody>
                        <Textarea placeholder='Nuevo Comentario...' value={edit.newComment} onChange={e => handleEditComment(e)} />
                      </DrawerBody>

                      <DrawerFooter>
                        {
                          modificar
                            ? 
                              <div>
                                <button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                                </button>
                                <button value={id} onClick={(e) => handleBtnEditId(e)}>
                                confirmar 
                                </button>
                              </div>
                            : 
                              <button onClick={e => handleBtnEdit(e)}>
                              Modificar 
                              </button>
                        }
                      </DrawerFooter>
                      
                    </DrawerContent>
                  </Drawer> */}
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