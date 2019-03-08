export const SEARCH = 'SEARCH'

const search = (searchTerm) => {
	return{
		type: SEARCH,
		payload: searchTerm
	}
}

export default search