import React from 'react'
import Actions from '../../Actions/Actions'
import InvoicesContainer from '../../../containers/InvoicesContainer'

const Home = () => {
	return(
		<div>	
			<Actions title="Actions" />
			<InvoicesContainer />
		</div>
	)
}

export default Home