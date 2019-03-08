import React from 'react'
import Actions from '../../Actions/Actions'
import InvoicesContainer from '../../../containers/InvoicesContainer'

const Home = () => {
	return(
		<>	
			<Actions title="Actions" />
			<InvoicesContainer title="Invoices" />
		</>
	)
}

export default Home