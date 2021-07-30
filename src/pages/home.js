import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, userLogout } from '../store/userReducer'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'




const Home = () => {
	const dispatch = useDispatch()
	const { authenticated } = useSelector(state => state.user )


	return (
		<>
			<Typography> Home Page </Typography>
			<Button component={Link} to='/profile' color='primary'variant='outlined'>Profile</Button>

			{ authenticated ? (
				<Button onClick={() => dispatch(userLogout())} color='primary'variant='outlined'>Logout</Button>
			) : (
				<Button onClick={() => dispatch(userLogin())} color='primary'variant='outlined'>Login</Button>
			)}
	</>
	)
}

export default Home
