import {FETCH_INVOICES_REQUEST} from '../actions/fetchInvoicesRequest'
import {FETCH_INVOICES_SUCCESS} from '../actions/fetchInvoicesSuccess'
import {FETCH_INVOICES_FAILURE} from '../actions/fetchInvoicesFailure'


const initialState = {
	loading: true,
	invoices: [],
	invoicesError: null
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
				invoices: action.invoices
			}

		case FETCH_INVOICES_FAILURE:
			return{
				...state,
				invoicesError: action.invoicesError
			}

		default:
			return state

	}

}

export default rootReducer