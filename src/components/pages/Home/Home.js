import React from 'react'
import Actions from '../../Actions/Actions'
import InvoicesContainer from '../../../containers/InvoicesContainer'
import Section from '../../Section/Section'

const Home = () => {
	return(
		<div>	
			<Section title="Actions" >
				<Actions/>
			</Section>
			<Section>
				<InvoicesContainer />
			</Section>
		</div>
	)
}

export default Home