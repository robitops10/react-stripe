import ContactForm from './forms/contactForm'
import ServiceForm from './forms/serviceForm'
import PaymentForm from './forms/paymentForm'

const StepContent = ({ step }) => {
	switch( step ) {
		case 0: return <ContactForm />
		case 1: return <ServiceForm />
		case 2: return <PaymentForm />
		default: return <></>
	}
}

export default StepContent
