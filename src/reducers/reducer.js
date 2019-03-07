import {INVOICES_LOADED} from '../actions/actionConstants'


const initialState = {
	invoices: []
}

const reducer = (state = initialState, {type,payload}) => {
	
	switch(type) {
		case INVOICES_LOADED:
			return{
				invoices: payload
			}
		default:
			return state	
	}

}

export default reducer