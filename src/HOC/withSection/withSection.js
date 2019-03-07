import React from 'react'
import './withSection.scss'

const withSection = (Wrapped,title) => {

	const titleEl = <div className="section__title">{title}</div>

	return (props) => {
		return(
			<section className="section" >
				{title ? titleEl : null }	
				<div className="section__body">
					<Wrapped {...props} />
				</div>
			</section>
		)
	}

}

export default withSection