import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'




const formData = (label, name, type='text') => ({label, name, type})
export const contactItems = [
	formData('First Name', 'firstName'),
	formData('Last Name', 'lastName'),
	formData('Email Address', 'email', 'email'),
	formData('Street Address 1', 'address1'),
	formData('Street Address 2 (optional)', 'address2'),
	formData('Postal Code', 'postalCode', 'number'),
	formData('Country', 'country' ),
]
export const contactDetails = {}
contactItems.map( item => contactDetails[item.name] = '')

/*
	We can do every form details in one go. hare we repeated 3 times only Store different name 
		. just for curicity. next time handle in one go.
*/ 



export const serviceItems = [
	formData('Date', 'date', 'date'),
	formData('Service', 'service'),
	formData('Social Media', 'socalMedia'),
]
export const serviceDetails = {}
serviceItems.map( item => serviceDetails[item.name] = '')


export const paymentItems = [
	formData('Currency', 'currency'),
	formData('Amount', 'amount', 'number'),
	formData('Credit Card Number', CardNumberElement),
	formData('Expiration Date', CardExpiryElement),
	formData('CVC', CardCvcElement),
]
export const paymentDetails = {}
const data = paymentItems.map( item => paymentDetails[item.name] = '')


/* Social Media:
	. Facebook
	. Twitter
*/



