export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE'

const fetchInvoicesFailure = (invoicesError) => {
	return{
		type: FETCH_INVOICES_FAILURE,
		invoicesError
	}
}

export default fetchInvoicesFailure