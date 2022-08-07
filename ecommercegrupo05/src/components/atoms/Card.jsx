import React from 'react'
import style from '../../styles/slide.module.css';
import { Link, useNavigate } from 'react-router-dom';
// import favourites from '../../assets/favourites.png'
// import click from '../../assets/favourites-click.png'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

function Card({ image, name, price, id, rating }) {
  let navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt="Flag" width='130' height='100' />
        {/* <button onClick={(e) => handleClick(e)}>
          <img src={!fav? favourites : click} alt='favourite' className={style.favourite}/>
        </button> */}
      </div>
      <div className={style.textContainer}>
        <h4 className={style.name}>{name}</h4>
        <h5 className={style.price}>${price}</h5>
        <h6 className={style.price}>⭐{Math.round(rating)}</h6>
        <button onClick={() => navigate(`/details/${id}`)}>Ver producto</button>
        {/* <Link to={'/favorites'}>
          <button>Agregar a favoritos</button>
        </Link> */}
        <button onClick={onOpen}>Agregar a favoritos</button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Quieres agregar a favoritos❓</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Si deseas agregar un producto a favoritos, deber registrate primero.</p>
            </ModalBody>

            <ModalFooter>
              <button colorScheme='blue' mr={3} onClick={onClose}>
                Cancelar
              </button>
              <Link to={'/favorites'}>
                <button variant='ghost'>Registrarme</button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export default Card