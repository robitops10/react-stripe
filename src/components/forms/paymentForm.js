import { countries } from 'countries-list'
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'

import Autocomplete from '@material-ui/lab/Autocomplete'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import StripeInput from '../stripeInput'


const countriesList = Object.values(countries)

const cardsLogo = [
  'amex',
  'cirrus',
  'diners',
  'dankort',
  'discover',
  'jcb',
  'maestro',
  'mastercard',
  'visa',
  'visaelectron',
];


const PaymentForm = () => {

    return <>
        <Grid item xs={12} container >
            <Grid item xs={12} sm={3}>
                <Typography variant="h6">Payment Data</Typography>
            </Grid>
            <Grid item xs={12} sm={9} container justifyContent="space-between">
                {cardsLogo.map(e => <img 
                  key={e} 
                  src={`./cards/${e}.png`} 
                  alt={e} 
                  width="50px" 
                  align="bottom" 
                  style={{ padding: "0 5px" }} 
                />)}
            </Grid>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Autocomplete
                options={countriesList}
                getOptionLabel={country => country.currency}
                // renderOption={country => <>{country.name} ({country.currency})</>}
                renderInput={params =>
                    <TextField
                        {...params}
                        label="Currency"
                        name="currency"
                        variant="outlined"
                        fullWidth
                    />
                }
            />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TextField
                label="Amount"
                name="amount"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Credit Card Number"
                name="ccnumber"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputProps: {                           // supply arguments as props
                    component: CardNumberElement
                  },
                  inputComponent: StripeInput,            // Use the props as function argument
                }}
            />
        </Grid>
        <Grid item xs={6} sm={6}>
            <TextField
                label="Expiration Date"
                name="ccexp"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputProps: {
                    component: CardExpiryElement
                  },
                  inputComponent: StripeInput,
                }}
            />
        </Grid>
        <Grid item xs={6} sm={6}>
            <TextField
                label="CVC"
                name="cvc"
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputProps: {
                    component: CardCvcElement
                  },
                  inputComponent: StripeInput,
                }}
            />
        </Grid>
    </>
}

export default PaymentForm;

const currencies = [
    {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol_native": "د.إ.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
    },

]
