import {INVOICES_LOADED} from './actionConstants'

const invoicesLoaded = (payload) => {
	return{
		type: INVOICES_LOADED,
		payload
	}
}

export default invoicesLoaded