import {INVOICES_ERROR} from './actionConstants'

const actionInvoicesError = (payload) => {
	return{
		type: INVOICES_ERROR,
		payload
	}
}

export default actionInvoicesError