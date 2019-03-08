import fettchInvoicesRequest from './fettchInvoicesRequest'
import fetchInvoicesSuccess from './fetchInvoicesSuccess'
import fetchInvoicesFailure from './fetchInvoicesFailure'

const fetchInvoices = (dispatch,service) => () => {

	dispatch( fettchInvoicesRequest() )
	service.getInvoices()
		.then( data => dispatch( fetchInvoicesSuccess(data) ) )
		.catch( error => {
			dispatch( fetchInvoicesFailure(error) )
		})

}

export default fetchInvoices