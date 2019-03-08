export const DELETE_INVOICE = 'DELETE_INVOICE'

const deleteInvoice = (invoiceId) => {
	return{
		type: DELETE_INVOICE,
		payload: invoiceId
	}
}

export default deleteInvoice