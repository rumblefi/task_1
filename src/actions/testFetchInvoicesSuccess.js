export const TEST_FETCH_INVOICES_SUCCESS = 'TEST_FETCH_INVOICES_SUCCESS'

const testFetchInvoicesSuccess = (invoices) => {
	return{
		type: TEST_FETCH_INVOICES_SUCCESS,
		invoices
	}
}

export default testFetchInvoicesSuccess