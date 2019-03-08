import React from 'react'
import './Invoices.scss'
import withSection from '../../HOC/withSection/withSection'
import '../../styles/button.scss'
import Invoice from '../Invoice/Invoice'
import {connect} from 'react-redux'
import withService from '../../HOC/withService'
import compose from '../../utils/compose'
import invoicesLoaded from '../../actions/invoicesLoaded'
import invoicesRequested from '../../actions/invoicesRequested'
import actionInvoicesError from '../../actions/actionInvoicesError'
import Spinner from '../Spinner/Spinner'
import ErrrorIndicator from '../ErrrorIndicator/ErrrorIndicator'

class Invoices extends React.Component {

    componentDidMount() {
        const {service, invoicesLoaded, invoicesRequested, invoicesError} = this.props
        invoicesRequested()
        service.getInvoices()
            .then( data => invoicesLoaded(data) )
            .catch( error => invoicesError(error) )
    }

    render() {

        const {invoices,loading, invoicesError} = this.props

        if(loading) {
            return <Spinner />
        }

        if(invoicesError) {
            return <ErrrorIndicator />
        }

        return (
            <table className="invoices">
                <thead>
                    <tr>
                        <th>Create</th>
                        <th>No</th>
                        <th>Supply</th>
                        <th>Comment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(invoice => {
                        return (<Invoice key={invoice.id} invoice={invoice}/>)
                    })
}
                </tbody>
            </table>
        )
    }

}

const mapStateToProps = ({invoices,loading, invoicesError}) => {
    return {invoices,loading, invoicesError}
}

const mapDispatchToProps = {
    invoicesLoaded,
    invoicesRequested,
    actionInvoicesError    
}

export default compose(
    withService(),    
    connect(mapStateToProps,mapDispatchToProps),    
    withSection
)(Invoices)
