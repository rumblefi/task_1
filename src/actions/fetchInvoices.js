import fetchInvoicesRequest from './fetchInvoicesRequest'
import fetchInvoicesSuccess from './fetchInvoicesSuccess'

const fetchInvoices = () => (dispatch) => {
    dispatch(fetchInvoicesRequest())

    return fetch('http://localhost:3001/invoices').then((resonse) => resonse.json()).then((invoices) => dispatch(fetchInvoicesSuccess(invoices)))

}

export default fetchInvoices