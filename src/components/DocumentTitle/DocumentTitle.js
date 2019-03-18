import React from 'react'
import withPageTitle from '../../HOC/withPageTitle'
import Helmet from 'react-helmet'

const DocumentTitle = ({title}) => {
	return(
		<Helmet>
			<title>{title}</title>
		</Helmet>
	)
}

export default withPageTitle(DocumentTitle)