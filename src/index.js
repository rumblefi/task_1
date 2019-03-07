import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'


const appBody = (
	<Router>
		<App/>
	</Router>
)
ReactDOM.render(appBody,document.getElementById('root'))