import React from 'react'
import './Invoices.scss'
import Invoice from '../Invoice/Invoice'


const filterInvoices = (invoices, searchTerm) => {
    return invoices.filter(({number}) => number.toString().indexOf(searchTerm) > -1)
}

const Invoices = ({invoices,onDeletedInvoice, searchTerm}) => {

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
                    return (<Invoice
                        key={invoice.id}
                        invoice={invoice}
                        onDeletedInvoice={() => onDeletedInvoice(invoice.id)}/>)
                })
}
            </tbody>
        </table>
    )

}

export default Invoices