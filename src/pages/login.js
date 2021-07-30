import { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const fieldItems = [
	{ label: 'Email Address', name: 'email', type: 'email' },
	{ label: 'Password', name: 'password', type: 'password' },
]
const fieldItemsObj = {}
Object.values(fieldItems).map( field => fieldItemsObj[field.name] = '' )



const Login = () => {
	const [ fields, setFields ] = useState(fieldItemsObj)
	const [ fieldsError, setFieldsError ] = useState(fieldItemsObj)

	const formValidator = (obj) => {
		const errors = {}
		Object.keys( obj ).map( field => {
			if( !obj[field].trim() ) errors[field] = `${field} field is empty`
		})	

		setFieldsError({ ...errors })
		return Object.values( errors ).every( item => item === '' )
	}

	const changeHandler = (evt) => {
		setFields({ ...fields, [evt.target.name]: evt.target.value })
	}
	const submitHandler = (evt) => {
		evt.preventDefault()

		if( !formValidator(fields) ) return
		console.log( fields )	

	}

	return (
		<form onSubmit={submitHandler} noValidate >
			{
				fieldItems.map(({ label, name, type}, key) => <TextField 
					key={key}
					variant='outlined'
					color='primary'
					fullWidth
					required

					label={label}
					name={name}
					type={type}
					value={fields[name]}
					onChange={changeHandler}

					error={!!fieldsError[name]}
					helperText={fieldsError[name]}

				/>)
			}
			<Button variant='outlined' color='primary' type='submit'>Login</Button>
		</form>
	)
}
export default Login
