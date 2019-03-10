import fetchInvoicesRequest from './fetchInvoicesRequest'
import fetchInvoicesSuccess from './fetchInvoicesSuccess'

const fetchInvoices = (service) => () => (dispatch) => {
    dispatch(fetchInvoicesRequest())

    return service
        .getInvoices()
        .then((invoices) => dispatch(fetchInvoicesSuccess(invoices)))

}

export default fetchInvoices