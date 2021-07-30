import { useState } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import countriesList from '../../resources/countries'

import Input from '../core/textField'


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

	const formValidator = (items) => {
		const errors = {}

		Object.keys( items ).map( item => {
			if( !item ) errors[item] = `${item} field is empty`
		})

		return errors
	}
	// formValidator(fields)

	console.log( fields )

	return (
		<>
			<Typography>Payment Data</Typography>
			<form autoComplete='off' noValidate >
				<Autocomplete 
					options={countriesList}
					getOptionLabel={ country => country.name }
					renderInput={ params => <TextField {...params}
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

				<Input 
					label={listItems[1].label}
					// type={listItems[1].type}
					value={fields[listItems[1].name]}
					changeHandler={(evt) => setFields({...fields, [listItems[1].name]: evt.target.value.replace(/[^0-9,.]/g, '') }) }
					error={!fields[listItems[1].name]}
					helperText={errorFields[listItems[1].name]}
				/>

				<Input 
					label={listItems[2].label}
					// type={listItems[2].type}
					value={fields[listItems[2].name]}
					changeHandler={(evt) => setFields({...fields, [listItems[2].name]: evt.target.value }) }
					error={!fields[listItems[2].name]}
					helperText={errorFields[listItems[2].name]}
				/>

				<Input 
					label={listItems[3].label}
					// type={listItems[3].type}
					value={fields[listItems[3].name]}
					changeHandler={(evt) => setFields({...fields, [listItems[3].name]: evt.target.value }) }
					error={!fields[listItems[3].name]}
					helperText={errorFields[listItems[3].name]}
				/>

				<Input 
					label={listItems[4].label}
					// type={listItems[4].type}
					value={fields[listItems[4].name]}
					changeHandler={(evt) => setFields({...fields, [listItems[4].name]: evt.target.value.replace(/[^0-9,.]/g, '') }) }
					error={!fields[listItems[4].name]}
					helperText={errorFields[listItems[4].name]}
				/>


			</form>
		</>
	)
}
export default PaymentForm
