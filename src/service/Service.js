export default class Service {

    _apiBase = 'http://localhost:3001/invoices'

    getInvoices() {
        return fetch(this._apiBase)
                .then((resonse) => resonse.json())
    }

}