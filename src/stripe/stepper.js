import { useState, useEffect } from 'react'
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js'
import { sendPaymentRequest } from '../store/paymentReducer'
import { useDispatch, useSelector } from 'react-redux'

import StepContent from './stepContent'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'



const StepperComponent = () => {
	const [ activeStep, setActiveStep ] = useState(0)
	// const [ loading, setLoading ] = useState(true)

	const stripe = useStripe()
	const elements = useElements()
	const dispatch = useDispatch()
	const { loading, paymentDetails } = useSelector( state => state.payment )


	// useEffect(() => {
	// 	if( activeStep === 3 ) return setTimeout( () => setLoading(false), 2000)
	// 	setLoading( true )	
	// }, [activeStep])


	const handleNext = (evt) => {
		if( activeStep >= 3 ) return
		setActiveStep( step => step + 1 )
	}
	const handleBack = (evt) => {
		if( activeStep <= 0 ) return
		setActiveStep( step => step - 1 )
	}

	const handleForm = async (evt) => {
		evt.preventDefault()
		if( activeStep !== 2 ) return handleNext()

		// handling payment
		if( !stripe || !elements ) return
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardNumberElement)
		})

		if(error) return 

		/* only send ID & price by here and all the required data will be fetched in paymentReducer
				before send request. (even no need to send anything, ID will also be in store)
		*/
		const data = {
			id: paymentMethod.id,
			amount : paymentDetails.amount,
			currency : paymentDetails.currency,
		}
		dispatch( sendPaymentRequest( data ) )
		// handleNext()

		// console.log( paymentMethod )
		// console.log( activeStep )
	}

	return (
		<>
			<Stepper activeStep={activeStep} >
				{[1, 2, 3].map( step =>
					<Step key={step}>
						<StepLabel />
					</Step>
				)}
			</Stepper>

			<form onSubmit={handleForm} noValidate autoComplete='off'>
				<StepContent step={activeStep} loading={loading} />

				<Button 
					disabled= {!activeStep}
					onClick={handleBack} 
					variant='outlined'
					color='primary'> Back </Button>

				<Button 
					disabled= {activeStep === 3}
					// onClick={handleNext} 
					variant='outlined'
					color='primary'
					type='submit'
				> { activeStep === 2 ? 'Pay' : activeStep === 3 ? loading ? (
						<CircularProgress size={24} style={{ color: 'primary' }} /> 
					) : 'Success'
				: 'Next' } </Button>
			</form>
	</>
	)
}

export default StepperComponent
