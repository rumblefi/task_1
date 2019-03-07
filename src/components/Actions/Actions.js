import React from 'react'
import './Actions.scss'
import Search from '../Search/Search';
import '../../styles/button.scss'

const Actions = () => {
	return(
		<div className="actions">
			<div className="actions__buttons">
				<button className="button button--1 actions__button">Add new</button>
				<button className="button button--1 actions__button">Delete all</button>
			</div>
			<Search />
		</div>	
	)
}

export default Actions