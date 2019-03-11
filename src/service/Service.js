import axios from 'axios'

export default class Service {

    _apiBase = 'http://localhost:3001/invoices'

    getInvoices() {
        return axios.get(this._apiBase)
    }

}
