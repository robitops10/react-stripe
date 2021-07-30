import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { catchAsync } from '../utils/util'
import { 
	contactDetails,
	serviceDetails,
	// paymentDetails  		// is has { currency: '', amount: '', fun... comes from Card*Element }
} from '../stripe/paymentDetails'

axios.defaults.baseURL = 'http://localhost:5000'
const headers = { headers: { 'Content-Type' : 'application/json'} }

const { reducer, actions } = createSlice({
	name: 'payment',
	initialState: JSON.parse(localStorage.getItem('payment')) || {
		failed: '',
		loading: false,
		contactDetails,
		serviceDetails,
		paymentDetails: { currency: '', amount: '' },
		transaction: {}
	},
	reducers: {
		contactDetails: (state, action)  => ({
			...state, contactDetails: action.payload
		}),
		serviceDetails: (state, action)  => ({
			...state, serviceDetails: action.payload
		}),
		paymentDetails: (state, action)  => ({
			...state, paymentDetails: action.payload
		}),


		paymentStarted : (state, action) => ({
			...state, loading: true, 
		}),
		paymentSucceed : (state, action) => ({
			...state, loading: false, transaction: action.payload
		}),
		paymentFailed : (state, action) => ({
			...state, loading: false, transactionDetails: null, failed: action.payload
		}),
		
	}
})
export default reducer

export const contactForm = (data) => (dispatch) => {
	dispatch( actions.contactDetails(data) )
}

export const serviceForm = (data) => (dispatch) => {
	dispatch( actions.serviceDetails(data) )
}

export const paymentForm = (data) => (dispatch) => {
	dispatch( actions.paymentDetails(data) )
}



export const sendPaymentRequest = (payment) => async (dispatch, getState) => {
	try {
		dispatch( actions.paymentStarted() )

		const { data } = await axios.post( '/api/v1/payment', payment, headers )
		dispatch( actions.paymentSucceed( data ))

		localStorage.setItem('payment', JSON.stringify( getState().payment ))

	} catch( err ) {
		dispatch( actions.paymentFailed(err.message) )
	}
}
