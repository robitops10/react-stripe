import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = ({ component, ...rest }) => {
	const { authenticated } = useSelector( state => state.user )

	return authenticated ? <Route {...rest} component={component} /> : <Redirect to='/' />
}
export default ProtectedRoute
