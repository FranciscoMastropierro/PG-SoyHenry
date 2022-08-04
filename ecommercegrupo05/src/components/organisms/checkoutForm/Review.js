import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
{
name: 'Producto 1',
desc: 'A nice thing',
price: '$9.99',
},
{
name: 'Producto 2',
desc: 'Another thing',
price: '$3.45',
},
{
name: 'Producto 3',
desc: 'Something else',
price: '$6.51',
},
{
name: 'Producto 4',
desc: 'Best thing of all',
price: '$14.11',
},
{ name: 'Envio', desc: '', price: 'Gratis' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
{ name: 'Tipo de tarjeta', detail: 'Visa' },
{ name: 'Card holder', detail: ' Rogelio Ramirez' },
{ name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
{ name: 'Fecha de expiracion', detail: '04/2024' },
];

export default function Review() {
return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>
    Resumen del pedido
    </Typography>
    <List disablePadding>
    {products.map((product) => (
        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
        <ListItemText primary={product.name} secondary={product.desc} />
        <Typography variant="body2">{product.price}</Typography>
        </ListItem>
    ))}

    <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        $34.06
        </Typography>
    </ListItem>
    </List>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Envio
        </Typography>
        <Typography gutterBottom>John Smith</Typography>
        <Typography gutterBottom>{addresses.join(', ')}</Typography>
    </Grid>
    <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Detalles de pago
        </Typography>
        <Grid container>
        {payments.map((payment) => (
            <React.Fragment key={payment.name}>
            <Grid item xs={6}>
                <Typography gutterBottom>{payment.name}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{payment.detail}</Typography>
            </Grid>
            </React.Fragment>
        ))}
        </Grid>
    </Grid>
    </Grid>
</React.Fragment>
);
}