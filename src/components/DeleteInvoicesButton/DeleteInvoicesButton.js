import React from 'react'
import {connect} from 'react-redux'
import deleteAllInvoices from '../../actions/deleteAllInvoices'

const DeleteInvoicesButton = ({deleteAllInvoices}) => {
    return (
        <button className="button button--1 actions__button" onClick={deleteAllInvoices}>Delete all</button>
    )
}

const mapDispatchToProps = {
    deleteAllInvoices
}

export default connect(null, mapDispatchToProps)(DeleteInvoicesButton)