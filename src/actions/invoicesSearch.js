import {INVOICES_SEARCH} from './actionConstants'

const invoicesSearch = (invoicesSearchTerm) => {
	return{
		type: INVOICES_SEARCH
	}
}

export default invoicesSearch