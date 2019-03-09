import React from 'react'
import {Link} from 'react-router-dom'

const AddInvoiceButton = () => {
	return(
		<Link to="/create" className="button button--1 actions__button">Add new</Link>
	)
}

export default AddInvoiceButton