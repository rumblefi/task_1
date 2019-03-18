import React from 'react'
import withPageTitle from '../../HOC/withPageTitle'
import './HeaderTitle.scss'

const HeaderTitle = ({title}) => {

	return(
		<div className="header-title">{title}</div>
	)

}

export default withPageTitle(HeaderTitle)