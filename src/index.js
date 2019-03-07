import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'

const renderApp = (
	<Router>
		<App/>
	</Router>
)
ReactDOM.render(renderApp,document.getElementById('root'))