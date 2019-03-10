import {FETCH_INVOICES_REQUEST} from '../actions/fetchInvoicesRequest'
import {FETCH_INVOICES_SUCCESS} from '../actions/fetchInvoicesSuccess'

const initialState = {
	invoices: {
		loading: false,
		items: []
	}
}

const rootReducer = (state = initialState, action) => {
	
	switch(action.type) {
		
		case FETCH_INVOICES_REQUEST:
			return{
				...state,
				invoices: {
					...state.invoices,
					loading: true
				}
			}

		case FETCH_INVOICES_SUCCESS:
			return{
				...state,
				invoices: {
					...state.invoices,
					items: [
						{
							id: '1',
							text: 'jk',
						}
					]
				}
			}

		default:
			return state

	}

}

export default rootReducer