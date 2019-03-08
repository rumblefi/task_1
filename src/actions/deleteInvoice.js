import {DELETE_INVOICE} from './actionConstants'

const deleteInvoice = (invoiceId) => {
	return{
		type: DELETE_INVOICE,
		payload: invoiceId
	}
}

export default deleteInvoice