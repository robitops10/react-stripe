import { createSlice } from '@reduxjs/toolkit'

const { reducer, actions } = createSlice({
	name: 'user',
	initialState: {
		authenticated: false,
	},
	reducers: {
		logedIn : (state, action) => ({
			...state, authenticated: action.payload.authenticated
		}),
		logedOut : (state, action) => ({
			...state, authenticated: action.payload.authenticated
		}),

	}
})
export default reducer




export const userLogin = () => (dispatch) => {
	dispatch( actions.logedIn({ authenticated: true }))
}
export const userLogout = () => (dispatch) => {
	dispatch( actions.logedOut({ authenticated: false }))
}
