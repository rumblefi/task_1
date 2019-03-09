export const EDIT_INVOICE = 'EDIT_INVOICE'

const editInvoice = (invoiceId) => {
	return{
		type: EDIT_INVOICE,
		invoiceId
	}
}

export default editInvoice