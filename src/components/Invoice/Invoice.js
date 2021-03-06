import React from 'react'
import EditInvoiceButton from '../EditInvoiceButton/EditInvoiceButton'
import DeleteInvoiceButton from '../DeleteInvoiceButton/DeleteInvoiceButton'

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
                    <EditInvoiceButton />
                    <DeleteInvoiceButton invoiceId={invoiceId} />
                </div>
            </td>
        </tr>
    )
}

export default Invoice