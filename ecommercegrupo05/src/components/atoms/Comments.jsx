import React, { useEffect, useState } from 'react'
import { Textarea } from '@chakra-ui/react'
import style from '../../styles/comments.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { crateComment, getComments } from '../../redux/actions';
import { useParams } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  let commentProduct = useSelector(state => state.commentsUser)
  const { id } = useParams();

  // console.log('idProduct', id)

  // -------- estado para enviar comentarios
  const [input, setInput] = useState({
    text: '',
    productId: id,
    userId: 'c2fcac02-9259-4047-b4ab-dd68ab6711b8'
  })

  useEffect(() => {
    dispatch(getComments(id))
  }, [id])

  // console.log('estado', commentProduct)

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
    dispatch(getComments(id))
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
        { Array.isArray(commentProduct) ? (commentProduct.length === 1 
        ? <h2> {commentProduct.length} Comentario</h2> 
        : <h2> {commentProduct.length} Comentarios</h2>)
        : ''
        }
        {
          Array.isArray(commentProduct) ?
            commentProduct.map(c => {
              return (
                <div>
                <div key={c.id}>
                  <h3>{c.userInfo['firstname']} {c.userInfo['lastname']}</h3>
                  <p>{c.text}</p>
                </div>
                <button>editar</button>
                <button>borrar</button>
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