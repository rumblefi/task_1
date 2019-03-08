import {FETCH_INVOICES_FAILURE} from './actionConstants'

const fetchInvoicesError = (payload) => {
	return{
		type: FETCH_INVOICES_FAILURE,
		payload
	}
}

export default fetchInvoicesError