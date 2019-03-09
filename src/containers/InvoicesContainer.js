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

class InvoicesContainer extends React.Component {

    componentDidMount() {

        this
            .props
            .fetchInvoices()
    }

    render() {

        const {invoices, loading, invoicesError} = this.props

        if (loading) {
            return <Spinner/>
        }

        if (invoicesError) {
            return <ErrrorIndicator errorMessage={invoicesError}/>
        }

        return (<Invoices invoices={invoices}/>)
    }

}

const searchFilterInvoices = (invoices, searchTerm) => {
    return invoices.filter(({number}) => number.toString().indexOf(searchTerm) > -1)
}

const mapStateToProps = ({invoices, loading, invoicesError, searchTerm}) => {
    return {
        invoices: searchFilterInvoices(invoices, searchTerm),
        loading,
        invoicesError
    }
}

const mapDispatchToProps = (dispatch, {service}) => {

    return {
        fetchInvoices: fetchInvoices(dispatch, service)
    }

}

export default compose(withService(), connect(mapStateToProps, mapDispatchToProps), withSection)(InvoicesContainer)