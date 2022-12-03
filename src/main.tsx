import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@elastic/eui/dist/eui_theme_light.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter as Router } from 'react-router-dom'

const root = document.getElementById('root') as HTMLElement

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	root,
)
