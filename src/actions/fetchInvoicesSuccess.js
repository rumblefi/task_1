export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS'

const fetchInvoicesSuccess = (invoices) => {
	return{
		type: FETCH_INVOICES_SUCCESS,
		invoices
	}
}

export default fetchInvoicesSuccess