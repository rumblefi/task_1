import React from 'react'
import {connect} from 'react-redux'
import deleteInvoice from '../../actions/deleteInvoice'
import './DeleteInvoiceButton.scss'

const DeleteInvoiceButton = ({invoiceId,deleteInvoice}) => {
    return (
        <button
            className="button button--3 invoice-button"
            onClick={() => deleteInvoice(invoiceId)}>Delete</button>
    )
}

const mapDispatchToProps = {
	deleteInvoice
}

export default connect(null, mapDispatchToProps)(DeleteInvoiceButton)