import React from 'react'
import './Actions.scss'
import AddInvoiceButton from '../AddInvoiceButton/AddInvoiceButton'
import DeleteInvoicesButton from '../DeleteInvoicesButton/DeleteInvoicesButton'
import SearchBar from '../SearchBar/SearchBar'
import withSection from '../../HOC/withSection/withSection'
import {connect} from 'react-redux'
import compose from '../../utils/compose'
import deleteAllInvoices from '../../actions/deleteAllInvoices'
import search from '../../actions/search'
import Filters from '../Filters/Filters'

const Actions = ({deleteAllInvoices, search, searchTerm}) => {
    return (
        <div className="actions">
            <div style={{display: 'flex'}} >
                <AddInvoiceButton className="actions__button"/>
                <DeleteInvoicesButton
                    onDeleteInvoices={deleteAllInvoices}
                    className="actions__button"/>
            </div>
            <Filters />
            <SearchBar onSearch={search} searchTerm={searchTerm} />
        </div>
    )
}

const mapstateToProps = ({searchTerm}) => {
    return {searchTerm}
}

const mapDispatchToProps = {
    deleteAllInvoices,
    search
}

export default compose(connect(mapstateToProps, mapDispatchToProps), withSection)(Actions)