import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import store from './store/store'

import theme from './components//core/theme'
import App from './app'


ReactDOM.render(
	<ThemeProvider theme={theme} >
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</ThemeProvider>, 
document.getElementById('root'))
