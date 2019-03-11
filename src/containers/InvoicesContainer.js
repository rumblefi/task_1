import React, {Component} from 'react'
import compose from '../utils/compose'
import withSection from '../HOC/withSection/withSection'
import withService from '../HOC/withService'
import {connect} from 'react-redux'
import fetchInvoices from '../actions/fetchInvoices'
import {bindActionCreators} from 'redux'
import Invoices from '../components/Invoices/Invoices'
import Spinner from '../components/Spinner/Spinner'
import ErrrorIndicator from '../components/ErrrorIndicator/ErrrorIndicator'

class InvoicesContainer extends Component {

    componentDidMount() {

        this
            .props
            .fetchInvoices()

    }

    render() {

        const {loading, invoices, invoicesError} = this.props

        if (loading) {
            return <Spinner/>
        }

        if (invoicesError) {
            return <ErrrorIndicator errorMessage={invoicesError}/>
        }

        return (
            <div>
                <Invoices invoices={invoices}/>
            </div>
        )

    }

}

const searchFilterInvoices = (invoices, searchTerm) => {
    return invoices.filter(({number}) => number.toString().indexOf(searchTerm) > -1)
}

const mapStateToProps = ({loading, invoices, invoicesError, searchTerm}) => {
    return {
        loading,
        invoices: searchFilterInvoices(invoices, searchTerm),
        invoicesError
    }
}

const mapDispatchToProps = (dispatch, {service}) => {

    return bindActionCreators({
        fetchInvoices: fetchInvoices(service)
    }, dispatch);
}

export default compose(withService, connect(mapStateToProps, mapDispatchToProps), withSection)(InvoicesContainer)