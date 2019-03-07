import React from 'react'
import './Section.scss'

const Section = ({title,children}) => {

	const titleEl = <div className="section__title">{title}</div>

	return(
		<section className="section">
			{title ? titleEl : null }	
			<div className="section__body">
				{children}
			</div>
		</section>	
	)
}

export default Section