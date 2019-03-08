import React from 'react'
import Actions from '../../Actions/Actions'
import Invoices from '../../Invoices/Invoices'

const Home = () => {
	return(
		<>	
			<Actions title="Actions" />
			<Invoices title="Invoices" />
		</>
	)
}

export default Home