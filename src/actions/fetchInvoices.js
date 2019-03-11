import fetchInvoicesRequest from './fetchInvoicesRequest'
import fetchInvoicesSuccess from './fetchInvoicesSuccess'
import fetchInvoicesFailure from './fetchInvoicesFailure'

const fetchInvoices = (service) => () => (dispatch) => {

    dispatch(fetchInvoicesRequest())

    service
        .getInvoices()
        .then(({data}) => dispatch(fetchInvoicesSuccess(data)))
        .catch((error) => dispatch(fetchInvoicesFailure(error)))
}

export default fetchInvoices