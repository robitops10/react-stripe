import { useDispatch, useSelector } from 'react-redux'
import { paymentForm } from '../../store/paymentReducer'
import { paymentItems } from '../paymentDetails'


import StripeInput from '../stripeInput'


import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { countries } from 'countries-list'

const countriesList = Object.values( countries )

const ServiceForm = () => {
	const dispatch = useDispatch()
	const { paymentDetails } = useSelector(state => state.payment)

	const autocompleteHandler = (evt, country) => {
		dispatch(  					// first copy everythin then override the currency, else throw of uncontrol => controll
			paymentForm({ ...paymentDetails, currency: country?.currency })
		)
	}
	const changeHandler = (evt) => {
		dispatch( paymentForm({
			...paymentDetails, [evt.target.name]: evt.target.value
		}))
	}

	return (
		<>
			<Typography color='primary' variant='h5' align='center'>Payment Information</Typography>

			{ paymentItems.map( ({label, name, type}, key) => name === 'currency' ? (
				<Autocomplete 
					key={key}
					options={countriesList}
					getOptionLabel={ country => country.currency }
					value={{ currency: paymentDetails?.currency || '' }}
					onChange={autocompleteHandler}
					renderInput={ params => <TextField {...params} 
						variant='outlined'
						color='primary'
						fullWidth
						required
						margin='dense'

						label={label}
						InputLabelProps={{ shrink: true }}
					/>}
				/>
			) : name === 'amount' ? (
				<TextField
					key={key}
					variant='outlined'
					color='primary'
					fullWidth
					required
					margin='dense'

					label={label}
					InputLabelProps={{ shrink: true }}
					name={name}
					type={type}
					value={paymentDetails?.[name] }
					onChange={changeHandler}
				/> 
			) : (
				<TextField
					key={key}
					variant='outlined'
					color='primary'
					fullWidth
					required
					margin='dense'

					label={label}
					InputLabelProps={{ shrink: true }}
					InputProps={{
						inputProps: {
							component: name,  				// get [ CardNumberElement, CardExpiryElement, CardCvcElement ]
						},
						inputComponent: StripeInput 
					}}


				/> 
			))}
		</>
	)
}

export default ServiceForm
