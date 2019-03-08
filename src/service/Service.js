export default class Service {

    _apiBase = 'http://localhost:3001/invoices'

    getInvoices = async() => {
        const res = await fetch(`${this._apiBase}`)
        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`)
        }
        return await res.json()
    }

}