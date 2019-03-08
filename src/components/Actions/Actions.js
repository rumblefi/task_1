import React from 'react'
import './Actions.scss'
import AddInvoiceButton from '../AddInvoiceButton/AddInvoiceButton'
import DeleteInvoicesButton from '../DeleteInvoicesButton/DeleteInvoicesButton'
import Search from '../Search/Search'
import withSection from '../../HOC/withSection/withSection'
import {connect} from 'react-redux'
import compose from '../../utils/compose'
import deleteAllInvoices from '../../actions/deleteAllInvoices'

const Actions = ({deleteAllInvoices}) => {
    return (
        <div className="actions">
            <AddInvoiceButton className="actions__button"/>
            <DeleteInvoicesButton
                onDeleteInvoices={deleteAllInvoices}
                className="actions__button"/>
            <Search/>
        </div>
    )
}

const mapstateToProps = ({loading}) => {
    return {loading}
}

const mapDispatchToProps = {
    deleteAllInvoices
}

export default compose(connect(mapstateToProps, mapDispatchToProps), withSection)(Actions)