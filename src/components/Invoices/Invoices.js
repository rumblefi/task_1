import React from 'react'
import './Invoices.scss'
import Invoice from '../Invoice/Invoice'

const Invoices = ({invoices}) => {

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