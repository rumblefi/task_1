import {FETCH_INVOICES_REQUEST} from '../actions/fettchInvoicesRequest'
import {FETCH_INVOICES_SUCCESS} from '../actions/fetchInvoicesSuccess'
import {FETCH_INVOICES_FAILURE} from '../actions/fetchInvoicesFailure'
import {DELETE_INVOICE} from '../actions/deleteInvoice'
import {DELETE_ALL_INVOICES} from '../actions/deleteAllInvoices'
import {SEARCH} from '../actions/search'
import {EDIT_INVOICE} from '../actions/editInvoice'

const initialState = {
    invoices: [],
    loading: true,
    invoicesError: null,
    searchTerm: ''
}

const deleteItem = (arr, id) => {
    return arr.filter(item => item.id !== id)
}

const reducer = (state = initialState, action) => {

    console.log(action.type)

    switch (action.type) {

        case FETCH_INVOICES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_INVOICES_SUCCESS:
            return {
                ...state,
                invoices: action.invoices,
                loading: false
            }

        case FETCH_INVOICES_FAILURE:
            return {
                ...state,
                loading: false,
                invoicesError: action.invoicesError
            }

        case DELETE_INVOICE:
            return {
                ...state,
                invoices: deleteItem(state.invoices, action.invoiceId)
            }

        case DELETE_ALL_INVOICES:
            return {
                ...state,
                invoices: []
            }

        case SEARCH:
            return{
                ...state,
                searchTerm: action.searchTerm
            }    
        
        case EDIT_INVOICE:
            return{
                ...state
            }

        default:
            return state

    }

}

export default reducer