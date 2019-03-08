export const DELETE_ALL_INVOICES = 'DELETE_ALL_INVOICES' 

const deleteAllInvoices = () => {
	return{
		type: DELETE_ALL_INVOICES
	}
}

export default deleteAllInvoices