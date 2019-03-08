import invoicesRequested from './invoicesRequested'
import actionInvoicesError from './actionInvoicesError'
import invoicesLoaded from './invoicesLoaded'

const fetchInvoices = (dispatch,service) => () => {

	dispatch( invoicesRequested() )
	service.getInvoices()
		.then( data => dispatch( invoicesLoaded(data) ) )
		.catch( error => {
			dispatch( actionInvoicesError(error) )
		})

}

export default fetchInvoices