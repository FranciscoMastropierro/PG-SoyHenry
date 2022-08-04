import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { loadStripe } from '@stripe/stripe-js';
import { useCartContext } from "../../../context/CartItem";
import { getMsgCart } from '../../../redux/actions';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import style from '../../../styles/testCheckout.module.css'


const stripePromise = loadStripe("pk_test_51LPdB5H9O09Vk58eN5dLZfEZTY7pil4bPkqlWiYchUAjx82DR52o26b4bm8aUoEtqfJuF7BFFcS01wKLUpSJ22d900UhCklx09")

const CheckoutForm = () => {

    const dispatch = useDispatch()

    const superState = useCartContext();

    const { deleteAllCart } = superState.effects;

    // const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)

    const totalPrice = useSelector((state) => state.totalPrice)
    const totalProducts = useSelector((state) => state.productsCart)
    // console.log("🚀 ~ file: TestCheckout.jsx ~ line 19 ~ CheckoutForm ~ totalProducts aqui", totalProducts)

    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    const handleItemToDeleteAll = (totalProducts) => () => deleteAllCart(totalProducts);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        setLoading(true)

        if (!error) {
            const { id } = paymentMethod

            try {
                const { data } = await axios.post('http://localhost:3001/stripe/api/checkout', {
                    id,
                    amount: totalPrice
                })
                // console.log(data.msg)

                dispatch(getMsgCart(data.msg))

                elements.getElement(CardElement).clear()

                if (data.msg === 'Successful payment') {
                    // dispatch(postOrder({ email: user.email, address:edit.address}))
                    // dispatch(clearCart())
                    swal({
                        title: "Compra exitosa",
                        input: "text",
                        showCancelButton: true,
                        confirmButtonText: "Guardar",
                        cancelButtonText: "Cancelar",
                        buttons: {
                            cancel: 'ok'
                        }
                    })
                    setTimeout(() => navigate('/'), 5000)
                }

            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }


    // useEffect(() => {
    //   if(!stripe) {
    //     setDisable(false)
    //   }else{
    //     setDisable(true)
    //   }
    // }, [stripe])

    // pendiente, tengo que verificar que valor es el que toma en cuenta stripe para poder pegarme a esa propiedad




    return (
        <form onSubmit={handleSubmit} className='card card-body' onClick={handleItemToDeleteAll(totalProducts)}>

            <img
                src='https://idahonews.com/resources/media/54376d60-a84a-48cf-bdac-03a3d32fbccb-full36x25_GettyImages1182622625.jpg?1595459846300'
                alt='imagen de producto'
                className='img-fluid'
            />

            <h3 className='text-center my-2'>Precio Total: {totalPrice} $</h3>

            <div className='form-group'>
                <CardElement className='form-control' />
            </div>

            <button className='btn btn-success' >
                {
                    loading
                        ? <div className="spinner-border text-dark" role="status">
                            <span className="sr-only"></span>
                        </div>
                        : 'Buy'
                }
            </button>
        </form>
    )
}

function TestCheckout() {
    return (
        <Elements stripe={stripePromise}>
            <div className={style.container}>
                <div >
                    <div>
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    );
}

export default TestCheckout;