import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'

const appBody = (
	<ErrorBoundry>
		<Router>
			<App/>
		</Router>
	</ErrorBoundry>
)
ReactDOM.render(appBody,document.getElementById('root'))