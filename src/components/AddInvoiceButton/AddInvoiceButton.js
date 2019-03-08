import React from 'react'
import {Link} from 'react-router-dom'

const AddInvoiceButton = ({className}) => {
	return(
		<Link to="/create" className={`button button--1 ${className}`}>Add new</Link>
	)
}

export default AddInvoiceButton