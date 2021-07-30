import { useDispatch, useSelector } from 'react-redux'
import { serviceForm } from '../../store/paymentReducer'
import { serviceItems } from '../paymentDetails'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const ServiceForm = () => {
	const dispatch = useDispatch()
	const { serviceDetails } = useSelector(state => state.payment)

	const changeHandler = (evt) => {
		dispatch( serviceForm({
			...serviceDetails, [evt.target.name]: evt.target.value
		}))
	}

	return (
		<>
			<Typography color='primary' variant='h5' align='center'>Service Information</Typography>

			{ serviceItems.map( ({label, name, type}, key) => <TextField
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
				value={serviceDetails[name]}
				onChange={changeHandler}

				error={false}
				helperText={''}
			/> )}
		</>
	)
}

export default ServiceForm
