import testFetchInvoicesRequest from './testFetchInvoicesRequest'
import testFetchInvoicesSuccess from './testFetchInvoicesSuccess'

const testFetchInvoices = () => (dispatch) => {
	dispatch(testFetchInvoicesRequest)
	return fetch('http://localhost:3001/invoices')
			.then( response => response )
			.then( invoices => dispatch(testFetchInvoicesSuccess(invoices)) )
}

export default testFetchInvoices