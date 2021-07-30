import { useState } from 'react'

import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js'
import axios from 'axios'

// import PaymentForm from '../forms/paymentForm'
import StepContent from '../stepContent'

import makeStyles from '@material-ui/core/styles/makeStyles'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'

import CircularProgress from '@material-ui/core/CircularProgress'

const style = makeStyles(theme => ({
  mainBox: {
    position: "relative",
    marginTop: "-8px",
    padding: "10px 20px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    background: theme.palette.background.default
  },
  stepper: {
    height: "calc(10vh - 40px)",
    minHeight: "55px"
  },
  button: {
   	marginRight: theme.spacing(1),
  },
  form: {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
   width: '100%'
  },

  nextButton: {
    marginBottom: theme.spacing(2)
  }

}));







const Steppers = () => {
  const classes = style()
  const [ activeStep, setActiveStep ] = useState(2)
  const [ loading, setLoading ] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const captureCard = () => {
    console.log('...loading')

    // create the function to push the data to server
    const clientSecretPull = async (obj) => {
      const { data } = await axios.post('/api/v1/payment', obj, { headers: {'Content-Type' : 'application/json'}} )
    }

    // // Call the punction by passing the required data, which is got from redux store, saved by last 2 steps
    // const clientSecret = await clientSecretPull({
    //    amount: formValues.amount * 100,
    //    currency: formValues.currency.code,
    //    cardType: "card",
    //    receipt_email: formValues.email,
    //    metadata: {
    //       date: formValues.date,
    //       service: formValues.service,
    //       facebook: formValues.facebook,
    //       twitter: formValues.twitter,
    //    }
    // })


  }


  const handleBack = () => {
  	if( activeStep < 0 ) return
  	setActiveStep( previousStep => previousStep - 1 )
  }
  const handleNext = () => {
  	// if( activeStep >= 3 ) return
    // this line for other 2 step to works
    if( activeStep !== 2 ) return setActiveStep( previousStep => previousStep + 1 )

    // if activeStep === 2 then do something only then pass to next step
    captureCard()
     // if success then do something  success message to user
     // else give some component which deside what will user do

    // finally pass to next step so that user can access one of 2 situation (success/error)
    setActiveStep( previousStep => previousStep + 1 )
  }

  const handleForm = (evt) => {
    evt.preventDefault()
    handleNext()
    // setLoading( true )
  }


  return (
  	<>
	    <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {/* Change the number of loops here based on StepContent */}
        {[1, 2, 3].map(e => (
          <Step key={e}>
             <StepLabel></StepLabel> 
          </Step>
        ))}
	    </Stepper>

	    <Box className={classes.mainBox}>
{/*	      <Grid
	        container
	        spacing={3}
	        direction="column"
	        justifyContent="space-around"
	        alignItems="center"
	        style={{ height: "400px" }}
	    	>
	    	<PaymentForm />
	    	</Grid>
*/}
        <Grid 
          container
          // style={{ height: '400px' }}
          alignItems='center'
          // direction='column'
          // justifyContent='space-around'
          spacing={3}
        >
	    	{activeStep === 3 ? (
			    	<Button onClick={() => setActiveStep(0)} className={classes.button}> Reset </Button>
	    		) : (
    			<form autoComplete='off' noValidate onSubmit={handleForm} className={classes.form}>
            <Grid container spacing={3} >
              <StepContent step={activeStep} />
              <Grid item container justifyContent='flex-end' className={classes.nextButton } >
			    	<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}> Back </Button>
		     		<Button type='submit' variant='contained' color='primary' className={classes.button}>
		         {
               loading ? <CircularProgress size={24} style={{color: 'white'}} /> : activeStep === 2 ? 'Pay' : 'Next'
             }
		     		</Button>
              </Grid>
            </Grid>
    			</form> 
    			)}
        </Grid>
	    </Box>
	  </>
	)
}

export default Steppers;
