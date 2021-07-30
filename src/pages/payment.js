import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Main from '../hoc/main'
import Stepper from '../components/core/stepper'

// Get the publishable key via 	Get Request from backend route
const PUBLISHABLEKEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
const stripe = loadStripe( PUBLISHABLEKEY )

const Payment = () => {
	return (
		<>
			<Main>
				{/*Wrap the entire stripe payment process*/}
				<Elements stripe={stripe} >
					<Stepper />
				</Elements>
			</Main>
		</>
	)
}

export default Payment
