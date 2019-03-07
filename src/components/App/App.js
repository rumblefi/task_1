import React from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';

const App = () => {
	return(
		<div className="app" >
			<div className="app__container">
				<Header title="Invoices" />				
			</div>
		</div>	
	)
}

export default App