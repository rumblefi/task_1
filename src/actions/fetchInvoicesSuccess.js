export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS'

const fetchInvoicesSuccess = (payload) => {
	return{
		type: FETCH_INVOICES_SUCCESS,
		payload
	}
}

export default fetchInvoicesSuccess