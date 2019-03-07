import React from 'react'
import './Invoices.scss'
import withSection from '../../HOC/withSection/withSection'
import '../../styles/button.scss'
import Invoice from '../Invoice/Invoice'
import {invoicesData} from './InvoiceData'

const Invoices = () => {
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
				{
					invoicesData.map( invoice => {
						return(
							<Invoice key={invoice.id} invoice={invoice} />
						)
					})
				}
			</tbody>
        </table>
    )
}

export default withSection(Invoices, 'Invoices')