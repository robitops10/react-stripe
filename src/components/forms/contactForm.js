import { countries } from 'countries-list'

import Autocomplete from '@material-ui/lab/Autocomplete'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const countriesList = Object.values( countries )

const ContactForm = () => {
	return (
		<>
		{/*It is only Grid item, Because we will import into Grid container*/}
		<Grid item xs={12}>
			<Typography variant='h6'> Contact Information </Typography>
		</Grid>

		<Grid item xs={12} sm={4}>
      <TextField
        label="First Name"
        name="firstname"
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField
        label="Last Name"
        name="lastname"
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField
        label="Email Address"
        name="email"
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Street Address 1"
        name="address1"
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Street Address 2 (optional)"
        name="line2"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField
        label="Postal Code"
        name="postal_code"
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField
        label="City"
        name="city"
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4} >
    	<Autocomplete 
    		options={countriesList}
    		getOptionLabel={ country => `${country.emoji} ${country.name}` }
    		renderInput={ params => <TextField {...params}
	        label="Country"
	        name="country"
	        variant="outlined"
	        required
	        fullWidth
    		/>}
    	/>	
    </Grid>

		</>
	)
}

export default ContactForm
