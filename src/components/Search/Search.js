import React from 'react'
import '../../styles/field.scss'
import './Search.scss'

const Search = () => {
	return(
		<div className="search" >
			<input type="text" className="field" placeholder="Seach invoices by number" />	
		</div>
	)
}

export default Search