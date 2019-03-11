export const SEARCH = 'SEARCH'

const search = (searchTerm) => {
	return{
		type: SEARCH,
		searchTerm
	}
} 

export default search