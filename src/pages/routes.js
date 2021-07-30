import { Route, Switch } from 'react-router-dom'

import Home from './home'
import About from './about'
import Login from './login'

import Payment from './payment'
import Payment2 from './payment2'

import Profile from './profile'
import ProtectedRoute from './protectedRoute'

const Routes = () => (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/login' component={Login} />

		<Route path='/payment' component={Payment} />
		<Route path='/payment2' component={Payment2} />
		<ProtectedRoute path='/profile' component={Profile} />

	</Switch>
)

export default Routes
