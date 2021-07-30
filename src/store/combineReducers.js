import { combineReducers } from 'redux'
import paymentReducer from './paymentReducer'
import userReducer from './userReducer'

export default combineReducers({
	payment: paymentReducer,
	user: userReducer
})
