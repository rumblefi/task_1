export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE'

const fetchInvoicesFailure = (payload) => {
	return{
		type: FETCH_INVOICES_FAILURE,
		payload
	}
}

export default fetchInvoicesFailure