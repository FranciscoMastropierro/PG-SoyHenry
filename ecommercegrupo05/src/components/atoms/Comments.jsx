import React, { useEffect, useState } from 'react'
import { Textarea } from '@chakra-ui/react'
import style from '../../styles/comments.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { crateComment, getComments } from '../../redux/actions';

function Comments() {
  const dispatch = useDispatch();
  const commentUsers = useSelector(state => state.commentsUser)

  // -------- estado para enviar comentarios
  const [input, setInput] = useState({
    text: '',
    productId: 'ff5f4fbe-88fe-4501-8a97-abed261aeff5',
    userId: 'c2fcac02-9259-4047-b4ab-dd68ab6711b8'
  })

  useEffect(() => {
    dispatch(getComments(input.productId))
  }, [])

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
    dispatch(getComments(input.productId))
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
        <h2>{commentUsers.length} Comentarios</h2>
        {
          commentUsers ?
          commentUsers.map(c => {
            return(
            <div key={c.id}>
              <h3>{c.userInfo['firstname']}</h3>
              <p>{c.text}</p>
            </div>
            )
          })
          : commentUsers
        }
      </div>

    </div>
  )
}

export default Comments