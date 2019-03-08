import React from 'react'
import withSection from '../HOC/withSection/withSection'
import '../styles/button.scss'
import Invoices from '../components/Invoices/Invoices'
import {connect} from 'react-redux'
import withService from '../HOC/withService'
import compose from '../utils/compose'
import Spinner from '../components/Spinner/Spinner'
import ErrrorIndicator from '../components/ErrrorIndicator/ErrrorIndicator'
import fetchInvoices from '../actions/fetchInvoices'
import deleteInvoice from '../actions/deleteInvoice'

class InvoicesContainer extends React.Component {

    componentDidMount() {

        this
            .props
            .fetchInvoices()
    }

    render() {

        const {invoices, loading, invoicesError, onEditInvoice, onDeletedInvoice} = this.props

        if (loading) {
            return <Spinner/>
        }

        if (invoicesError) {
            return <ErrrorIndicator errorMessage={invoicesError}/>
        }

        return (<Invoices
            invoices={invoices}
            onEditInvoice={onEditInvoice}
            onDeletedInvoice={onDeletedInvoice}/>)
    }

}

const mapStateToProps = ({invoices, loading, invoicesError}) => {
    return {invoices, loading, invoicesError}
}

const mapDispatchToProps = (dispatch, {service}) => {

    return {
        fetchInvoices: fetchInvoices(dispatch, service),
        onEditInvoice: (id) => {
            console.log(`Edit ${id}`)
        },
        onDeletedInvoice: (id) => dispatch( deleteInvoice(id) )
    }

}

export default compose(withService(), connect(mapStateToProps, mapDispatchToProps), withSection)(InvoicesContainer)