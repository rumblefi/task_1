import React from 'react'
import {connect} from 'react-redux'
import editInvoice from '../../actions/editInvoice'

const EditInvoiceButton = ({invoiceId,editInvoice}) => {
	return (
		<button className="button button--2 invoice-button" onClick={ () => editInvoice(invoiceId) } >Edit</button>
	)
}

const mapDispatchToProps = {
	editInvoice
}

export default connect(null,mapDispatchToProps)(EditInvoiceButton)