import {DELETE_ALL_INVOICES} from './actionConstants'

const deleteAllInvoices = () => {
	return{
		type: DELETE_ALL_INVOICES
	}
}

export default deleteAllInvoices