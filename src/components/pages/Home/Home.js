import React from 'react'
import Actions from '../../Actions/Actions'
import Section from '../../Section/Section'
import Invoices from '../../Invoices/Invoices'

const Home = ({invoices,loading,invoicesError}) => {
	return(
		<div>	
			<Section title="Actions" >
				<Actions/>
			</Section>
			<Section>
				<Invoices invoices={invoices} loading={loading} invoicesError={invoicesError} />
			</Section>
		</div>
	)
}

export default Home