import React from 'react'
import './ErrrorIndicator.scss'

const ErrrorIndicator = ({errorMessage : {message} }) => {

	return(
		<h1 className="error-indicator">{message}</h1>
	)

}

export default ErrrorIndicator