import React from 'react'
import './Header.scss'
import { withRouter } from "react-router-dom"

const getHeaderTitlte = (pathName) => {

	switch(pathName) {
		case '':
			return 'Invoices'
		case 'create':
			return 'Create'	
		default:
			return 'Not found'
	}

}

const Header = (props) => {

	const path = props.location.pathname.slice(1)

	return(
		<header className="header" >
			<div className="header__title">
				<span>{getHeaderTitlte(path)}</span>
			</div>
		</header>
	)

}

export default withRouter(Header)