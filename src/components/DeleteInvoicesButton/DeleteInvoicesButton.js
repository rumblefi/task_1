import React from 'react'

const DeleteInvoicesButton = ({onDeleteInvoices, className}) => {
	return(
		<button className={`button button--1 ${className}`} onClick={onDeleteInvoices} >Delete all</button>
	)
}

export default DeleteInvoicesButton