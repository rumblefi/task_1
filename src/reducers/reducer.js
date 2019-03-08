import {FETCH_INVOICES_REQUEST, FETCH_INVOICES_SUCCESS, FETCH_INVOICES_FAILURE, DELETE_INVOICE, DELETE_ALL_INVOICES} from '../actions/actionConstants'

const initialState = {
    invoices: [],
	loading: true,
	invoicesError: null
}

const deleteItem = (arr,id) => {
    return arr.filter( item => item.id !== id )
}

const reducer = (state = initialState, {type, payload}) => {

    console.log(type)

    switch (type) {
        
        case FETCH_INVOICES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_INVOICES_SUCCESS:
            return {
                ...state,
                invoices: payload,
                loading: false
            }

        case FETCH_INVOICES_FAILURE:
            return {
                ...state,
				loading: false,
				invoicesError: payload
            }

        case DELETE_INVOICE:
            const invoiceId = payload
            return{
                ...state,
                invoices: deleteItem(state.invoices, invoiceId)
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

export default reducer