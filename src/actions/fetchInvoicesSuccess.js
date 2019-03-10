export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS'

const fetchInvoicesSuccess = (items) => {
	return{
		type: FETCH_INVOICES_SUCCESS,
		items
	}
}

export default fetchInvoicesSuccess