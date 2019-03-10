import React from 'react'
import './Actions.scss'
import AddInvoiceButton from '../AddInvoiceButton/AddInvoiceButton'
import DeleteInvoicesButton from '../DeleteInvoicesButton/DeleteInvoicesButton'
import withSection from '../../HOC/withSection/withSection'
import compose from '../../utils/compose'
import SearchBar from '../SearchBar/SearchBar'

const Actions = () => {
    return (
        <div className="actions">
            <AddInvoiceButton/>
            <DeleteInvoicesButton/>
            <SearchBar />
        </div>
    )
}

export default compose(withSection)(Actions)