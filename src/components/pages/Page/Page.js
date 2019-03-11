import React from 'react'
import Helmet from 'react-helmet'

const Page = ({component: Component, title, ...resrProps}) => {

	return(
		<div>
			<Helmet>
				<title>{title ? title : 'Invoices'}</title>
			</Helmet>
			<Component {...resrProps} />
		</div>
	)

}

export default Page