import React from 'react'
import deleteInvoice from '../../actions/deleteInvoice'
import {connect} from 'react-redux'

const DeleteInvoiceButton = ({invoiceId,deleteInvoice}) => {

	return(
		<div className="button button--3 invoices__button" onClick={ () =>  deleteInvoice(invoiceId) } >Delete</div>
	)
}

const mapDispatchToProps = {
	deleteInvoice
}

export default connect(null,mapDispatchToProps)(DeleteInvoiceButton)