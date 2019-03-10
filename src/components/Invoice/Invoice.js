import React from 'react'
import DeleteInvoiceButton from '../DeleteInvoiceButton/DeleteInvoiceButton'
import EditInvoiceButton from '../EditInvoiceButton/EditInvoiceButton'

const Invoice = ({
    invoice: {
        date_created,
        number,
        date_supply,
        comment,
        id: invoiceId
    },
}) => {

    return (
        <tr>
            <td>{date_created}</td>
            <td>
                <a href="https://www.google.com/" className="invoices__link">{number}</a>
            </td>
            <td>{date_supply}</td>
            <td>{comment}</td>
            <td>
                <div className="invoices__buttons">
                    <EditInvoiceButton invoiceId={invoiceId} />
                    <DeleteInvoiceButton invoiceId={invoiceId} />
                </div>
            </td>
        </tr>
    )
}

export default Invoice