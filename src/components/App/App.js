import React from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import Actions from '../Actions/Actions'
import Invoices from '../Invoices/Invoices';

const App = () => {
	return(
		<div className="app" >
			<div className="app__container">
				<Header title="Invoices" />				
				<Actions />
				<Invoices />
			</div>
		</div>	
	)
}

export default App