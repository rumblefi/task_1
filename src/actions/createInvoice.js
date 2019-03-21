export const CREATE_INVOICE = 'CREATE_INVOICE'

const createInvoice = (newInvoice) => {
	return{
		type: CREATE_INVOICE,
		newInvoice
	}
}

export default createInvoice