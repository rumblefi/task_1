import React from 'react'

const Invoice = ({
    invoice: {
        date_created,
        number,
        date_supply,
        comment,
        id
    },
    onEditInvoice,
    onDeletedInvoice
}) => {

    return (
        <tr>
            <td>{date_created}</td>
            <td>
                <a href="" className="invoices__link">{number}</a>
            </td>
            <td>{date_supply}</td>
            <td>{comment}</td>
            <td>
                <div className="invoices__buttons">
                    <button className="button button--2 invoices__button" onClick={onEditInvoice}>Edit</button>
                    <button
                        className="button button--3 invoices__button"
                        onClick={onDeletedInvoice}>Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default Invoice