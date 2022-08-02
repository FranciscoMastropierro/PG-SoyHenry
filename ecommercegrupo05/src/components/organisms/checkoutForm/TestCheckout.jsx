import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import "bootswatch/dist/cyborg/bootstrap.min.css";


const stripePromise = loadStripe("pk_test_51LPdB5H9O09Vk58eN5dLZfEZTY7pil4bPkqlWiYchUAjx82DR52o26b4bm8aUoEtqfJuF7BFFcS01wKLUpSJ22d900UhCklx09")

const CheckoutForm = () => {

    // const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

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
                const { data } = await axios.post('http://localhost:3001/api/checkout', {
                    id,
                    amount: 10000
                })
                console.log(data)

                elements.getElement(CardElement).clear()
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
        <form onSubmit={handleSubmit} className='card card-body'>

            <img
                src='https://www.citypng.com/public/uploads/preview/-11591925787cggjhepdvq.png'
                alt='imagen de producto'
                className='img-fluid'
            />

            <h3 className='text-center my-2'>price: 100$</h3>

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
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    );
}

export default TestCheckout;