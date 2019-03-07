import React from 'react'
import Actions from '../../Actions/Actions'
import Invoices from '../../Invoices/Invoices'
import ErrorButton from '../../ErrorButton/ErrorButton'

const Home = () => {
	return(
		<>	
			<Actions />
			<Invoices />
		</>
	)
}

export default Home