import React from 'react'
import './withSection.scss'

const withSection = (Wrapped) => {

	return (props) => {

		const titleEl = <div className="section__title">{props.title}</div>

		return(
			<section className="section" >
				{props.title ? titleEl : null }	
				<Wrapped {...props} />
			</section>
		)
	}

}

export default withSection