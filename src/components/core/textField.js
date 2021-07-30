import TextField from '@material-ui/core/TextField'

const Input = ({
		label = '',
		type = 'text',
		value = 0,
		changeHandler = f => f,
		error = false,
		helperText = '',
		autoFocus= false,

}) => (
	<TextField 
		variant='outlined'
		color='primary'
		label={label}
		margin='dense'
		InputLabelProps={{ shrink: true }}
		fullWidth
		required
		autoFocus={autoFocus}

		type={type}
		value={value}
		onChange={changeHandler}

		error={error}
		helperText={helperText}
		// error={!fields[name]}
		// helperText={errorFields[name]}
	/>
)

export default Input
