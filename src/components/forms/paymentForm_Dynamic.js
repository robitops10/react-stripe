import { useState } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import countriesList from '../../resources/countries'

const listItems = [
	{ type: 'text', 	label: 'Currency', 						name: 'currency' },
	{ type: 'number', label: 'Amount', 							name: 'amount' },
	{ type: 'number', label: 'Credit Card Number', 	name: 'cardNumber' },
	{ type: 'date', 	label: 'Expiration Date', 		name: 'expireDate' },
	{ type: 'number', label: 'CVC', name: 'cvc' },
]

const PaymentForm = () => {
	const listItemsObj = {}
	listItems.map( item => listItemsObj[item.name] = '')
	const [ fields, setFields ] = useState( listItemsObj )
	const [ errorFields, setErrorFields ] = useState( listItemsObj )

	const changeHandler = (evt) => {
		setFields({ ...fields, [evt.target.name]: evt.target.value })
	}

	// console.log( fields )


	return (
		<>
			<Typography>Payment Data</Typography>
			<form autoComplete='off' noValidate >
				<Autocomplete 
					options={countriesList}
					getOptionLabel={ country => country.name }
					renderInput={ params => <TextField
						{...params}
						variant='outlined'
						color='primary'
						label='Currency'
						margin='dense'
						InputLabelProps={{ shrink: true }}
						fullWidth
						required
						autoFocus={ false }

						error={!fields['currency']}
						helperText={errorFields['currency']}
					/>
					}

					onChange={(evt, country) => setFields({...fields, currency: country ? country.code : '' }) }

				/>
			{ listItems.map(({type, label, name}, index) => name === 'currency' ? '' : (
				<TextField 
					key={name}
					variant='outlined'
					color='primary'
					label={label}
					margin='dense'
					InputLabelProps={{ shrink: true }}
					fullWidth
					required
					autoFocus={ index === 0 }

					type={type}
					name={name}
					value={fields[name]}
					onChange={changeHandler}

					error={!fields[name]}
					helperText={errorFields[name]}
				/>
			))}
			</form>
		</>
	)
}
export default PaymentForm
