import React, { useEffect, useState } from 'react'
import { Textarea, useDisclosure } from '@chakra-ui/react'
import style from '../../styles/comments.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { crateComment, deleteComment, editComment, getComments } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function Comments() {
  const dispatch = useDispatch();
  let commentProduct = useSelector(state => state.commentsUserXProduct)
  const idProductCurrent = useParams().id;
  const { id } = commentProduct

  //  console.log('idProduct', id)

  // -------- estado para enviar comentarios
  const [input, setInput] = useState({
    text: '',
    productId: idProductCurrent,
    userId: 'adddbe6c-bc51-4bc6-85c3-55fd7fcf9533'
  })

  const [edit, setEdit] = useState({
    id: '10',
    newComment: ''
  })

  useEffect(() => {
    dispatch(getComments(idProductCurrent))
  }, [idProductCurrent])

  console.log('estado', commentProduct)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


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
    alert('gracias por su comentario.')
    setInput({
      ...input,
      text: ''
    })
    dispatch(getComments(idProductCurrent))
  }

  function handleEditComment(e) {
    e.preventDefault(e)
    // const {id, text} = e.target.value
    setEdit({
      ...edit,
      newComment: e.target.value
    })
  }

  // function handleBtnEditId(e){
  //   e.preventDefault(e)
  //   setEdit({
  //     ...edit,
  //     id: e.target.value
  //   })
  // }

  function handleBtnEdit(e) {
    e.preventDefault(e);
   dispatch(editComment(edit))
    alert('comentario modificado.')
    setEdit({
      id: '',
      newComment: ''
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
      <div>
        <label>Dejar comentario del producto
          <Textarea placeholder='Escribe tu comentario aqui...' value={input.text} onChange={e => handleText(e)} />
        </label>
        <button onClick={(e) => handleSubmit(e)}>Enviar</button>
      </div>
      <div>
        {Array.isArray(commentProduct) ? (commentProduct.length === 1
          ? <h2> {commentProduct.length} Comentario</h2>
          : <h2> {commentProduct.length} Comentarios</h2>)
          : ''
        }
        {
          Array.isArray(commentProduct) ?
            commentProduct.map(c => {
              return (
                <div>
                  <div key={c.id} >
                    <h3>{c.userInfo['firstname']} {c.userInfo['lastname']}</h3>
                    <p>{c.text}</p>
                  </div>
                  <button ref={btnRef} colorScheme='teal' onClick={onOpen}>
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
                        <button variant='outline' mr={3} onClick={onClose}>
                          Cancel
                        </button>
                        <button value={c.id} onClick={e => handleBtnEdit(e)} colorScheme='blue'>Modificar</button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <button value={c.id} onClick={e => handleBtnDelete(e)}>borrar</button>
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