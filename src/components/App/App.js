import React from 'react'
import 'normalize.css'
import './App.scss'
import Header from '../Header/Header';
import Section from '../Section/Section'

const App = () => {
	return(
		<div className="app" >
			<div className="app__container">
				<Header title="Invoices" />				
				<Section title="Actions">
					<span>ghjk</span>
				</Section>
			</div>
		</div>	
	)
}

export default App