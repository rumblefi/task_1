import React from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import Home from '../pages/Home/Home'
import {Route, Switch} from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

const App = () => {
	return(
		<div className="app" >
			<div className="app__container">
				<Header title="Invoices" />				

				<Switch>
					<Route path="/" exact component={Home} />
					<Route component={NotFound}/>
				</Switch>

			</div>
		</div>	
	)
}

export default App