import React from 'react'
import './Invoices.scss'
import Invoice from '../Invoice/Invoice'
import Spinner from '../Spinner/Spinner'
import ErrrorIndicator from '../ErrrorIndicator/ErrrorIndicator'

const Invoices = ({invoices, loading, invoicesError}) => {

    if (loading) {
        return <Spinner/>
    }

    if (invoicesError) {
        return <ErrrorIndicator errorMessage={invoicesError}/>
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

export default Invoices