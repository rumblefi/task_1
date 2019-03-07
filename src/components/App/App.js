import React from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import Section from '../Section/Section'
import Actions from '../Actions/Actions'

const App = () => {
	return(
		<div className="app" >
			<div className="app__container">
				<Header title="Invoices" />				
				<Section title="Actions">
					<Actions />
				</Section>
			</div>
		</div>	
	)
}

export default App