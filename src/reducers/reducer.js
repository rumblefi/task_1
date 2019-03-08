import {FETCH_INVOICES_REQUEST} from '../actions/fettchInvoicesRequest'
import {FETCH_INVOICES_SUCCESS} from '../actions/fetchInvoicesSuccess'
import {FETCH_INVOICES_FAILURE} from '../actions/fetchInvoicesFailure'
import {DELETE_INVOICE} from '../actions/deleteInvoice'
import {DELETE_ALL_INVOICES} from '../actions/deleteAllInvoices'
import {SEARCH} from '../actions/search'

const initialState = {
    invoices: [],
    loading: true,
    invoicesError: null,
    searchTerm: ''
}

const deleteItem = (arr, id) => {
    return arr.filter(item => item.id !== id)
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
            return {
                ...state,
                invoices: deleteItem(state.invoices, invoiceId)
            }

        case DELETE_ALL_INVOICES:
            return {
                ...state,
                invoices: []
            }

        case SEARCH:
            return{
                ...state,
                searchTerm: payload
            }    

        default:
            return state

    }

}

export default reducer