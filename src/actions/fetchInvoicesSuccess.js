import {FETCH_INVOICES_SUCCESS} from './actionConstants'

const fetchInvoicesSuccess = (payload) => {
	return{
		type: FETCH_INVOICES_SUCCESS,
		payload
	}
}

export default fetchInvoicesSuccess