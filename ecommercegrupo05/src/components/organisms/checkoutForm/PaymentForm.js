import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from '../../../styles/checkout.module.css'

const stripePromise = loadStripe('pk_test_51LPdB5H9O09Vk58eN5dLZfEZTY7pil4bPkqlWiYchUAjx82DR52o26b4bm8aUoEtqfJuF7BFFcS01wKLUpSJ22d900UhCklx09')

export default function PaymentForm() {


    // const stripe = useStripe()

    // const elements = useElements()


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Metodo de pago
            </Typography>
            <Grid container spacing={3}>
                <Elements stripe={stripePromise}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardName"
                            label="Nombre de tarjeta"
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                            />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={style.number}>
                            <CardElement />
                        </div>
                    </Grid>
                </Elements>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Recordar los datos de la tarjeta de crédito para la próxima vez"
                    />
                </Grid>
            </Grid>
        </React.Fragment >
    );
}