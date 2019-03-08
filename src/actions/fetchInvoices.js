import fettchInvoicesRequest from './fettchInvoicesRequest'
import fetchInvoicesSuccess from './fetchInvoicesSuccess'
import fetchInvoicesError from './fetchInvoicesError'

const fetchInvoices = (dispatch,service) => () => {

	dispatch( fettchInvoicesRequest() )
	service.getInvoices()
		.then( data => dispatch( fetchInvoicesSuccess(data) ) )
		.catch( error => {
			dispatch( fetchInvoicesError(error) )
		})

}

export default fetchInvoices