import ContactForm from './forms/contactForm'
import ServiceForm from './forms/serviceForm'
import PaymentForm from './forms/paymentForm'
import PaymentSuccess from './paymentSuccess'

const StepContent = ({ step, loading }) => {

	switch( step ) {
		case 0: return <ContactForm />
		case 1: return <ServiceForm />
		case 2: return <PaymentForm />
		case 3: return loading ? '' : <PaymentSuccess />
		default: return ''
	}
}

export default StepContent
