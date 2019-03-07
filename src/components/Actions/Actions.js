import React from 'react'
import './Actions.scss'
import Search from '../Search/Search';
import '../../styles/button.scss'
import withSection from '../../HOC/withSection/withSection'
import {Link} from 'react-router-dom'

const Actions = () => {
	return(
		<div className="actions">
			<div className="actions__buttons">
				<Link to="/create" className="button button--1 actions__button">Add new</Link>
				<button className="button button--1 actions__button">Delete all</button>
			</div>
			<Search />
		</div>	
	)
}

export default withSection(Actions,'Actions')