import React from 'react'

const Invoice = ({ invoice }) => {
    return (
        <tr>
            <td>{invoice.date_created}</td>
            <td>
                <a href="" className="invoices__link">{invoice.number}</a>
            </td>
            <td>{invoice.date_supply}</td>
            <td>{invoice.comment}</td>
            <td>
                <div className="invoices__buttons">
                    <button className="button button--2 invoices__button">Edit</button>
                    <button className="button button--3 invoices__button">Deleted</button>
                </div>
            </td>
        </tr>
    )
}

export default Invoice