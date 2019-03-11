import {FETCH_INVOICES_REQUEST} from '../actions/fetchInvoicesRequest'
import {FETCH_INVOICES_SUCCESS} from '../actions/fetchInvoicesSuccess'
import {FETCH_INVOICES_FAILURE} from '../actions/fetchInvoicesFailure'
import {SEARCH} from '../actions/search'
import {DELETE_INVOICE} from '../actions/deleteInvoice'
import {DELETE_ALL_INVOICES} from '../actions/deleteAllInvoices'


const initialState = {
	loading: true,
	invoices: [],
	invoicesError: null,
	searchTerm: ''
}

const deleteInvoice = (invoices, invoiceId) => {
	return invoices.filter( (item) => item.id !== invoiceId )
}

const rootReducer = (state = initialState, action) => {
	
	switch(action.type) {
		
		case FETCH_INVOICES_REQUEST:
			return{
				...state,
				loading: true
			}

		case FETCH_INVOICES_SUCCESS:
			return{
				...state,
				loading: false,
				invoices: action.invoices
			}

		case FETCH_INVOICES_FAILURE:
			return{
				...state,
				loading: false,
				invoicesError: action.invoicesError
			}

		case SEARCH:
			return{
				...state,
				searchTerm: action.searchTerm
			}
			
		case DELETE_INVOICE:
			return{
				...state,
				invoices: deleteInvoice(state.invoices, action.invoiceId)
			}	

		case DELETE_ALL_INVOICES:
			return{
				...state,
				invoices: []
			}

		default:
			return state

	}

}

export default rootReducer