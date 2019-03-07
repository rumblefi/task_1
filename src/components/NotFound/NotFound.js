import React from 'react'
import './NotFound.scss'

const NotFound = ({location: {pathname} }) => {
	return(
		<h1 className="not-found">Not Found at <span>{pathname}</span></h1>
	)
}

export default NotFound