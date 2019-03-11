import React from 'react'
import './Section.scss'

const Section = ({title, children}) => {

	const titleEl = <div className="section__title">{title}</div>
    return (
        <section className="section">

			{title ? titleEl : null }
			{children}

		</section>
    )
}

export default Section