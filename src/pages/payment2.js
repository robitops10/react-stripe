import Stepper from '../stripe/stepper'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
			stripe.catch(console.error)

const Payment2 = () => {

	return (
		<>
		<Elements stripe={stripe}>
			<Stepper />
		</Elements>
	</>
	)
}

export default Payment2
