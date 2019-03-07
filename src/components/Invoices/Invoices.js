import React from 'react'
import './Invoices.scss'
import withSection from '../../HOC/withSection/withSection'
import '../../styles/button.scss'

const invoicesData = [{
		"id": "5ac1f09a60edb54701c767da",
		"direction": "8ad47368-b85b-4b25-a209-9a975fa85ba1",
		"number": 55958,
		"date_created": "07 May 1973",
		"date_due": "15 August 2009",
		"date_supply": "28 May 2004",
		"comment": "Officia cillum fugiat aliqua dolor sint adipisicing anim elit ipsum proident pariatur veniam laborum in. Fugiat deserunt cillum ad irure excepteur occaecat. Exercitation nisi minim aliqua et proident."
	},
	{
		"id": "5ac1f09a104dfc9b0b85b02f",
		"direction": "bee33a4c-e0cf-4f2c-80b5-93ccab966e46",
		"number": 39804,
		"date_created": "21 March 1971",
		"date_due": "14 January 1991",
		"date_supply": "20 October 2014",
		"comment": "Consequat fugiat ut et dolore id fugiat voluptate qui consectetur. Tempor ad aliqua aute deserunt et cillum exercitation proident minim cupidatat sunt pariatur. Duis excepteur dolore exercitation magna consequat ut."
	},
]

const Invoice = (invoice) => {
	return(
		<div>h</div>
	)
}

const Invoices = () => {
	return ( 
		<table className="invoices" >
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
				<tr>
					<td>01.01.2019</td>
					<td>
						<a href="" className="invoices__link">11342</a>
					</td>
					<td>01.01.2019</td>
					<td>Test simple #1</td>
					<td>
						<div className="invoices__buttons">
							<button className="button button--2 invoices__button">Edit</button>
							<button className="button button--3 invoices__button">Deleted</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default withSection(Invoices, 'Invoices')