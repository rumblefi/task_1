import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import withService from '../HOC/withService'
import compose from '../utils/compose'
import Spinner from '../components/Spinner/Spinner'
import ErrrorIndicator from '../components/ErrrorIndicator/ErrrorIndicator'
import fetchInvoices from '../actions/fetchInvoices'

const withIinvoices = (Wrapped) => {

    class InvoicesContainer extends React.Component {

        componentDidMount() {

            this
                .props
                .fetchInvoices()
        }

        render() {
            return (<Wrapped {...this.props}/>)
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

    return withRouter(compose(withService, connect(mapStateToProps, mapDispatchToProps))(InvoicesContainer))

}

export default withIinvoices