import React from 'react'
import './Invoices.scss'
import Invoice from '../Invoice/Invoice'


const filterInvoices = (invoices, searchTerm) => {
    return invoices.filter(({number}) => number.toString().indexOf(searchTerm) > -1)
}

const Invoices = ({invoices, onEditInvoice, onDeletedInvoice, searchTerm}) => {

    const filteredInvoices = filterInvoices(invoices, searchTerm)

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
                {filteredInvoices.map(invoice => {
                    return (<Invoice
                        key={invoice.id}
                        invoice={invoice}
                        onEditInvoice={() => onEditInvoice(invoice.id)}
                        onDeletedInvoice={() => onDeletedInvoice(invoice.id)}/>)
                })
}
            </tbody>
        </table>
    )

}

export default Invoices