import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { crateComment, getAllByidUser, getProducts } from "../../redux/actions";

import style from "../../styles/UserOrders.module.css";

import swal from 'sweetalert';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react'

const UserOrders = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getAllByidUser(id))

  }, [])

  const allOrders = useSelector((state) => state.UserOrders)

  // ----------------------------------------------------------
  const [input, setInput] = useState({
    text: '',
    rating: 0,
    productId: '20b9f439-fefd-489e-a8ce-2c845f470b81',
    userId: '9c286e46-ef82-4db9-a5a6-1feef70792e4'
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleText(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      text: e.target.value
    });
  }

  function handleRating(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      rating: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(crateComment(input));
    // dispatch(getComments(idProductCurrent))
    setInput({
      ...input,
      text: '',
      rating: 0
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
    onclose()
  }

  const optionsRating = [
    {
      value: '1',
    },
    {
      value: '2',
    },
    {
      value: '3',
    },
    {
      value: '4',
    },
    {
      value: '5',
    },
  ]

  return (
    <div className={style.container}>
      <h2 className={style.Title}> My Orders</h2>

      {allOrders && allOrders.length ? (
        <>


          {allOrders.map((order) => {
            return (
              <div className={style.Card} key={order.id}>
                <div>
                  <h4 className={style.firstInfo}> {order.date.slice(0, 10)} </h4>
                </div>

                {order.Products.map((item) => {
                  return (
                    <div className={style.productDiv}>
                      <div>
                        <img src={item.image} alt="item" />
                      </div>
                      <div className={style.productDivinfo}>
                        <div >
                          <h3>{item.name}</h3>
                          <h3>{item.brand}</h3>
                        </div>
                        <div>
                          <h3>$ {item.price}</h3>
                        </div>


                      </div>
                      <div className={style.productDivinfo}>
                        <button className={style.btn}> Ver detalle</button>
                        <button className={style.btn} onClick={onOpen}> Dejar Reseña</button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Escribe tu comentario y calificanos.</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <fieldset>
                                <p>(1 = malo y 5 = excelente)</p>
                                {
                                  optionsRating.map(({ value }) => {
                                    return (
                                      <div >
                                        <div >
                                        <select onChange={e => handleRating(e)}>
                                          <input type="radio" id={value} name="rating" value={value}
                                          />
                                          <label for="huey">{value}</label>
                                          </select>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </fieldset>

                              <Textarea placeholder='Escribe tu comentario aqui...' value={input.text} onChange={e => handleText(e)} />
                            </ModalBody>

                            <ModalFooter>
                              <button colorScheme='blue' mr={3} onClick={onClose}>
                                Cancelar
                              </button>
                              <button variant='ghost' onClick={(e) => handleSubmit(e)}>Crear Comentario</button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </div>

                    </div>
                  )






                })}



              </div>
            );
          })}
        </>
      ) : (
        <div>
          No encontramos Ordenes asignadas a tu usuario :C
        </div>
      )}
    </div>
  );
};

export default UserOrders;
//<h3 className={style.info}>{e.paymentMethod}</h3>
//                <h3 className={style.info}>{e.state}</h3>
//                <h3 className={style.info}>{e.shipmentAddress}</h3>
//                <h3 className={style.info}>{e.postalCode}</h3>
//                <NavLink to={`/orderdetail/${e.id}`}>
//                  <button className={style.cardbtn}>Detalle</button>
//                </NavLink>