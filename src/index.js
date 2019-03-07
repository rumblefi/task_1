import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
import Service from './service/Service'


const appBody = (
	<Router>
		<App/>
	</Router>
)
ReactDOM.render(appBody,document.getElementById('root'))