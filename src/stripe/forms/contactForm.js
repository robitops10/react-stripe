import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactForm } from '../../store/paymentReducer'
import { contactItems } from '../paymentDetails'

import { countries } from 'countries-list'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const countriesList = Object.values( countries )


const ContactForm = () => {
	const dispatch = useDispatch()
	const { contactDetails } = useSelector( state => state.payment )

	const cityHandler = (evt, country) => {
		dispatch(
			contactForm({
				...contactDetails,  // if don't copy then throw Error of controll => uncontroll by undefined => asign value
				city: country?.capital 
			})
		) 
		console.log( evt.target.name )
	}

	const autocompleteHandler = (evt, country) => {
		dispatch(
			contactForm({
				...contactDetails, 
				emoji: country?.emoji, 
				country: country?.name,
				capital: country?.capital 
			})
		) 
	}

	const textFieldHandler = (evt) => {
		dispatch(
			contactForm({
				...contactDetails, 
				[evt.target.name]: evt.target.value 
			})
		) 
	}


	return (
		<>
			<Typography color='primary' variant='h5' align='center' >Contact Information</Typography>

			{ contactItems.map( ({label, name, type}, key) => name === 'country' ? (
				<Autocomplete
					key={key}
					options= { countriesList }
					getOptionLabel={ country => country.name ? `${country.emoji}  ${country.name} (${country.capital})` : ''}
					onChange={autocompleteHandler}
					value={{ 
						emoji: contactDetails?.emoji || '', 
						name: contactDetails?.country || '',   
						capital: contactDetails?.capital || '',   
					}}
					renderInput = { (props) => <TextField {...props}
						variant='outlined'
						color='primary'
						fullWidth
						required
						margin='dense'
						InputLabelProps={{ shrink: true }}
						label={label}
					/>}
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
					name={name}
					type={type}
					value={contactDetails[name]}
					onChange={textFieldHandler}
					// onChange={(evt ) => dispatch(contactForm({...contactDetails, [evt.target.name]: evt.target.value })) }

					error={false}
					helperText={''}
				/>  
			)

			)}

		</>
	)
}

export default ContactForm

