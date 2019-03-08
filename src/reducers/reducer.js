import {INVOICES_LOADED, INVOICES_REQUESTED, INVOICES_ERROR} from '../actions/actionConstants'

const initialState = {
    invoices: [],
	loading: true,
	invoicesError: null
}

const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case INVOICES_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case INVOICES_LOADED:
            return {
                ...state,
                invoices: payload,
                loading: false
            }
        case INVOICES_ERROR:
            return {
                ...state,
				loading: false,
				invoicesError: payload
            }
        default:
            return state
    }

}

export default reducer